import Avatar from "@/components/Avatar";
import ControlBoard from "@/components/ControlBoard";
import OptionCard from "@/components/OptionCard";
import PlayingCard from "@/components/PlayingCard";
import ScoreBoard from "@/components/ScoreBoard";
import { Suit } from "@/globals";

export default function Home() {
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
            <Avatar name="Rival #1 (4)" color="red" />
            <PlayingCard value={14} suit={Suit.Club} player={4} hidden />
          </div>
        </div>
        <div className="w-[150px] flex flex-col justify-between">
          <div className="flex-0 flex gap-[35px] flex-col items-center">
            <Avatar name="Teammate (1)" color="green" />
            <PlayingCard value={14} suit={Suit.Club} player={1} hidden />
          </div>
          <div className="flex-0 flex gap-[35px] flex-col items-center">
            <PlayingCard value={14} suit={Suit.Club} player={3} hidden />
            <Avatar name="You (3)" color="blue" />
          </div>
        </div>
        <div className="w-[303px] flex justify-end">
          <div className="flex-0 flex gap-[35px] flex-row items-center">
            <PlayingCard value={14} suit={Suit.Diamond} player={2} hidden />
            <Avatar name="Rival #2 (2)" color="yellow" />
          </div>
        </div>
      </div>
      <div
        id="deck-space"
        className="p-[10px] bg-red-200 flex justify-center bg-gradient-to-b from-gray-100 to-gray-200 flex-0 border-t-2 border-t-dark-gray gap-[20px]"
      >
        <OptionCard value={14} suit={Suit.Diamond} />
        <OptionCard value={14} suit={Suit.Diamond} />
        <OptionCard value={14} suit={Suit.Diamond} />
        <OptionCard value={14} suit={Suit.Diamond} />
        <OptionCard value={14} suit={Suit.Diamond} />
        <OptionCard value={14} suit={Suit.Diamond} />
      </div>
    </main>
  );
}
