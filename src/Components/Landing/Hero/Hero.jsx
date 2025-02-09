const Hero = () => {
  return (
    <>

      {/* hero section start  */}
      <section className="hero-section">
        <div className="container mx-auto sm:pl-16 flex flex-col-reverse lg:flex-row items-center justify-center pb-8 ">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-16 lg:pl-0 px-4 lg:mb-0 mb-8 md:mt-[12rem]">
            {" "}
            {/* Added lg:pl-0 pl-4 and lg:mb-0 mb-8 */}
            <h1
              className="subpixel-antialiased sm:mx-0 mx-6 sm:text-start text-center herotxt max-w-2xl sm:mb-4 mb-6 sm:text-3xl lg:text-4xl text-3xl sm:font-extrabold font-semibold tracking-tight leading-none md:text-8xl xl:text-5xl dark:text-white"
              style={{ color: "#052A11" }}
            >
              Skills speak louder than words
            </h1>
            <p
              className="sm:text-start text-center max-w-xl mb-6 font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
              style={{ color: "7F7F7F" }}
            >
              We help companies develop the strongest tech teams around. We help
              candidates sharpen their tech skills and pursue job opportunities.
            </p>
            <div className="flex flex-wrap sm:flex-row  flex-col-reverse gap-2">
              <button
                href="#"
                className="sm:mr-5 inline-flex  items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-2 border-blue-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-blue-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 "
              >
                Request Demo
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  />
                </svg>
              </button>
              <button
                href="#"
                className=" default inline-flex items-center justify-center px-5 py-3 sm:mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Sign up
              </button>
            </div>
          </div>
          {/* Right Content */}
          <div className="lg:w-1/2">
            <img
              src="../../../../public/assets/images/Hero/heroAll.svg"
              alt="Hero Image"
              className=" lg:mx-0 max-w-full h-auto lg:h-auto"
            />
          </div>
        </div>
      </section>
      {/* hero section end */}

    </>

  )
}

export default Hero;