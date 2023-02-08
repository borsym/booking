import { useState } from 'react';
import HotelIcon from '@mui/icons-material/Hotel';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';
import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { newSearch, resetSearch } from '../app/searchSlice';
import styles from '../styles';
type Props = {
  type?: string;
};

type Option = {
  adult: number;
  children: number;
  room: number;
};

export default function Header({ type }: Props) {
  const [date, setDate] = useState<any>([
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

  const handleOption = (name: string, operation: string) => {
    setOptions((prev: Option) => {
      return {
        ...prev,
        [name]:
          operation === 'i'
            ? (options as any)[name] + 1
            : (options as any)[name] - 1,
      };
    });
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    const datesWithISOString = date.map((date: any) => ({
      ...date,
      startDate: date.startDate.toISOString(),
      endDate: date.endDate.toISOString(),
    }));

    dispatch(newSearch({ destination, date: datesWithISOString, options }));

    navigate('/hotels', { state: { destination, date, options } });
  };

  return (
    <div className="bg-[#003580] text-white flex justify-center relative">
      <div className="w-full max-w-5xl mt-5 mb-24">
        <div className="flex gap-10 mb-12">
          <div className={`${styles.flexCenter} gap-3 active`}>
            <HotelIcon />
            <span>Stay</span>
          </div>
          <div className={`${styles.flexCenter} gap-3`}>
            <TimeToLeaveOutlinedIcon />
            <span>Car rental</span>
          </div>
          <div className={`${styles.flexCenter} gap-3`}>
            <AirplanemodeActiveOutlinedIcon />
            <span>Flights</span>
          </div>
          <div className={`${styles.flexCenter} gap-3`}>
            <LocalTaxiOutlinedIcon />
            <span>Taxi</span>
          </div>
        </div>
        {type !== 'hotels' && (
          <>
            <h1 className="headerTitle">A liftime of discounts</h1>
            <p className="my-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, architecto
            </p>
            <button className="bg-[#0071c2] text-white font-medium border-none p-2 cursor-pointer">
              Sign in / Register
            </button>
            <div
              className={`bg-white h-12 border-3 border-solid  ${styles.flexAround} py-3 rounded-md absolute w-full max-w-5xl -bottom-6`}
            >
              <div className={`${styles.flexCenter} gap-3`}>
                <HotelIcon color="action" />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="border-none outline-none text-[#252525] text-sm font-medium p-3 border-b-1 border-b-solid"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className={`${styles.flexCenter} gap-3`}>
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
                    onChange={(item: any) => setDate([item.selection])}
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
                    <div className={`${styles.flexBetween} flex w-48 m-3`}>
                      <div className="optionText">
                        <span>Adult</span>
                        <div className={`${styles.flexCenter} gap-3 text-sm`}>
                          <button
                            disabled={options.adult === 0}
                            className={`disabled:text-[#252525] disabled:cursor-not-allowed ${styles.personSelector}`}
                            onClick={() => handleOption('adult', 'd')}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className={`${styles.personSelector}`}
                            onClick={() => handleOption('adult', 'i')}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.flexBetween} w-48  m-3`}>
                      <div className="optionText">
                        <span>Children</span>
                        <div className={`${styles.flexCenter} gap-3 text-sm`}>
                          <button
                            disabled={options.children === 0}
                            className={`disabled:text-[#252525] disabled:cursor-not-allowed ${styles.personSelector}`}
                            onClick={() => handleOption('children', 'd')}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className={`${styles.personSelector}`}
                            onClick={() => handleOption('children', 'i')}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.flexBetween} flex w-48 m-3`}>
                      <div className="optionText">
                        <span>Room</span>
                        <div className={`${styles.flexCenter} gap-3 text-sm`}>
                          <button
                            disabled={options.room === 0}
                            className={`disabled:text-[#252525] disabled:cursor-not-allowed ${styles.personSelector}`}
                            onClick={() => handleOption('room', 'd')}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className={`${styles.personSelector}`}
                            onClick={() => handleOption('room', 'i')}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={`${styles.flexCenter} gap-3`}>
                <button
                  className="bg-[#0071c2] text-white font-medium border-none px-4 py-2 cursor-pointer"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
