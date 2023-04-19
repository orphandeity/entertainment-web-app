import Thumbnail from "../thumbnail";

interface IMediaListProps {
  heading: string;
  media: IMedia[];
}

export default function MediaList({ heading, media }: IMediaListProps) {
  return (
    <section className="mx-4 space-y-6 md:mx-6 lg:ml-0">
      <h2>{heading}</h2>
      <ul className="flex flex-wrap gap-x-[15px] gap-y-4 md:gap-x-[1.875rem] md:gap-y-6 lg:gap-x-10 lg:gap-y-8">
        {media.map((data) => (
          <li key={data.title}>
            <Thumbnail data={data} />
          </li>
        ))}
      </ul>
    </section>
  );
}
