import { useEffect, useRef, useState } from "react";
import { Camera, X, Zap } from "lucide-react";

export const ScannerScreen = ({ onScan, onCancel }) => {
  const videoRef = useRef(null);
  const [isFlashOn, setIsFlashOn] = useState(false);

  // Mock scanning functionality
  useEffect(() => {
    const mockScan = setTimeout(() => {
      onScan("8901234567890"); // Simulate scanning a known product
    }, 3000);
    return () => clearTimeout(mockScan);
  }, [onScan]);

  return (
    <div className="relative w-full h-full bg-gray-800 text-white flex flex-col items-center justify-center">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        playsInline
        muted
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      <div className="z-20 w-full h-full flex flex-col p-6">
        <div className="flex justify-between items-center w-full">
          <button
            onClick={() => setIsFlashOn(!isFlashOn)}
            className="p-3 bg-black bg-opacity-30 rounded-full"
          >
            <Zap className={isFlashOn ? "text-yellow-400" : "text-white"} />
          </button>
          <button
            onClick={onCancel}
            className="p-3 bg-black bg-opacity-30 rounded-full"
          >
            <X />
          </button>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center">
          <div className="w-full max-w-xs h-40 border-4 border-white rounded-2xl bg-transparent relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-500 bg-opacity-50 rounded-lg flex items-center justify-center">
                <Camera size={32} className="text-white opacity-70" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-lg">
            Align barcode within the frame
          </p>
        </div>
      </div>
    </div>
  );
};
