import { useSearchRestaurants } from "@/api/RestaurantApi";
import CuisineFilter from "@/components/CuisineFilter";
import PaginationSelection from "@/components/PaginationSelection";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultInfo from "@/components/SearchResultInfo";
import SearchResultList from "@/components/SearchResultList";
import SearchPageSkeleton from "@/components/skeletons/SearchPageSkeleton";
import SortOptionDropdown from "@/components/SortOptionDropdown";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
  sortOption: string;
};

const SearchPage = () => {
  const { city } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
    selectedCuisines: [],
    sortOption: "bestMatch",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const { results, isLoading } = useSearchRestaurants(searchState, city);

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const setSortOption = (option: string) => {
    setSearchState((prevState) => ({
      ...prevState,
      sortOption: option,
      page: 1,
    }));
  };

  const setSelectedCuisines = (selectedCuisines: string[]) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedCuisines,
      page: 1,
    }));
  };

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
      page: 1,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      page: 1,
    }));
  };

  // if (isLoading) {
  //   return <span>Loading...</span>;
  // }

  // if (!results?.data || !city) {
  //   return;
  // }

  if ((!results?.data || !city) && !isLoading) {
    return <span>No results found.</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 mx-3 md:mx-0">
      <div id="cuisines-list">
        <CuisineFilter
          selectedCuisines={searchState.selectedCuisines}
          onChange={setSelectedCuisines}
          isExpanded={isExpanded}
          onExpanded={() => setIsExpanded((prevState) => !prevState)}
        />
      </div>

      <div id="main-content" className="flex flex-col gap-5">
        <SearchBar
          searchQuery={searchState.searchQuery}
          onSubmit={setSearchQuery}
          placeHolder="Search by Cuisine or Restaurant Name"
          onReset={resetSearch}
        />

        {isLoading ? (
          <SearchPageSkeleton />
        ) : (
          <>
            <div className="flex flex-col gap-3 justify-between sm:items-center sm:flex-row ">
              <SearchResultInfo total={results?.pagination.total} city={city} />

              <SortOptionDropdown
                sortOption={searchState.sortOption}
                onChange={(value) => setSortOption(value)}
              />
            </div>

            <SearchResultList restaurants={results?.data} />

            <PaginationSelection
              page={results?.pagination.page}
              pages={results?.pagination.pages}
              onPageChange={setPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
