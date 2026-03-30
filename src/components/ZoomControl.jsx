import { useMap } from "react-leaflet";
import { Plus, Minus } from "lucide-react";

const ZoomControl = () => {
  const map = useMap();

  return (
    <div className="absolute top-4 right-4 z-1000 flex flex-col gap-3">
      
      <button
        onClick={() => map.zoomIn()}
        className="w-11 h-11 flex items-center justify-center 
        rounded-2xl bg-white/80 backdrop-blur-md shadow-lg 
        hover:scale-110 hover:bg-green-600 hover:text-white 
        transition-all duration-300"
      >
        <Plus className="w-5 h-5" />
      </button>

      <button
        onClick={() => map.zoomOut()}
        className="w-11 h-11 flex items-center justify-center 
        rounded-2xl bg-white/80 backdrop-blur-md shadow-lg 
        hover:scale-110 hover:bg-red-500 hover:text-white 
        transition-all duration-300"
      >
        <Minus className="w-5 h-5" />
      </button>

    </div>
  );
};

export default ZoomControl; 