import type { NextPage } from "next"
import { useState } from "react"
import Footer from "../components/containers/footer"
import GroupIcon from "../components/containers/groupIcon"
import Header from "../components/containers/header"
import LiveCard from "../components/containers/liveCard"
import Pc from "../components/containers/pc"
import ScheduleCard from "../components/containers/scheduleCard"

const Home: NextPage = () => {
  const [text, setText] = useState<string>("")
  const [addText, setAddText] = useState<string>("holo-app.vercel.app")
  const onClickAddText = () => {
    setAddText(text)
    setText("")
  }
  return (
    <div className="relative flex flex-col items-center justify-end min-h-screen mx-auto overflow-x-hidden bg-white bg-gray-100">
      <Header />
      <div className="w-full md:hidden">
        <GroupIcon />
      </div>
      <div className="flex flex-wrap justify-center mx-2 mt-8 md:my-10 gap-2">
        <LiveCard />
        <ScheduleCard />
      </div>
      <Pc addText={addText} />
      <h1 className="z-[1] top-[510px] md:text-[18px] text-[16px] whitespace-pre-line sm:mt-0 xs:mt-[-110px] xxs:mt-[-220px] mt-[-220px] mb-10">
        {`W2B <span>`}
        <form>
          <label>
            Name:
            <input autoComplete="off" type="text" name="name" className="mx-2 border-[1px] border-gray-800 rounded-md" value={text} onChange={(e) => setText(e.target.value)} />
          </label>
          <input type="submit" value="Submit" className="mx-2 bg-gray-100 border-[1px] border-gray-800 rounded-md px-[8px] cursor-pointer hover:bg-gray-300" onClick={onClickAddText} />
        </form>
        {`</span>S1TE`}
      </h1>
      {/* <Bar /> */}
      {/* <Bar2 /> */}
      <Footer />
    </div>
  )
}

export default Home
