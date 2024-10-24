import { Link } from "react-router-dom";
import MovileNav from "./MovileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          MernEats.com
        </Link>

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
