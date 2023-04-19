import { useState, useEffect } from "react";
import Head from "next/head";
import SearchBar from "@/components/ui/search";
import Bookmarked from "@/components/bookmarked";

export default function Bookmarks() {
  const [bookmarkSearch, setBookmarkSearch] = useState<string>("");

  return (
    <>
      <Head>
        <title>Bookmarks | Entertainment Web App</title>
        <meta name="description" content="Frontend Mentor Challenge Project" />
      </Head>
      <main className="w-full overflow-hidden">
        <SearchBar
          placeholder="Search for bookmarked shows"
          searchQuery={bookmarkSearch}
          setSearchQuery={setBookmarkSearch}
        />
        <Bookmarked />
      </main>
    </>
  );
}
