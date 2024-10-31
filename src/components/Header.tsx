import { Link } from "react-router-dom";
import MovileNav from "./MovileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center px-2">
        <div className="flex flex-row gap-2 items-center justify-center">
          <img src="/logo.svg" alt="logo" className="w-10 h-10" />
          <Link
            to="/"
            className="text-3xl font-bold tracking-tight text-orange-500"
          >
            MernEats.com
          </Link>
        </div>

        <div className="md:hidden">
          <MovileNav />
        </div>

        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
