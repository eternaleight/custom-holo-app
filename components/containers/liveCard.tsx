import dayjs from "dayjs"
import { useEffect, useState } from "react"

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

const LiveCard = () => {
  const youtube_jpeg = "https://img.youtube.com/vi/"
  const youtube_jpeg_size = {
    large: "/maxresdefault.jpg",
    midium: "/sddefault.jpg",
  }
  const holoVideo = "https://www.youtube.com/watch?v="
  const holoUrl = "https://holodex.net/api/v2/live/"
  const [holoData, setHoloData] = useState<Api[]>([])
  const [loading, setLoading] = useState<boolean>(true)
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
        <>
          <div className="fixed z-[2] top-[40%] animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-[#F3F4F6] rounded-full" role="status" aria-label="loading">
            <span className="sr-only">Loading...</span>
          </div>
        </>
      ) : null}
      {holoData.map((holoDatas: Api) => {
        return holoDatas.channel.org === "Hololive" &&
          holoDatas.status === "live" &&
          holoDatas.channel.id !== "UCKeAhJvy8zgXWbh9duVjIaQ" &&
          holoDatas.channel.id !== "UCZgOv3YDEs-ZnZWDYVwJdmA" &&
          holoDatas.channel.id !== "UC9mf_ZVpouoILRY9NUIaK-w" &&
          holoDatas.channel.id !== "UCNVEsYbiZjH5QLmGeSgTSzg" &&
          holoDatas.channel.id !== "UCGNI4MENvnsymYjKiZwv9eg" &&
          holoDatas.channel.id !== "UCANDOlYTJT7N5jlRC3zfzVA" &&
          holoDatas.channel.id !== "UChSvpZYRPh0FvG4SJGSga3g" &&
          holoDatas.channel.id !== "UCwL7dgTxKo8Y4RFIKWaf8gA" &&
          holoDatas.channel.id !== "UC6t3-_N8A6ME1JShZHHqOMw" &&
          holoDatas.channel.id !== "" &&
          holoDatas.channel.id !== "UCc88OV45ICgHbn3ZqLLb52w" &&
          holoDatas.channel.id !== "UCgRqGV1gBf2Esxh0Tz1vxzw" &&
          holoDatas.channel.id !== "UCkT1u65YS49ca_LsFwcTakw" &&
          holoDatas.channel.id !== "UCdfMHxjcCc2HSd9qFvfJgjg" &&
          holoDatas.channel.id !== "" &&
          holoDatas.channel.id !== "UCyxtGMdWlURZ30WSnEjDOQw" &&
          holoDatas.channel.id !== "UC7MMNHR-kf9EN1rXiesMTMw" &&
          holoDatas.channel.id !== "UC2hx0xVkMoHGWijwr_lA01w" &&
          holoDatas.channel.id !== "UCDRWSO281bIHYVi-OV3iFYA" &&
          holoDatas.channel.id !== "" &&
          holoDatas.channel.id !== "UCWsfcksUUpoEvhia0_ut0bA" &&
          Date.now() - 60 * 60 * 24 * 1000 * 1 < new Date(holoDatas.start_scheduled).getTime() ? (
          <>
            <div className="relative w-[23%] max-xl:w-[24%] max-lg:w-[32%] max-mm:w-[48.5%] max-md:w-[48.5%] max-sm:w-[48.5%] max-xs:w-[48.5%] h-full flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div className="absolute text-xs font-bold text-center text-red-500 bottom-1 right-2 opacity-90 max-sm:text-[10px]">
                <span className="mr-[1px]">●</span>REC
              </div>
              <a href={`${holoVideo}${holoDatas.id}`} target="_blank">
                <img className="w-full h-auto rounded-t-xl" src={youtube_jpeg + holoDatas.id + youtube_jpeg_size.large} alt="Image Description" />
                <div className="p-2 md:p-3">
                  <div className="text-gray-400 max-sm:text-[14px]">{dayjs(holoDatas.start_scheduled).format("HH:mm")}</div>
                  <h3 className="flex font-bold text-gray-800 text-md dark:text-white max-sm:text-[12px]">{holoDatas.title}</h3>
                </div>
              </a>
            </div>
          </>
        ) : null
      })}
    </>
  )
}
export default LiveCard
