import Head from "next/head";
import SearchBar from "@/components/ui/search";

interface MoviesPropsI {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function Movies({ searchQuery, setSearchQuery }: MoviesPropsI) {
  return (
    <>
      <Head>
        <title>Movies | Entertainment Web App</title>
        <meta name="description" content="Frontend Mentor Challenge Project" />
      </Head>
      <main className="w-full overflow-hidden">
        <SearchBar
          placeholder="Search for movies"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <section>
          <h2>Movies</h2>
        </section>
      </main>
    </>
  );
}
