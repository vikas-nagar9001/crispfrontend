// Submission.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Added useSelector
import Solveme from '../Common/SolveMeFirst/Solveme';
import Nosubmission from './Nosubmission';
import { fetchUser } from '../../redux/Slices/authSlice';
import { fetchAnswerLogs } from '../../redux/Slices/answerlogsSlice';

export const Submission = ({ userId, questionId }) => {
    const [isLoading, setIsLoading] = useState(true); // Added loading state
    const answerLogs = useSelector(state => state.answerlogs.answerLogs); // Access answerLogs from Redux store
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser()); // Fetch user data
        dispatch(fetchAnswerLogs({ userId, questionId })) // Fetch answer logs
            .then(() => setIsLoading(false)) // Set loading to false when data is fetched
            .catch(error => console.error('Error fetching answer logs:'));
    }, [dispatch, userId, questionId]);

    if (isLoading) {
        return <div>Loading...</div>; // Display loading message while fetching data
    }

    return (
        <>
            {/* Welcome {user ? user.displayName : 'Guest'}! */}
            <div className="flex flex-col font-semibold">
                {/* solve me first */}
                <Solveme />
                {/* solve me first */}
                <div style={{ inset: '330px 0px 0px 0px' }} className='absolute'>
                    <div className='mt-6 sm:ml-20'>
                        {/* Conditional rendering based on answerLogs */}
                        {answerLogs.length > 0 ? (
                            <div style={{ fontFamily: "Poppins", boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.14)" }} className="sm:w-[88.5%] w-[84%] sm:ml-0 ml-[21px] relative overflow-x-auto">
                                <table className="w-full sm:text-sm md:text-xl text-xs text-left rtl:text-right text-gray-500 ">
                                    <thead className=" text-xm text-gray-500 bg-white border-b ">
                                        <tr className='shadow-xl' >
                                            <th style={{ fontWeight: "normal" }} scope="col" className="px-6 py-4 text-black">
                                                RESULT
                                            </th>
                                            <th style={{ fontWeight: "normal" }} scope="col" className="px-6 py-4">
                                                SCORE
                                            </th>
                                            <th style={{ fontWeight: "normal" }} scope="col" className="px-6 py-4">
                                                LANGUAGE
                                            </th>
                                            <th style={{ fontWeight: "normal" }} scope="col" className="px-6 py-4">
                                                TIME
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {answerLogs.map((log, index) => (
                                            <tr key={index} className="shadow-xl bg-white border-b  text-black ">
                                                <th scope="row" className={`px-6 py-4 ${log.result === 'Right' ? 'text-blue-500' : 'text-red-500'} font-normal whitespace-nowrap `}>
                                                    {log.result} Answer
                                                </th>
                                                <td className="px-6 py-4 font-normal">{log.maxscore}</td>
                                                <td className="px-6 py-4 font-normal">{log.language}</td>
                                                <td className="px-6 py-4 font-normal">{calculateHumanReadableTime(log.createdAt)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <Nosubmission />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}


function calculateHumanReadableTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMs = now - date;

    const thresholds = [
        { limit: 1000, message: 'just now' },
        { limit: 60000, message: () => 'a few seconds ago' },
        { limit: 60000 * 60, message: () => `${Math.round(diffInMs / 60000)} minutes ago` },
        { limit: 60000 * 60 * 24, message: () => `${Math.round(diffInMs / (60000 * 60))} hours ago` },
        { limit: 60000 * 60 * 24 * 7, message: () => `${Math.round(diffInMs / (60000 * 60 * 24))} days ago` },
        { limit: 60000 * 60 * 24 * 30, message: () => `${Math.round(diffInMs / (60000 * 60 * 24 * 7))} weeks ago` },
        { limit: 60000 * 60 * 24 * 365, message: () => `${Math.round(diffInMs / (60000 * 60 * 24 * 30))} months ago` },
        { limit: Infinity, message: () => `${Math.round(diffInMs / (60000 * 60 * 24 * 365))} years ago` },
    ];

    for (const threshold of thresholds) {
        if (diffInMs < threshold.limit) {
            return threshold.message();
        }
    }
}




export default Submission;
