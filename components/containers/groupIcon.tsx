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

const GroupIcon = () => {
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
    <div className="max-md:absolute flex justify-end mr-3 max-md:items-end max-md:flex-col right-[2px] top-[60px] z-[2]">
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
            <a className="flex items-center gap-x-3.5 max-md:mt-[-32px] py-2 mx-[-7px] rounded-md text-sm text-gray-800 dark:text-gray-400" target="_blank" href={`${holoVideo}${holoDatas.id}`}>
              <img className="inline-block md:h-[2.875rem] h-[3.475rem] md:w-[2.875rem] w-[3.475rem] rounded-full ring-1 ring-red-600" src={holoDatas.channel.photo} alt="Image Description" />
            </a>
          </>
        ) : null
      })}
    </div>
  )
}
export default GroupIcon
