import {
  useCreateRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantOrders,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import OrderItemCard from "@/components/OrderItemCard";
import OrdersManageSkeleton from "@/components/skeletons/OrdersManageSkeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { restaurant } = useGetMyRestaurant();
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoadin } =
    useUpdateMyRestaurant();
  const { orders, isLoading: isGetOrdersLoading } = useGetMyRestaurantOrders();

  const isEditing = !!restaurant;

  return (
    <Tabs defaultValue="orders">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
      </TabsList>

      <TabsContent
        value="orders"
        className="space-y-5 bg-gray-50 rounded-lg p-10"
      >
        {isGetOrdersLoading ? (
          <OrdersManageSkeleton />
        ) : (
          <>
            <h2 className="text-2xl font-bold">
              {orders?.length === 0
                ? "No Active Orders"
                : `${orders?.length ?? 0} Active orders`}
            </h2>
            {orders?.map((order) => (
              <OrderItemCard key={order._id} order={order} />
            ))}
          </>
        )}
      </TabsContent>

      <TabsContent value="manage-restaurant">
        <ManageRestaurantForm
          restaurant={restaurant}
          onSave={isEditing ? updateRestaurant : createRestaurant}
          isLoading={isCreateLoading || isUpdateLoadin}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ManageRestaurantPage;
