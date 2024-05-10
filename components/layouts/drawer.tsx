import CoinButton from "../ui/coinButton"

interface Props {
  isOpenDrawer: boolean
  toggleDrawer: () => void
}

const Drawer = ({ isOpenDrawer, toggleDrawer }: Props) => {
  return (
    <div className={`drawer ${isOpenDrawer ? "active" : ""}`}>
      <nav onClick={toggleDrawer} className="px-2 py-4 bg-[#F3F4F6] cursor-pointer">
        <div className="block p-3 text-gray-900">Home</div>
      </nav>
      <CoinButton />
    </div>
  )
}

export default Drawer
