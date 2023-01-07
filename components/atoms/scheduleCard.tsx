import dayjs from "dayjs"
import React, { useEffect, useState } from "react"
import { isCorrectScheduleHoloUrl} from "../../utils/util"
import { Api } from "./liveCard"

const ScheduleCard = () => {
  const youtube_jpeg = "https://img.youtube.com/vi/"
  const youtube_jpeg_size = {
    large: "/maxresdefault.jpg",
    midium: "/sddefault.jpg",
  }
  const holoVideo = "https://www.youtube.com/watch?v="
  const holoUrl = "https://holodex.net/api/v2/live/"
  const [holoData, setHoloData] = useState<Api[]>([])
  useEffect(() => {
    ;(async () => {
      const res = await fetch(holoUrl)
      const users = await res.json()
      setHoloData(users)
    })()
  }, [holoUrl])

  return (
    <div className="flex flex-wrap justify-center h-full gap-2">
      {holoData.map((holoDatas: Api) => {
        return isCorrectScheduleHoloUrl(holoDatas) ? (
          <>
            <div className="relative w-[250px] max-xl:w-[24%] max-mm:w-[32.5%] max-md:w-[48.5%] max-sm:w-[48%.5] max-xs:w-[48.5%] h-full flex flex-col bg-white border shadow-sm rounded-xl dark:bg-[#223e] dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div className="absolute text-xs font-bold text-center text-gray-200 bottom-1 right-2 opacity-90 max-sm:text-[10px]">
                <span className="mr-[1px]">◎</span>配信予定
              </div>
              <a href={`${holoVideo}${holoDatas.id}`} target="_blank">
                <div className="">
                <img className="w-full h-auto rounded-t-xl" src={youtube_jpeg + holoDatas.id + youtube_jpeg_size.large} alt="Image Description" />
                <div className="p-3 md:p-4">
                  <div className="text-gray-400 max-sm:text-[14px]">{dayjs(holoDatas.start_scheduled).format("MM-DD HH:mm")}</div>
                  <h3 className="flex font-bold text-gray-800 text-md dark:text-white max-sm:text-[12px]">{holoDatas.title}</h3>
                </div>
                </div>
              </a>
            </div>
          </>
        ) : null
      })}
    </div>
  )
}
export default ScheduleCard
