import { useState } from "react";
import { useAppSelector } from "@/lib/redux";
import { selectTVSeries } from "@/lib/mediaSlice";
import Head from "next/head";
import SearchBar from "@/components/search";
import MediaList from "@/components/mediaList";

export default function TVSeriesPage() {
  const [tvSearch, setTvSearch] = useState<string>("");

  const tvSeries = useAppSelector(selectTVSeries);

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
        <MediaList heading="TV Series" media={tvSeries} />
      </main>
    </>
  );
}
