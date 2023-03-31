import { useState, useEffect } from "react"
import HeartIcon from "./heartIcon"

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false)
  const [isLiked2, setIsLiked2] = useState(false)
  const [isLiked3, setIsLiked3] = useState(false)

  useEffect(() => {
    const storedValue = localStorage.getItem("isLiked")
    const storedValue2 = localStorage.getItem("isLiked2")
    const storedValue3 = localStorage.getItem("isLiked3")
    if (storedValue !== null) {
      setIsLiked(storedValue === "true")
    }
    if (storedValue !== null) {
      setIsLiked2(storedValue2 === "true")
    }
    if (storedValue !== null) {
      setIsLiked3(storedValue3 === "true")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("isLiked", isLiked.toString())
    localStorage.setItem("isLiked2", isLiked2.toString())
    localStorage.setItem("isLiked3", isLiked3.toString())
  }, [isLiked, isLiked2, isLiked3])
  return (
    <>
      <button className="bg-transparent cursor-default" onClick={() => setIsLiked(!isLiked)}>
        <HeartIcon filled={isLiked ? true : false} />
      </button>
      <button className="bg-transparent cursor-default" onClick={() => setIsLiked2(!isLiked2)}>
        <HeartIcon filled={isLiked2 ? true : false} />
      </button>
      <button className="bg-transparent cursor-default" onClick={() => setIsLiked3(!isLiked3)}>
        <HeartIcon filled={isLiked3 ? true : false} />
      </button>
    </>
  )
}

export default LikeButton
