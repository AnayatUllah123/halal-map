import {
    ArrowLeft,
    Clock,
    Globe,
    MapPin,
    Navigation,
    Star
} from "lucide-react";

const RestaurantDetailPanel = ({ restaurant, onClose }) => {
  if (!restaurant) return null;

  return (
    <div className="h-full bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col overflow-hidden">
      
      {/* Header */}
      <div className="relative">
        <img
          src={restaurant.image || "/assets/Food2.jpg"}
          className="w-full h-70 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

        {/* Back Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 bg-white/90 hover:bg-white transition rounded-full w-10 h-10 shadow flex items-center justify-center"
        >
          <ArrowLeft size={18} />
        </button>

        {/* Title */}
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-xl font-bold">{restaurant.name}</h2>
          <p className="text-sm opacity-90">{restaurant.cuisine}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-5 overflow-y-auto flex-1">

        {/* Rating */}
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
            <Star size={14} className="text-yellow-400" /> {restaurant.rating || "4.6"}
          </span>
        </div>

        {/* Address + Hours */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Address */}
          <div className="bg-green-50 rounded-xl p-4 hover:bg-green-100 transition">
            <h4 className="flex items-center gap-1 text-xs text-green-700 font-semibold mb-1">
              <MapPin size={14} /> ADDRESS
            </h4>
            <p className="text-sm font-medium text-gray-800">
              {restaurant.address}
            </p>
            <p className="text-xs text-gray-500">{restaurant.city}</p>
          </div>

          {/* Hours */}
          <div className="bg-green-50 rounded-xl p-4 hover:bg-green-100 transition">
            <h4 className="flex items-center gap-1 text-xs text-green-700 font-semibold mb-1">
              <Clock size={14} /> OPENING HOURS
            </h4>
            <p className="text-sm font-medium text-gray-800">
              {restaurant.hours || "Mon – Sun: 11:00 – 22:00"}
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">

          {/* Visit Website */}
          <a
            href={restaurant.website}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 flex-1 bg-green-700 hover:bg-green-800 text-white py-2.5 rounded-xl font-semibold transition shadow-md hover:shadow-lg"
          >
            <Globe size={16} />
            Visit Website
          </a>

          {/* Directions */}
          <button
            className="flex items-center justify-center gap-2 flex-1 border border-green-200 text-green-700 hover:bg-green-50 py-2.5 rounded-xl font-semibold transition"
          >
            <Navigation size={16} />
            Directions
          </button>

        </div>

      </div>
    </div>
  );
};

export default RestaurantDetailPanel;