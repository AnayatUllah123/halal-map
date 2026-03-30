const RestaurantCard = ({ restaurant, detailed }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
      <img
        src={restaurant.image || "/assets/Food2.jpg"}
        className="h-50 w-full object-cover"
      />

      <div className="p-3">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">
            {restaurant.name || "No Name"}
          </h3>

          <span className="text-xs bg-green-100 text-green-500 px-2 py-1 rounded">
            ★ 4.6
          </span>
        </div>

        <p className="text-xs text-gray-500">
          {restaurant.city || "Unknown City"}
        </p>

        <div className="flex gap-2 mt-2">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            {restaurant.cuisine || "N/A"}
          </span>

          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
            Verified Halal
          </span>

          <span className="text-xs bg-green-200 text-green-700 px-2 py-1 rounded cursor-pointer">
            <button className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded cursor-pointer">
              For More Details
            </button>
          </span>
        </div>

        {detailed && (
          <div className="text-sm mt-2 text-gray-600">
            <p>{restaurant.address}</p>
            <p>Hours: {restaurant.hours || "N/A"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;