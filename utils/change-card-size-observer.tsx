import { useState, createContext, ReactNode } from "react"

interface AppContextProps {
  // LiveCard
  isChangeLiveCardSize: boolean
  setIsChangeLiveCardSize: (isChangeCardSize: boolean) => void
  toggleChangeLiveCardSize: () => void

  // ScheduleCard
  isChangeCardSize: boolean
  setIsChangeCardSize: (isChangeCardSize: boolean) => void
  toggleChangeCardSize: () => void
}

export const GlobalChangeCardContext = createContext<AppContextProps>({
  // LiveCard
  isChangeLiveCardSize: false,
  setIsChangeLiveCardSize: () => {},
  toggleChangeLiveCardSize: () => {},

  // ScheduleCard
  isChangeCardSize: false,
  setIsChangeCardSize: () => {},
  toggleChangeCardSize: () => {},
})

type Props = {
  children: ReactNode
}

export const GlobalChangeCardObserver: React.FC<Props> = ({ children }) => {
  const [isChangeLiveCardSize, setIsChangeLiveCardSize] = useState(
    false
    // () => {
    // if (typeof window !== "undefined") {
    //   const storedValue = localStorage.getItem("isLocalChangeLiveCardSize")
    //   return storedValue !== null ? JSON.parse(storedValue) : false
    // }
  // }
  )

  const [isChangeCardSize, setIsChangeCardSize] = useState(
    false
    // () => {
    // if (typeof window !== "undefined") {
    //   const storedValue = localStorage.getItem("isLocalChangeCardSize")
    //   return storedValue !== null ? JSON.parse(storedValue) : false
    // }
  // }
  )

  const toggleChangeLiveCardSize = () => {
    setIsChangeLiveCardSize(!isChangeLiveCardSize)
    localStorage.setItem("isLocalChangeLiveCardSize", String(!isChangeLiveCardSize))
  }

  const toggleChangeCardSize = () => {
    setIsChangeCardSize(!isChangeCardSize)
    localStorage.setItem("isLocalChangeCardSize", String(!isChangeCardSize))
  }

  return (
    <GlobalChangeCardContext.Provider
      value={{ isChangeLiveCardSize,isChangeCardSize,setIsChangeLiveCardSize, setIsChangeCardSize,toggleChangeLiveCardSize, toggleChangeCardSize }}
    >
      {children}
    </GlobalChangeCardContext.Provider>
  )
}

export default GlobalChangeCardObserver
