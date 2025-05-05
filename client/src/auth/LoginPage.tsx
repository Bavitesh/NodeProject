// src/auth/LoginPage.tsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setCredentials } from './authSlice';
import { AppDispatch } from '../store/store';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3000/auth/login', { email, password });
      dispatch(setCredentials({ token: res.data.access_token, email }));
      navigate('/invoices');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-blue-200">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-xl">
        <h2 className="mb-6 text-3xl font-extrabold text-center text-blue-800">Welcome Back</h2>
        <input
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
        <button
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
