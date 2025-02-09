import { useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const AdminRoute = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!(user && user.isAdmin)) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  // Render an Outlet for nested routes
  return user && user.isAdmin ? <Outlet /> : null;
};

export default AdminRoute;
