import Image from "next/image";

export default function ScoreBoard() {
  return (
    <div className="h-full w-full">
      <div className="w-full p-[10px] border-b-[1px] border-white">
        <p className="text-center font-bold">Score & Bet</p>
        <p className="text-center mb-2">Other team bet 8</p>
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
      <div className="w-full p-[10px]">
        <p className="text-center font-bold">Tarneeb</p>
        <p className="text-center mb-2">Other team called Spades</p>
        <div className="flex justify-center">
          <Image src="/Spade.svg" width={30} height={30} alt="Spade" />
        </div>
      </div>
    </div>
  );
}
