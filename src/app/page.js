
import Aboutus from "@/components/global/Home/AboutUs";
import Carousel from "@/components/global/Home/Carousel";
import GetInTouch from "@/components/global/Home/GetInTouch";
import OurShowrooms from "@/components/global/Home/OurShowrooms";
import OurVehicles from "@/components/global/Home/OurVehicles";
import NavBar from "../components/global/NavBar";
import './animation.css';

export default function Home() {

  return (
   <>
    <NavBar/>
    <main>
      <Carousel/>
      <OurShowrooms/>
      <OurVehicles/>
      <GetInTouch/>
      <Aboutus/>
    </main> 
   </>
  );
}
