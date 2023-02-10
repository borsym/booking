import styles from '../styles';

type Props = {};
const items = ['Counters', 'Regions', 'Districts', 'Airports', 'Hotels'];
const numberOfLists = 4;

export default function Footer({}: Props) {
  return (
    <div className="w-full max-w-screen-lg text-xs">
      <div className="w-full flex justify-around mb-12">
        {[...Array(numberOfLists)].map((_, i) => (
          <ul className="p-0 list-none" key={i}>
            {items.map((item) => (
              <li className="mb-2 text-blue-900 cursor-pointer" key={item}>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className={`${styles.flexCenter}`}>Copyright 2023</div>
    </div>
  );
}
