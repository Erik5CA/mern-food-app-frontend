import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { LogInIcon } from "lucide-react";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button
          variant={"outline"}
          className="font-bold hover:text-orange-500 hover:bg-white hover:border-orange-500"
          onClick={async () => await loginWithRedirect()}
        >
          {isLoading ? "Loading..." : "LogIn"}
          <LogInIcon />
        </Button>
      )}
    </span>
  );
};

export default MainNav;
