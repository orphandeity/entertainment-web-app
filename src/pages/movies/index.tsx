import { useState } from "react";
import { useAppSelector } from "@/lib/redux";
import { selectMovies } from "@/lib/mediaSlice";
import Head from "next/head";
import SearchBar from "@/components/search";
import MediaList from "@/components/mediaList";

export default function MoviesPage() {
  // movies search query
  const [movieSearch, setMovieSearch] = useState<string>("");

  // movies redux selector
  const movies = useAppSelector(selectMovies);

  // filter movies by search query
  const searchResults = movies.filter((movie) =>
    movie.title.toLowerCase().includes(movieSearch.trim().toLowerCase())
  );

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
        {movieSearch ? (
          <MediaList
            heading={`Found ${searchResults.length} results for '${movieSearch}'`}
            media={searchResults}
          />
        ) : (
          <MediaList heading="Movies" media={movies} />
        )}
      </main>
    </>
  );
}
