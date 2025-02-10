import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser, logoutUser } from '../../../redux/Slices/authSlice';
import { FaRegUser } from "react-icons/fa";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileRef]);

  return (
    <>
      <header>
        <nav className="fixed w-[100%] z-10 shadow-4xl border-b-2 bg-white border-gray-200 px-4 lg:px-6 py-2.5  h-20">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <NavLink to="/" className="flex items-center">
              <img
                src="/assets/images/Header/logo.svg"
                className="mr-3 sm:h-9 h-[2rem]"
                alt="CodeCrisp Logo"
              />
            </NavLink>

            <div className="flex items-center lg:order-2">
              <NavLink
                to="#"
                className="sm:block hidden text-gray-800 hover:bg-gray-50 hover:text-blue-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
              >
                For developers
              </NavLink>

              {user ? (
                <div className="relative sm:block hidden">
                  <button onClick={toggleProfile} className="focus:outline-none">
                    <img
                      // Use the user.profilePic if available; otherwise, fall back to defaultProfilePic.
                      src={user.profilePic || <FaRegUser />}
                      alt="Profile"
                      onError={(e) => {
                        // In case the image fails to load, use the default profile picture.
                        e.target.onerror = null;
                        e.target.src = defaultProfilePic;
                      }}
                      className="w-12 h-12 rounded-full border-2 border-blue-500"
                    />
                  </button>
                  {isProfileOpen && (
                    <div
                      ref={profileRef}
                      className="absolute right-0 mt-2 w-[230px] bg-white shadow-inner-2xl rounded-lg shadow-lg overflow-hidden z-50 transform transition-transform duration-200 ease-out translate-y-2"
                    >
                      <div className="flex flex-col items-center justify-center p-6">
                        <img
                          src={user.profilePic || defaultProfilePic}
                          alt="Profile"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = defaultProfilePic;
                          }}
                          className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4"
                        />
                        <h2 className="text-lg font-medium text-gray-700">{user.displayName}</h2>

                        <NavLink 
                          to="favorite" 
                          className="block w-full text-center px-4 py-2 text-sm text-white default hover:bg-blue-600 transition-colors rounded mt-2"
                        >
                          Favorites
                        </NavLink>

                        {user && user.isAdmin && (
                          <Link 
                            to="/dashboard" 
                            className="block w-full text-center px-4 py-2 text-sm text-white default hover:bg-blue-600 transition-colors rounded mt-2"
                          >
                            Dashboard
                          </Link>
                        )}

                        <div className="mt-4 px-6 py-4 bg-gray-50 space-y-1">
                          <button
                            onClick={handleLogout}
                            className="w-full text-center px-4 py-2 text-sm text-white default hover:bg-blue-600 transition-colors rounded"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to='/signup'>
                  <button
                    className="sm:block hidden rounded-lg text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none default"
                  >
                    Sign up
                  </button>
                </Link>
              )}

              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 ml-1 text-lg text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`w-8 h-8 ${isMenuOpen ? 'hidden' : 'block'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className={`w-8 h-8 ${isMenuOpen ? 'block' : 'hidden'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${isMenuOpen ? 'block' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="bg-white flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 text-lg lg:mt-0 ">
                <li className="ml-4 ">
                  <NavLink
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-blue-600 py-2'
                        : 'block py-2  text-gray-700 border-b border-gray-100 hover:text-blue-600 hover:bg-gray-50 hover:border-blue-200 lg:hover:bg-transparent lg:border-0 lg:p-0'
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="ml-4">
                  <NavLink
                    to="/preperation"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-blue-600 py-2'
                        : 'block py-2  text-gray-700 border-b border-gray-100 hover:text-blue-600 hover:bg-gray-50 hover:border-blue-200 lg:hover:bg-transparent lg:border-0 lg:p-0'
                    }
                  >
                    Preparation
                  </NavLink>
                </li>
                <li className="ml-4">
                  <NavLink
                    to="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-blue-600 py-2'
                        : 'block py-2  text-gray-700 border-b border-gray-100 hover:text-blue-600 hover:bg-gray-50 hover:border-blue-200 lg:hover:bg-transparent lg:border-0 lg:p-0'
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="ml-4">
                  <NavLink
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-blue-600 py-2'
                        : 'block py-2  text-gray-700 border-b border-gray-100 hover:text-blue-600 hover:bg-gray-50 hover:border-blue-200 lg:hover:bg-transparent lg:border-0 lg:p-0'
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <button
                  href="#"
                  style={{ borderBottom: '1px solid #b7c9cc' }}
                  className="md:hidden sm:mr-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 hover:text-blue-600 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
                >
                  Log in
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <button
                  href="#"
                  style={{ borderBottom: '1px solid #b7c9cc' }}
                  className="md:hidden sm:mr-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 hover:text-blue-600 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                >
                  Request Demo
                </button>

                <button className="md:hidden w-full rounded-sm text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none default">
                  Sign up
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
