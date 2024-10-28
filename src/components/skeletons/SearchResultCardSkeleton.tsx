import { AspectRatio } from "../ui/aspect-ratio";
import { Skeleton } from "../ui/skeleton";

const SearchResultCardSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-[2fr_3fr] gap-5 border rounded-sm">
      <AspectRatio ratio={16 / 6}>
        <Skeleton className="w-full h-full" />
      </AspectRatio>

      <div className="">
        <Skeleton className="w-[150px] h-[20px] rounded-sm my-2" />

        <div className="grid md:grid-cols-2 gap-2">
          <div className="flex flex-row flex-wrap">
            <Skeleton className="w-[150px] h-[20px] rounded-sm" />
          </div>

          <div className="flex gap-2 flex-col items-end md:items-start">
            <Skeleton className="w-[150px] h-[20px] rounded-sm" />
            <Skeleton className="w-[150px] h-[20px] rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCardSkeleton;
