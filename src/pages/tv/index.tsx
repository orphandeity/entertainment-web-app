import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import DashboardLayout from "@/components/layout";
import { useState } from "react";
import { useAppSelector } from "@/lib/redux";
import { selectTVSeries } from "@/lib/mediaSlice";
import Head from "next/head";
import SearchBar from "@/components/search";
import MediaList from "@/components/mediaList";

export const Page: NextPageWithLayout = () => {
  // tv series search query
  const [tvSearch, setTvSearch] = useState<string>("");

  // tv series redux selector
  const tvSeries = useAppSelector(selectTVSeries);

  // filter tv series by search query
  const searchResults = tvSeries.filter((tv) =>
    tv.title.toLowerCase().includes(tvSearch.trim().toLowerCase())
  );

  return (
    <>
      <Head>
        <title>TV Series | Entertainment Web App</title>
        <meta name="description" content="Frontend Mentor Challenge Project" />
      </Head>
      <main className="w-full overflow-hidden lg:h-screen lg:overflow-y-scroll">
        <SearchBar
          placeholder="Search for TV series"
          searchQuery={tvSearch}
          setSearchQuery={setTvSearch}
        />
        {tvSearch ? (
          <MediaList
            heading={`Found ${searchResults.length} results for '${tvSearch}'`}
            media={searchResults}
          />
        ) : (
          <MediaList heading="TV Series" media={tvSeries} />
        )}
      </main>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Page;
