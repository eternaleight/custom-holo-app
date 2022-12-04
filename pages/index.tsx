import type { NextPage } from "next"
import Header from "../components/header"
import Hero from "../components/hero"

const Home: NextPage = () => {
  return (
    <div className="relative flex flex-col mx-auto max-w-[1680px] items-center min-h-screen bg-[#eee]">
      <Header />
      <main>
        <Hero />
      </main>
      <footer></footer>
    </div>
  )
}

export default Home
