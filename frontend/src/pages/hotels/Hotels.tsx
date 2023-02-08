import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

import SearchItem from '../../components/SearchItem';
import useFetch from '../../hooks/useFetch';

import { MAX_PRICE, MIN_PRICE, URL } from '../../utils/static';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
type Props = {};

export default function Hotels({}: Props) {
  const location = useLocation();
  const [destination, setDestination] = useState<any>(
    location.state.destination
  );
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [range, setRange] = useState<{
    min: null | string;
    max: null | string;
  }>({ min: null, max: null });

  const { data, loading, error, reFetch } = useFetch(
    `${URL}/hotels?city=${destination}&min=${range.min || MIN_PRICE}&max=${
      range.max || MAX_PRICE
    }`
  );

  console.log('dataaa', data);

  const handleClick = () => {
    reFetch();
  };

  const renderData = () => {
    if (data.length === 0)
      return <h1 className="text-2xl text-center">No result found</h1>;
    return data.map((item) => <SearchItem item={item} key={item._id} />);
  };

  return (
    <div>
      <Navbar />
      <Header type="hotels" />
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-screen-lg flex gap-5">
          <div className="bg-yellow-600 p-2 sticky border-8 top-3 h-max">
            <h1 className="text-xl mb-2">Search</h1>
            <div className="flex flex-col mb-2 gap-2">
              <label>Destination</label>
              <input
                placeholder={destination}
                type="text"
                onChange={(e) =>
                  setDestination(e.target.value.toLocaleLowerCase())
                }
              />
            </div>
            <div className="flex flex-col mb-2 gap-2">
              <label className="text-xs">Check-in Date</label>
              <span
                className="p-1 bg-white flex items-center cursor-pointer h-12"
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
            <div className="flex flex-col mb-2 gap-3">
              <label>Options</label>
              <div className="p-2">
                <div className="flex justify-between mb-2 text-xs">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="w-12"
                    name="min"
                    onChange={(e) =>
                      setRange({ ...range, [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <div className="flex justify-between mb-2 text-xs">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="w-12"
                    name="max"
                    onChange={(e) =>
                      setRange({ ...range, [e.target.name]: e.target.value })
                    }
                  />
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
            <button
              className="p-2 bg-blue-700 text-white w-full font-medium cursor-pointer"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
          <div className="flex-[3_3_0%]">
            {loading ? 'loading' : renderData()}
          </div>
        </div>
      </div>
    </div>
  );
}
