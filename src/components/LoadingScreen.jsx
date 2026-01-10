import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [opacity, setOpacity] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fade in
    setOpacity(1);

    // Smooth progress animation
    const duration = 1200;
    const interval = 20;
    const increment = 100 / (duration / interval);
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Fade out before completing
          setTimeout(() => {
            setOpacity(0);
            setTimeout(() => {
              onComplete();
            }, 300);
          }, 200);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center transition-opacity duration-300"
      style={{ opacity }}
    >
      {/* Name */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
          Jack{" "}
          <span className="text-gray-600">Kong</span>.
        </h1>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-[1px] bg-gray-200 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gray-900 transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
