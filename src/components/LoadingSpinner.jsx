import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-4 border-purple-500 border-solid border-t-transparent rounded-full animate-spin shadow-lg shadow-purple-300"></div>

        <p className="mt-4 text-lg font-semibold text-gray-700 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
