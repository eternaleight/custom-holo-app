import { useState, createContext, ReactNode, useEffect } from "react"

interface AppContextProps {
  // LiveCard
  isChangeLiveCardSize: boolean
  setIsChangeLiveCardSize: (isChangeCardSize: boolean) => void
  toggleChangeLiveCardSize: () => void

  // ScheduleCard
  isChangeCardSize: boolean
  setIsChangeCardSize: (isChangeCardSize: boolean) => void
  toggleChangeCardSize: () => void

  // ActionControlsButtonのローディングスピナー用
  isLoading: boolean
}

export const GlobalChangeCardContext = createContext<AppContextProps>({
  isChangeLiveCardSize: false,
  setIsChangeLiveCardSize: () => {},
  toggleChangeLiveCardSize: () => {},

  isChangeCardSize: false,
  setIsChangeCardSize: () => {},
  toggleChangeCardSize: () => {},

  isLoading: true,
})

interface Props {
  children: ReactNode
}

// ActionControlsButtonのローディングで使う(S -> L切り替えの初期描画のラグを防止)

export const GlobalChangeCardObserver: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isChangeLiveCardSize, setIsChangeLiveCardSize] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("isLocalChangeLiveCardSize")
      return storedValue !== null ? JSON.parse(storedValue) : true
    }
  })

  const [isChangeCardSize, setIsChangeCardSize] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("isLocalChangeCardSize")
      return storedValue !== null ? JSON.parse(storedValue) : false
    }
  })

  async function getLocalStorageItem(key: string, defaultValue: boolean) {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key)
      if (storedValue !== null) {
        return JSON.parse(storedValue)
      }
    }
    return defaultValue
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const localChangeLiveCardSize = await getLocalStorageItem(
          "isLocalChangeLiveCardSize",
          isChangeLiveCardSize
        )
        const localChangeCardSize = await getLocalStorageItem(
          "isLocalChangeCardSize",
          isChangeCardSize
        )
        setIsChangeLiveCardSize(localChangeLiveCardSize)
        setIsChangeCardSize(localChangeCardSize)
      } catch (e) {
        console.log(e)
      } finally {
        setTimeout(() => setIsLoading(false), 300)
      }
    }
    fetchData()
  }, [])

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
      value={{
        isChangeLiveCardSize,
        isChangeCardSize,
        setIsChangeLiveCardSize,
        setIsChangeCardSize,
        toggleChangeLiveCardSize,
        toggleChangeCardSize,
        isLoading,
      }}
    >
      {children}
    </GlobalChangeCardContext.Provider>
  )
}

export default GlobalChangeCardObserver
