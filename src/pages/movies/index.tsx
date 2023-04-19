import { useState } from "react";
import Head from "next/head";
import SearchBar from "@/components/ui/search";
import Movies from "@/components/movies";

export default function MoviesPage() {
  const [movieSearch, setMovieSearch] = useState<string>("");

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
        <Movies />
      </main>
    </>
  );
}
