import bgparticles from '/assets/images/Featured/bg-particles.svg';
import featureSection from '/assets/images/Featured/feature-setion.svg';

const FeaturedSection = () => {
  return (

    <>
      {/* feature section start */}
      <section className="relative ">
        {/* Full-screen background image */}
        <img
          src={bgparticles}
          className="absolute inset-0 w-full h-full object-cover p-10"
          alt="Full Screen Background"
        />
        {/* Main content container */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between p-10 relative">
          {/* Left Side: Text Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="pb-3 sm:text-2xl text-xl text-blue-600 font-medium">
              Coding practice
            </div>
            <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900 lg:text-left">
              Explore and expand your skills.
            </h1>
            <p className="mb-8 leading-relaxed">
              Every idea has a first line of code. Prep for jobs and sharpen your
              skills alongside a global community of developers. Access the content
              you need to develop new skills and land the job you’ve dreamed of.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="ml-4 inline-flex text-gray-800 bg-gray-100 border-2 border-blue-600 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg lg:ml-0 lg:mr-4">
                Sign up and Practice
              </button>
            </div>
          </div>
          {/* Right Side: Images */}
          <div className="lg:w-1/2 flex justify-center items-center relative">
            <img
              className="sm:h-auto sm:w-auto h-full w-full object-cover object-center rounded-full"
              alt="hero"
              src={featureSection}
            />
          </div>
        </div>
      </section>
      {/* feature section end*/}
    </>

  )
}

export default FeaturedSection;