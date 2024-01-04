import { Suit } from "@/globals";

export default function Card({ value, suit }: { value: number; suit: Suit }) {
  return (
    <div className="w-[150px] h-[210px] rounded-[20px] bg-white shadow p-[7.5px] flex">
      <div className="w-[30px] bg-red-300"></div>
      <div className="flex-1 bg-black"></div>
      <div className="w-[30px] bg-green-300"></div>
    </div>
  );
}
