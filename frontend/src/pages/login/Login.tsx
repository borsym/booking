import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../app/authSlice';
import { URL } from '../../utils/static';
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error } = useSelector<any>((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(`${URL}/auth/login`, credentials);
      dispatch(loginSuccess(res.data.details));
      navigate('/');
    } catch (err: any) {
      dispatch(loginFailure(err.response.data));
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="h-8 p-2 border-2"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="h-8 p-2 border-2"
        />
        <button
          disabled={loading}
          onClick={handleClick}
          className="bg-blue-700 text-white font-bold cursor-pointer rounded border-0 px-5 py-3 disabled:cursor-not-allowed"
        >
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
