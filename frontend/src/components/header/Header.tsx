import React, { useState } from 'react';
import './header.css';
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
type Props = {
  type: string;
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
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState<Option>({
    adult: 1,
    children: 1,
    room: 1,
  });

  const [openOptions, setOpenOption] = useState(false);

  const handleOption = (name: string, operation: string) => {
    console.log(name, operation);
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
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <HotelIcon />
            <span>Stay</span>
          </div>
          <div className="headerListItem">
            <TimeToLeaveOutlinedIcon />
            <span>Car rental</span>
          </div>
          <div className="headerListItem">
            <AirplanemodeActiveOutlinedIcon />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <LocalTaxiOutlinedIcon />
            <span>Taxi</span>
          </div>
        </div>
        {type !== 'hotels' && (
          <>
            <h1 className="headerTitle">A liftime of discounts</h1>
            <p className="headerDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, architecto
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <HotelIcon />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <CalendarMonthOutlinedIcon />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
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
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <EmojiPeopleOutlinedIcon />
                <span
                  onClick={() => setOpenOption(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult, ${options.children} children, ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionsItem">
                      <div className="optionText">
                        <span>Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult === 0}
                            className="optionCounterButton"
                            onClick={() => handleOption('adult', 'd')}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption('adult', 'i')}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <div className="optionText">
                        <span>Children</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.children === 0}
                            className="optionCounterButton"
                            onClick={() => handleOption('children', 'd')}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption('children', 'i')}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <div className="optionText">
                        <span>Room</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room === 0}
                            className="optionCounterButton"
                            onClick={() => handleOption('room', 'd')}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
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
              <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
