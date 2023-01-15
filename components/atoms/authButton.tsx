
const AuthButton = ({toggle}:any) => {
  return (
    <div className="flex">
      <button onClick={toggle} className="w-[130px] h-[40px] bg-white hover:bg-[#98a0fb] border-[1px] border-[#98a0fb] text-[#98a0fb] hover:text-[#98a0fbee] hover:bg-[#98a0fb2e]">Menu</button>
      <button className="hover:bg-[#8890eb] w-[130px] h-[40px] ml-3">Hover OFF</button>
    </div>
  )
}
export default AuthButton
