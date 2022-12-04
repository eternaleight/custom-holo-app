import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const Home: NextPage = () => {
  return (
    <div className="relative flex flex-col mx-auto max-w-[1680px] items-center min-h-screen bg-[#eee]">
      <div className="bg-white w-full h-[60px] flex items-center justify-end pr-3 gap-3 absolute">
        <button className="w-[130px] h-[40px] bg-white hover:bg-[#18a0fb] border-[1px] border-[#18a0fb] text-[#18a0fb] hover:text-[#18a0fbee] hover:bg-[#18a0fb2e]">
          Log in
        </button>
        <button className="w-[130px] h-[40px]">Register</button>
        <div className="absolute pl-3 top-[14px] left-[0px]">
          <Image src="/sampleLogo.png" height={32} width={122} />
        </div>
      </div>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
