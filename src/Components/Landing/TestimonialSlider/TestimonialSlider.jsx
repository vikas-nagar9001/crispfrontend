// TestimonialSlider.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderComponent from './SliderComponent';
import { fetchTestimonials } from '../../../redux/api/testimonialsApi';

const TestimonialSlider = () => {
  const dispatch = useDispatch();
  const testimonials = useSelector(state => state.testimonials.testimonials);

  useEffect(() => {
    dispatch(fetchTestimonials());
  }, [dispatch]);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className='bg-blue-300'>
      <div className="flex flex-col py-12 mt-16 w-full  max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="mx-4 mt-6 text-6xl font-bold text-center text-white max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
          Our Testimonial
        </div>
        <Carousel showThumbs={false} infinite={true} responsive={responsive}>
          {testimonials.map((testimonial, index) => (
            <SliderComponent key={index} testimonial={testimonial} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default TestimonialSlider;
