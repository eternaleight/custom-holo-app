const Footer = () => {
  return (
    <>
      <div className="w-screen bg-gray-900">
        <footer className="bg-gray-900">
          <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
            {/* <!-- Grid --> */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <div className="col-span-full lg:col-span-1">
                <a
                  className="flex-none text-xl font-semibold text-white"
                  href="#"
                  aria-label="Brand"
                >
                  Brand
                </a>
              </div>
              {/* <!-- End Col --> */}

              <div className="col-span-1">
                <h4 className="font-semibold text-gray-100">Product</h4>

                <div className="mt-3 grid space-y-3">
                  <p>
                    <a className="inline-flex text-gray-400 gap-x-2 hover:text-gray-200" href="#">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a className="inline-flex text-gray-400 gap-x-2 hover:text-gray-200" href="#">
                      Changelog
                    </a>
                  </p>
                  <p>
                    <a className="inline-flex text-gray-400 gap-x-2 hover:text-gray-200" href="#">
                      Docs
                    </a>
                  </p>
                </div>
              </div>
              {/* <!-- End Col --> */}

              <div className="col-span-1">
                <h4 className="font-semibold text-gray-100">Company</h4>

                <div className="mt-3 grid space-y-3">
                  <p>
                    <a className="inline-flex text-gray-400 gap-x-2 hover:text-gray-200" href="#">
                      About us
                    </a>
                  </p>
                  <p>
                    <a className="inline-flex text-gray-400 gap-x-2 hover:text-gray-200" href="#">
                      Blog
                    </a>
                  </p>
                  <p>
                    <a className="inline-flex text-gray-400 gap-x-2 hover:text-gray-200" href="#">
                      Careers
                    </a>{" "}
                    <span className="inline px-2 py-1 ml-1 text-xs text-white bg-blue-700 rounded-md">
                      We're hiring
                    </span>
                  </p>
                  <p>
                    <a className="inline-flex text-gray-400 gap-x-2 hover:text-gray-200" href="#">
                      Customers
                    </a>
                  </p>
                </div>
              </div>
              {/* <!-- End Col --> */}

              <div className="col-span-2">
                <h4 className="font-semibold text-gray-100">Stay up to date</h4>

                <form>
                  <div className="flex flex-col items-center p-2 mt-4 bg-white gap-2 sm:flex-row sm:gap-3 rounded-md">
                    <div className="w-full">
                      <label htmlFor="hero-input" className="sr-only">
                        Search
                      </label>
                      <input
                        type="text"
                        id="hero-input"
                        name="hero-input"
                        className="block w-full px-4 py-3 border-transparent shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    <a
                      className="inline-flex items-center justify-center w-full px-4 py-3 font-medium text-center text-white bg-blue-600 border border-transparent sm:w-auto whitespace-nowrap gap-x-3 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition"
                      href="#"
                    >
                      Subscribe
                    </a>
                  </div>
                  <p className="mt-3 text-sm text-gray-400">holoApp.</p>
                </form>
              </div>
              {/* <!-- End Col --> */}
            </div>
            {/* <!-- End Grid --> */}

            <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">© 2022 holoApp. All rights reserved.</p>
              </div>
              {/* <!-- End Col --> */}

              {/* <!-- Social Brands --> */}
              <div>
                <a
                  className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
                  href="https://github.com/eternaleight/holo-app"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
              {/* <!-- End Social Brands --> */}
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
