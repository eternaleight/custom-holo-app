const Bar = () => {
  return(
    <>
        <div className="w-[80%] mx-auto mb-10 p-4 bg-white border shadow-lg rounded-md dark:bg-gray-800 dark:border-gray-700" role="alert">
  <div className="flex">
    <div className="flex-shrink-0">
      <svg className="h-4 w-4 text-blue-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
      </svg>
    </div>
    <div className="ml-4">
      <h3 className="font-semibold text-gray-800 dark:text-white">
        New version published
      </h3>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
        Chris Lynch published a new version of this page. Refresh to see the changes.
      </p>
    </div>
  </div>
</div>
    </>
  )
}
export default Bar
