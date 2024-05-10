import { useEffect, useState } from "react"
import Header from "../components/layouts/header"
import Footer from "../components/layouts/footer"
import LiveCard from "../components/ui/liveCard"
import Hero from "../components/layouts/hero"
import ScheduleCard from "../components/ui/scheduleCard"
import GroupIcon from "../components/ui/groupIcon"
import Drawer from "../components/layouts/drawer"

export default function Home() {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false)
  const [isFixedVideo, setIsFixedVideo] = useState<boolean>(false)
  const [inputText, setInputText] = useState<string>("")
  const [displayText, setdisplayText] = useState<string>("holo-app.vercel.app")
  const toggleFixedVideo = () => setIsFixedVideo(!isFixedVideo)
  const toggleDrawer = () => setIsOpenDrawer(!isOpenDrawer)

  const submitFormWithLocalStorage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem("displayText", inputText)
    setdisplayText(inputText)
    setInputText("")
  }

  useEffect(() => {
    const localDisplayText = localStorage.getItem("displayText")
    setdisplayText(localDisplayText || "holo-app.vercel.app")
  }, [])

  return (
    <div className="flex flex-col items-center justify-between min-h-screen overflow-x-hidden bg-gray-100">
      <Header
        isOpenDrawer={isOpenDrawer}
        isFixedVideo={isFixedVideo}
        toggleDrawer={toggleDrawer}
        toggleFixedVideo={toggleFixedVideo}
      />
      <div className="w-full md:hidden">
        <GroupIcon />
      </div>
      <div className="flex flex-wrap justify-center mx-2 mt-8 md:my-8 gap-2">
        <Drawer toggleDrawer={toggleDrawer} isOpenDrawer={isOpenDrawer} />
        <LiveCard isFixedVideo={isFixedVideo} />
        <ScheduleCard />
      </div>
      <Hero displayText={displayText} />
      <h1 className="z-[1] top-[510px] md:text-[18px] text-[16px] whitespace-pre-line sm:mt-0 xs:mt-[-110px] xxs:mt-[-220px] mt-[-220px] mb-10">
        <form onSubmit={submitFormWithLocalStorage}>
          <label>
            <input
              autoComplete="off"
              type="text"
              name="name"
              className="mx-2 border border-gray-800 rounded-md"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </label>
          <input
            type="submit"
            value="Submit"
            className="px-2 mx-2 bg-gray-100 border border-gray-800 cursor-pointer rounded-md hover:bg-gray-300"
          />
        </form>
      </h1>
      <Footer />
    </div>
  )
}
