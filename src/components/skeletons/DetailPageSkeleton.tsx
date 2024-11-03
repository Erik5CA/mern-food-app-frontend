import { AspectRatio } from "../ui/aspect-ratio";
import { Skeleton } from "../ui/skeleton";
import OrderSumarySkeleton from "./OrderSumarySkeleton";
import RestaurantInfoSkeleton from "./RestaurantInfoSkeleton";

const DetailPageSkeleton = () => {
  return (
    <div className="flex flex-col gap-10">
      <AspectRatio ratio={16 / 5}>
        <Skeleton className="w-full h-full" />
      </AspectRatio>

      <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-12 lg:px-32">
        <div className="flex flex-col gap-4">
          <RestaurantInfoSkeleton />
        </div>

        <div>
          <OrderSumarySkeleton />
        </div>
      </div>
    </div>
  );
};

export default DetailPageSkeleton;
