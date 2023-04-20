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

export const Page: NextPageWithLayout = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const recommended = useAppSelector(selectRecommended);
  const media = useAppSelector((state) => state.media);

  const searchResults = media.filter((m) =>
    m.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Frontend Mentor | Entertainment Web App</title>
        <meta name="description" content="Frontend Mentor Challenge Project" />
      </Head>
      <main className="w-full overflow-hidden">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {searchQuery ? (
          <MediaList
            heading={`Found ${searchResults.length} results for '${searchQuery}'`}
            media={searchResults}
          />
        ) : (
          <>
            <Trending />
            <MediaList heading="Recommended for you" media={recommended} />
          </>
        )}
      </main>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Page;
