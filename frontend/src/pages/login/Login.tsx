import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../app/authSlice';
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
      const res = await axios.post('/auth/login', credentials);
      dispatch(loginSuccess(res.data.details));
      navigate('/');
    } catch (err: any) {
      dispatch(loginFailure(err.response.data));
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
