import type { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import SearchBar from "@/components/search";
import Trending from "@/components/trending";
import Recommended from "@/components/recommended";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string | undefined>();

  return (
    <>
      <Head>
        <title>Frontend Mentor | Entertainment Web App</title>
        <meta name="description" content="Frontend Mentor Challenge Project" />
      </Head>
      <main className="w-full overflow-hidden">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Trending />
        <Recommended />
      </main>
    </>
  );
}
