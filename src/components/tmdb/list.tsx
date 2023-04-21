import MovieThumbnail from "@/components/tmdb/thumbnailMovie";
import ThumbnailTV from "./thumbnailTV";

interface IMovieListProps {
  heading: string;
  media: IMovie[];
}

interface ITVListProps {
  heading: string;
  media: ITVSeries[];
}

export function MovieList({ heading, media }: IMovieListProps) {
  return (
    <section className="mx-4 space-y-6 md:mx-6 lg:mx-0">
      <h2>{heading}</h2>
      <ul className="flex flex-wrap gap-x-[15px] gap-y-4 md:gap-x-[1.875rem] md:gap-y-6 lg:gap-x-10 lg:gap-y-8">
        {media.map((data) => (
          <li key={data.title}>
            <MovieThumbnail data={data} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function TVList({ heading, media }: ITVListProps) {
  return (
    <section className="mx-4 space-y-6 md:mx-6 lg:mx-0">
      <h2>{heading}</h2>
      <ul className="flex flex-wrap gap-x-[15px] gap-y-4 md:gap-x-[1.875rem] md:gap-y-6 lg:gap-x-10 lg:gap-y-8">
        {media.map((data) => (
          <li key={data.name}>
            <ThumbnailTV data={data} />
          </li>
        ))}
      </ul>
    </section>
  );
}
