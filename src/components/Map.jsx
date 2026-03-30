import {
  Car,
  Clock,
  Navigation,
  Phone,
  Utensils
} from "lucide-react";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { halalMarker } from "../utils/mapMarker";
import "../utils/mapMarker.css";
import ZoomControl from "./ZoomControl";


const markerColors = [
  "#16a34a",
  "#dc2626",
  "#2563eb",
  "#f59e0b",
  "#7c3aed",
  "#db2777",
  "#0d9488",
];

const ResizeMap = () => {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => map.invalidateSize(), 0);
  }, [map]);

  return null;
};

const Map = ({ restaurants = [], onSelect }) => {
  const validRestaurants = restaurants.filter((res) => {
    const lat = Number(res.lat);
    const lng = Number(res.lng);
    return !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0;
  });

  return (
    <MapContainer
      center={[64.0, 26.0]}
      zoom={5}
      zoomControl={false}
      zoomAnimation={true}
      zoomAnimationThreshold={4}
      className="h-full w-full"
    >
      <ResizeMap />
      <ZoomControl/>

      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {validRestaurants.map((res, index) => {
        const color = markerColors[index % markerColors.length];

        return (
          <Marker
            key={index}
            position={[Number(res.lat), Number(res.lng)]}
            icon={halalMarker(res.rating || "4.6", color)}
            eventHandlers={{
              click: () => onSelect && onSelect(res),
            }}
          >
            <Popup closeButton={false} className="p-0! [&_.leaflet-popup-content-wrapper]:overflow-visible!">
              <div className="w-57.5 rounded-2xl bg-[#f8faf9] shadow-xl p-4 font-sans">
                
                {/* Header */}
                <div className="mb-2">
                  <div className="flex items-center gap-4">
                    
                    <div className="w-9 h-10 flex items-center justify-center bg-green-800 rounded-r-lg shrink-0">
                      <Utensils className="w-5 h-5 text-white" />
                    </div>

                    <div className="flex flex-col justify-center h-11">
                      <span className="text-[10px] font-semibold text-gray-500 tracking-wide leading-none">
                        SELECTED RESULT
                      </span>

                      <h3 className="text-[18px] font-bold text-gray-900 leading-tight mt-1 line-clamp-2">
                        {res.name}
                      </h3>
                    </div>

                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2 text-[13px] text-gray-700 mb-3">
                  
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center bg-green-700 rounded-md">
                      <Clock className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span>Open until {res.closingTime || "22:00"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center bg-green-700 rounded-md">
                      <Phone className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span>{res.phone || "+358 40 123 4567"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center bg-green-700 rounded-md">
                      <Car className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span>
                      {res.time || "4 min"} · {res.distance || "1.2 km"}
                    </span>
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => onSelect(res)}
                  className="w-full flex items-center justify-center gap-2 bg-green-800 hover:bg-green-900 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </button>

              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;