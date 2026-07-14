import { Link, Navigate } from "react-router-dom";

function Dashboard({ currentUser }) {

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  const user = currentUser;

  return (

    <div className="min-h-screen bg-gray-50">

      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold text-blue-900">
          Bonjour, {user.firstName}! 🇫🇷
        </h1>

        <p className="text-gray-600 mt-2">
          Welcome back to Voyage Français.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="text-5xl mb-4">📚</div>
            <h2 className="text-3xl font-bold">
              {user.completedLessons}
            </h2>
            <p className="text-gray-500 mt-2">
              Lessons Completed
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="text-5xl mb-4">✈️</div>
            <h2 className="text-3xl font-bold">
              0
            </h2>
            <p className="text-gray-500 mt-2">
              Planned Trips
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="text-5xl mb-4">🗺️</div>
            <h2 className="text-3xl font-bold">
              {user.savedDestinations}
            </h2>
            <p className="text-gray-500 mt-2">
              Saved Destinations
            </p>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="mt-12">

          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Continue Your Journey
          </h2>

          <div className="flex flex-wrap gap-4">

            <Link
              to="/lessons"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
            >
              📚 French Lessons
            </Link>

            <Link
              to="/trips"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
            >
              ✈️ My Trips
            </Link>

            <Link
              to="/destinations"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              🗺️ Explore France
            </Link>

          </div>

        </div>

        {/* Coming Soon */}
        <div className="mt-16 bg-white rounded-xl shadow p-8">

          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Coming Soon
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>⭐ Lesson Progress Tracking</li>
            <li>⭐ Saved Destinations</li>
            <li>⭐ Premium Travel Guides</li>
            <li>⭐ AI Travel Assistant</li>
          </ul>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;