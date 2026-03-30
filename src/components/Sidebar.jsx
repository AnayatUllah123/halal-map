import {
  Heart,
  HouseHeart,
  PanelLeftCloseIcon,
  PanelRightOpen,
  Plus,
  Settings,
  Utensils
} from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const items = [
    { icon: <Utensils size={18} />, label: "Restaurants" },
    { icon: <HouseHeart size={18} />, label: "Mosques" },
    { icon: <Heart size={18} />, label: "Favorites" },
    { icon: <Settings size={18} />, label: "Settings" },
  ];

  return (
  <div
  className={`${
    open ? "w-56" : "w-20"
  } bg-[#ECF7F2] 
  h-[calc(100vh-64px)]   
  border-r border-gray-200 
  flex flex-col 
  transition-all duration-300`}
>

  <div
    className={`flex items-center p-4 ${
      open ? "justify-between" : "justify-center"
    }`}
  >
    {open && (
      <h1 className="text-green-800 font-bold text-lg">
        Nordic Concierge
      </h1>
    )}

    {open ? (
      <PanelLeftCloseIcon
        className="cursor-pointer text-green-700"
        onClick={() => setOpen(false)}
      />
    ) : (
      <PanelRightOpen
        className="cursor-pointer text-green-700"
        onClick={() => setOpen(true)}
      />
    )}
  </div>

  <div className="flex-1 overflow-y-auto px-2 space-y-3">
    {items.map((item, index) => (
      <SidebarItem key={index} item={item} open={open} />
    ))}
  </div>

  <div className="p-3 border-t border-gray-200 bg-[#ECF7F2]">
    <button
      className="w-full flex items-center justify-center gap-2
      bg-green-700 hover:bg-green-800
      text-white font-semibold
      py-2.5 rounded-xl
      shadow-md hover:shadow-lg transition"
    >
      <Plus size={18} />
      {open && <span>Add Restaurant</span>}
    </button>
  </div>
</div>
  );
};

const SidebarItem = ({ item, open }) => {
  return (
    <div
      className="
        flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer
        hover:bg-green-100 transition
      "
    >
      <div
        className="
          w-7 h-7 flex items-center justify-center
          rounded-lg bg-green-800 text-white shrink-0
        "
      >
        {item.icon}
      </div>

      {open && (
        <span className="text-sm font-medium text-green-900">
          {item.label}
        </span>
      )}
    </div>
  );
};

export default Sidebar;