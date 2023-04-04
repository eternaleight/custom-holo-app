import { useContext } from "react"
import { GlobalChangeCardContext } from "../../utils/change-card-size-observer"

interface Props {
  isOpenDrawer: boolean
  isFixedVideo: boolean
  toggleDrawer: () => void
  toggleFixedVideo: () => void
}

const ActionControlsButton = ({
  isOpenDrawer,
  isFixedVideo,
  toggleDrawer,
  toggleFixedVideo,
}: Props) => {
  const { isChangeLiveCardSize, isChangeCardSize, toggleChangeLiveCardSize, toggleChangeCardSize } =
    useContext(GlobalChangeCardContext)

  return (
    <div className="flex gap-3">
      <button
        onClick={toggleDrawer}
        className="w-[130px] h-[40px] bg-white hover:bg-[#98a0fb] border-[1px] border-[#98a0fb] text-[#98a0fb] hover:text-[#98a0fbee] hover:bg-[#98a0fb2e]"
      >
        Drawer{" "}
        <span className="border shadow-[0.5px_0.5px_1px_0px_#98a0fb99] p-[4px] rounded-[4px]">
          {isOpenDrawer ? "Close" : "Open"}
        </span>
      </button>

      <button
        onClick={toggleChangeLiveCardSize}
        className="max-xl:hidden w-[130px] h-[40px] bg-white hover:bg-[#98a0fb] border-[1px] border-[#98a0fb] text-[#98a0fb] hover:text-[#98a0fbee] hover:bg-[#98a0fb2e]"
      >
        Live Card{" "}
        <span className="border shadow-[0.5px_0.5px_1px_0px_#98a0fb99] p-[4px] rounded-[4px]">
          <span className="px-1">{isChangeLiveCardSize ? "L" : "S"}</span>
        </span>
      </button>

      <button
        onClick={toggleChangeCardSize}
        className="max-xl:hidden w-[130px] h-[40px] bg-white hover:bg-[#98a0fb] border-[1px] border-[#98a0fb] text-[#98a0fb] hover:text-[#98a0fbee] hover:bg-[#98a0fb2e]"
      >
        Schedule{" "}
        <span className="border shadow-[0.5px_0.5px_1px_0px_#98a0fb99] p-[4px] rounded-[4px]">
          <span className="px-1">{isChangeCardSize ? "L" : "S"}</span>
        </span>
      </button>

      <button onClick={toggleFixedVideo} className="hover:bg-[#8890eb] w-[130px] h-[40px]">
        PVButton{" "}
        <span className="border shadow-[0.5px_0.5px_1px_0px_#333] p-[4px] rounded-[4px]">
          {isFixedVideo ? "On" : "Off"}
        </span>
      </button>
    </div>
  )
}

export default ActionControlsButton
