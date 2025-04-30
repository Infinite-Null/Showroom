import { API_URL } from "@/constants/backend";
import axios from "axios";
import NavBar from "../components/global/Navbar/NavBar";
import './animation.css';
import Carousel from "@/components/Home/Carousel";
import OurShowrooms from "@/components/Home/OurShowrooms";
import OurVehicles from "@/components/Home/OurVehicles";
import GetInTouch from "@/components/Home/GetInTouch";
import Aboutus from "@/components/Home/AboutUs";
import Footer from "@/components/Home/Footer";

export default async function Home() {
  let images = []

  try {
    const carouselData =  await axios.get(API_URL + '/carousel');

    if(carouselData.status !== 200 || carouselData.data.status !== 'success') {
      throw new Error('Failed to fetch data');
    }

    if(!carouselData.data.data || carouselData.data.data.length === 0) {
      throw new Error('No data found');
    }
    
    images = carouselData.data.data.map((item) => ({
        src: item?.imageUrl ?? "",
        linkTo: item?.linkUrl ?? "",
        alt: item?.altText ?? "",
    }));

  } catch (error) {
    if(error.response) {
      // TODO: Handle specific error response
      return <h2> Failed to fetch data </h2>
    } else {
      // TODO: Handle specific error response
      return <h2> {error.message} </h2>
    }
  }

  return (
   <>
    <NavBar/>
    <main>
      <Carousel images={images}/>
      <OurShowrooms/>
      <OurVehicles/>
      <GetInTouch/>
      <Aboutus/>
    </main> 
    <Footer/>
   </>
  );
}
