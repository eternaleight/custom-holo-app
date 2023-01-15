import Link from "next/link"

interface Props {
  isOpenDrawer: boolean
}

const Drawer = ({ isOpenDrawer }:Props) => {

  return (
    <div className={`drawer ${isOpenDrawer ? "active" : ""}`}>
      <nav className="px-2 py-4 bg-[#F3F4F6]">
        <Link href="/">
          <a className="block p-3 text-gray-800">Home</a>
        </Link>
        <Link href="/about">
          <a className="block p-3 text-gray-800">About</a>
        </Link>
        <Link href="/contact">
          <a className="block p-3 text-gray-800">Contact</a>
        </Link>
      </nav>
    </div>
  )
}

export default Drawer
