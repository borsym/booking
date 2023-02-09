import useFetch from '../hooks/useFetch';

import { IMAGES, URL } from '../utils/static';

import styles from '../styles';

type Props = {};

export default function PropertyList({}: Props) {
  const { data, loading, error, reFetch } = useFetch(
    `${URL}/hotels/count/countByType` // ?types=apartment
  );

  if (loading) return <>loading</>;

  return (
    <div className={`w-full max-w-screen-lg ${styles.flexAround} gap-5`}>
      {data &&
        IMAGES.map((img, i) => (
          <div
            className="overflow-hidden cursor-pointer flex-1 border-8"
            key={i}
          >
            <img src={img} alt="" className="w-full h-40 object-cover" />
            <div className="">
              <h1 className="text-lg">{data[i]?.type}</h1>
              <h2 className="text-sm font-light">
                {data[i]?.count} {data[i]?.type}
              </h2>
            </div>
          </div>
        ))}
    </div>
  );
}
