import Image from "next/image";
import playIcon from "@/assets/icon-play.svg";

interface HoverPropsI {
  children: React.ReactNode;
}

export default function Hover({ children }: HoverPropsI) {
  return (
    <div className="group relative cursor-pointer">
      {children}
      <div className="absolute inset-0 hidden place-content-center bg-black/50 group-hover:grid">
        <div className="flex w-[7.3125rem] items-center gap-4 rounded-full bg-white/25 p-2">
          <Image src={playIcon} alt="" />
          <span className="text-lg font-medium">Play</span>
        </div>
      </div>
    </div>
  );
}
