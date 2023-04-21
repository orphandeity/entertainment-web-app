import type { GetServerSideProps } from "next";
import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import DashboardLayout from "@/components/layout";
import Head from "next/head";
import SearchBar from "@/components/search";
import { useEffect, useState } from "react";
import { MovieList } from "@/components/tmdb/list";

export const getServerSideProps: GetServerSideProps = async () => {
  // populate page with data from TMDB api
  let movies;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    );
    const data = await res.json();
    movies = data.results;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      movies,
    },
  };
};

export const Page: NextPageWithLayout<{ movies: IMovie[] }> = ({ movies }) => {
  // movies search query
  const [movieSearch, setMovieSearch] = useState<string>("");

  const [searchResults, setSearchResults] = useState<IMovie[]>([]);

  useEffect(() => {
    async function searchMovies() {
      // TMDB requires all search queries to be URI encoded
      const query = encodeURI(movieSearch.trim().toLowerCase());
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}&include_adult=false`
      );
      const data = await res.json();
      setSearchResults(data.results);
    }
    try {
      searchMovies();
    } catch (error) {
      console.error(error);
    }
  }, [movieSearch]);

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
          <MovieList
            heading={`Found ${
              searchResults.length
            } results for '${movieSearch.trim()}'`}
            media={searchResults}
          />
        ) : (
          <MovieList heading="Movies" media={movies} />
        )}
      </main>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Page;
