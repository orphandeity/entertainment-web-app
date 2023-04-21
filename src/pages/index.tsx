import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import DashboardLayout from "@/components/layout";
import { useEffect, useState } from "react";
import Head from "next/head";
import SearchBar from "@/components/search";
import { GetServerSideProps } from "next";
import { MovieList, TVList } from "@/components/tmdb/list";
import TrendingTMDB from "@/components/tmdb/trendingTMDB";

export const getServerSideProps: GetServerSideProps = async () => {
  let trending;
  let recommended;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    );
    const data = await res.json();
    recommended = data.results;
  } catch (error) {
    console.error(error);
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/trending/tv/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    );
    const data = await res.json();
    trending = data.results;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      trending,
      recommended,
    },
  };
};

export const Page: NextPageWithLayout<{
  trending: ITVSeries[];
  recommended: ITVSeries[];
}> = ({ trending, recommended }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [searchResults, setSearchResults] = useState<ITVSeries[]>([]);

  useEffect(() => {
    async function searchMulti() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/search/tv?api_key=${
          process.env.NEXT_PUBLIC_TMDB_API_KEY
        }&query=${searchQuery.trim().toLowerCase()}&include_adult=false`
      );
      const data = await res.json();
      setSearchResults(data.results);
    }
    try {
      searchMulti();
    } catch (error) {
      console.error(error);
    }
  }, [searchQuery]);

  return (
    <>
      <Head>
        <title>Frontend Mentor | Entertainment Web App</title>
        <meta name="description" content="Frontend Mentor Challenge Project" />
      </Head>
      <main className="w-full overflow-hidden">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <TrendingTMDB trending={trending} />
        <TVList heading="Top Rated TV Series" media={recommended} />
      </main>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Page;
