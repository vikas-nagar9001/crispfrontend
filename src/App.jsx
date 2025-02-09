import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';
import LandingPage from './Pages/LandingPage.jsx';
import PreprationPage from './Pages/PreprationPage.jsx';
import ProblemSolvingPage from './Pages/ProblemSolvingPage.jsx';
import SubmissionPage from './Pages/SubmissionPage.jsx';
import QuestionSolvingPage from './Pages/QustionSolvingPage.jsx';
import LeaderboardPage from './Pages/LeaderboardPage.jsx';
import SignupPage from './Components/Signup/Signup.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import FavoritePage from './Pages/FavoritePage.jsx';
import { sendRequest } from '../src/Auth/axiosUtil.js';
import AdminRoute from './Components/Admin/AdminRoutes.jsx';
import Dashboard from './Components/AdminDashboard/Dashboard.jsx';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to check if the user is authenticated
  const checkAuth = async () => {
    try {
      const response = await sendRequest('get', '/api/user');
      return response.data;
    } catch (error) {
      throw new Error('User not authenticated');
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<HeaderFooterLayout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

const HeaderFooterLayout = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();

  const showHeader = location.pathname !== '/signup' && location.pathname !== '/dashboard';

  return (
    <>
      {showHeader && (
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      )}
      <Routes>
        <Route path="/" element={<><LandingPage /><Footer /></>} />
        <Route path="/preperation" element={<PreprationPage />} />
        <Route path="/problem" element={<ProblemSolvingPage />} />
        <Route path="/questionSolving" element={<QuestionSolvingPage />} />
        <Route path="/submission" element={<SubmissionPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;