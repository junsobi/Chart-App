import React from "react";

const LoadingComponent: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="animate-spin mr-3 h-10 w-10 border-t-2 border-b-2 border-blue-500 rounded-full"></div>
      <p className="text-xl font-bold">Loading...</p>
    </div>
  );
};

export default LoadingComponent;
