import React from 'react'

const Sportlight = () => {
  return (
    <>
      {/* Spotlight eclip section start  */}
      <section className="flex justify-center text-center  relative">
        <div className=" font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black-800">
          It’s not a pipeline problem.
          <br className="hidden sm:inline" /> It’s a
          <div
            className=" ml-[7px] sm:text-5xl inline-block bg-black text-white px-3 py-1 rounded-full md:px-4 md:py-2 lg:px-5 lg:py-2 xl:px-6 xl:py-5 "
            style={{ borderRadius: "56% 36% 49% 28%", lineHeight: "1.8rem" }}
          >
            spotlight problem
          </div>
        </div>
      </section>
      {/* Spotlight eclip section end  */}
    </>

  );
}

export default Sportlight;