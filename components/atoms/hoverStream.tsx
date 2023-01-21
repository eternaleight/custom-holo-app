import React, { useState, useEffect, useRef } from "react"

const HoverVideo = ({ videoId, isHovering }: { videoId: string; isHovering: boolean }) => {
  const [mute, setMute] = useState<boolean>(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const handleMute = () => {
    setMute(!mute)
    if (iframeRef.current) {
      if (mute) {
        iframeRef.current.src += "?mute=1"
      } else {
        iframeRef.current.src = iframeRef.current.src.replace("?mute=1", "")
      }
    }
  }

  useEffect(() => {
    if (iframeRef.current) {
      if (isHovering) {
        iframeRef.current.src += "?autoplay=1&mute=1"
      } else {
        iframeRef.current.src = iframeRef.current.src.replace("?autoplay=1&mute=1", "")
      }
    }
  }, [isHovering, iframeRef])

  return (
    <div className="w-full h-full">
      <div className="absolute top-0 right-1">
        <button className="" onClick={handleMute}>
          {mute ? "Unmute" : "Mute"}
        </button>
      </div>

      <div
        className={`w-full ${
          isHovering ? "fixed w-[50%] h-[34vw] mx-auto bottom-8 right-8 z-[2]" : null
        }`}
      >
        <iframe
          ref={iframeRef}
          title={videoId}
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default HoverVideo
