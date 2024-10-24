import { Skeleton } from "../ui/skeleton";

const UserProfileFormSkeleton = () => {
  return (
    <div className="space-y-4 bg-gray-50 border border-orange-500 shadow-md rounded-lg p-2 md:p-10">
      <div>
        <Skeleton className="w-[200px] h-[20px] rounded-lg mb-3" />
        <Skeleton className="w-[300px] h-[20px] rounded-lg" />
      </div>

      <div>
        <Skeleton className="w-[200px] h-[20px] rounded-lg mb-3" />
        <Skeleton className="w-full h-[35px] rounded-lg" />
      </div>

      <div>
        <Skeleton className="w-[200px] h-[20px] rounded-lg mb-3" />
        <Skeleton className="w-full h-[35px] rounded-lg" />
      </div>

      <div className="flex flex-col gap-4 w-full md:flex-row">
        <div className="flex-1">
          <Skeleton className="w-[200px] h-[20px] rounded-lg mb-3" />
          <Skeleton className="w-full h-[35px] rounded-lg" />
        </div>
        <div className="flex-1">
          <Skeleton className="w-[200px] h-[20px] rounded-lg mb-3" />
          <Skeleton className="w-full h-[35px] rounded-lg" />
        </div>
        <div className="flex-1">
          <Skeleton className="w-[200px] h-[20px] rounded-lg mb-3" />
          <Skeleton className="w-full h-[35px] rounded-lg" />
        </div>
      </div>
      <Skeleton className="w-[100px] h-[40px] rounded-lg" />
    </div>
  );
};

export default UserProfileFormSkeleton;
