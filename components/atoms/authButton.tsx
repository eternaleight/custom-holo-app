interface Props {
  toggle: () => void
  isOpen: boolean
  handleHidden: () => void
}
const AuthButton = ({ toggle, isOpen, handleHidden }: Props) => {
  return (
    <div className="flex">
      <button
        onClick={toggle}
        className="w-[130px] h-[40px] bg-white hover:bg-[#98a0fb] border-[1px] border-[#98a0fb] text-[#98a0fb] hover:text-[#98a0fbee] hover:bg-[#98a0fb2e]"
      >
        Drawer{" "}
        <span className="border shadow-[0.5px_0.5px_1px_0px_#98a0fb99] p-[4px] rounded-[4px]">
          {isOpen ? "Close" : "Open"}
        </span>
      </button>
      <button onClick={handleHidden} className="hover:bg-[#8890eb] w-[130px] h-[40px] ml-3">
        PVButton{" "}
        <span className="border shadow-[0.5px_0.5px_1px_0px_#333] p-[4px] rounded-[4px]">
          {"Off"}
        </span>
      </button>
    </div>
  )
}
export default AuthButton
