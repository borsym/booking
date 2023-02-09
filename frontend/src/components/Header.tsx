import { useState } from 'react';
import HotelIcon from '@mui/icons-material/Hotel';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';
import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';

import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { newSearch } from '../app/searchSlice';

import styles from '../styles';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { convertDateIntoISO } from '../utils/utils';
import {
  PersonNumberProps,
  SearchOptionsProps,
  Option,
} from '../utils/typeDefinitions';

type Props = {
  type?: string;
};

const menuPoints = [
  { icon: <TimeToLeaveOutlinedIcon />, name: 'Car rental' },
  { icon: <AirplanemodeActiveOutlinedIcon />, name: 'Flights' },
  { icon: <LocalTaxiOutlinedIcon />, name: 'Taxi' },
];

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
          {menuPoints.map((point) => (
            <Icon>
              {point.icon}
              <span>{point.name}</span>
            </Icon>
          ))}
        </div>
        {type !== 'hotels' && (
          <>
            <h1 className="headerTitle">A liftime of discounts</h1>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, architecto
            </p>
            {user ? null : (
              <button
                className={`bg-[#0071c2] text-white font-medium border-none p-2 cursor-pointer ${styles.reversedButtonHover}`}
              >
                'Sign in / Register'
              </button>
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

function Icon({ children }: React.PropsWithChildren<{}>) {
  return <div className={`${styles.flexCenter} gap-3`}>{children}</div>;
}

function SearchOptions({
  setDestination,
  setOpenDate,
  openDate,
  date,
  setDate,
  setOpenOption,
  openOptions,
  options,
  handleOption,
  handleSearch,
}: SearchOptionsProps) {
  return (
    <div
      className={`bg-white h-12 border-2 border-solid border-yellow-600 ${styles.flexAround} py-3 rounded-md absolute w-full max-w-5xl -bottom-6`}
    >
      <div className={`${styles.flexCenter} gap-3 `}>
        <HotelIcon color="action" />
        <input
          type="text"
          placeholder="Where to?"
          className="border-none outline-none text-[#252525] text-sm font-medium p-3 border-b-1 border-b-solid"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div
        className={`${styles.flexCenter} gap-3 border-l-2 border-r-2 border-solid border-yellow-600 px-2 py-3`}
      >
        <CalendarMonthOutlinedIcon color="action" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="text-[#252525] cursor-pointer"
        >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
          date[0].endDate,
          'MM/dd/yyyy'
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="absolute top-12 z-20"
          />
        )}
      </div>
      <div className={`${styles.flexCenter} gap-3`}>
        <EmojiPeopleOutlinedIcon color="action" />
        <span
          onClick={() => setOpenOption(!openOptions)}
          className="text-[#252525] cursor-pointer"
        >{`${options.adult} adult, ${options.children} children, ${options.room} room`}</span>
        {openOptions && (
          <div className="absolute top-12 bg-gray-400 text-gray-200 border-4 z-20">
            <PersonNumber
              handleOption={handleOption}
              type={options.adult}
              name="Adult"
            />
            <PersonNumber
              handleOption={handleOption}
              type={options.children}
              name="Children"
            />
            <PersonNumber
              handleOption={handleOption}
              type={options.room}
              name="Room"
            />
          </div>
        )}
      </div>
      <div className={`${styles.flexCenter} gap-3`}>
        <button
          className="bg-[#0071c2] text-white font-medium border-none px-4 py-2 cursor-pointer ${styles.reversedButtonHover}"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

function PersonNumber({ name, type, handleOption }: PersonNumberProps) {
  return (
    <div className={`${styles.flexBetween} flex w-48 m-3`}>
      <div className="optionText">
        <span>{name}</span>
        <div className={`${styles.flexCenter} gap-3 text-sm`}>
          <button
            disabled={type === 0}
            className={`disabled:text-[#252525] disabled:cursor-not-allowed ${styles.personSelector}`}
            onClick={() => handleOption(`${name.toLowerCase()}`, 'd')}
          >
            -
          </button>
          <span className="optionCounterNumber">{type}</span>
          <button
            className={`${styles.personSelector}`}
            onClick={() => handleOption(`${name.toLowerCase()}`, 'i')}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
