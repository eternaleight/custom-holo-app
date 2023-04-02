interface Text {
  addText: string
}

const Hero = ({ addText }: Text) => {
  return (
    <>
      <figure className="mx-auto lg:px-0 px-8 md:my-20 mt-10 relative z-[1] max-w-full w-[50rem] h-[480px] rounded-b-lg ">
        <div className="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-gray-700">
          <div className="absolute flex space-x-1 top-2/4 left-4 -translate-y-1">
            <span className="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600"></span>
            <span className="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600"></span>
            <span className="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600"></span>
          </div>
          <div className="flex justify-center items-center w-full h-full bg-gray-700 text-[.5rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-gray-600 dark:text-gray-400">{`https://${addText}`}</div>
        </div>

        <div className="bg-gray-800 rounded-b-lg">
          <a
            href={`${
              addText === "github"
                ? "https://github.com/eternaleight/holo-app"
                : "https://high-speed-holodule.vercel.app"
            }`}
            target="_blank"
          >
            <img
              className="h-auto max-w-full rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]"
              src={`${addText === "github" ? "/github.png" : "/holo-app.png"}`}
              alt="Image Description"
            />
          </a>
        </div>
      </figure>
    </>
  )
}
export default Hero
