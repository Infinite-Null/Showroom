"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
        name: "Products",
        href: "#",
        isExpanded: false,
        subLinks:[]
    },
    {
        name: "Services",
        href: "#",
        isExpanded: false,
        subLinks:[]
    },
    {
        name: "Shop",
        href: "#",
        isExpanded: false,
        subLinks:[]
    },
    {
        name: "Company",
        href: "#",
        isExpanded: false,
        subLinks:[]
    }
  ]

  // Prevent body scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to ensure body scroll is restored
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close drawer on window resize (when screen becomes desktop size)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
      <nav className="flex sticky top-0 z-50 items-center justify-between md:justify-center align-middle px-5 py-5 bg-[rgba(255,255,255,0.8)] backdrop-blur-sm shadow-md">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image
            src={"https://cdn4.singleinterface.com/files/outlet/logo/132996/Tvs_logo_png.png"}
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
        <ul className="hidden gap-10 w-full justify-center md:flex">
          {links.map((link, index) => (
            <li key={index}>
              <Link className="hover:text-orange-700 transition-colors text-md" href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div className="flex md:hidden z-50">
          <button 
            className="flex flex-col justify-center items-center w-8 h-8 relative" 
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? 'rotate-45' : 'translate-y-[-4px]'
            }`}></span>
            <span className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? '-rotate-45' : 'translate-y-[4px]'
            }`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer navigation */}
      <div
        className={`fixed top-0 right-0 z-40 w-full h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-22 pb-6 px-6">
          <ul className="flex flex-col space-y-2 text-lg">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="block py-2 hover:text-orange-700 text-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay for mobile drawer - conditionally rendered */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.2)] z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
