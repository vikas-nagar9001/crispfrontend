import React, { useState } from 'react';
// import {useSelector } from 'react-redux';

const Optionsbox = ({ handleFilter }) => {
    const [status, setStatus] = useState('');
    const [skills, setSkills] = useState([]);
    const [difficulty, setDifficulty] = useState([]);

    const handleStatusChange = (e) => {
        setStatus(e.target.checked ? e.target.value : '');
        handleFilter({ status: e.target.checked ? e.target.value : '', skills, difficulty });
    };

    const handleSkillsChange = (e) => {
        const selectskills = [...skills];
        if (e.target.checked) {
            selectskills.push(e.target.value);
        } else {
           const index = selectskills.indexOf(e.target.value);
           if(index !== -1){
               selectskills.splice(index, 1);
           }
        }
        setSkills(selectskills);
        handleFilter({ status, difficulty, skills: selectskills });
    };

    const handleDifficultyChange = (e) => {
        const selectedDifficulty = [...difficulty];
        if (e.target.checked) {
            selectedDifficulty.push(e.target.value);
        } else {
            const index = selectedDifficulty.indexOf(e.target.value);
            if (index !== -1) {
                selectedDifficulty.splice(index, 1);
            }
        }
        setDifficulty(selectedDifficulty);
        handleFilter({ status, difficulty: selectedDifficulty , skills });
    };

    return (
        <>
            <div style={{ boxShadow: ' 0px 2px 4px 0px rgba(0, 0, 0, 0.20)' }} className="bg-white p-4  rounded-xl w-80 py-6 px-6 h-full">
                <div className='border-b-[1.8px] border-[#CECECE]'>
                    <h2 className="text-lg font-semibold ">STATUS</h2>
                    <div className="py-2 px-1 pt-4 flex items-center space-x-2">
                        <input type="checkbox" id="solved" value="solved" checked={status === 'solved'} onChange={handleStatusChange}
                            className="rounded-full border-1 text-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none size-[18px]"
                        />
                        <label htmlFor='solved' className="text-black font-medium">Solved</label>
                    </div>
                    <div className="py-2 px-1 pt-4 flex items-center space-x-2">
                        <input type="checkbox" id="unsolved" value="unsolved" checked={status === 'unsolved'} onChange={handleStatusChange}
                            className="rounded-full border-1 text-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none size-[18px]"
                        />
                        <label htmlFor='unsolved' className="text-black font-medium">Unsolved</label>
                    </div>
                </div>
                <div className='border-b-[1.8px] border-[#CECECE]'>
                    <h2 className="text-lg font-semibold py-4 ">SKILLS</h2>
                    <div className="py-2 px-1 pt-2 flex items-center space-x-2">
                        <input type="checkbox" id="intermediate" value="Intermediate" checked={skills.includes('Intermediate')} onChange={handleSkillsChange}
                            className="rounded-full border-1 text-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none size-[18px]"
                        />
                        <label htmlFor='intermediate' className="text-black font-medium">Problem Solving (Intermediate)</label>
                    </div>
                    <div className="py-2 px-1 pt-4 flex items-center space-x-2">
                        <input type="checkbox" id="advanced" value="Advanced" checked={skills.includes('Advanced')} onChange={handleSkillsChange}
                            className="rounded-full border-1 text-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none size-[18px]"
                        />
                        <label htmlFor='advanced' className="text-black font-medium">Problem Solving (Advanced)</label>
                    </div>
                    <div className="py-2 px-1 pt-4 flex items-center space-x-2">
                        <input type="checkbox" id="basic" value="Basic" checked={skills.includes('Basic')} onChange={handleSkillsChange}
                            className="rounded-full border-1 text-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none size-[18px]"
                        />
                        <label htmlFor='basic' className="text-black font-medium">Problem Solving (Basic)</label>
                    </div>
                </div>
                <div className='border-b-[1.8px] border-[#CECECE]'>
                    <h2 className="text-lg font-semibold  py-4 ">DIFFICULTY</h2>
                    <div className="py-2 px-1 pt-2 flex items-center space-x-2">
                        <input type="checkbox" id="easy" value="Easy" checked={difficulty.includes('Easy')} onChange={handleDifficultyChange}
                            className="rounded-full border-1 text-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none size-[18px]"
                        />
                        <label htmlFor='easy' className="text-black font-medium">Easy</label>
                    </div>
                    <div className="py-2 px-1 pt-2 flex items-center space-x-2">
                        <input type="checkbox" id="medium" value="Medium" checked={difficulty.includes('Medium')} onChange={handleDifficultyChange}
                            className="rounded-full border-1 text-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none size-[18px]"
                        />
                        <label htmlFor='medium' className="text-black font-medium">Medium</label>
                    </div>
                    <div className="py-2 px-1 pt-2 flex items-center space-x-2">
                        <input type="checkbox" id="hard" value="Hard" checked={difficulty.includes('Hard')} onChange={handleDifficultyChange}
                            className="rounded-full border-1 text-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none size-[18px]"
                        />
                        <label htmlFor='hard' className="text-black font-medium">Hard</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Optionsbox;
