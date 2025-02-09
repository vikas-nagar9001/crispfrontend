import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import { setSelectedTopicById } from '../../../redux/api/topicsApi';
import '../../../../public/assets/styles/Topicscard.css';

const TopicCard = ({ topic }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useHistory hook

  const handleTopicCardClick = async (objectId, heading) => {
    dispatch(setSelectedTopicById(objectId, heading));
    navigate("/problem"); // Redirect to problem page
  };

  const cardStyle = {
    '--hover-color': topic.hovercolour,
  };

  const cardtext = {
    '--text-color': topic.textcolour,
  };

  return (
    <>
      <div
        style={{ cardtext, cardStyle, backgroundImage: `url('${topic.imageurl}')` }}
        className="card relative sm:w-[413px] w-[334px] sm:h-[237px] h-[215px] bg-cover bg-white shadow-lg rounded-2xl overflow-hidden hover:cursor-pointer"
        onClick={() => handleTopicCardClick(topic._id, topic.heading)}
      >
        <div style={cardStyle} className="cover absolute bottom-0 h-[82px] bg-[#E7F1FF] left-0 w-full"></div>
        <div style={cardtext} className="text-xl frame-text absolute bottom-0 left-1/2 w-full h-[60px] flex justify-center font-semibold">
          {topic.heading}
        </div>
      </div>
    </>
  );
};

export default TopicCard;
