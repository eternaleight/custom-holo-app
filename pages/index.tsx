import type { NextPage } from "next"
import Accordion from "../components/accordion"
import Bar from "../components/bar"
import Footer from "../components/footer"
import Header from "../components/header"
import Hero from "../components/hero"
import Pc from "../components/pc"

const Home: NextPage = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen mx-auto overflow-x-hidden bg-white">
      <Header />
      <main>
        <Pc />
        <Bar />
        <Accordion />
        <Hero />
        <div className="bg-white h-[948px] relative top-[-6px]">
          <h1 className="text-[48px] whitespace-preline"></h1>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
