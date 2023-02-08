import { useSelector } from 'react-redux';

type Props = {};

export default function Navbar({}: Props) {
  const { user, loading, error } = useSelector<any>((state) => state.auth);

  console.log('user', user);
  return (
    <div className="h-[50px] bg-[#003580] flex justify-center">
      <div className="w-full max-w-[1024px] text-white flex items-center justify-between">
        <span className="font-medium">Booking</span>
        <div className="navItems">
          <button className="ml-[20px] border-none px-[10px] py-[5px] text-[#003580}">
            Register
          </button>
          <button className="ml-[20px] border-none px-[10px] py-[5px] text-[#003580}">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
