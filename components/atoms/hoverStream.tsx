import React, { useState, useEffect } from "react"

const HoverVideo = ({ videoId,isHovering }: any) => {
const [mute, setMute] = useState(true);
const handleMute = () => {
    setMute(!mute);
    const iframe: any = document.getElementById(videoId);
    if (mute) {
        iframe.src += "?mute=1";
    } else {
        iframe.src = iframe.src.replace("?mute=1", "");
    }
}

  useEffect(() => {
    const iframe: any = document.getElementById(videoId)
    if (isHovering) {
      iframe.src += "?autoplay=1&mute=1"
    } else {
      iframe.src = iframe.src.replace("?autoplay=1&mute=1", "")
    }
  }, [isHovering, videoId])

  return (
    <div className="w-full h-full">
      <div className="absolute top-0 right-1">
    <button className="" onClick={handleMute}>{mute ? "Unmute" : "Mute"}</button>
</div>

      <div className={`w-full ${isHovering ? "fixed w-[50%] h-[34vw] mx-auto bottom-8 right-8 z-[2]": null}`}>
      <iframe
        id={videoId}
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
