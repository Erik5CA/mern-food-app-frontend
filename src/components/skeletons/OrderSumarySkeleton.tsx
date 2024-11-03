import { Skeleton } from "../ui/skeleton";

const OrderSumarySkeleton = () => {
  return (
    <div className="border rounded-md space-y-3 p-5">
      <div>
        <div className="flex justify-between">
          <Skeleton className="w-[80px] h-[20px]" />
          <Skeleton className="w-[80px] h-[20px]" />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <Skeleton className="w-[80px] h-[20px]" />
          <Skeleton className="w-[80px] h-[20px]" />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <Skeleton className="w-[80px] h-[20px]" />
          <Skeleton className="w-[80px] h-[20px]" />
        </div>
      </div>

      <Skeleton className="w-full h-[30px]" />
    </div>
  );
};

export default OrderSumarySkeleton;
