import { useState, useEffect } from "react"
import HeartIcon from "./heartIcon"

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const storedValue = localStorage.getItem("isLiked")
    if (storedValue !== null) {
      setIsLiked(storedValue === "true")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("isLiked", isLiked.toString())
  }, [isLiked])
  return (
    <>
      <button className="bg-transparent" onClick={() => setIsLiked(!isLiked)}>
        <HeartIcon filled={isLiked ? true : false} />
      </button>
    </>
  )
}

export default LikeButton
