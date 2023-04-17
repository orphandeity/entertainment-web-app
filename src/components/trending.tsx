import { useState, useEffect } from "react";
import useMediaQuery from "@/lib/useMediaQuery";
import Image from "next/image";
import bookmarkEmpty from "@/assets/icon-bookmark-empty.svg";
import bookmarkFull from "@/assets/icon-bookmark-full.svg";

export default function Trending() {
  const [trending, setTrending] = useState<IMedia[]>([]);

  useEffect(() => {
    async function getTrending() {
      const res = await fetch("/api/media?type=trending");
      const data = await res.json();
      setTrending(data.media);
    }
    getTrending();
  }, []);

  const Thumbnail = ({ media }: { media: IMedia }) => {
    const tablet = useMediaQuery("(min-width: 768px)");

    if (!media.thumbnail.trending) return null;

    const image = tablet
      ? media.thumbnail.trending?.large
      : media.thumbnail.trending?.large;

    return (
      <figure className="relative h-[8.75rem] w-[15rem] overflow-hidden rounded-lg md:h-[14.375rem] md:w-[29.375rem]">
        <Image src={image} alt="" fill />
        <figcaption className="absolute bottom-0 flex w-full flex-col gap-1 bg-gradient-to-t from-black/75 p-4 md:p-6">
          <p className="flex items-center gap-2 text-xs font-extralight opacity-75 md:text-body-md">
            <span>{media.year}</span>
            <span>•</span>
            <span>{media.category}</span>
            <span>•</span>
            <span>{media.rating}</span>
          </p>
          <h3>{media.title}</h3>
        </figcaption>
        <div className="absolute right-2 top-2 grid h-8 w-8 place-content-center rounded-full bg-_dark-blue/50 p-2 md:right-6 md:top-4">
          <Image src={bookmarkEmpty} alt="" />
        </div>
      </figure>
    );
  };

  return (
    <section className="mb-6 space-y-4 md:mb-10 md:space-y-6">
      <h2 className="ml-4 md:ml-6 lg:ml-0">Trending</h2>
      <ul className="flex w-screen gap-4 overflow-x-auto md:gap-10 lg:w-full">
        {trending.map((media) => (
          <li
            key={media.title}
            className="first:ml-4 md:first:ml-6 lg:first:ml-0"
          >
            <Thumbnail media={media} />
          </li>
        ))}
      </ul>
    </section>
  );
}
