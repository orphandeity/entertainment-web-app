import { useState } from "react";
import { useAppSelector } from "@/lib/redux";
import { selectRecommended } from "@/lib/mediaSlice";
import Head from "next/head";
import SearchBar from "@/components/search";
import Trending from "@/components/trending";
import MediaList from "@/components/mediaList";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const recommended = useAppSelector(selectRecommended);

  return (
    <>
      <Head>
        <title>Frontend Mentor | Entertainment Web App</title>
        <meta name="description" content="Frontend Mentor Challenge Project" />
      </Head>
      <main className="w-full overflow-hidden">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Trending />
        <MediaList heading="Recommended for you" media={recommended} />
      </main>
    </>
  );
}
