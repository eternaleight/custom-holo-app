import Image from "next/image"

const Hero = () => {
  return (
    <>
      <div className="relative">
        <Image src="/rectangle.png" width={1680} height={960} />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:scale-[70%] scale-[50%] cursor-pointer">
          <Image src="/group.png" width={130} height={130} />
        </div>
        <div className="absolute top-[80%] left-[50%] translate-x-[-50%]">
          <button className="w-[130px] h-[40px] md:scale-[90%] scale-[70%]">
            Join Today
          </button>
        </div>
      </div>
    </>
  )
}
export default Hero
