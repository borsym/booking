import { Link } from 'react-router-dom';


type Props = {
  item: {
    photos: string[];
    name: string;
    desc: string;
    rating: number;
    cheapestPrice: number;
    _id: string;
  };
};

export default function SearchItem(item: Props) {
  return (
    <div className="p-2 rounded flex justify-between mb-5 border-8 border-solid gap-5">
      <img
        src={
          item.item?.photos[0] ??
          'https://plus.unsplash.com/premium_photo-1663126312373-b2d5264c2edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1183&q=80'
        }
        alt=""
        className="w-48 h-48 object-cover"
      />
      <div className="flex flex-col gap-2 ">
        <h1 className="text-xl text-blue-700">{item.item.name}</h1>
        <span className="text-xs">500m from center</span>
        <span className="text-xs bg-green-900 text-white p-1 rounded w-max">
          Free airport taxi
        </span>
        <span className="text-xs font-bold">{item.item?.desc}</span>
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
      <div className={`flex justify-between flex-col flex-1`}>
        <div className={`flex justify-between`}>
          <span className="font-medium">Excellent</span>
          <button className="bg-blue-900 text-white p-1 font-bold border-none">
            {item.item?.rating}
          </button>
        </div>
        <div className="siDetailTexts">
          <span className="text-2xl">${item?.item?.cheapestPrice}</span>
          <span className="text-xs text-gray-600">Includes taxes and fees</span>
          <Link to={`/hotel/${item.item._id}`}>
            <button className="bg-blue-700 text-white font-bold cursor-pointer rounded py-3 px-2 border-none">
              See availability
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
