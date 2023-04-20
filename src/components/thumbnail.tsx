import Image from "next/image";
import Hover from "./hover";
import useMediaQuery from "@/lib/useMediaQuery";
import { useAppDispatch } from "@/lib/redux";
import { bookmark } from "@/lib/mediaSlice";
import categoryMovie from "@/assets/icon-category-movie.svg";
import categoryTv from "@/assets/icon-category-tv.svg";

export default function Thumbnail({ data }: { data: IMedia }) {
  // redux dispatch action
  const dispatch = useAppDispatch();

  // media query booleans
  const tablet = useMediaQuery("(min-width: 768px)");
  const desktop = useMediaQuery("(min-width: 1440px)");

  // responsive image size
  const image = desktop
    ? data.thumbnail.regular.large
    : tablet
    ? data.thumbnail.regular.medium
    : data.thumbnail.regular.small;

  return (
    <figure className="flex flex-col gap-2">
      {/* hover component provides overlay with play button */}
      <Hover>
        <div className="relative h-[6.875rem] w-[10.25rem] overflow-hidden rounded-lg md:h-[8.75rem] md:w-[13.75rem] lg:h-[10.875rem] lg:w-[17.5rem]">
          <Image src={image} alt="" fill />

          {/* bookmark button */}
          <div
            onClick={() => dispatch(bookmark(data.title))}
            className="absolute right-2 top-2 z-50 grid h-8 w-8 cursor-pointer place-content-center rounded-full bg-_dark-blue/50 transition-all hover:bg-white hover:text-_dark-blue md:right-4 md:top-4"
          >
            {data.isBookmarked ? <BookmarkFull /> : <BookmarkEmpty />}
          </div>
        </div>
      </Hover>

      {/* image caption */}
      <figcaption className="z-50 flex flex-col gap-[0.3125rem]">
        <p className="flex items-center gap-2 text-[11px] font-light opacity-75 md:text-body-sm">
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
        <h4 className="text-sm font-medium md:text-lg">{data.title}</h4>
      </figcaption>
    </figure>
  );
}

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
