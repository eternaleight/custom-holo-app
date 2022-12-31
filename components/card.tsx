const Card = () => {
  return (
    <div className="w-[350px] h-[400px] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <img className="w-full h-auto rounded-t-xl" src="/rectangle.png" alt="Image Description" />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">Card title</h3>
        <p className="mt-1 text-gray-800 dark:text-gray-400">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a className="inline-flex items-center justify-center px-4 py-3 mt-3 text-sm font-semibold text-white bg-blue-500 border border-transparent gap-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800" href="#">
          Go somewhere
        </a>
      </div>
    </div>
  )
}
export default Card
