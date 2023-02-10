import { useState } from 'react';
import HotelIcon from '@mui/icons-material/Hotel';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';
import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';
import SearchOptions from './SearchOptions';
import Icon from './Icon';

import styles from '../../styles';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { newSearch } from '../../app/searchSlice';
import { convertDateIntoISO } from '../../utils/utils';
import { Option } from '../../utils/typeDefinitions';

type Props = {
  type?: string;
};

const menuPoints = [
  { icon: <TimeToLeaveOutlinedIcon />, name: 'Car rental' },
  { icon: <AirplanemodeActiveOutlinedIcon />, name: 'Flights' },
  { icon: <LocalTaxiOutlinedIcon />, name: 'Taxi' },
];

const renderMenuPoints = menuPoints.map((point, i) => (
  <Icon key={i}>
    {point.icon}
    <span>{point.name}</span>
  </Icon>
));

export default function Header({ type }: Props) {
  const [date, setDate] = useState<{}>([
    { startDate: new Date(), endDate: new Date(), key: 'selection' },
  ]);
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState<Option>({
    adult: 1,
    children: 1,
    room: 1,
  });
  const [openOptions, setOpenOption] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector<any>((state) => state.auth);
  const navigate = useNavigate();

  const handleOption = (name: string, operation: string) => {
    setOptions((prev: Option) => {
      return {
        ...prev,
        [name]:
          operation === 'i'
            ? (options as keyof typeof Option)[name] + 1
            : (options as keyof typeof Option)[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    const datesWithISOString = convertDateIntoISO(date);
    dispatch(newSearch({ destination, date: datesWithISOString, options }));
    navigate('/hotels', { state: { destination, date, options } });
  };

  return (
    <div className="bg-[#003580] text-white flex justify-center relative">
      <div className="w-full max-w-5xl mt-5 mb-24">
        <div className="flex gap-10 mb-12">
          <div
            className={`${styles.flexCenter} gap-3 border-2 rounded-2xl px-2 py-1`}
          >
            <HotelIcon />
            <span>Stay</span>
          </div>
          {renderMenuPoints}
        </div>
        {type !== 'hotels' && (
          <>
            <h1 className="headerTitle">A liftime of discounts</h1>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, architecto
            </p>
            {user ? null : (
              <Link to="/login">
                <button
                  className={`bg-[#0071c2] text-white font-medium border-none p-2 cursor-pointer ${styles.reversedButtonHover}`}
                >
                  Sign in / Register
                </button>
              </Link>
            )}
            <SearchOptions
              setDestination={setDestination}
              setOpenDate={setOpenDate}
              openDate={openDate}
              date={date}
              setDate={setDate}
              setOpenOption={setOpenOption}
              openOptions={openOptions}
              options={options}
              handleOption={handleOption}
              handleSearch={handleSearch}
            />
          </>
        )}
      </div>
    </div>
  );
}
