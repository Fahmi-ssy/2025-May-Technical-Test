export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md py-4 px-6 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-white text-2xl font-extrabold tracking-wide hover:scale-105 transition-transform duration-200">
          🚀 Technical Test
        </div>
        <ul className="flex space-x-6 mt-4 md:mt-0"></ul>
      </div>
    </nav>
  );
}
