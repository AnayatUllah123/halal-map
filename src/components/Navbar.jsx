import { Menu, Search, Send, User } from "lucide-react";
import { useState } from "react";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Discover", href: "#" },
    { name: "Favorites", href: "#" },
    { name: "Recent", href: "#" },
  ];

  return (
    <div className="w-full bg-[#ECF7F2] border-b border-gray-200 shadow-sm">
      <div className="h-16 flex items-center px-6">
        
        <div className="font-bold text-2xl text-green-800">
          Verdant Halal
        </div>

        <div className="hidden md:flex ml-10 gap-8 text-sm">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative text-green-600 hover:text-green-800 transition group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="ml-auto hidden md:flex items-center gap-4">

          <div className="relative">
            <Search className="absolute top-2.5 left-3 w-4 h-4 text-gray-400" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or cuisine..."
              className="pl-9 pr-3 py-2 rounded-full border border-gray-300 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition"
            />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer bg-green-700 text-white text-sm hover:bg-green-800 transition shadow-sm">
            <Send size={14} />
            Near Me
          </button>

          <div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center text-white cursor-pointer hover:bg-green-800 transition">
            <User size={18} />
          </div>
        </div>

        <div className="ml-auto md:hidden">
          <Menu
            className="cursor-pointer text-gray-700"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-600 hover:text-green-700 border-b pb-1"
            >
              {link.name}
            </a>
          ))}

          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or cuisine..."
            className="mt-2 px-3 py-2 border rounded-full text-sm"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;