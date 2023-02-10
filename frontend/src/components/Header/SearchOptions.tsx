import styles from '../../styles';
import { SearchOptionsProps } from '../../utils/typeDefinitions';
import PersonNumber from './PersonNumber';
import HotelIcon from '@mui/icons-material/Hotel';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { DateRange } from 'react-date-range';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import { format } from 'date-fns';

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
        className={`${styles.flexCenter} gap-3 border-l-2 border-r-2 border-solid border-yellow-600 px-2`}
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

export default SearchOptions;
