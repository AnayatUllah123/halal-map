const RestaurantCard = ({ restaurant, detailed }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition duration-300">
      
      <div className="w-full h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden">
        <img
          src={restaurant.image || "/assets/Food2.jpg"}
          alt={restaurant.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-3 sm:p-4">
        
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-sm sm:text-base md:text-lg line-clamp-1">
            {restaurant.name || "No Name"}
          </h3>

          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded shrink-0">
            ★ 4.6
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-1">
          {restaurant.city || "Unknown City"}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            {restaurant.cuisine || "N/A"}
          </span>

          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
            Verified Halal
          </span>

        </div>

        <div className="mt-3">
          <button className="w-full sm:w-auto text-xs sm:text-sm bg-green-100 text-green-700 px-3 py-2 rounded-lg hover:bg-green-200 transition">
            For More Details
          </button>
        </div>

        {detailed && (
          <div className="text-xs sm:text-sm mt-3 text-gray-600 space-y-1">
            <p className="line-clamp-2">{restaurant.address}</p>
            <p>Hours: {restaurant.hours || "N/A"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;