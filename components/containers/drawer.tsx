import Link from "next/link"
import CoinButton from "../atoms/coinButton"

interface Props {
  isOpen: boolean
  toggleDrawer: () => void
}

const Drawer = ({ isOpen,toggleDrawer }:Props) => {

  return (
    <div className={`drawer ${isOpen ? "active" : ""}`}>
      <nav onClick={toggleDrawer} className="px-2 py-4 bg-[#F3F4F6] cursor-pointer">
          <div className="block p-3 text-gray-900" >Home</div>
      </nav>
      <CoinButton /> 
    </div>
  )
}

export default Drawer
