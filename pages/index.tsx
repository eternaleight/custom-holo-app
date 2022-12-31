import type { NextPage } from "next"
import { useState } from "react"
import Bar from "../components/bar"
import Bar2 from "../components/bar2"
import Card from "../components/card"
import Footer from "../components/footer"
import Header from "../components/header"
import Pc from "../components/pc"

const Home: NextPage = () => {
  const [text, setText] = useState<string>("")
  const [addText, setAddText] = useState<string>("holoApp")
  const onClickAddText = () => {
    setAddText(text)
    setText("")
  }
  return (
    <div className="relative flex flex-col items-center min-h-screen mx-auto overflow-x-hidden bg-white bg-gray-100">
      <Header />
      <div className="flex flex-wrap justify-center mx-2 my-10 gap-10">
        <Card />
      </div>
      <Pc addText={addText} />
      <h1 className="z-[1] top-[510px] md:text-[18px] text-[16px] whitespace-pre-line sm:mt-0 xs:mt-[-100px] mt-[-200px] mb-10">
        {`W2B <span>`}
        <form>
          <label>
            Name:
            <input autoComplete="off" type="text" name="name" className="mx-2 border-[1px] border-gray-800 rounded-md" value={text} onChange={(e) => setText(e.target.value)} />
          </label>
          <input type="submit" value="Submit" className="mx-2 bg-gray-100 border-[1px] border-gray-800 rounded-md px-[8px] cursor-pointer hover:bg-gray-200" onClick={onClickAddText} />
        </form>
        {`</span>S1TE`}
      </h1>
      <Bar />
      <Bar2 />
      <Footer />
    </div>
  )
}

export default Home
