import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MovileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to={"/order-status"}
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        <span>Order Status</span>
      </Link>
      <Link
        to={"/manage-restaurant"}
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        <span>My Restaurant</span>
      </Link>
      <Link
        to={"/user-profile"}
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        <span>User Profile</span>
      </Link>
      <Button
        className="flex items-center font-bold px-3 hover:bg-gray-500"
        onClick={() => logout()}
      >
        Log Out
      </Button>
    </>
  );
};

export default MovileNavLinks;
