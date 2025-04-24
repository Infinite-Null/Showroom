
import Aboutus from "../components/global/home/AboutUs";
import Carousel from "../components/global/home/Carousel";
import GetInTouch from "../components/global/home/GetInTouch";
import OurShowrooms from "../components/global/home/OurShowrooms";
import OurVehicles from "../components/global/home/OurVehicles";
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
