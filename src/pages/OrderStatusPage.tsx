import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import OrderStatusPageSkeleton from "@/components/skeletons/OrderStatusPageSkeleton";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return <OrderStatusPageSkeleton />;
  }

  if (!orders || orders.length === 0) {
    return <span>No orders found</span>;
  }

  return (
    <div className="space-y-10">
      {orders.map((order) => (
        <div className="space-y-10 bg-gray-50 p-5 sm:p-10 rounded-lg">
          <OrderStatusHeader order={order} />
          <div className="grid gap-10 md:grid-cols-2">
            <OrderStatusDetail order={order} />

            <AspectRatio ratio={16 / 5}>
              <img
                src={order.restaurant.imageUrl}
                alt="restaurant image"
                className="rounded-md object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;
