import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

const OrdersManageSkeleton = () => {
  return (
    <>
      <Skeleton className="w-[250px] h-[25px]" />
      <Card>
        <CardHeader>
          <CardTitle className="grid md:grid-cols-4 gap-4 justify-between mb-3">
            <Skeleton className="w-[150px] h-[20px]" />
            <Skeleton className="w-[150px] h-[20px]" />
            <Skeleton className="w-[150px] h-[20px]" />
            <Skeleton className="w-[150px] h-[20px]" />
          </CardTitle>
          <Separator />
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Skeleton className="w-[100px] h-[20px]" />
            <Skeleton className="w-[130px] h-[20px]" />
          </div>

          <div className="flex flex-col space-y-1.5">
            <Skeleton className="w-[130px] h-[20px]" />
            <Skeleton className="w-full h-[27px]" />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default OrdersManageSkeleton;
