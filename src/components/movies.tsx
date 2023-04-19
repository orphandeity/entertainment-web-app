import { useState, useEffect } from "react";
import MediaList from "./ui/mediaList";

export default function Movies() {
  const [movies, setMovies] = useState<IMedia[]>([]);

  useEffect(() => {
    async function getMovies() {
      const res = await fetch("/api/media?type=movies");
      const data = await res.json();
      setMovies(data.media);
    }
    getMovies();
  }, []);

  return movies ? <MediaList heading="Movies" media={movies} /> : null;
}
