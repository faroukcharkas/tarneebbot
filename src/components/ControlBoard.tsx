export default function ControlBoard() {
  return (
    <div className="h-full w-full">
      <div className="w-full p-[10px] border-b-[1px] border-white">
        <p className="text-center font-bold">Game Count</p>
        <p className="text-center mb-2">Game 17</p>
        <div className="flex justify-center gap-[20px]">
          <div className="">
            <p className="w-full text-center text-green-500 text-[30px] font-bold leading-none">
              5
            </p>
            <p className="w-full text-center text-black">Won</p>
          </div>
          <div className="">
            <p className="w-full text-center text-red-500 leading-none font-bold text-[30px]">
              5
            </p>
            <p className="w-full text-center">Lost</p>
          </div>
        </div>
      </div>
      <div className="w-full p-[10px] border-b-[1px] border-white">
        <p className="text-center font-bold mb-2">Game Control</p>
        <button
          type="button"
          className="mb-2 rounded w-full bg-green-600 px-2 py-1 text-md font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Play
        </button>
        <button
          type="button"
          className="mb-2 rounded w-full bg-blue-600 px-2 py-1 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Pause
        </button>
        <button
          type="button"
          className="mb-2 rounded w-full bg-red-600 px-2 py-1 text-md font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Restart
        </button>
      </div>
    </div>
  );
}
