export const ConfirmationScreen = ({ product, onConfirm, onScanAgain }) => (
  <div className="flex flex-col h-full bg-black bg-opacity-50">
    <div className="flex-grow"></div>
    <div className="bg-white rounded-t-3xl p-6 text-center flex-shrink-0">
      <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6"></div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Is this the correct product?
      </h2>

      <div className="bg-gray-100 rounded-xl p-4 flex items-center gap-4 mb-8">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div className="text-left">
          <p className="font-bold text-lg text-gray-800">{product.name}</p>
          <p className="text-gray-500">{product.brand}</p>
        </div>
      </div>

      <div className="space-y-4">
        <button
          onClick={onConfirm}
          className="w-full bg-green-500 text-white font-bold py-4 rounded-full text-lg shadow-lg hover:bg-green-600 transition-colors"
        >
          Yes, Show Rating
        </button>
        <button
          onClick={onScanAgain}
          className="w-full bg-white text-gray-700 font-bold py-4 rounded-full text-lg border-2 border-gray-300 hover:bg-gray-100 transition-colors"
        >
          Scan Again
        </button>
      </div>
      <div className="h-4"></div>
    </div>
  </div>
);
