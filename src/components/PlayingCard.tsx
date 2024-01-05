import { Suit } from "@/globals";
import Image from "next/image";

export default function PlayingCard({
  value,
  suit,
  player,
  hidden = false,
}: {
  value: number;
  suit: Suit;
  player: number;
  hidden?: boolean;
}) {
  let stringValue: string = "";
  let stringSuit: string = "";
  let stringColor: string = "";
  let stringRotation: string = "";
  let stringHidden: string = hidden ? "hidden" : "";

  switch (player) {
    case 1:
      stringRotation = "rotate-180";
      break;
    case 4:
      stringRotation = "rotate-90";
      break;
    case 2:
      stringRotation = "-rotate-90";
      break;
    default:
      break;
  }

  switch (value) {
    case 14:
      stringValue = "A";
      break;
    case 13:
      stringValue = "K";
      break;
    case 12:
      stringValue = "Q";
      break;
    case 11:
      stringValue = "J";
      break;
    default:
      stringValue = `${value}`;
      break;
  }

  switch (suit) {
    case Suit.Spade:
      stringSuit = "Spade";
      stringColor = "black";
      break;
    case Suit.Club:
      stringSuit = "Club";
      stringColor = "black";
      break;
    case Suit.Heart:
      stringSuit = "Heart";
      stringColor = "[#BE0006]";
      break;
    default:
      stringSuit = "Diamond";
      stringColor = "[#BE0006]";
      break;
  }

  // Translate number

  return (
    <div
      className={`w-[120px] h-[168px] rounded-[20px] bg-white shadow p-[7.5px] flex ${stringRotation} ${stringHidden}`}
    >
      <div className="w-[30px] flex-col flex">
        <p className={`text-${stringColor} w-full text-center text-[25px]`}>
          {stringValue}
        </p>
        <Image
          src={`${stringSuit}.svg`}
          width={30}
          height={30}
          alt={stringSuit}
        />
      </div>
      <div className="flex-1 flex justify-center align-center">
        <Image
          src={`${stringSuit}.svg`}
          width={60}
          height={60}
          alt={stringSuit}
        />
      </div>
      <div className="w-[30px] flex-col flex justify-end">
        <Image
          src={`${stringSuit}.svg`}
          width={30}
          height={30}
          alt={stringSuit}
        />
        <p
          className={`text-${stringColor} w-full text-center text-[25px] rotate-180`}
        >
          {stringValue}
        </p>
      </div>
    </div>
  );
}
