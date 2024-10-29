import { Restaurant } from "@/types";
import SearchResultCard from "./SearchResultCard";

type Props = {
  restaurants: Restaurant[] | undefined;
};

const SearchResultList = ({ restaurants }: Props) => {
  if (!restaurants) {
    return;
  }

  const thereAreRestaurants = restaurants.length > 0 ? true : false;

  return (
    <>
      {thereAreRestaurants ? (
        restaurants.map((restaurant) => (
          <SearchResultCard key={restaurant._id} restaurant={restaurant} />
        ))
      ) : (
        <div className="w-full text-center font-semibold text-xl">
          <p>Not Result Found for this search.</p>
        </div>
      )}
    </>
  );
};

export default SearchResultList;
