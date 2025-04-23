import Image from "next/image";

export default function EachCard({
  image,
  alt,
  width,
  height,
  address,
  phone,
  features,
  description
}) {
  return (
    <div className="flex items-stretch gap-4">
      <Image
        width={width}
        height={height}
        alt={alt}
        src={image}
        className="w-30 rounded object-cover"
      />

      <div>
        <h3 className="text-gray-900 sm:text-xl font-bold">{address}</h3>
        <h4 className="text-gray-900 sm:text-sm font-bold">{`+91 ${phone}`}</h4>
        <p className="text-gray-700 text-sm mt-2">{description}</p>
        <ul className="p-2 flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <li key={index} className="text-orange-700 text-sm">
              <span>&#10003;</span> {`${feature}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
