import { GetServerSideProps } from "next";
import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import DashboardLayout from "@/components/layout";
import Head from "next/head";
import SearchBar from "@/components/search";
import { useEffect, useState } from "react";
import { TVList } from "@/components/tmdb/list";

export const getServerSideProps: GetServerSideProps = async () => {
  let tvSeries;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/trending/tv/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    );
    const data = await res.json();
    tvSeries = data.results;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      tvSeries,
    },
  };
};

export const Page: NextPageWithLayout<{ tvSeries: ITVSeries[] }> = ({
  tvSeries,
}) => {
  // tv series search query
  const [tvSearch, setTvSearch] = useState<string>("");

  const [searchResults, setSearchResults] = useState<ITVSeries[]>([]);

  useEffect(() => {
    async function searchTvSeries() {
      // TMDB requires all search queries to be URI encoded
      const query = encodeURI(tvSearch.trim().toLowerCase());
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/search/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}&include_adult=false`
      );
      const data = await res.json();
      setSearchResults(data.results);
    }
    try {
      searchTvSeries();
    } catch (error) {
      console.error(error);
    }
  }, [tvSearch]);

  return (
    <>
      <Head>
        <title>TV Series | Entertainment Web App</title>
        <meta name="description" content="Frontend Mentor Challenge Project" />
      </Head>
      <main className="w-full overflow-hidden">
        <SearchBar
          placeholder="Search for TV series"
          searchQuery={tvSearch}
          setSearchQuery={setTvSearch}
        />
        {tvSearch ? (
          <TVList
            heading={`Found ${
              searchResults.length
            } results for '${tvSearch.trim()}'`}
            media={searchResults}
          />
        ) : (
          <TVList heading="TV Series" media={tvSeries} />
        )}
      </main>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Page;
