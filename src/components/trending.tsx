import { useAppDispatch } from "@/lib/redux";
import { bookmark } from "@/lib/mediaSlice";
import { useAppSelector } from "@/lib/redux";
import { selectTrending } from "@/lib/mediaSlice";
import useMediaQuery from "@/lib/useMediaQuery";
import Image from "next/image";
import Hover from "./hover";
import categoryMovie from "@/assets/icon-category-movie.svg";
import categoryTv from "@/assets/icon-category-tv.svg";

export default function Trending() {
  const trending = useAppSelector(selectTrending);

  return (
    <section className="mb-6 space-y-4 md:mb-10 md:space-y-6">
      <h2 className="ml-4 md:ml-6 lg:ml-0">Trending</h2>
      <ul className="flex w-screen gap-4 overflow-x-auto md:gap-10 lg:w-full">
        {trending.map((data) => (
          <li
            key={data.title}
            className="first:ml-4 md:first:ml-6 lg:first:ml-0"
          >
            <Thumbnail data={data} />
          </li>
        ))}
      </ul>
    </section>
  );
}

// thumnails in trending section differ from regular thumbnails
const Thumbnail = ({ data }: { data: IMedia }) => {
  // redux dispatch action
  const dispatch = useAppDispatch();

  // media query boolean
  const tablet = useMediaQuery("(min-width: 768px)");

  // responsive image sizes
  if (!data.thumbnail.trending) return null;
  const image = tablet
    ? data.thumbnail.trending.large
    : data.thumbnail.trending.large;

  return (
    // hover component provides overlay with play button
    <Hover>
      <figure className="relative h-[8.75rem] w-[15rem] overflow-hidden rounded-lg md:h-[14.375rem] md:w-[29.375rem]">
        {/* thumbnail image */}
        <Image src={image} alt="" fill />

        {/* image caption */}
        <figcaption className="absolute bottom-0 z-50 flex w-full flex-col gap-1 bg-gradient-to-t from-black/75 p-4 md:p-6">
          <p className="flex items-center gap-2 text-xs font-light opacity-75 md:text-body-md">
            <span>{data.year}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Image
                src={data.category === "Movie" ? categoryMovie : categoryTv}
                alt=""
              />
              {data.category}
            </span>
            <span>•</span>
            <span>{data.rating}</span>
          </p>
          <h3>{data.title}</h3>
        </figcaption>

        {/* bookmark button */}
        <div
          onClick={() => dispatch(bookmark(data.title))}
          className="absolute right-2 top-2 z-50 grid h-8 w-8 cursor-pointer place-content-center rounded-full bg-_dark-blue/50 p-2 transition-all hover:bg-white hover:text-_dark-blue md:right-6 md:top-4"
        >
          {data.isBookmarked ? <BookmarkFull /> : <BookmarkEmpty />}
        </div>
      </figure>
    </Hover>
  );
};

// svg icons
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
