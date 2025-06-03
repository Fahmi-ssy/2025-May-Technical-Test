export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} My Project. All rights reserved. Please Hire me!
        </div>
       
      </div>
    </footer>
  );
}
