import React from 'react';

export function Hero() {
  return (
    <div className="h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/bg.jpg" // Replace with your full-width hero image path
        alt="Beautiful location for capturing memories"
        className="w-full h-full object-cover object-center absolute top-0 left-0 z-0"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 z-10" />
      <div className="relative text-center z-20 px-4">
        {/* Text with Drop Shadow */}
        <h1 className="text-6xl font-bold text-white leading-tight mb-8 shadow-lg shadow-gray-700">
          Share Your Memories
        </h1>
        {/* Button with Outline and Hover Effect */}
        <button className="border border-gray-100 hover:bg-gray-900 text-gray-100 font-bold py-2 px-4 rounded-full shadow-md w-60">
          Start Now
        </button>
      </div>
    </div>
  );
}
