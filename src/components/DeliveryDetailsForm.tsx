import { useGetMyUser } from "@/api/MyUserApi";
import UserProfileForm, {
  UserFormData,
} from "@/forms/user-profile-form/UserProfileForm";
import UserProfileFormSkeleton from "./skeletons/UserProfileFormSkeleton";

type Props = {
  onCheckout: (userFormData: UserFormData) => void;
};

const DeliveryDetailsForm = ({ onCheckout }: Props) => {
  const { currentUser, isLoading } = useGetMyUser();

  if (isLoading) {
    return <UserProfileFormSkeleton />;
  }

  if (!currentUser) {
    return <span>Unable to load user profile.</span>;
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      isLoading={isLoading}
      title="Delivery Details"
      buttonText="Continue to checkout"
      description="Please provide your delivery details before proceeding to checkout"
      onSave={onCheckout}
    />
  );
};

export default DeliveryDetailsForm;
