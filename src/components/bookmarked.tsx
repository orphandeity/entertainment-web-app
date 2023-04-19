import { useEffect, useState } from "react";
import MediaList from "./ui/mediaList";

export default function Bookmarked() {
  const [bookmarks, setBookmarks] = useState<IMedia[]>([]);

  const movies = bookmarks.filter((media) => media.category === "Movie");
  const tvSeries = bookmarks.filter((media) => media.category === "TV Series");

  useEffect(() => {
    async function getBookmarked() {
      const res = await fetch("/api/media?type=bookmarked");
      const data = await res.json();
      setBookmarks(data.media);
    }
    getBookmarked();
  }, []);

  return (
    <div className="flex flex-col gap-6 md:gap-12 lg:gap-10">
      <MediaList heading="Bookmarked Movies" media={movies} />
      <MediaList heading="Bookmarked TV Series" media={tvSeries} />
    </div>
  );
}
