import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import QuestionCard from '../Components/ProblemSolving/ChallangeSection/QuestionCard';
import '../../public/assets/styles/solveme.css';
import solveme from '/assets/images/leaderboard/solveme.svg';
import { sendRequest } from '../Auth/axiosUtil'; // Update the path


const FavoritePage = () => {
  const [favoriteQuestions, setFavoriteQuestions] = useState([]);
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate(); // Initialize useHistory hook

  useEffect(() => {
    const fetchFavoriteQuestions = async () => {
      if (user && user._id) {
        try {
          // Replace the hardcoded URL with sendRequest function
          const response = await sendRequest('GET', `fav/favoriteQuestions/${user._id}`);
          setFavoriteQuestions(response.favoriteQuestions);
        } catch (error) {
          console.error('Error fetching favorite questions:', error);
        }
      }
    };

    fetchFavoriteQuestions();
  }, [user]);

  const handleQuestionCardClick = (questionId) => {
    // Handle clicking on a favorite question card, e.g., navigate to a different page
    console.log('Clicked on favorite question:', questionId);
  };
  
  useEffect(() => {
    // Check if user is not authenticated, then navigate to the landing page
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <>
      <div className="flex flex-row">
        <div className="mt-20 flex flex-col w-full max-md:px-10 max-md:max-w-full">
          <section className="sm:ml-20 ml-12">
            <div className="flex mw-1440">
              <div style={{ marginLeft: 'auto', marginTop: '-93px' }} className=" sm:block hidden relative vector-section four">
                <img src={solveme} alt="not found" />
              </div>
              <div className="title-left-head absolute sm:w-auto w-64 sm:text-5xl text-3xl ">
                <p className="title-head font-semibold ">Bookmarks</p>
                <div className="sub-menu-head mt-4">
                  <p className='text-[#015AE7]'>
                    Favorite Questions
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className='absolute top-64 sm:left-2  lg:left-10  left-10 flex sm:flex-row sm:flex-nowrap gap-4 flex-wrap'>
            <section className="relative mb-20 pb-10">
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mt-8">
                {favoriteQuestions.map(question => (
                  <QuestionCard key={question._id} question={question} handleClick={() => handleQuestionCardClick(question._id)} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default FavoritePage;
