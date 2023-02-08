import useFetch from '../hooks/useFetch';
import styles from '../styles';
import { URL } from '../utils/static';

type Props = {};

export default function Featured({}: Props) {
  const { data, loading, error, reFetch } = useFetch(
    `${URL}/hotels/count/countByCity?cities=madrid,city` // ?cities=berlin
  );

  return (
    <div className={`${styles.flexBetween} w-full max-w-screen-lg gap-5`}>
      {loading ? (
        'loading'
      ) : (
        <>
          {/* Make Card component */}
          <div
            className={`relative text-white overflow-hidden h-64 border-8 gradient z-10`}
          >
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/619896.jpg?k=9364e91ae738a47a4a37b0a7fb26d01e5e95db810f7167e9e5ecf58e5ca74e9b&o="
              alt="Budapest"
              className="w-full object-cover"
            />
            <div className={`absolute bottom-5 left-5 z-30 text-xl`}>
              <h1>Budapest</h1>
              <h2>{data[0]}</h2>
            </div>
          </div>

          <div
            className={`relative text-white overflow-hidden h-64 border-8  gradient z-10`}
          >
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/613105.jpg?k=1e85cf4dec7b0d5a6327be91c38cf9c1711f9da1a31c4cba736f9cb751443ff1&o="
              alt="Italy"
              className={`w-full object-cover -z-10 block`}
            />
            <div className={`absolute bottom-5 left-5 z-30 text-xl`}>
              <h1>Italy</h1>
              <h2>{data[1]}</h2>
            </div>
          </div>

          <div
            className={`relative text-white overflow-hidden h-64 border-8 gradient z-10`}
          >
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/653109.jpg?k=39834303d6af8adc39cc8218ea8efc5291a013bd3228d53a50cb836833f4777f&o="
              alt="Poland"
              className={`w-full object-cover -z-10 block`}
            />
            <div className={`absolute bottom-5 left-5 z-30 text-xl`}>
              <h1>Poland</h1>
              <h2>{data[2]}</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
