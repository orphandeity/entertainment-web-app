import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import DashboardLayout from "@/components/layout";
import { useState } from "react";
import { useAppSelector } from "@/lib/redux";
import { selectRecommended } from "@/lib/mediaSlice";
import Head from "next/head";
import SearchBar from "@/components/search";
import Trending from "@/components/trending";
import MediaList from "@/components/mediaList";
import { GetServerSideProps } from "next";
import { MovieList, TVList } from "@/components/tmdb/list";
import TrendingTMDB from "@/components/tmdb/trendingTMDB";

export const getServerSideProps: GetServerSideProps = async () => {
  let trending;
  let recommended;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
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
  recommended: IMovie[];
}> = ({ trending, recommended }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // const recommended = useAppSelector(selectRecommended);
  // const media = useAppSelector((state) => state.media);

  // const searchResults = media.filter((m) =>
  //   m.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
  // );

  return (
    <>
      <Head>
        <title>Frontend Mentor | Entertainment Web App</title>
        <meta name="description" content="Frontend Mentor Challenge Project" />
      </Head>
      <main className="w-full overflow-hidden">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {/* {searchQuery ? (
          <MediaList
            heading={`Found ${searchResults.length} results for '${searchQuery}'`}
            media={searchResults}
          />
        ) : (
          <>
            <Trending />
            <MediaList heading="Recommended for you" media={recommended} />
          </>
        )} */}
        <TrendingTMDB trending={trending} />
        <MovieList heading="Recommended for you" media={recommended} />
      </main>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Page;
