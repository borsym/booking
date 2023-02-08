import useFetch from '../hooks/useFetch';
import styles from '../styles';
import { URL } from '../utils/static';

type Props = {};

export default function PropertyList({}: Props) {
  const { data, loading, error, reFetch } = useFetch(
    `${URL}/hotels/count/countByType` // ?types=apartment
  );

  const images = [
    'https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',
    'https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',
    'https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',
    'https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',
    'https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',
  ];

  return (
    <div className={`w-full max-w-screen-lg ${styles.flexAround} gap-5`}>
      {loading ? (
        'loading'
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div
                className="overflow-hidden cursor-pointer flex-1 border-8"
                key={i}
              >
                <img src={img} alt="" className="w-full h-40 object-cover" />
                <div className="pListTitles">
                  <h1 className="text-lg">{data[i]?.type}</h1>
                  <h2 className="text-sm font-light">
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}
