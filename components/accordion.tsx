const Accordion = () => {
  return(
    <>
      <div className="w-[80%] mx-auto p-4 mb-10 border border-blue-200 bg-blue-50 rounded-md" role="alert">
  <div className="flex">
    <div className="flex-shrink-0">
      <svg className="w-4 h-4 mt-1 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
      </svg>
    </div>
    <div className="ml-4">
      <h3 className="font-semibold text-gray-800">
        YouTube would like you to send notifications
      </h3>
      <div className="mt-2 text-sm text-gray-600">
        Notifications may include alerts, sounds and icon badges. These can be configured in Settings.
      </div>
      <div className="mt-4">
        <div className="flex space-x-3">
          <button type="button" className="inline-flex items-center justify-center text-sm font-medium text-blue-600 border border-transparent gap-2 rounded-md hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
            Don't allow
          </button>
          <button type="button" className="inline-flex items-center justify-center text-sm font-medium text-blue-600 border border-transparent gap-2 rounded-md hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
            Allow
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
export default Accordion
