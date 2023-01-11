type Props = {};

export default function MailList({}: Props) {
  return (
    <div className="w-full mt-12 bg-blue-900 text-white flex flex-col items-center p-4">
      <h1 className="h-8 p-2 mr-2 w-[300px] border-none">Save time</h1>
      <span className="mb-2">Sign up</span>
      <div className="">
        <input type="text" placeholder="Your email" />
        <button className="h-12 bg-blue-700 text-white font-medium rounded cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
}
