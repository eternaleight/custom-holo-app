import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect } from "react"
import * as gtag from "../lib/gtag"
import { GaScript } from "../components/atoms/gaScript"
import Head from "next/head"

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
      <Head>
        <title>holoApp</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="holoApp" />
        <meta
          property="og:description"
          content="holoAppは、世界中のファンがホロライブ所属のバーチャルアイドルたちの多彩な配信に出演する日程を確認できるプラットフォームです。ライブ配信やトーク番組、ゲーム実況など、各配信の詳細情報も充実しており、あなたが好きなバーチャルアイドルの最新情報をいち早くキャッチできます。また、豊富な機能も備えており、ホロライブのバーチャルアイドルたちの魅力溢れる配信を見逃さないよう、ぜひholoAppをご活用ください。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://holo-app.vercel.app/" />
        <meta property="og:image" content="https://i.imgur.com/ZwVeAo0.jpg" />
        <meta property="og:site_name" content="holoApp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="holoApp" />
        <meta
          name="twitter:description"
          content="holoAppは、世界中のファンがホロライブ所属のバーチャルアイドルたちの多彩な配信に出演する日程を確認できるプラットフォームです。ライブ配信やトーク番組、ゲーム実況など、各配信の詳細情報も充実しており、あなたが好きなバーチャルアイドルの最新情報をいち早くキャッチできます。また、豊富な機能も備えており、ホロライブのバーチャルアイドルたちの魅力溢れる配信を見逃さないよう、ぜひholoAppをご活用ください。"
        />
        <meta name="twitter:image" content="https://i.imgur.com/ZwVeAo0.jpg" />
      </Head>
      <GaScript />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
