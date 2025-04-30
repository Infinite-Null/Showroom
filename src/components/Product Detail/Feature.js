"use client";
import Image from "next/image";
import { useEffect } from "react";
import "../../app/product/[id]/animation.css";
import Heading from "../global/Heading";

export default function Feature() {
  const left = [
    "125cc Engine",
    "125cc Engine",
    "125cc Engine",
    "125cc Engine",
    "125cc Engine",
  ];
  const right = [
    "125cc Engine",
    "125cc Engine",
    "125cc Engine",
    "125cc Engine",
    "125cc Engine",
  ];

  useEffect(() => {
    const featuresList = document.querySelectorAll(".features-list");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-enter-active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    featuresList.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      featuresList.forEach((item) => {
        observer.unobserve(item);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20">
      <Heading>Features</Heading>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-5">
        <ul className="flex flex-row md:flex-col justify-center items-center gap-5 flex-wrap">
          {left.map((item, idx) => (
            <li
              key={idx}
              className="md:mb-5 bg-orange-600 text-white  p-2 md:p-4 rounded-full font-bold text-lg md:text-xl features-list"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Center image */}
        <div className="w-full md:w-1/2">
          <Image
            src="https://www.tvsmotor.com/tvs-jupiter-125/-/media/Jupiter-125-Images/Colors/360/disc/orange/image1.webp"
            alt="Feature"
            width={1000}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>

        <ul className="flex flex-row md:flex-col justify-center items-center gap-5 flex-wrap">
          {right.map((item, idx) => (
            <li
              key={idx}
              className="md:mb-5 bg-orange-600 text-white  p-2 md:p-4 rounded-full font-bold text-lg md:text-xl features-list"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
