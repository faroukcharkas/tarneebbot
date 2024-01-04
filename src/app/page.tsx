import Card from "@/components/card";
import { Suit } from "@/globals";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div
        id="card-space"
        className="flex-1 radial-gradient flex justify-center content-center"
      >
        <Card value={3} suit={Suit.Club} />
      </div>
      <div
        id="control-space"
        className="min-h-[200px] flex-0 border-t-2 border-t-dark-gray"
      ></div>
    </main>
  );
}
