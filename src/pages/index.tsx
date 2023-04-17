import SearchBar from "@/components/search";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string | undefined>();

  return (
    <>
      <Head>
        <title>Frontend Mentor | Entertainment Web App</title>
        <meta name="description" content="Frontend Mentor Challenge Project" />
      </Head>
      <main className="w-full">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <h1 className="text-9xl">👻</h1>
      </main>
    </>
  );
}
