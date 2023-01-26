import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect } from "react"
import * as gtag from "../lib/gtag"
import { GaScript } from "../components/atoms/gaScript"

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
      <GaScript />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
