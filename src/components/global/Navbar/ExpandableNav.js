import Link from "next/link";

export default function ExpandableNav({
  link,
  setIsOpen,
  index,
  current,
  setCurrent,
}) {
  const isExpanded = index === current;
  return (
    <li className={"relative flex flex-col items-start justify-start"}>
      <button
        onClick={() => {
          if (isExpanded) {
            setCurrent(null);
          } else {
            setCurrent(index);
          }
        }}
        className="flex cursor-pointer items-center justify-between gap-1 py-2 hover:text-orange-700 text-md transition-colors"
      >
        {link.name}{" "}
        <span>
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
      <ul
        className={`${
          isExpanded ? "py-2 opacity-100" : "h-0 opacity-0 py-0"
        } overflow-hidden pl-5 top-full md:absolute relative bg-gray-200 md:w-72 w-full gap-2 flex flex-col rounded-xl transition-all duration-400 shadow`}
      >
        {link.subLinks.map((subLink, subIndex) => (
          <li key={subIndex}>
            <Link
              href={subLink.href}
              className="block py-1 hover:text-orange-700 text-md transition-colors"
              onClick={() => {
                setIsOpen(false);
                setCurrent(null); 
              }}
            >
              {subLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
