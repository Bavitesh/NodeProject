// src/components/Navbar.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { logout } from '../auth/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center shadow sticky top-0 z-50">
      <div className="text-xl font-semibold">Invoice Manager</div>
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline text-sm">{user?.email}</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded text-sm font-medium"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
