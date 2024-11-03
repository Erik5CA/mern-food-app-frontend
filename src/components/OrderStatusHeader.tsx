import { Order, OrderStatus } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";

type Props = {
  order: Order;
};

const getExpectedDelivery = (order: Order) => {
  const created = new Date(order.createdAt);
  created.setMinutes(
    created.getMinutes() + order.restaurant.estimatedDeliveryTime
  );
  const hours = created.getHours();
  const minutes = created.getMinutes();
  const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${paddedMinutes}`;
};

const getOrderStatusInfo = (status: OrderStatus) => {
  return ORDER_STATUS.find((o) => o.value === status) || ORDER_STATUS[0];
};

const OrderStatusHeader = ({ order }: Props) => {
  return (
    <>
      <h1 className="text-2xl font-bold tracking-tighter flex flex-col gap-5 md:flex-row md:justify-between">
        <span>
          Order Status:{" "}
          <span className="text-zinc-600">
            {getOrderStatusInfo(order.status).label}
          </span>
        </span>
        <span>
          Expexted by:{" "}
          <span className="text-zinc-600">{getExpectedDelivery(order)}</span>
        </span>
      </h1>
      <Progress
        className="animate-pulse"
        value={getOrderStatusInfo(order.status).progressValue}
      />
    </>
  );
};

export default OrderStatusHeader;
