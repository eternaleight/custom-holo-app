import { useState, useEffect } from "react";

const CoinButton: React.FC = () => {
  // コインの数を管理するstate
  const [coins, setCoins] = useState(0);
  // 今日のボタンのクリック状態を管理するstate
  const [clicked, setClicked] = useState(false);

  // componentDidMount
  useEffect(() => {
    // ローカルストレージから日付を取得
    const dateString = localStorage.getItem("date");
    // 日付がないか、今日の日付でない場合は、コインの数を200に設定し、日付を更新
    if (!dateString || new Date(dateString).toDateString() !== new Date().toDateString()) {
      setCoins(200);
      localStorage.setItem("coins", "200");
      localStorage.setItem("date", new Date().toString());
    } else {
      // 日付があり、今日の日付の場合は、ローカルストレージからコインの数を取得
      const coinCount = localStorage.getItem("coins");
      if (coinCount) {
        setCoins(parseInt(coinCount));
      }
    }
  }, []);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="p-1">
      <div className="text-[14px]">
      １日１回
      </div>
    <button
      className={`coin-button ${clicked ? "disabled" : ""}`}
      disabled={clicked}
      onClick={handleClick}
    >
     コインを受け取る 
    </button><div className="text-[14px]">
   : {coins}💰 </div>
    </div>
  );
};

export default CoinButton;
