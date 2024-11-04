import { MenuItem as MenuItemType } from "@/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

type Props = {
  menuItem: MenuItemType;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>

      <CardContent className="font-bold">
        $ {(menuItem.price / 100).toFixed(2)}
      </CardContent>

      <CardFooter className="flex w-full">
        <Button className="w-full" onClick={addToCart}>
          <Plus />
          Add to Order
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuItem;
