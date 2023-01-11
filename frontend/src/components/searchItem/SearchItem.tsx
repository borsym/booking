import React from 'react';
import './searchItem.css';
type Props = {};

export default function SearchItem({}: Props) {
  return (
    <div className="p-2 rounded flex justify-between mb-5 border-8 border-solid gap-[20px]">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="w-48 h-48 object-cover"
      />
      <div className="flex flex-col gap-[10px] .siDesc">
        <h1 className="text-xl text-blue-700">Tower Street Apartments</h1>
        <span className="text-xs">500m from center</span>
        <span className="text-xs bg-green-900 text-white p-1 rounded w-max">
          Free airport taxi
        </span>
        <span className="text-xs font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="text-xs">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="text-xs text-green-900 font-bold">
          Free cancellation{' '}
        </span>
        <span className="text-xs text-green-900">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex justify-between">
          <span className="font-medium">Excellent</span>
          <button className="bg-blue-900 text-white p-1 font-bold border-none">
            8.9
          </button>
        </div>
        <div className="siDetailTexts">
          <span className="text-2xl">$112</span>
          <span className="text-xs text-gray-600">Includes taxes and fees</span>
          <button className="bg-blue-700 text-white font-bold cursor-pointer rounded py-[10px] px-[5px] border-none">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
}
