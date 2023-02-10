import styles from '../../styles';

function Icon({ children }: React.PropsWithChildren<{}>) {
  return <div className={`${styles.flexCenter} gap-3`}>{children}</div>;
}

export default Icon;
