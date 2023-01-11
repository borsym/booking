import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

type Props = {};

export default function Hotels({}: Props) {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="hotels" />
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-screen-lg flex gap-[20px]">
          <div className="bg-yellow-600 p-2 sticky border-8 top-[10px] h-max">
            <h1 className="text-xl mb-2">Search</h1>
            <div className="flex flex-col mb-2 gap-[5px]">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="flex flex-col mb-2 gap-[5px]">
              <label className="text-xs">Check-in Date</label>
              <span
                className="h-8 p-1 bg-white flex items-center cursor-pointer"
                onClick={() => setOpenDate(!openDate)}
              >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                date[0].endDate,
                'MM/dd/yyyy'
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="flex flex-col mb-2 gap-[5px]">
              <label>Options</label>
              <div className="p-2">
                <div className="flex justify-between mb-2 text-xs">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="w-12" />
                </div>
                <div className="flex justify-between mb-2 text-xs">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="w-12" />
                </div>
                <div className="flex justify-between mb-2 text-xs">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="w-12"
                    placeholder={options.adult}
                  />
                </div>
                <div className="flex justify-between mb-2 text-xs">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="w-12"
                    placeholder={options.children}
                  />
                </div>
                <div className="flex justify-between mb-2 text-xs">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="w-12"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button className="p-2 bg-blue-700 text-white w-full font-medium cursor-pointer">
              Search
            </button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}
