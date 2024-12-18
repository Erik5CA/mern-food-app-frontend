import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { CircleMinus } from "lucide-react";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

const OrderSumary = ({ restaurant, cartItems, removeFromCart }: Props) => {
  const getTotalCost = () => {
    const totalInPence = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const totalWithDelivery = totalInPence + restaurant.deliveryPrice;

    return (totalWithDelivery / 100).toFixed(2);
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-lg font-bold tracking-tight flex justify-between">
          <span>Your Order</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-5">
        <div className="grid grid-cols-[1fr_90px] gap-2 items-center justify-center">
          {cartItems.map((item) => (
            // <div key={item._id} className="flex justify-between">
            <>
              <span>
                <Badge className="mr-2">{item.quantity}</Badge>
                {item.name}
              </span>
              <span className="flex items-center gap-1 ">
                <CircleMinus
                  className="text-red-500 cursor-pointer"
                  size={20}
                  onClick={() => removeFromCart(item)}
                />
                $ {((item.price * item.quantity) / 100).toFixed(2)}
              </span>
            </>
            // </div>
          ))}
        </div>

        <Separator className="bg-orange-500" />

        <div className="flex justify-between">
          <span>Delivery</span>
          <span>$ {(restaurant.deliveryPrice / 100).toFixed(2)}</span>
        </div>
        <Separator className="bg-orange-500" />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>$ {getTotalCost()}</span>
        </div>
      </CardContent>
    </>
  );
};

export default OrderSumary;
