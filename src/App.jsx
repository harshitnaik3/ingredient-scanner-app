import { useState } from "react";
import { HomeScreen } from "./components/HomeScreen";
import { ScannerScreen } from "./components/ScannerScreen";
import { ConfirmationScreen } from "./components/ConfirmationScreen";
import { ProductDetailsScreen } from "./components/ProductDetailsScreen";

// Mock Data - In a real app, this would come from a database/API
const products = {
  8901234567890: {
    name: "Whole Wheat Bread",
    brand: "Nature's Own",
    imageUrl: "https://placehold.co/400x400/F3EAD8/333?text=Whole+Wheat",
    rating: 3.5,
    ratingText: "A Good Option",
    insights: ["Low in Sugar", "Good Source of Fiber"],
  },
  9876543210987: {
    name: "Organic Apple Slices",
    brand: "FreshPicks",
    imageUrl: "https://placehold.co/400x400/EBF3E8/333?text=Apple+Slices",
    rating: 4.5,
    ratingText: "Excellent Choice",
    insights: ["Organic", "Great Source of Vitamins"],
  },
};

function App() {
  const [screen, setScreen] = useState("home"); // 'home', 'scanner', 'confirm', 'details'
  const [scannedProduct, setScannedProduct] = useState(null);

  const handleScan = (barcode) => {
    const product = products[barcode];
    if (product) {
      setScannedProduct(product);
    } else {
      setScannedProduct({
        name: "Unknown Product",
        brand: "Please try another",
        imageUrl: "https://placehold.co/400x400/ECEFF1/333?text=Not+Found",
      });
    }
    setScreen("confirm");
  };

  const resetApp = () => {
    setScannedProduct(null);
    setScreen("home");
  };

  const renderScreen = () => {
    switch (screen) {
      case "scanner":
        return (
          <ScannerScreen
            onScan={handleScan}
            onCancel={() => setScreen("home")}
          />
        );
      case "confirm":
        return (
          <ConfirmationScreen
            product={scannedProduct}
            onConfirm={() => setScreen("details")}
            onScanAgain={() => setScreen("scanner")}
          />
        );
      case "details":
        return (
          <ProductDetailsScreen
            product={scannedProduct}
            onScanAnother={resetApp}
          />
        );
      case "home":
      default:
        return <HomeScreen onStartScan={() => setScreen("scanner")} />;
    }
  };

  return (
    <main className="w-full min-h-screen bg-gray-200 font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-sm h-[800px] max-h-[90vh] bg-white shadow-2xl rounded-3xl overflow-hidden relative flex flex-col">
        {renderScreen()}
      </div>
    </main>
  );
}

export default App;
