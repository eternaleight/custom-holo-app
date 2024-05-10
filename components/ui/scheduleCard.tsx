import dayjs from "dayjs"
import React, { useContext, useEffect, useState } from "react"
import { GlobalChangeCardContext } from "../../utils/globalChangeCardObserver"
import { isCorrectScheduleHoloUrl } from "../../utils/util"
import { HoloData } from "./liveCard"

const ScheduleCard = () => {
  const youtube_jpeg = "https://img.youtube.com/vi/"
  const youtube_jpeg_size = {
    large: "/maxresdefault.jpg",
    midium: "/sddefault.jpg",
  }
  const holoVideo = "https://www.youtube.com/watch?v="
  const holoUrl = "https://holodex.net/api/v2/live/"
  const [holoData, setHoloData] = useState<HoloData[]>([])
  const { isChangeCardSize, toggleChangeCardSize } = useContext(GlobalChangeCardContext)

  useEffect(() => {
    ;(async () => {
      const res = await fetch(holoUrl, {
        headers: {
          "X-APIKEY": process.env.NEXT_PUBLIC_API_KEY || "",
        },
      })
      const users = await res.json()
      setHoloData(users)
    })()
  }, [])

  return (
    <div className="flex flex-wrap justify-center h-full gap-2">
      {holoData.map((holoDatas: HoloData) => {
        return isCorrectScheduleHoloUrl(holoDatas) ? (
          <div
            key={holoDatas.id}
            className={`relative ${
              isChangeCardSize ? "w-[23.5vw]" : "w-[250px]"
            } max-xl:w-[24%] max-mm:w-[32.5%] max-md:w-[48.5%] max-sm:w-[48%.5] max-xs:w-[48.5%] h-full flex flex-col border shadow-sm rounded-xl bg-[#223e] border-gray-700 shadow-slate-700/[.7] group`}
          >
            <div
              onClick={toggleChangeCardSize}
              className="absolute text-xs font-bold text-center text-gray-200 bottom-1 right-2 opacity-90 max-sm:text-[10px] transition ease-in-out delay-150 xl:hover:-translate-y-1 xl:hover:scale-110 bg-transparent hover:bg-transparent duration-300 xl:cursor-pointer"
            >
              <span className="mr-[1px]">◎</span>配信予定
            </div>
            <a href={`${holoVideo}${holoDatas.id}`} target="_blank">
              <div className="">
                <img
                  className="w-full h-auto rounded-t-xl"
                  src={youtube_jpeg + holoDatas.id + youtube_jpeg_size.large}
                  alt="Image Description"
                />
                <div className="p-3 md:p-4">
                  <div className="text-gray-400 max-sm:text-[14px]">
                    {dayjs(holoDatas.start_scheduled).format("MM-DD HH:mm")}
                  </div>
                  <h3 className="flex font-bold text-md text-white max-sm:text-[12px]">
                    {holoDatas.title}
                  </h3>
                </div>
              </div>
            </a>
          </div>
        ) : null
      })}
    </div>
  )
}

export default ScheduleCard
