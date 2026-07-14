function Card({ title, subtitle, description, buttonText }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
      <h3 className="text-2xl font-bold text-blue-800">
        {title}
      </h3>

      <p className="text-gray-600 mt-2">
        {subtitle}
      </p>

      <p className="mt-4 text-gray-700">
        {description}
      </p>

      <button className="mt-6 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900">
        {buttonText}
      </button>
    </div>
  );
}

export default Card;