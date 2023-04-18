import { useState, useEffect } from "react";
import useMediaQuery from "@/lib/useMediaQuery";
import Image from "next/image";

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
      <div className="absolute right-2 top-2 grid h-8 w-8 cursor-pointer place-content-center rounded-full bg-_dark-blue/50 p-2 transition-all hover:bg-white hover:text-_dark-blue md:right-6 md:top-4">
        <BookmarkEmpty />
      </div>
    </figure>
  );
};

const BookmarkFull = () => (
  <svg width={12} height={14} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
      fill="currentColor"
    />
  </svg>
);

const BookmarkEmpty = () => (
  <svg width={12} height={14} xmlns="http://www.w3.org/2000/svg">
    <path
      d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
      stroke="currentColor"
      strokeWidth={1.5}
      fill="none"
    />
  </svg>
);
