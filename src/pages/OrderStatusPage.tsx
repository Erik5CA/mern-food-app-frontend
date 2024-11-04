import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import OrderStatusPageSkeleton from "@/components/skeletons/OrderStatusPageSkeleton";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const OrderStatusPage = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const { orders, isLoading } = useGetMyOrders();

  useEffect(() => {
    if (!orders) return;
    // console.log(success);
    if (success) {
      orders.forEach((order) => {
        if (order.status === "paid") {
          sessionStorage.removeItem(`cartItems-${order.restaurant._id}`);
          sessionStorage.removeItem(`orderId-${order.restaurant._id}`);
        }
      });
    }
  }, [orders]);

  if (isLoading) {
    return <OrderStatusPageSkeleton />;
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">You have no orders</h1>
        <p className="text-gray-500">
          Go to the{" "}
          <Link to={"/"} className="text-orange-500 underline">
            search page
          </Link>{" "}
          to place an order
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {orders.map((order) => (
        <div
          key={order._id}
          className="space-y-10 bg-gray-50 p-5 sm:p-10 rounded-lg shadow-md"
        >
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
