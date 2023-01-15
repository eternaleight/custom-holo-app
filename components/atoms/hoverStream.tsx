import React, { useState, useEffect } from "react"

const HoverVideo = ({ videoId }: any) => {
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const iframe: any = document.getElementById(videoId)
    if (isHovering) {
      iframe.src += "?autoplay=1&mute=1"
    } else {
      iframe.src = iframe.src.replace("?autoplay=1&mute=1", "")
    }
  }, [isHovering, videoId])

  return (
    <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <iframe
        id={videoId}
        title={videoId}
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default HoverVideo
