import { useSelector } from 'react-redux';
import styles from '../styles';
import { Link } from 'react-router-dom';

type Props = {};

export default function Navbar({}: Props) {
  // const { user } = useSelector<any>((state) => state.auth);

  return (
    <div className={`h-[50px] bg-[#003580] flex justify-center`}>
      <div className={`w-full max-w-[1024px] text-white ${styles.flexBetween}`}>
        <Link to="/">
          <span className="font-medium">Booking</span>
        </Link>
        {/* {user ? (
          user
        ) : ( */}
        <div className="">
          <button
            className={`ml-5 px-3 py-1 ${styles.button} ${styles.buttonHover}`}
          >
            Register
          </button>
          <button
            className={`ml-5 px-3 py-1 ${styles.button} ${styles.buttonHover}`}
          >
            Login
          </button>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}
