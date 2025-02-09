// leaderboard.jsx

import React, { useState, useEffect } from 'react';
import '../../../public/assets/styles/table.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLeaderboardData } from '../../redux/Slices/leaderboardSlice';
import Solveme from '../../Components/Common/SolveMeFirst/Solveme.jsx';

const Leaderboard = () => {
  const dispatch = useDispatch();
  const { leaderboard, loading, error } = useSelector((state) => state.leaderboard);

  useEffect(() => {
    dispatch(fetchLeaderboardData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>

      {/*solvemefirst component */}
      <Solveme />
      {/*solvemefirst component */}

      {/*table */}
      <section className=''>
        <div style={{ inset: '355px 0px 0px 40px ' }} className="sm:w-10/12  leaderboard-container absolute ">
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">Name</div>
              <div className="col col-2">Rank</div>
              <div className="col col-4">Score</div>
            </li>
            {leaderboard.map((user, index) => (
              <li key={index} className="table-row">
                <div className="col col-1" data-label="Name">
                  {user.name}
                </div>
                <div className="col col-2" data-label="Rank">
                  {user.rank}
                </div>
                <div className="col col-4" data-label="Score">
                  {user.score}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/*table */}


    </>

  ); 
};

export default Leaderboard;
