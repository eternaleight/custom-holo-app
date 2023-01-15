import Head from "next/head"
import AuthButton from "../atoms/authButton"
import GroupIcon from "../atoms/groupIcon"

const Header = ({toggle}:any) => {
  return (
    <>
      <div className="bg-[#eaeaef] w-full h-[60px] flex items-center justify-end pr-3 gap-3">
        <div className="hidden md:block">
        <GroupIcon/>
        </div>
        <AuthButton toggle={toggle}/>
        <div className="md:block hidden absolute pl-3 top-[8px] left-[0px] cursor-pointer">
          <div className="text-[28px]">holoApp</div>
        </div>
        <span className="cursor-pointer inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-400 text-gray-400">
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
          </svg>
        </span>
      </div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}
export default Header
