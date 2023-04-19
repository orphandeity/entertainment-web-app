import { useState } from "react";
import { useAppSelector } from "@/lib/redux";
import { selectMovies } from "@/lib/mediaSlice";
import Head from "next/head";
import SearchBar from "@/components/search";
import MediaList from "@/components/mediaList";

export default function MoviesPage() {
  const [movieSearch, setMovieSearch] = useState<string>("");

  const movies = useAppSelector(selectMovies);

  return (
    <>
      <Head>
        <title>Movies | Entertainment Web App</title>
        <meta name="description" content="Frontend Mentor Challenge Project" />
      </Head>
      <main className="w-full overflow-hidden">
        <SearchBar
          placeholder="Search for movies"
          searchQuery={movieSearch}
          setSearchQuery={setMovieSearch}
        />
        <MediaList heading="Movies" media={movies} />
      </main>
    </>
  );
}
