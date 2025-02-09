import React from 'react'
// import Solveme from '../Common/SolveMeFirst/Solveme';
import bgimg from '/assets/images/submission/bgimg.svg'

const Nosubmission = () => {
    return (
        <>
            <div className=" sm:ml-0 ml-[35px] text-2xl text-center text-blue-400 sm:max-md:mt-10">
                No Submissions
            </div>

            <div className='flex justify-center '>
                <img
                    loading="lazy"
                    src={bgimg}
                    className="sm:ml-0 ml-[15px] mt-9 max-w-full sm:aspect-[1.22] aspect-[2.22] sm:w-[319px]  w-[328px]"
                />
            </div>
        </>
    )
}

export default Nosubmission;



















