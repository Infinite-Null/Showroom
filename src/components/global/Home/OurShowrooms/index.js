import Heading from "../../Heading";
import EachCard from "./EachCard";

export default function OurShowrooms() {
  const showRooms = [
    {
      image:
        "https://images.unsplash.com/photo-1694271558638-7a6f4c8879b0?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 1",
      address: "Ground Floor Burdwan Road Siliguri",
      phone: "729098221",
      features: ["Sales", "Bike", "Services"],
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1694271558638-7a6f4c8879b0?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 1",
      address: "Ground Floor Burdwan Road Siliguri",
      phone: "729098221",
      features: ["Sales", "Bike", "Services"],
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1694271558638-7a6f4c8879b0?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 1",
      address: "Ground Floor Burdwan Road Siliguri",
      phone: "729098221",
      features: ["Sales", "Bike", "Services"],
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1694271558638-7a6f4c8879b0?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 1",
      address: "Ground Floor Burdwan Road Siliguri",
      phone: "729098221",
      features: ["Sales", "Bike", "Services"],
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <section className="py-10">
      <Heading>Our Showrooms</Heading>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {showRooms.map((showRoom, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <EachCard
              key={index}
              width={150}
              height={150}
              image={showRoom.image}
              alt={showRoom.alt}
              address={showRoom.address}
              phone={showRoom.phone}
              features={showRoom.features}
              description={showRoom.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
