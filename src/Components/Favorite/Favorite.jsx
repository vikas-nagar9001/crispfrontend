import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import QuestionCard from '../ProblemSolving/ChallangeSection/QuestionCard'; // Adjust the import path based on your project structure

const Favorite = () => {
  const [favoriteQuestions, setFavoriteQuestions] = useState([]);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if (user && user._id) {
      const fetchFavoriteQuestions = async () => {
        try {
          const response = await axios.get(`http://localhost:9000/fav/favoriteQuestions/${user._id}`);
          setFavoriteQuestions(response.data.favoriteQuestions);
        } catch (error) {
          console.error('Error fetching favorite questions:', error);
        }
      };

      fetchFavoriteQuestions();
    }
  }, [user]);

  const handleQuestionCardClick = (questionId) => {
    // Handle clicking on a favorite question card, e.g., navigate to a different page
    console.log('Clicked on favorite question:', questionId);
  };

  return (
    <>
      <section className="relative mb-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mt-8">
          {favoriteQuestions.map(question => (
            <QuestionCard key={question._id} question={question} handleClick={() => handleQuestionCardClick(question._id)} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Favorite;
