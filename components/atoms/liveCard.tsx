import dayjs from "dayjs"
import { useContext, useEffect, useRef, useState } from "react"
import { isCorrectLiveHoloUrl } from "../../utils/util"
import { GlobalChangeCardContext } from "../../utils/change-card-size-observer"
import HoverVideo from "./hoverVideo"

export type Api = {
  available_at: string
  channel: {
    english_name: string
    id: string
    name: string
    org?: "Hololive" | "Nijisanji"
    photo: string
    type: string
  }
  duration: number
  id: string
  live_viewres: number
  published_at: string
  start_actual: string
  start_scheduled: string
  status: "live" | "upcoming"
  title: string
  topic_id: string
  type: string
}

interface Props {
  isFixedVideo: boolean
}

const LiveCard = ({ isFixedVideo }: Props) => {
  const youtube_jpeg = "https://img.youtube.com/vi/"
  const youtube_jpeg_size = {
    large: "/maxresdefault.jpg",
    midium: "/sddefault.jpg",
  }
  const holoVideo = "https://www.youtube.com/watch?v="
  const holoUrl = "https://holodex.net/api/v2/live/"
  const [isHovering, setIsHovering] = useState<number>(-1)
  const [holoData, setHoloData] = useState<Api[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [isHidden, setIsHidden] = useState(false)
  const [fixedVideo, setFixedVideo] = useState(false)
  const { isChangeLiveCardSize } = useContext(GlobalChangeCardContext)
  const ref = useRef<HTMLDivElement>(null)

  const handleFixed = () => {
    setFixedVideo(!fixedVideo)
  }

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        if (window.innerWidth < 639) {
          ref.current.style.display = "none"
          setIsHidden(true)
        } else {
          ref.current.style.display = "block"
          setIsHidden(false)
        }
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [ref])

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      const res = await fetch(holoUrl)
      const users = await res.json()
      setHoloData(users)
    })()
    setLoading(false)
  }, [holoUrl])

  return (
    <>
      {loading ? (
        <div
          className="fixed z-[2] top-[40%] animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-[#F3F4F6] rounded-full"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      ) : null}
      {holoData.map((holoDatas: Api, index) => {
        return isCorrectLiveHoloUrl(holoDatas) ? (
          <div
            key={holoDatas.id}
            className={`relative ${
              isChangeLiveCardSize ? "w-[23.5vw]" : "w-[19vw]"
            } max-xl:w-[24%] max-lg:w-[32%] max-mm:w-[48.5%] max-md:w-[48.5%] max-sm:w-[48.5%] max-xs:w-[48.5%] h-full flex flex-col border shadow-sm rounded-xl bg-gray-800 border-gray-700 shadow-slate-700/[.7]`}
            onMouseEnter={!fixedVideo ? () => setIsHovering(index) : undefined}
            onMouseLeave={!fixedVideo ? () => setIsHovering(-1) : undefined}
          >
            {isFixedVideo ? (
              <button
                className={`${
                  fixedVideo ? "opacity-80" : "opacity-30"
                } hover:opacity-100 rounded-t-[11px] mb-[0.5px]`}
                onClick={handleFixed}
              >
                🧷 Preview固定 {fixedVideo ? "on" : "off"}
              </button>
            ) : undefined}
            <div
              className={`${isHovering === index ? "" : "absolute z-[-1]"}`}
              ref={ref}
              style={{ display: isHidden ? "none" : "block" }}
            >
              <HoverVideo videoId={holoDatas.id} isHovering={isHovering === index} />
            </div>
            <div className="absolute text-xs font-bold text-center text-red-500 bottom-1 right-2 opacity-90 max-sm:text-[10px]">
              <span className="mr-[1px]">●</span>REC
            </div>
            <a href={`${holoVideo}${holoDatas.id}`} target="_blank">
              <img
                className="w-full h-auto rounded-t-xl"
                src={youtube_jpeg + holoDatas.id + youtube_jpeg_size.large}
                alt="Image Description"
              />
              <div className="p-2 md:p-3">
                <div className="text-gray-400 max-sm:text-[14px]">
                  {dayjs(holoDatas.start_scheduled).format("HH:mm")}
                </div>
                <h3 className="flex font-bold text-md text-white max-sm:text-[12px]">
                  {holoDatas.title}
                </h3>
              </div>
            </a>
          </div>
        ) : null
      })}
    </>
  )
}

export default LiveCard
