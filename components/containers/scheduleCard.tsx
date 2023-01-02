import dayjs from "dayjs"
import React, { useEffect, useState } from "react"
import { Api } from "./groupIcon"

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
    <div className="flex flex-wrap justify-center h-full gap-3">
      {holoData.map((holoDatas: Api) => {
        return holoDatas.channel.org === "Hololive" &&
          holoDatas.status === "upcoming" &&
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
          holoDatas.channel.id !== "UCWsfcksUUpoEvhia0_ut0bA" ? (
          <>
            <div className="relative w-[290px] max-md:w-[290px] max-sm:w-[240px] max-xs:w-[48%] h-full flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div className="absolute text-xs font-bold text-center text-gray-200 bottom-1 right-2 opacity-90 max-sm:text-[10px]">
                  <span className="mr-[1px]">◎</span>配信予定
              </div>
              <img className="w-full h-auto rounded-t-xl" src={youtube_jpeg + holoDatas.id + youtube_jpeg_size.large} alt="Image Description" />
              <div className="p-3 md:p-4">
                  <h3 className="flex font-bold text-gray-800 text-md dark:text-white max-sm:text-[12px]">{holoDatas.title}</h3>
                <div className="text-gray-400 max-sm:text-[14px]">{dayjs(holoDatas.start_scheduled).format("YYYY-MM-DD HH:mm")}</div>
              </div>
            </div>
          </>
        ) : null
      })}
    </div>
  )
}
export default ScheduleCard
