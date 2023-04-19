import SearchBar from "@/components/ui/search";
import Head from "next/head";

interface BookmarksPropsI {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function Bookmarks({
  searchQuery,
  setSearchQuery,
}: BookmarksPropsI) {
  return (
    <>
      <Head>
        <title>Bookmarks | Entertainment Web App</title>
        <meta name="description" content="Frontend Mentor Challenge Project" />
      </Head>
      <main className="w-full overflow-hidden">
        <SearchBar
          placeholder="Search for bookmarked shows"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <h2>Bookmarked Movies</h2>
        <h2>Bookmarked TV Series</h2>
      </main>
    </>
  );
}
