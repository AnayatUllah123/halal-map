import { useState } from "react";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import RestaurantDetailPanel from "../components/RestaurantDetailPanel";
import RestaurantList from "../components/RestaurantList";
import Sidebar from "../components/Sidebar";
import { useRestaurants } from "../hooks/useRestaurants";

const Home = () => {
  const { restaurants, loading } = useRestaurants();
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  const mapRestaurants = selected ? [selected] : restaurants;

  return (
    <div className="h-screen flex flex-col">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        {/* L(List ya Detail) */}
        <div className="w-195 bg-[#F7FBF9] p-4 shrink-0 h-full no-scrollbar overflow-y-auto">
          
          
          {!selected ? (
            <RestaurantList
              restaurants={restaurants}
              searchQuery={searchQuery}
              onSelect={setSelected}
            />
          ) : (
            <RestaurantDetailPanel
              restaurant={selected}
              onClose={() => setSelected(null)}
            />
          )}

        </div>

        {/* MAP */}
        <div className="flex-1 min-w-75">
          <Map
            restaurants={mapRestaurants} 
            onSelect={setSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;