import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="relative w-full h-[500px]">
        <h1 className="absolute text-center text-2xl md:text-5xl text-white bg-[rgba(0,0,0,0.7)] rounded-2xl backdrop-blur-2xl px-5 md:px-10 py-2 font-bold left-1/2 -translate-x-1/2 top-5 shadow">
          TVS Jupiter 125
        </h1>
        <video
          className="w-full h-[500px] object-cover rounded-b-[90px]"
          autoPlay
          loop
          muted
        >
          <source src="/videos/each_product_hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Image
          src="https://www.tvsmotor.com/tvs-jupiter-125/-/media/TVS-Jupiter-125/BannerImage/250x411_Orange.webp"
          alt="Hero Image"
          width={520}
          height={520}
          className="absolute bottom-[-50] left-1/2 -translate-x-1/2 w-[250px] h-[400px] object-cover"
        />
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center mt-10 gap-5 md:gap-10">
        <div className="flex justify-center items-center gap-5">
          <h2 className="text-2xl text-gray-500 font-bold">
            Price Starting at:
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800">
            ₹1,00,000*
          </p>
        </div>
        <button className="text-lg cursor-pointer text-white border-2 bg-orange-700 px-4 py-3 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out">
          Book Now
        </button>
      </div>
    </section>
  );
}
