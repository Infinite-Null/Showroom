import Image from "next/image";
import Link from "next/link";

export default function EachVehicles({ isActive, vechicle }) {
  const { name, image, price, mileage, engine, transmission, fuelType } =
    vechicle;
  return (
    <div
      className={`flex flex-col md:flex-row gap-5 md:gap-20 items-center fade-in-zoom-up justify-center ${
        isActive ? "block" : "hidden"
      }`}
    >
      <Image
        src={image}
        alt=""
        height={200}
        width={200}
        // TODO: Improve aspect ratio.
        className="md:w-96 md:h-96 w-66 h-66 rounded-xl object-fit"
      />
      <div className=" bg-gray-200 rounded-xl overflow-hidden flex flex-col justify-between">
        <div className="flex flex-col justify-center flex-1 px-10 py-5 w-[350px] lg:w-[400px]">
          <h2 className="text-xl md:text-2xl font-bold mb-3">{name}</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg">Price: {`₹${price}`}</li>
            <li className="text-lg">Mileage: {`${mileage} km/l`}</li>
            <li className="text-lg">Engine: {`${engine} cc`}</li>
            <li className="text-lg">Transmission: {transmission}</li>
            <li className="text-lg">Fuel Type: {fuelType}</li>
          </ul>
        </div>
        <Link href={"#"} className="bg-orange-700 text-white hover:bg-orange-600 transition duration-300 h-13 text-lg cursor-pointer font-bold text-center flex items-center justify-center">
          <span>Book Now</span>
        </Link>
      </div>
    </div>
  );
}
