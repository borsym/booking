import styles from "../../styles";
import { PersonNumberProps } from "../../utils/typeDefinitions";

function PersonNumber({ name, type, handleOption }: PersonNumberProps) {
  return (
    <div className={`${styles.flexBetween} flex w-48 m-3`}>
      <div className="optionText">
        <span>{name}</span>
        <div className={`${styles.flexCenter} gap-3 text-sm`}>
          <button
            disabled={type === 0}
            className={`disabled:text-[#252525] disabled:cursor-not-allowed ${styles.personSelector}`}
            onClick={() => handleOption(`${name.toLowerCase()}`, 'd')}
          >
            -
          </button>
          <span className="optionCounterNumber">{type}</span>
          <button
            className={`${styles.personSelector}`}
            onClick={() => handleOption(`${name.toLowerCase()}`, 'i')}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonNumber;
