import Link from "next/link";
import { useState } from "react";

export default function ExpandableNav({ link, setIsOpen }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <li
      className={`relative flex flex-col items-start justify-start`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between gap-1 py-2 hover:text-orange-700 text-md transition-colors"
      >
        {link.name} <span>
            <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M6 9l6 6 6-6" />
            </svg>
        </span>
      </button>
      {isExpanded && (
        <ul className="pl-5 py-2 bg-gray-200 w-full gap-2 flex flex-col rounded-xl fade-in-zoom-up">
          {link.subLinks.map((subLink, subIndex) => (
            <li key={subIndex}>
              <Link
                href={subLink.href}
                className="block py-1 hover:text-orange-700 text-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {subLink.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
