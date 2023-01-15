import { useState, useEffect } from "react"

const CoinButton: React.FC = () => {
  // コインの数を管理するstate
  const [coins, setCoins] = useState(0)
  // 今日のボタンのクリック状態を管理するstate
  const [clicked, setClicked] = useState(false)

  // componentDidMount
  useEffect(() => {
    // ローカルストレージから日付を取得
    const dateString = localStorage.getItem("date")
      // 日付があり、今日の日付の場合は、ローカルストレージからコインの数を取得
      const coinCount = localStorage.getItem("coins")
      if (coinCount) {
        setCoins(parseInt(coinCount))
    }
  }, [])

  const handleClick = () => {
    const dateString = localStorage.getItem("date")
    if (!dateString || new Date(dateString).toDateString() !== new Date().toDateString()) {
      setClicked(true)
      localStorage.setItem("coins", String(coins + 200))
      localStorage.setItem("date", new Date().toString())
      window.location.reload()
    }
  }

  return (
    <div className="p-2 text-white">
      <div className="text-[14px]">１日１回</div>
      <button
        className={`coin-button ${clicked ? "disabled" : ""}`}
        disabled={clicked}
        onClick={handleClick}
      >
        コインを受け取る
      </button>
      <div className="text-[14px]">: {coins}💰 </div>
    </div>
  )
}

export default CoinButton
