import { useMemo, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const CUISINES = ["All", "Arab", "Syrian", "Bangladeshi"];

const RestaurantList = ({ restaurants = [], onSelect, searchQuery = "" }) => {
  const [activeCuisine, setActiveCuisine] = useState("All");

  const filteredRestaurants = useMemo(() => {
    let filtered = restaurants;

    // Filter by cuisine
    if (activeCuisine !== "All") {
      filtered = filtered.filter(
        (r) => r.cuisine?.toLowerCase() === activeCuisine.toLowerCase()
      );
    }

    // Filter by search query (name or cuisine)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.name?.toLowerCase().includes(query) ||
          r.cuisine?.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [restaurants, activeCuisine, searchQuery]);

  return (
    <div className="space-y-4">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-green-900">
        Top Halal Restaurants
      </h2>

      {/* Cuisine Filters */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {CUISINES.map((cuisine) => {
          const isActive = activeCuisine === cuisine;
          return (
            <button
              key={cuisine}
              onClick={() => setActiveCuisine(cuisine)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition whitespace-nowrap
                ${
                  isActive
                    ? "bg-green-700 text-white"
                    : "bg-green-100 text-green-800 hover:bg-green-200"
                }`}
            >
              {cuisine}
            </button>
          );
        })}
      </div>

      <div className="space-y-4">
        {filteredRestaurants.length === 0 ? (
          <p className="text-sm text-gray-500">No restaurants found.</p>
        ) : (
          filteredRestaurants.map((res, i) => (
            <div key={i} onClick={() => onSelect?.(res)}>
              <RestaurantCard restaurant={res} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurantList;