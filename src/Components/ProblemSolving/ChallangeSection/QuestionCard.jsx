import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestion } from '../../../redux/api/questionsApi';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../../redux/Slices/authSlice';

import star from '/assets/images/problemsolving/star.svg';
import starFilled from '/assets/images/problemsolving/starfill.svg';
import design from '/assets/images/problemsolving/design.svg';

const QuestionCard = ({ question }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);


    useEffect(() => {
        // Reset isFavorite when user state changes (i.e., when user logs out)
        setIsFavorite(false);
    }, [user]);

    const handleQuestionCardClick = async () => {
        if (question) {
            const questionId = question._id;
            dispatch(fetchQuestion(questionId));
            navigate('/questionSolving');
        }
    };

    const checkIfFavorite = async () => {
      console.log("csca");
    };

    const toggleFavorite = async () => {
        try {
            if (!user) {
                // Redirect to signup page if user is not authenticated
                navigate('/signup');
                return;
            }
            if (question) {
                const userId = user._id;
                const questionId = question._id;
                if (isFavorite) {
                    await axios.delete(`${VITE_BASE_URL}/fav/removeFavorite?userId=${userId}&questionId=${questionId}`);
                } else {
                    await axios.post(`${VITE_BASE_URL}/fav/addFavorite`, { userId, questionId });
                }
                setIsFavorite(prevIsFavorite => !prevIsFavorite);
            }
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    };

    useEffect(() => {
        checkIfFavorite();
    }, [user, question]);
// console.log(user._id)

    return (


        <>
            <div className=" bg-white shadow-md rounded-2xl pt-4 pl-6 sm:pr-0 pr-6 sm:pl-8 mx-auto min-w-72 max-w-screen lg:w-auto flex mb-2 sm:h-80 md:h-72 xl:h-56 h-64">
                <div className='max-w-[70vw] md-min-w-[20vw] lg:min-w-[10vw] xl:min-w-[50vw]'>
                    <h3 className=" text-2xl font-semibold text-green-950 mt-2">{question.title}</h3>
                    <p className="mt-5 max-md:max-w-full sm:text-lg text-base text-gray-600 ">{question.difficulty} Problem Solving ({question.skills}) {" "} Max Score:{question.maxscore} Success Rate: {question.successrate}</p>
                    <p className="max-md:max-w-full sm:text-lg text-base text-gray-600 ">{question.card_description}</p>
                    <div className="flex gap-4 pt-6 items-center">

                        <button className="text-white px-4 sm:py-4.5 py-2 bg-blue-600 rounded-2xl text-base sm:text-xl" onClick={handleQuestionCardClick}>
                            Solve Challenge
                        </button>
                        {/* Render star based on favorite state */}
                        {user && (
                            <img src={isFavorite ? starFilled : star} onClick={toggleFavorite} style={{ cursor: 'pointer' }} alt="Favorite" />
                        )}

                    </div>
                </div>
                <div className="md:block hidden w-44 mt-16">
                    <img loading="lazy" src={design} alt="Design" />
                </div>
            </div>
        </>
    );
}

export default QuestionCard;