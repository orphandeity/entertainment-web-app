import Image from "next/image";
import searchIcon from "@/assets/icon-search.svg";

interface SearchBarProps {
  searchQuery: string | undefined;
  setSearchQuery: React.Dispatch<React.SetStateAction<string | undefined>>;
  placeholder?: string;
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  placeholder = "Search for movies or TV series",
}: SearchBarProps) {
  return (
    <form className="mx-4 my-6 flex items-center gap-4 md:mx-6 md:my-8 md:gap-6 lg:mx-9">
      <Image src={searchIcon} alt="" className="h-auto w-6 md:w-8" />
      <input
        type="text"
        className="w-full border-transparent bg-transparent p-0 text-base font-light caret-_red transition-colors selection:bg-_red placeholder:text-white/50 focus:border-transparent focus:border-b-_greyish-blue focus:ring-0 md:text-heading-md"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}
