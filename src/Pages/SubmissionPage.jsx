 import Submission from '../Components/Submission/Submission.jsx';
 import { useSelector } from 'react-redux';

const SubmissionPage = () => {
  const question = useSelector(state => state.questions.selectedQuestion);
  const userId = useSelector(state => state.auth.user?._id);
  const questionId = question?._id;
  return (
    <>
     <Submission userId={userId} questionId={questionId} />
    </>
  )
}

export default SubmissionPage;