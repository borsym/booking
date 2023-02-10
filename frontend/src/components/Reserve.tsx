import useFetch from '../hooks/useFetch';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDatesInRange, isAvailable } from '../utils/utils';
import { URL } from '../utils/static';
type Props = {
  setOpen: (arg: boolean) => void;
  hotelId: string;
};

const Reserve = ({ setOpen, hotelId }: Props) => {
  const [selectedRooms, setSelectedRooms] = useState<any>([]);
  const { data, loading, error } = useFetch(`${URL}/hotels/room/${hotelId}`);
  const { date } = useSelector<any>((state) => state.search);
  const alldates = getDatesInRange(date[0].startDate, date[0].endDate);
  const navigate = useNavigate();

  const handleSelect = (e: any) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId: any) => {
          const res = axios.put(`${URL}/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center gradient">
      <div className="bg-white p-5 relative z-10">
        <CloseIcon
          className="absolute top-0 right-0 cursor-pointer"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className="flex items-center p-5 gap-12" key={item._id}>
            <div className="rItemInfo">
              <div className="font-medium">{item.title}</div>
              <div className="font-light">{item.desc}</div>
              <div className="text-xs">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="font-medium">{item.price}</div>
            </div>
            <div className="flex flex-wrap text-gray-600 gap-2">
              {item.roomNumbers.map((roomNumber, i) => (
                <div className="flex flex-col" key={i}>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber, alldates)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={handleClick}
          className="bg-blue-700 text-white font-bold cursor-pointer rounded w-full mt-5 border-0 py-3 px-6"
        >
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
