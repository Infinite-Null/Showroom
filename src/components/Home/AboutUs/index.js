import Heading from "@/components/global/Heading";
import Image from "next/image";


export default function Aboutus() {
  return (
    <section className="py-20">
      <Heading>About Us</Heading>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                TVS Motor: Powering India & Beyond with Innovation and Trust
              </h2>

              <p className="mt-4 text-gray-700">
                {
                  "TVS Motor Company, India's 3rd largest two & three-wheeler manufacturer, boasts a formidable dealership network of over 4,000 touchpoints nationwide. In addition to India we are also present in over 93 countries. We are deeply commited to delivering unparalleled customer experiences through cutting-edge products and services."
                }
              </p>
            </div>
          </div>

          <div>
            <Image
              src="https://www.financialexpress.com/wp-content/uploads/2023/05/suzuki-bike-zone-1.jpg"
              className="rounded w-full object-cover h-86"
              alt="Showroom Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
