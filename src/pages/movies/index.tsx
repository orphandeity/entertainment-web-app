import Head from "next/head";
import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import DashboardLayout from "@/components/layout";
import SearchBar from "@/components/search";
import MediaList from "@/components/mediaList";
import { useState } from "react";
import { useAppSelector } from "@/lib/redux";
import { selectMovies } from "@/lib/mediaSlice";
import type { GetServerSideProps } from "next";
import { MovieList } from "@/components/tmdb/list";

export const getServerSideProps: GetServerSideProps = async () => {
  let movies;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
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

  // // movies redux selector
  // const movies = useAppSelector(selectMovies);
  // // filter movies by search query
  // const searchResults = movies.filter((movie) =>
  //   movie.title.toLowerCase().includes(movieSearch.trim().toLowerCase())
  // );

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
        {/* {movieSearch ? (
          <MediaList
            heading={`Found ${searchResults.length} results for '${movieSearch}'`}
            media={searchResults}
          />
        ) : (
          <MediaList heading="Movies" media={movies} />
        )} */}
        <MovieList heading="Movies" media={movies} />
      </main>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Page;
