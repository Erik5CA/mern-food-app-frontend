import { Skeleton } from "../ui/skeleton";

const SearchResultsInfoSkelenton = () => {
  return (
    <div className="flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <Skeleton className="w-[250px] h-[20px] rounded-lg" />
      <Skeleton className="w-[150px] h-[20px] rounded-lg" />
    </div>
  );
};

export default SearchResultsInfoSkelenton;
