import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import dropdownArrow from '/assets/images/preperation/dropdownArrow.svg';
import bgleftdesign from '/assets/images/preperation/bgleftdesign.svg';
import rightlines from '/assets/images/preperation/rightlines.svg';
import WeekCard from './WeekCard';
import { fetchPreparations } from '../../../redux/api/preparationsApi';

export const PreperationSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const preparations = useSelector(state => state.preparations.data);
  const user = useSelector(state => state.auth.user);
  const userId = user?._id;

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  useEffect(() => {
    dispatch(fetchPreparations());
  }, [dispatch]);

  useEffect(() => {
    // Dispatch the action with userId
    dispatch(fetchPreparations(userId));
  }, [dispatch, userId]);

  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener('click', handleOutsideClick);

  //   return () => {
  //     document.removeEventListener('click', handleOutsideClick);
  //   };
  // }, []);


  return (
    <>
      {/* Preperation section start */}
      <section>
        <div className="relative flex flex-col pt-20 bg-slate-50">
          <div className="flex flex-col md:flex-row gap-5 justify-between items-start self-center pr-5 mt-10 w-full max-w-[1225px]">
            <img
              loading="lazy"
              src={bgleftdesign}
              className="self-end mt-32 aspect-[1.03] w-[71px] max-md:mt-10 hidden md:block"
              alt="Background Left Design"
            />

            <div className="relative flex flex-col flex-1 items-center self-start max-w-full">
              <div className="text-5xl font-semibold text-center whitespace-nowrap text-green-950 max-md:text-3xl">
                Welcome&nbsp; {user ? user.displayName : 'Guest'}!
              </div>

              <div className="relative self-stretch mt-4 text-2xl text-black max-w-full">
                <p className="text-center md:text-left sm:text-2xl text-lg ml-4 ">
                  We are here to help you get your dream job. Let’s get started with your interview preparation.
                </p>
              </div>
              <img
                style={{ inset: '-15px 0px 50px 840px ' }}
                loading="lazy"
                src={rightlines}
                className="absolute aspect-[1.03] w-[9xl] hidden md:block "
                alt="Right Lines"
              />

              {/*dropdown */}
              {/* <div className="relative" ref={dropdownRef}> */}
              <div className="flex gap-5 justify-between px-8 py-3 mt-7 sm:text-2xl text-blue-700 rounded-2xl border border-blue-700 border-solid max-md:px-5 cursor-pointer"
                
              >
                <div className="flex-auto">
                  Prepare for your interview
                  <br />
                </div>
                {/* <img loading="lazy" src={dropdownArrow} alt="dropdown arrow"
                    className={`my-auto w-6 aspect-square transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                  /> */}
              </div>
              {/* {isOpen && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-lg mt-1">
                    <ul className="py-3 px-10 transition-shadow-blue cursor-pointer">
                      <li className="hover:bg-blue-200">Morning</li>
                      <hr />
                      <li className="hover:bg-blue-200">Evening</li>
                      <hr />
                      <li className="hover:bg-blue-200">Afternoon</li>
                    </ul>
                  </div>
                )} */}
              {/* </div> */}
              {/*dropdown*/}
            </div>
            <div className="my-auto bg-lime-500 bg-opacity-20 h-[10px] w-[-10px]" />
          </div>
          <WeekCard />
        </div>
      </section>
      {/* Preperation section end */}
    </>
  );
};

export default PreperationSection;