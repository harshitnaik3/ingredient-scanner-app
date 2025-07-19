import { ArrowLeft, Star, CheckCircle } from "lucide-react";

// This would typically be fetched from your API
const recommendations = [
  {
    name: "Organic Banana",
    imageUrl: "https://placehold.co/200x200/FFF8E1/333?text=Banana",
    rating: 4.5,
  },
  {
    name: "Organic Grapes",
    imageUrl: "https://placehold.co/200x200/F3E5F5/333?text=Grapes",
    rating: 4.0,
  },
  {
    name: "Almond Flour Crackers",
    imageUrl: "https://placehold.co/200x200/EFEBE9/333?text=Crackers",
    rating: 4.2,
  },
];

export const ProductDetailsScreen = ({ product, onScanAnother }) => {
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="p-4 flex items-center border-b border-gray-200 flex-shrink-0">
        <button onClick={onScanAnother} className="p-2">
          <ArrowLeft size={24} className="text-gray-700" />
        </button>
        <h2 className="flex-grow text-center text-xl font-bold text-gray-800 pr-8">
          Product Details
        </h2>
      </header>

      <main className="flex-grow overflow-y-auto pb-24">
        <div className="p-4">
          <img
            src={product.imageUrl.replace("400x400", "800x600")}
            alt={product.name}
            className="w-full h-48 object-cover rounded-xl mb-4"
          />

          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>

          <div className="flex items-center my-2 gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={
                    i < Math.round(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                  fill={
                    i < Math.round(product.rating) ? "currentColor" : "none"
                  }
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-700">
              {product.rating}/5
            </span>
          </div>

          <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            {product.ratingText}
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
              Key Insights
            </h3>
            <ul className="space-y-2">
              {product.insights.map((insight, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 font-medium"
                >
                  <CheckCircle size={20} className="mr-3 text-green-500" />
                  {insight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800 px-4 mb-2">
            Healthier Alternatives
          </h3>
          <div
            className="flex gap-4 overflow-x-auto p-4"
            style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
          >
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-36 bg-white border border-gray-200 rounded-xl p-3"
              >
                <img
                  src={rec.imageUrl}
                  alt={rec.name}
                  className="w-full h-24 object-cover rounded-lg mb-2"
                />
                <p className="font-bold text-sm text-gray-800 truncate">
                  {rec.name}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <Star
                    size={16}
                    className="text-yellow-400"
                    fill="currentColor"
                  />
                  <span className="text-sm font-semibold text-gray-600">
                    {rec.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="absolute bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-sm border-t border-gray-200">
        <button
          onClick={onScanAnother}
          className="w-full bg-green-500 text-white font-bold py-4 rounded-full text-lg shadow-lg hover:bg-green-600 transition-colors"
        >
          Scan Another Product
        </button>
      </footer>
    </div>
  );
};
