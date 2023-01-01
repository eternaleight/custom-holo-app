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
  useEffect(() => {
    ;(async () => {
      const res = await fetch(holoUrl)
      const users = await res.json()
      setHoloData(users)
    })()
  }, [holoUrl])

  return (
    <>
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
          holoDatas.channel.id !== "UCWsfcksUUpoEvhia0_ut0bA" ? (
          <>
            <div className="w-[290px] max-md:w-[290px] max-sm:w-[240px] max-xs:w-full h-full flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <img className="w-full h-auto rounded-t-xl" src={youtube_jpeg + holoDatas.id + youtube_jpeg_size.large} alt="Image Description" />
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">{holoDatas.title}</h3>
                <div className="text-gray-400">
                {dayjs(holoDatas.start_scheduled).format('YYYY-MM-DD HH:mm')}
                </div>
                <p className="mt-1 text-gray-800 dark:text-gray-400">{holoDatas.channel.name}</p>
                <a className="inline-flex items-center justify-center px-4 py-3 mt-3 text-sm font-semibold text-white bg-blue-500 border border-transparent gap-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800" href={`${holoVideo}${holoDatas.id}`} target="_blank">
                  Go stream
                </a>
              </div>
            </div>
          </>
        ) : null
      })}
    </>
  )
}
export default LiveCard
