import frame from '/assets/images/testimonial/frame.svg';


const SliderComponent = ({ testimonial }) => {
  return (
    <>
      {/* testimonial card */}
      <div className='p-4'>
        <div className="max-w-screen-lg mx-auto">
          <div className="relative">
            <img
              loading="lazy"
              src={frame}
              className="w-full"
              alt="frame" />
            <div className="absolute top-0 inset-x-0 flex items-center justify-center text-white h-full">
              <div className="text-center px-10 lg:px-12 py-2 lg:text-xl  sm:text-lg text-xs">
                {/* Your text container below the image */}
                <p className="sm:mb-6 ">
                {testimonial.description}
                </p>
                <div className=" gap-6 flex justify-center  whitespace-nowrap mt-2 sm:mt-10">
                  <img
                    loading="lazy"
                    src={testimonial.imageurl}
                    className="rounded-full  sm:w-[90px] w-[56px] sm:h-[90px] h-[56px]"
                    alt="agent"
                  />
                  <div className=" my-auto lg:text-xl  sm:text-lg text-xs">
                    <p className="">{testimonial.name}</p>
                    <p className="">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial card */}

    </>
  );
}

export default SliderComponent;