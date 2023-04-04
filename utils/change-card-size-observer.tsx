import { useState, createContext, ReactNode } from "react"

interface AppContextProps {
  isChangeLiveCardSize: boolean
  isChangeCardSize: boolean
  setIsChangeLiveCardSize: (isChangeCardSize: boolean) => void
  setIsChangeCardSize: (isChangeCardSize: boolean) => void
  toggleChangeLiveCardSize: () => void
  toggleChangeCardSize: () => void
}

export const GlobalChangeCardContext = createContext<AppContextProps>({
  isChangeLiveCardSize: false,
  isChangeCardSize: false,
  setIsChangeLiveCardSize: () => {},
  setIsChangeCardSize: () => {},
  toggleChangeLiveCardSize: () => {},
  toggleChangeCardSize: () => {},
})

type Props = {
  children: ReactNode
}

export const GlobalChangeCardObserver: React.FC<Props> = ({ children }) => {
  const [isChangeLiveCardSize, setIsChangeLiveCardSize] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("isLocalChangeLiveCardSize")
      return storedValue !== null ? JSON.parse(storedValue) : false
    }
  })

  const [isChangeCardSize, setIsChangeCardSize] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("isLocalChangeCardSize")
      return storedValue !== null ? JSON.parse(storedValue) : false
    }
  })

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
