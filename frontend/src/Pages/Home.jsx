import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="mb-6 flex flex-col items-center gap-4">
            <img
              src="/logo.png"
              alt="Voyage Francais logo"
              className="h-20 w-20 rounded-lg object-contain"
            />
            <h1 className="text-5xl font-bold">Voyage Français</h1>
          </div>

          <p className="text-xl mb-8">
            Learn French. Discover France. Plan Your Dream Journey.
          </p>

          <div className="flex justify-center gap-4">

            <Link
              to="/lessons"
              className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Start Learning
            </Link>

            <Link
              to="/destinations"
              className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700"
            >
              Explore France
            </Link>

          </div>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Why Voyage Français?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl mb-4">📚 Learn French</h3>
            <p>
              Practice useful vocabulary and phrases before your trip.
            </p>
          </div>

          <div className="shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl mb-4">🗼 Discover France</h3>
            <p>
              Explore famous destinations and hidden gems across France.
            </p>
          </div>

          <div className="shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl mb-4">✈️ Plan Your Trip</h3>
            <p>
              Organize your itinerary and keep all your travel plans in one place.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;
