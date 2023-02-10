import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import styles from '../styles';
import { loginFailure, logout } from '../app/authSlice';

type Props = {};

export default function Navbar({}: Props) {
  const { user } = useSelector<any>((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(logout());
      navigate('/');
    } catch (err: any) {
      dispatch(loginFailure(err.response.data));
    }
  };

  return (
    <div className={`h-12 bg-[#003580] flex justify-center`}>
      <div className={`w-full max-w-5xl text-white ${styles.flexBetween}`}>
        <Link to="/">
          <span className="font-medium">Booking</span>
        </Link>
        {user ? (
          <div className="flex items-center justify-center gap-4">
            <Link to="/">
              <span className="font-medium">{user.username}</span>
              <button
                className={`ml-5 px-3 py-1 ${styles.button} ${styles.buttonHover}`}
                onClick={handleClick}
              >
                Logout
              </button>
            </Link>
          </div>
        ) : (
          // Todo register page
          <div className="">
            <Link to="/login">
              <button
                className={`ml-5 px-3 py-1 ${styles.button} ${styles.buttonHover}`}
              >
                Register
              </button>
            </Link>
            <Link to="/login">
              <button
                className={`ml-5 px-3 py-1 ${styles.button} ${styles.buttonHover}`}
              >
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
