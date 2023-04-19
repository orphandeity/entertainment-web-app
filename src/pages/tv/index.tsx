import SearchBar from "@/components/ui/search";
import Head from "next/head";

interface TVSeriesPropsI {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function TVSeries({
  searchQuery,
  setSearchQuery,
}: TVSeriesPropsI) {
  return (
    <>
      <Head>
        <title>TV Series | Entertainment Web App</title>
        <meta name="description" content="Frontend Mentor Challenge Project" />
      </Head>
      <main className="w-full overflow-hidden">
        <SearchBar
          placeholder="Search for TV series"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <section>
          <h2>TV Series</h2>
        </section>
      </main>
    </>
  );
}
