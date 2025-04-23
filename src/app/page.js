import Carousel from "@/components/global/Home/Carousel";
import OurShowrooms from "@/components/global/Home/OurShowrooms";
import NavBar from "@/components/global/NavBar";

export default function Home() {

  return (
   <>
    <NavBar/>
    <main>
      <Carousel/>
      <OurShowrooms/>
    </main> 
   </>
  );
}
