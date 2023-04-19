import TVSeries from "@/components/tv";
import SearchBar from "@/components/ui/search";
import Head from "next/head";
import { useState } from "react";

export default function TVSeriesPage() {
  const [tvSearch, setTvSearch] = useState<string>("");

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
        <TVSeries />
      </main>
    </>
  );
}
