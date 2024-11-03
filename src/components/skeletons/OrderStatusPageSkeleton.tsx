import { Separator } from "@radix-ui/react-separator";
import { Skeleton } from "../ui/skeleton";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const OrderStatusPageSkeleton = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-10 bg-gray-50 p-5 sm:p-10 rounded-lg">
        <div className="flex flex-col gap-5 md:flex-row md:justify-between">
          <Skeleton className="w-[250px] h-[25px]" />
          <Skeleton className="w-[150px] h-[25px]" />
        </div>
        <Skeleton className="w-full h-[12px]" />

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5">
            <div className="flex flex-col gap-2">
              <Skeleton className="w-[150px] h-[20px]" />
              <Skeleton className="w-[190px] h-[20px]" />
              <Skeleton className="w-[230px] h-[20px]" />
            </div>

            <div className="flex flex-col gap-2">
              <Skeleton className="w-[10px] h-[20px]" />
              <Skeleton className="w-[155px] h-[20px]" />
            </div>

            <Separator className="bg-zinc-700" />

            <div className="flex flex-col">
              <Skeleton className="w-[100px] h-[20px]" />
            </div>
          </div>

          <AspectRatio ratio={16 / 5}>
            <Skeleton className="w-full h-full" />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusPageSkeleton;
