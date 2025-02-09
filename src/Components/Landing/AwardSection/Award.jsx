import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CircleComponent from './CircleComponent';
import leftlines from '/assets/images/awards/leftlines.svg';
import { fetchAwards } from '../../../redux/api/awardsApi';

const AwardSection = () => {
  const dispatch = useDispatch();
  const awards = useSelector(state => state.awards.awards);

  useEffect(() => {
    dispatch(fetchAwards());
  }, [dispatch]);


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      {/* award section start */}
      <section className='mt-10'>

        <img
          loading="lazy"
          src={leftlines}
          className="md:block hidden absolute self-end ml-8 w-[8xl] "
        />

        {/* Main content container */}
        <div className="container mx-auto  relative z-0">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-semibold text-center mt-28 mb-10">
            Award
          </h1>
          {/* Paragraph */}
          <p className="px-8 text-base sm:text-lg lg:text-xl text-center font-regular max-w-6xl mx-auto mb-8">
            Within&nbsp; the accolades segment lies a repository of distinction, a testament to remarkable
            feats, be it in academia, professional realms, or societal \endeavors. It serves as a gallery of honor,
            adorned with symbols of excellence like scholarships, accolades, and certifications, painting a portrait
            of expertise and accomplishment. This gallery not only elevates one's credibility but also serves as a
            beacon of inspiration, fueling the pursuit of excellence and fostering a culture of continuous achievement.
          </p>
          {/* Carousel */}

          <div className="gap-14 flex-row flex-wrap-reverse justify-center">
            <Carousel
              showThumbs={false}
              infinite={true}
              responsive={responsive}
            >
              {awards.map((award, index) => (
                <CircleComponent key={index} award={award} />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      {/* award section end*/}
    </>

  )
}

export default AwardSection;