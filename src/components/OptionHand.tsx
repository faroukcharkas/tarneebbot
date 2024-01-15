"use client";

import { GameModel } from "@/models/GameModel";
import { HandModel } from "@/models/HandModel";
import { useGameStore } from "@/store/zustand";
import OptionCard from "./OptionCard";
import { Suit } from "@/globals";

export default function OptionHand() {
  const cards = useGameStore((state) => state.cards);
  let key = 0;

  return (
    <div
      id="deck-space"
      className="p-[10px] bg-red-200 flex justify-center bg-gradient-to-b from-gray-100 to-gray-200 min-h-[190px] flex-0 border-t-2 border-t-dark-gray gap-[20px]"
    >
      {cards.map((card) => {
        key++;
        return <OptionCard key={key} value={card.value} suit={card.suit} />;
      })}
    </div>
  );
}
