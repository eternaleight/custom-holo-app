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
  const {
    isChangeLiveCardSize,
    isChangeCardSize,
    toggleChangeLiveCardSize,
    toggleChangeCardSize,
    isLoading,
  } = useContext(GlobalChangeCardContext)

  if (isLoading) {
    return (
      <div className="w-[38%] flex flex-col justify-center items-center">
        <div
          className="duration-1000 loading-spinner inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-[#F3F4F6ee] rounded-full"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-3 button-container">
      <button
        onClick={toggleDrawer}
        className="w-[130px] h-[40px] bg-white border-[1px] border-[#98a0fb] text-[#98a0fb] hover:text-[#98a0fbee] hover:bg-[#98a0fb2e]"
      >
        Drawer{" "}
        <span className="border shadow-[0.5px_0.5px_1px_0px_#98a0fb99] p-[4px] rounded-[4px]">
          {isOpenDrawer ? "Close" : "Open"}
        </span>
      </button>

      <button
        onClick={toggleChangeLiveCardSize}
        className="max-xl:hidden w-[130px] h-[40px] bg-white border-[1px] border-[#98a0fb] text-[#98a0fb] hover:text-[#98a0fbee] hover:bg-[#98a0fb2e]"
      >
        Live Card{" "}
        <span className="border shadow-[0.5px_0.5px_1px_0px_#98a0fb99] p-[4px] rounded-[4px]">
          <span className="px-1">{isChangeLiveCardSize ? "L" : "S"}</span>
        </span>
      </button>

      <button
        onClick={toggleChangeCardSize}
        className="max-xl:hidden w-[130px] h-[40px] bg-white border-[1px] border-[#98a0fb] text-[#98a0fb] hover:text-[#98a0fbee] hover:bg-[#98a0fb2e]"
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
