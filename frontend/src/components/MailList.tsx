import styles from '../styles';

type Props = {};

export default function MailList({}: Props) {
  return (
    <div
      className={`${styles.flexCenter} flex-col w-full mt-12 bg-blue-900 text-white p-4`}
    >
      <h1 className="h-8 border-none">Save time</h1>
      <span className="mb-2">Sign up</span>
      <div className="">
        <input
          type="text"
          placeholder="Your email"
          className={`rounded ${styles.paddingInput}`}
        />
        <button className="ml-3 h-14 w-24 bg-blue-700 text-white font-medium rounded-md cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
}
