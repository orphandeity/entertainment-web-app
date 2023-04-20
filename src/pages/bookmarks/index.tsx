import { useState } from "react";
import { useAppSelector } from "@/lib/redux";
import { selectMovies, selectTVSeries } from "@/lib/mediaSlice";
import Head from "next/head";
import SearchBar from "@/components/search";
import MediaList from "@/components/mediaList";

export default function Bookmarks() {
  const [bookmarkSearch, setBookmarkSearch] = useState<string>("");

  // filter bookmarked movies
  const movies = useAppSelector(selectMovies).filter(
    (media) => media.isBookmarked
  );

  // filter bookmarked tv series
  const tvSeries = useAppSelector(selectTVSeries).filter(
    (media) => media.isBookmarked
  );

  // all bookmarked media
  const media = useAppSelector((state) =>
    state.media.filter((m) => m.isBookmarked)
  );

  // filter bookmarked media by search query
  const searchResults = media.filter((m) =>
    m.title.toLowerCase().includes(bookmarkSearch.trim().toLowerCase())
  );

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
        {bookmarkSearch ? (
          <MediaList
            heading={`Found ${searchResults.length} results for '${bookmarkSearch}'`}
            media={searchResults}
          />
        ) : (
          <div className="flex flex-col gap-6 md:gap-12 lg:gap-10">
            <MediaList heading="Bookmarked Movies" media={movies} />
            <MediaList heading="Bookmarked TV Series" media={tvSeries} />
          </div>
        )}
      </main>
    </>
  );
}
