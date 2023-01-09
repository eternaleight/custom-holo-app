import type { NextPage } from "next"
import { useEffect, useState } from "react"
import Header from "../components/containers/header"
import Footer from "../components/containers/footer"
import LiveCard from "../components/atoms/liveCard"
import Hero from "../components/containers/hero"
import ScheduleCard from "../components/atoms/scheduleCard"
import GroupIcon from "../components/atoms/groupIcon"

const Home: NextPage = () => {
  const [text, setText] = useState<string>("")
  const [addText, setAddText] = useState<string>("holo-app.vercel.app")
  const onClickAddText = () => {
    localStorage.setItem('key', text);
    setAddText(text)
    setText("")
  }

  useEffect(() => {
    console.log(localStorage.getItem('key'))
    setAddText(localStorage.getItem('key') || "holo-app.vercel.app")
  },[addText])
  return (
    <div className="relative flex flex-col items-center justify-end min-h-screen mx-auto overflow-x-hidden bg-gray-100">
      <Header />
      <div className="w-full md:hidden">
        <GroupIcon />
      </div>
      <div className="flex flex-wrap justify-center mx-2 mt-8 md:my-8 gap-2">
        <LiveCard />
        <ScheduleCard />
      </div>
      <Hero addText={addText} />
      <h1 className="z-[1] top-[510px] md:text-[18px] text-[16px] whitespace-pre-line sm:mt-0 xs:mt-[-110px] xxs:mt-[-220px] mt-[-220px] mb-10">
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            <input autoComplete="off" type="text" name="name" className="mx-2 border-[1px] border-gray-800 rounded-md" value={text} onChange={(e) => setText(e.target.value)} />
          </label>
          <input type="submit" value="Submit" className="mx-2 bg-gray-100 border-[1px] border-gray-800 rounded-md px-[8px] cursor-pointer hover:bg-gray-300" onClick={onClickAddText} />
        </form>
      </h1>
      <Footer />
    </div>
  )
}

export default Home
