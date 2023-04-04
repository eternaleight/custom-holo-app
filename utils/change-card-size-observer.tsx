import { useState, createContext, ReactNode } from "react"

interface AppContextProps {
  isChangeCardSize: boolean
  setIsChangeCardSize: (isChangeCardSize: boolean) => void
  toggleChangeCardSize: () => void
}

export const GlobalChangeCardContext = createContext<AppContextProps>({
  isChangeCardSize: false,
  setIsChangeCardSize: () => {},
  toggleChangeCardSize: () => {},
})

type Props = {
  children: ReactNode
}

export const GlobalChangeCardObserver: React.FC<Props> = ({ children }) => {
  const [isChangeCardSize, setIsChangeCardSize] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("isLocalChangeCardSize")
      return storedValue !== null ? JSON.parse(storedValue) : false
    }
  })

  const toggleChangeCardSize = () => {
    setIsChangeCardSize(!isChangeCardSize)
    localStorage.setItem("isLocalChangeCardSize", String(!isChangeCardSize))
  }

  return (
    <GlobalChangeCardContext.Provider
      value={{ isChangeCardSize, setIsChangeCardSize, toggleChangeCardSize }}
    >
      {children}
    </GlobalChangeCardContext.Provider>
  )
}

export default GlobalChangeCardObserver
