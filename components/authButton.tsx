const AuthButton = () => {
  return (
    <div className="hidden md:block">
      <button className="w-[130px] h-[40px] bg-white hover:bg-[#98a0fb] border-[1px] border-[#98a0fb] text-[#98a0fb] hover:text-[#98a0fbee] hover:bg-[#98a0fb2e]">Log in</button>
      <button className="w-[130px] h-[40px] ml-3">Register</button>
    </div>
  )
}
export default AuthButton
