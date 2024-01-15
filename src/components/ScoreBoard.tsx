"use client";

import { useGameStore } from "@/store/zustand";
import { Suit, Team } from "@/globals";
import Image from "next/image";

export default function ScoreBoard() {
  const bettingTeam = useGameStore((state) => state.bettingTeam);
  const proTricksWon = useGameStore((state) => state.proTricksWon);
  const proTricksLost = useGameStore((state) => state.proTricksLost);
  const proGameScore = useGameStore((state) => state.proGameScore);
  const proGameLost = useGameStore((state) => state.antiGameScore);
  const roundBet = useGameStore((state) => state.roundBet);
  const roundTarneeb = useGameStore((state) => state.roundTarneeb);
  let tarneebString = "";
  if (roundTarneeb == Suit.Club) {
    tarneebString = "Club";
  } else if (roundTarneeb == Suit.Spade) {
    tarneebString = "Spade";
  } else if (roundTarneeb == Suit.Diamond) {
    tarneebString = "Diamond";
  } else {
    tarneebString = "Heart";
  }
  return (
    <div className="h-full w-full">
      <div className="w-full p-[10px] border-b-[1px] border-white">
        <p className="text-center font-bold">Current Game Score</p>
        <p className="text-center mb-2">First to 31</p>
        <div className="flex justify-center gap-[20px]">
          <div className="">
            <p className="w-full text-center text-green-500 text-[30px] font-bold leading-none">
              {proGameScore}
            </p>
            <p className="w-full text-center text-black">Pro</p>
          </div>
          <div className="">
            <p className="w-full text-center text-red-500 leading-none font-bold text-[30px]">
              {proGameLost}
            </p>
            <p className="w-full text-center">Anti</p>
          </div>
        </div>
      </div>
      <div className="w-full p-[10px] border-b-[1px] border-white">
        <p className="text-center font-bold">Score & Bet</p>
        <p className="text-center mb-2">
          {`${bettingTeam == Team.Pro ? "Your" : "Other"} team bet ${roundBet}`}
        </p>
        <div className="flex justify-center gap-[20px]">
          <div className="">
            <p className="w-full text-center text-green-500 text-[30px] font-bold leading-none">
              {proTricksWon}
            </p>
            <p className="w-full text-center text-black">Won</p>
          </div>
          <div className="">
            <p className="w-full text-center text-red-500 leading-none font-bold text-[30px]">
              {proTricksLost}
            </p>
            <p className="w-full text-center">Lost</p>
          </div>
        </div>
      </div>
      <div className="w-full p-[10px]">
        <p className="text-center font-bold">Tarneeb</p>
        <p className="text-center mb-2">
          {`${
            bettingTeam == Team.Pro ? "Your" : "Other"
          } team called ${tarneebString}s`}
        </p>
        <div className="flex justify-center">
          <Image
            src={`/${tarneebString}.svg`}
            width={30}
            height={30}
            alt={tarneebString}
          />
        </div>
      </div>
    </div>
  );
}
