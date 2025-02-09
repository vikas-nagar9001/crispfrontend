import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopics } from '../../../redux/api/topicsApi.js';
import TopicCard from './TopicCards.jsx';

const TopicSection = () => {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.topics.topics);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchTopics());
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <section className="mt-12">
      <div className="flex flex-col pb-12 bg-slate-50">
        <div className="self-center mb-12 text-[40px] font-semibold text-black whitespace-nowrap max-md:mt-10">
          Or select a Topic
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {topics.map(topic => (
            <TopicCard key={topic._id} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicSection;
