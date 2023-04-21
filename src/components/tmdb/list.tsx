import MovieThumbnail from "@/components/tmdb/thumbnailMovie";

interface IMediaListProps {
  heading: string;
  media: IMovie[];
}

export function MovieList({ heading, media }: IMediaListProps) {
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
