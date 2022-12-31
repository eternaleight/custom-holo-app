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
  const [addText, setAddText] = useState<string>("Magic")
  const onClickAddText = () => {
    setAddText(text)
    setText("")
  }
  return (
    <div className="relative flex flex-col items-center min-h-screen mx-auto overflow-x-hidden bg-white">
      <Header />
      <Pc addText={addText} />
      <h1 className="text-[28px] whitespace-pre-line mt-[-50px] mb-10">
        {`W2B <span>`}
        <form>
          <label>
            Name:
            <input autoComplete="off" type="text" name="name" className="mx-2 border-2 border-gray-800 rounded-md" value={text} onChange={(e) => setText(e.target.value)} />
          </label>
          <input type="submit" value="Submit" className="mx-2 bg-gray-100 border-2 border-gray-800 rounded-md px-[8px] cursor-pointer hover:bg-gray-200" onClick={onClickAddText} />
        </form>
        {`</span>S1TE`}
      </h1>
      <div className="flex flex-wrap justify-center mx-2 mb-10 gap-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Bar />
      <Bar2 />
      <div className="bg-white h-[948px] relative top-[-6px]"></div>
      <Footer />
    </div>
  )
}

export default Home
