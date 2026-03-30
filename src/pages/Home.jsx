import { useState } from "react";
import Loader from "../components/Loader";
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
  const [showMap, setShowMap] = useState(false); 

 if (loading) {
  return <Loader />;
}
  const mapRestaurants = selected ? [selected] : restaurants;

  return (
    <div className="h-screen flex flex-col">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="md:hidden p-2 flex gap-2">
        <button
          onClick={() => setShowMap(false)}
          className={`flex-1 p-2 rounded ${
            !showMap ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          List
        </button>
        <button
          onClick={() => setShowMap(true)}
          className={`flex-1 p-2 rounded ${
            showMap ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          Map
        </button>
      </div>

      {/* <div className="flex flex-1 overflow-hidden"> */}
      <div className="flex flex-1 overflow-hidden relative">
        
        <div className="hidden md:block">
          <Sidebar />
        </div>

        <div
          className={`
            ${showMap ? "hidden" : "block"} 
            md:block 
            w-full 
            md:flex-[0_0_60%] 
            min-h-0
            bg-[#F7FBF9] 
            p-4 
            no-scrollbar
            overflow-y-auto
          `}
        >
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

        <div
          className={`
            ${showMap ? "block" : "hidden"} 
            md:block 
            w-full 
            md:flex-[0_0_40%] 
            min-h-0
          `}
        >
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


