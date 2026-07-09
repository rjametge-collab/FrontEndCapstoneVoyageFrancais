function Home() {
  return (
    <div className="text-center">

      <section className="py-24 px-6">

        <h1 className="text-6xl font-bold text-blue-900 mb-6">
          Learn French Through Travel
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">

          Explore France, master everyday French, and build unforgettable
          travel experiences with Voyage Français.

        </p>

        <div className="mt-10 flex justify-center gap-5">

          <button className="bg-blue-900 text-white px-8 py-4 rounded-xl hover:scale-105 transition">

            Explore Destinations

          </button>

          <button className="bg-red-600 text-white px-8 py-4 rounded-xl hover:scale-105 transition">

            Start Learning

          </button>

        </div>

      </section>

    </div>
  );
}

export default Home;