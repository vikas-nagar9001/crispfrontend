import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchQuestionCards } from '../redux/api/questionscardApi';
import { setSelectedTopic, clearSelectedTopic } from '../redux/Slices/topicsSlice';
import { fetchQuestionCardsStart, fetchQuestionCardsSuccess, fetchQuestionCardsFailure } from '../redux/Slices/questionCardsSlice';
import QuestionCard from "../Components/ProblemSolving/ChallangeSection/QuestionCard";
import HeadSection from '../Components/ProblemSolving/HeadSection/HeadSection';
import Optionsbox from '../Components/ProblemSolving/OptionsboxSection/Optionsbox';

const ProblemSolvingPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const selectedTopicId = useSelector(state => state.topics.selectedTopicId);
    const selectedTopicHeading = useSelector(state => state.topics.selectedTopicHeading);
    const questions = useSelector(state => state.questionCards.cards);
    const [selectedOptions, setSelectedOptions] = useState({});
    const user = useSelector(state => state.auth.user);
    const userId = user?._id;



    useEffect(() => {
        const storedTopicId = localStorage.getItem('selectedTopicId');
        const storedTopicHeading = localStorage.getItem('selectedTopicHeading');

        if (storedTopicId && storedTopicHeading) {
            dispatch(setSelectedTopic({ topicId: storedTopicId, topicHeading: storedTopicHeading }));
        } else {
            dispatch(clearSelectedTopic());
            navigate('/');
        }
    }, [dispatch, navigate]);

    useEffect(() => {
        const fetchQuestions = async () => {
            if (selectedTopicId && selectedTopicHeading) {
                dispatch(fetchQuestionCardsStart());
                try {
                    const response = await fetchQuestionCards(selectedTopicId, userId, selectedOptions);
                    dispatch(fetchQuestionCardsSuccess(response));
                } catch (error) {
                    console.error('Error fetching questions:', error);
                    dispatch(fetchQuestionCardsFailure(error.message));
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchQuestions();
    }, [dispatch, selectedTopicId, selectedTopicHeading, selectedOptions]);

    

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const handleOptionsChange = async (options) => {
        setSelectedOptions(options);
        try {
            // Fetch questions with selected options and update state
            const response = await fetchQuestionCards(selectedTopicId, options);
            dispatch(fetchQuestionCardsSuccess(response));
        } catch (error) {
            console.error('Error fetching questions:', error);
            dispatch(fetchQuestionCardsFailure(error.message));
        }
    };

    return (
        <div className="flex flex-row">
            <div className="mt-20 flex flex-col w-full max-md:px-10 max-md:max-w-full">
                <HeadSection heading={selectedTopicHeading} />
                <div className='absolute top-64 sm:left-2  lg:left-10  left-10 flex sm:flex-row sm:flex-nowrap gap-4 flex-wrap'>
                    <div>
                    <Optionsbox handleFilter={handleOptionsChange} />
                    </div>
                    <div className='mr-10 md:mr-6'>
                        {questions.length > 0 ? (
                            questions.map(question => (
                                <QuestionCard key={question._id} question={question} />
                            ))
                        ) : (
                            <p>No questions found</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemSolvingPage;
