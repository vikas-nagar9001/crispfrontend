import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../../../../public/assets/styles/solveme.css';
import solveme from '/assets/images/leaderboard/solveme.svg';
import { useSelector } from 'react-redux';

const Solveme = () => {
  const topicTitle = useSelector(state => state.questions.selectedQuestion?.topic_title);
  const questionTitle = useSelector(state => state.questions.selectedQuestion?.title);

  return (
    <>
      <section className="relative mb-20 pb-10 pl-20  ">
        <div className="flex mw-1440">
          <div className="ml-auto mt-[-93px]  sm:block hidden relative vector-section four">
            <img className='svbg'
              src={solveme}
              alt="not found"
            />
          </div>
          <div className="title-left absolute sm:w-auto w-64 sm:text-5xl text-3xl ">
            <p className="title font-semibold">{questionTitle}</p>
            <div className="sub-menu mt-4">
              <p>
                {topicTitle} <span className="active"> Warmup</span>
              </p>
            </div>
          </div>
          <nav style={{ transform: 'translateX(-53%)', boxShadow: ' 0px 2px 4px 0px rgba(0, 0, 0, 0.14)' }} className="font-medium w-80  justify-center sm:justify-start sm:pl-4 flex  gap-0  mt-7 sm:mt-24 md:mt-7  bg-white   text-container absolute top-52 sm:top-1/2 left-1/2 transform -translate-y-1/2 sm:w-10/12 rounded-t-2xl">
            <NavLink
              to='/questionSolving'
              className={({ isActive }) => (isActive ? 'sm:w-40 w-1/3 flex justify-center items-center text-base sm:px-7 px-2 sm:text-xl py-5 bg-blue-100 text-blue-600 border-b-4 border-blue-600' : 'sm:w-40 w-1/3 flex justify-center items-center text-base sm:px-7 px-2 border-transparent sm:text-xl py-5 bg-white text-gray-700 hover:bg-blue-500 hover:bg-opacity-15 hover:text-blue-500 hover:border-blue-600 border-b-4 ')}
            >
              Problem
            </NavLink>
            <NavLink
              to='/submission'
              className={({ isActive }) => (isActive ? 'sm:w-40 w-1/3 flex justify-center items-center text-base sm:px-7 px-2 sm:text-xl py-5 bg-blue-100 text-blue-600 border-b-4 border-blue-600' : 'sm:w-40 w-1/3 flex justify-center items-center text-base sm:px-7 px-2 border-transparent sm:text-xl py-5 bg-white text-gray-700 hover:bg-blue-500 hover:bg-opacity-15 hover:text-blue-500 hover:border-blue-600 border-b-4 ')}
            >
              Submission
            </NavLink>
            <NavLink
              to='/leaderboard'
              className={({ isActive }) => (isActive ? 'sm:w-40 w-1/3 flex justify-center items-center text-base sm:px-7 px-2 sm:text-xl py-5 bg-blue-100 text-blue-600 border-b-4 border-blue-600' : 'sm:w-40 w-1/3 flex justify-center items-center text-base sm:px-7 px-2 border-transparent sm:text-xl py-5 bg-white text-gray-700 hover:bg-blue-500 hover:bg-opacity-15 hover:text-blue-500 hover:border-blue-600 border-b-4 ')}
            >
              Leaderboard
            </NavLink>
          </nav>
          <Outlet />
        </div>
      </section>
    </>
  )
}

export default Solveme;
