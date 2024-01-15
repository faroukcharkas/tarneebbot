"use client";

import Avatar from "@/components/Avatar";
import ControlBoard from "@/components/ControlBoard";
import OptionHand from "@/components/OptionHand";
import PlayingCard from "@/components/PlayingCard";
import ScoreBoard from "@/components/ScoreBoard";
import { Suit } from "@/globals";
import { useGameStore } from "@/store/zustand";

export default function Home() {
  const player1Card = useGameStore((state) => state.player1Card);
  const player2Card = useGameStore((state) => state.player2Card);
  const player3Card = useGameStore((state) => state.player3Card);
  const player4Card = useGameStore((state) => state.player4Card);
  const player1CardDown = useGameStore((state) => state.player1CardDown);
  const player2CardDown = useGameStore((state) => state.player2CardDown);
  const player3CardDown = useGameStore((state) => state.player3CardDown);
  const player4CardDown = useGameStore((state) => state.player4CardDown);

  return (
    <main className="flex min-h-screen flex-col">
      <div
        id="card-space"
        className="flex-1 relative radial-gradient h-full flex justify-center align-center p-[50px]"
      >
        <div className="absolute w-[200px] left-[50px] top-[25px]">
          <ControlBoard />
        </div>

        <div className="absolute w-[200px] right-[50px] top-[25px]">
          <ScoreBoard />
        </div>

        <div className="w-[303px] flex">
          <div className="flex-0 flex gap-[35px] flex-row items-center">
            <Avatar name="Rival #1" color="red" />
            <PlayingCard
              value={player4Card.value}
              suit={player4Card.suit}
              player={4}
              shown={player4CardDown}
            />
          </div>
        </div>
        <div className="w-[150px] flex flex-col justify-between">
          <div className="flex-0 flex gap-[35px] flex-col items-center">
            <Avatar name="Teammate" color="green" />
            <PlayingCard
              value={player1Card.value}
              suit={player1Card.suit}
              player={1}
              shown={player1CardDown}
            />
          </div>
          <div className="flex-0 flex gap-[35px] flex-col items-center">
            <PlayingCard
              value={player3Card.value}
              suit={player3Card.suit}
              player={3}
              shown={player3CardDown}
            />
            <Avatar name="You" color="blue" />
          </div>
        </div>
        <div className="w-[303px] flex justify-end">
          <div className="flex-0 flex gap-[35px] flex-row items-center">
            <PlayingCard
              value={player2Card.value}
              suit={player2Card.suit}
              player={2}
              shown={player2CardDown}
            />
            <Avatar name="Rival #2" color="yellow" />
          </div>
        </div>
      </div>
      <OptionHand></OptionHand>
    </main>
  );
}
