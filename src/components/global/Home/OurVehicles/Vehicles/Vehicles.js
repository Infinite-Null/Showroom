"use client";
import { useEffect, useState } from "react";
import EachVehicles from "./EachVehicles";

export default function Vehicles({ vechicles }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [vechicles]);

  const showNavButtons = vechicles.length > 1;

  return (
    <div className="w-full my-20 flex items-center justify-center relative">
      {showNavButtons && (
        <button
          onClick={() => {
            setIndex((index - 1 + vechicles.length) % vechicles.length);
          }}
          className="absolute cursor-pointer left-5 lg:left-20 top-1/3 lg:top-1/2 -translate-y-1/2 bg-gray-200 bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300 z-10"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      )}

      {showNavButtons && (
        <button
          onClick={() => {
            setIndex((index + 1 + vechicles.length) % vechicles.length);
          }}
          className="absolute cursor-pointer right-5 lg:right-20 top-1/3 lg:top-1/2 -translate-y-1/2 bg-gray-200 bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300 z-10"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      )}

      {vechicles.map((vehicle, i) => (
        <EachVehicles key={i} isActive={index === i} vechicle={vehicle} />
      ))}
    </div>
  );
}
