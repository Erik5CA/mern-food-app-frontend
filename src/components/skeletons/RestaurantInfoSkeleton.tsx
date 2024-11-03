import { Skeleton } from "../ui/skeleton";

const RestaurantInfoSkeleton = () => {
  return (
    <div className="border rounded-md p-5 space-y-3">
      <div>
        <div className="flex justify-between items-center">
          <Skeleton className="w-[200px] h-[20px]" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-1">
              <Skeleton className="w-[80px] h-[20px]" />
            </div>
            <Skeleton className="w-[80px] h-[20px]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <Skeleton className="w-[80px] h-[20px]" />
        <div className="flex gap-2">
          <Skeleton className="w-[75%] h-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfoSkeleton;
