import { Restaurant } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dot, MapPin } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <Card className="border-sla">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl md:text-2xl font-bold tracking-tight">
            {restaurant.restaurantName}
          </CardTitle>
          <CardDescription className="flex flex-col ">
            <div className="flex items-center justify-center gap-1">
              <MapPin size={15} /> <p>Location</p>
            </div>
            <p className="text-orange-500">
              {restaurant.city}, {restaurant.country}
            </p>
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col">
        <h4 className="font-semibold text-orange-500">Cuisines</h4>
        <div className="flex">
          {restaurant.cuisines.map((item, index) => (
            <div className="flex" key={item}>
              <span>{item}</span>
              {index < restaurant.cuisines.length - 1 && <Dot />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
