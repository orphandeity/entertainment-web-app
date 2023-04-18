import { useState, useEffect } from "react";
import useMediaQuery from "@/lib/useMediaQuery";
import Image from "next/image";
import bookmarkFull from "@/assets/icon-bookmark-full.svg";
import bookmarkEmpty from "@/assets/icon-bookmark-empty.svg";

export default function Recommended() {
  const [recommended, setRecommended] = useState<IMedia[]>([]);

  useEffect(() => {
    async function getRecommended() {
      const res = await fetch("/api/media?type=recommended");
      const data = await res.json();
      setRecommended(data.media);
    }
    getRecommended();
  }, []);

  return (
    <section className="mx-4 space-y-6 md:mx-6 lg:ml-0">
      <h2>Recommended for you</h2>
      <ul className="flex flex-wrap gap-x-[15px] gap-y-4 md:gap-x-[1.875rem] md:gap-y-6 lg:gap-x-10 lg:gap-y-8">
        {recommended.map((media) => (
          <li key={media.title}>
            <Thumbnail media={media} />
          </li>
        ))}
      </ul>
    </section>
  );
}

const Thumbnail = ({ media }: { media: IMedia }) => {
  const tablet = useMediaQuery("(min-width: 768px)");
  const desktop = useMediaQuery("(min-width: 1440px)");

  const image = desktop
    ? media.thumbnail.regular.large
    : tablet
    ? media.thumbnail.regular.medium
    : media.thumbnail.regular.small;

  return (
    <figure className="flex flex-col gap-2">
      <div className="relative h-[6.875rem] w-[10.25rem] overflow-hidden rounded-lg md:h-[8.75rem] md:w-[13.75rem] lg:h-[10.875rem] lg:w-[17.5rem]">
        <Image src={image} alt="" fill />

        <div className="absolute right-2 top-2 grid h-8 w-8 place-content-center rounded-full bg-_dark-blue/50 md:right-4 md:top-4">
          <Image src={bookmarkFull} alt="" />
        </div>
      </div>
      <figcaption className="flex flex-col gap-[0.3125rem]">
        <p className="flex items-center gap-2 text-[11px] font-extralight opacity-75 md:text-body-sm">
          <span>{media.year}</span>
          <span>•</span>
          <span>{media.category}</span>
          <span>•</span>
          <span>{media.rating}</span>
        </p>
        <h4 className="text-sm font-medium md:text-lg">{media.title}</h4>
      </figcaption>
    </figure>
  );
};
