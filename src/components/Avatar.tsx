import Image from "next/image";

export default function Avatar({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  return (
    <div className="flex items-center flex-col w-[100px]">
      <Image
        src="/Smile.png"
        width={50}
        height={50}
        alt="Smiling Face"
        className={`rounded-[100%] bg-${color}-500 h-[50px] w-[50px] border-4 border-${color}-700 mb-1`}
      />
      <p className="w-[100px] text-center">{name}</p>
    </div>
  );
}
