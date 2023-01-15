import Link from "next/link"
import CoinButton from "../atoms/coinButton"

interface Props {
  isOpen: boolean
}

const Drawer = ({ isOpen }:Props) => {

  return (
    <div className={`drawer ${isOpen ? "active" : ""}`}>
      <nav className="px-2 py-4 bg-[#F3F4F6]">
        <Link href="/">
          <a className="block p-3 text-gray-800">Home</a>
        </Link>
      </nav>
      <CoinButton /> 
    </div>
  )
}

export default Drawer
