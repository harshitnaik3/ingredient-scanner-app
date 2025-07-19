import { Camera } from "lucide-react";

export const HomeScreen = ({ onStartScan }) => (
  <div className="flex flex-col items-center justify-center text-center h-full p-8 bg-gray-50">
    <div className="flex-grow flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">
        Shop Smarter, Eat Better.
      </h1>
      <p className="mt-4 text-lg text-gray-500">
        Scan a product's barcode to see its health rating.
      </p>
    </div>
    <button
      onClick={onStartScan}
      className="w-full max-w-xs bg-green-500 text-white font-bold py-4 px-6 rounded-full flex items-center justify-center gap-3 text-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
    >
      <Camera size={24} />
      Scan Product Barcode
    </button>
    <div className="h-16"></div>
  </div>
);
