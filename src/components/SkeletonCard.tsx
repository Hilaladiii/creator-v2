import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-full h-fit max-w-56 rounded-md overflow-hidden shadow-card animate-pulse">
      <div className="w-full h-[20vh] bg-gray-300 shimmer"></div>

      <div className="p-5">
        <div className="flex flex-row justify-between items-center">
          <div className="w-1/3 h-4 bg-gray-300 rounded shimmer"></div>
          <div className="w-1/4 h-4 bg-gray-300 rounded shimmer"></div>
        </div>

        <div className="mt-2 w-2/3 h-6 bg-gray-300 rounded shimmer"></div>

        <div className="mt-2 w-1/2 h-4 bg-gray-300 rounded shimmer flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="w-full h-4 bg-gray-300 rounded shimmer"></div>
        </div>

        <div className="mt-2 w-1/3 h-4 bg-gray-300 rounded shimmer"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
