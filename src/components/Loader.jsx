const Loader = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#F7FBF9]">

      {/* LOGO / BRAND */}
      <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-6 animate-pulse">
        Nordic Concierge
      </h1>

      {/* SPINNER */}
      <div className="relative">
        <div className="w-14 h-14 border-4 border-green-200 rounded-full"></div>
        <div className="w-14 h-14 border-4 border-green-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
      </div>

      {/* TEXT */}
      <p className="mt-4 text-gray-500 text-sm md:text-base">
        Finding the best halal places for you...
      </p>
    </div>
  );
};

export default Loader;