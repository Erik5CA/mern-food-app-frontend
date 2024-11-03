import { Order } from "@/types";
import { Separator } from "./ui/separator";

type Props = {
  order: Order;
};
const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-5 capitalize">
      <div className="flex flex-col ">
        <span className="font-bold text-lg">Delivering to</span>
        <span>
          {" "}
          <span className="font-semibold">Customer:</span>{" "}
          {order.deliveryDetails.name}
        </span>
        <span>
          <span className="font-semibold">Address: </span>
          {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
        </span>
      </div>

      <div className="flex flex-col">
        <span className="font-bold text-lg">Order</span>
        <ul>
          {order.cartItems.map((item) => (
            <li key={item.menuItemId}>
              <span className="text-orange-500">({item.quantity})</span>{" "}
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <Separator className="bg-orange-500" />

      <div className="flex flex-col">
        <span className="font-bold">Total</span>
        <span>$ {(order.totalAmount / 100).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
