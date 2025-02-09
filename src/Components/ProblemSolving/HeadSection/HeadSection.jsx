import React from 'react'
import '../../../../public/assets/styles/HeadingSection.css';
import solveme from '/assets/images/leaderboard/solveme.svg';

const HeadSection = ({ heading }) => {
    return (
        <>
            {/* Headsection */}
            <section className="sm:ml-20 ml-12 ">
                <div className="flex mw-1440">

                    <div style={{ marginLeft: 'auto', marginTop: '-93px' }} className=" sm:block hidden relative vector-section four">
                        <img
                            src={solveme}
                            alt="not found"
                        />
                    </div>


                    <div className="title-left-head absolute sm:w-auto w-64 sm:text-5xl text-3xl ">

                        <p className="title-head font-semibold ">Problem Solving</p>
                        <div className="sub-menu-head mt-4">
                            <p className='text-[#015AE7]'>
                             {heading} 
                            </p>
                        </div>


                    </div>

                </div>

            </section>
            {/*Headsection*/}
        </>
    )
}

export default HeadSection