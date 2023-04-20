import { useState } from "react";
import { useAppSelector } from "@/lib/redux";
import { selectTVSeries } from "@/lib/mediaSlice";
import Head from "next/head";
import SearchBar from "@/components/search";
import MediaList from "@/components/mediaList";

export default function TVSeriesPage() {
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
      <main className="w-full overflow-hidden">
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
}
