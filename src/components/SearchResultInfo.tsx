import { Link } from "react-router-dom";

type Props = {
  total: number | undefined;
  city: string | undefined;
};

const SearchResultInfo = ({ total, city }: Props) => {
  if (!total && !city) return;
  return (
    <div className="text-sm md:text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <div className="flex items-center gap-2 justify-center sm:justify-start">
        <span className="text-white rounded-full w-8 bg-orange-500 text-center">
          {total}
        </span>{" "}
        Restaurant found in{" "}
        <span className="italic text-orange-500">{city}</span>
        <Link
          to={"/"}
          className="ml-1 text-sm font-semibold underline cursor-pointer text-orange-500"
        >
          Change Location
        </Link>
      </div>
    </div>
  );
};

export default SearchResultInfo;
