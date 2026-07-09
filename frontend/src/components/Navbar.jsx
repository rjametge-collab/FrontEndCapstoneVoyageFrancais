import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-900"
        >
          🇫🇷 Voyage Français
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-lg">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/destinations"
            className="hover:text-blue-600 transition"
          >
            Destinations
          </Link>

          <Link
            to="/lessons"
            className="hover:text-blue-600 transition"
          >
            Lessons
          </Link>

          <Link
            to="/trips"
            className="hover:text-blue-600 transition"
          >
            Trip Planner
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-blue-600 transition"
          >
            Dashboard
          </Link>

        </div>

        {/* Buttons */}

        <div className="hidden md:flex gap-3">

          <Link
            to="/login"
            className="px-4 py-2 rounded-lg border border-blue-900 hover:bg-blue-900 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;