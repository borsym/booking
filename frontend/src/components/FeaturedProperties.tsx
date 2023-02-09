import useFetch from '../hooks/useFetch';
import styles from '../styles';
import { URL } from '../utils/static';
import { Data } from '../utils/typeDefinitions';
import { rating } from '../utils/utils';

type Props = {};

export default function FeaturedProperties({}: Props) {
  const { data, loading, error, reFetch } = useFetch(
    `${URL}/hotels?featured=true&limit=5`
  );

  if (loading) return <>Loading...</>;
  return (
    <div className={`w-full max-w-screen-lg ${styles.flexBetween} gap-5`}>
      {data.map((item: Data, i: number) => (
        <div className="flex flex-col flex-1 gap-3" key={i}>
          <img
            src={
              item?.photos[0] ||
              'https://plus.unsplash.com/premium_photo-1663126312373-b2d5264c2edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1183&q=80'
            }
            alt=""
            className="w-full"
          />
          <span className="font-bold">{item?.name}</span>
          <span className="font-light">{item?.city}</span>
          <span className="font-medium">${item?.cheapestPrice}</span>
          <div className="">
            <button className="bg-blue-900 text-white p-1 mr-2 font-bold">
              {item?.rating ?? 'No rating'}
            </button>
            <span className="text-sm">{rating(item?.rating)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
