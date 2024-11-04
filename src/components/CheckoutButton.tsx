import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import LoadingButton from "./LoadingButton";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";
import DeliveryDetailsForm from "./DeliveryDetailsForm";

type Props = {
  onCheckout: (userFormData: UserFormData) => void;
  disabled: boolean;
  isLoading: boolean;
};

const CheckoutButton = ({ disabled, onCheckout, isLoading }: Props) => {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <Button className="flex-1" onClick={onLogin}>
        Log in to check out
      </Button>
    );
  }

  if (isAuthLoading || isLoading) {
    return <LoadingButton />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={disabled} className="flex-1">
          Go To Checkout
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-[425px] md:min-w-[700px] bg-transparent p-0 border-none">
        <DeliveryDetailsForm onCheckout={onCheckout} />
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutButton;
