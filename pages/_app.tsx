import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect } from "react"
import * as gtag from "../lib/gtag"
import { GaScript } from "../components/ui/gaScript"
import ChangeCardSizeObserver from "../utils/globalChangeCardObserver"
import HeadMeta from "../components/ui/headMeta"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <ChangeCardSizeObserver>
        <HeadMeta />
        <GaScript />
        <Component {...pageProps} />
      </ChangeCardSizeObserver>
    </>
  )
}

export default MyApp
