import SearchResultCardSkeleton from "./SearchResultCardSkeleton";
import SearchResultsInfoSkelenton from "./SearchResultsInfoSkelenton";

const SearchPageSkeleton = () => {
  return (
    <>
      <SearchResultsInfoSkelenton />
      <SearchResultCardSkeleton />
      <SearchResultCardSkeleton />
      <SearchResultCardSkeleton />
    </>
  );
};

export default SearchPageSkeleton;
