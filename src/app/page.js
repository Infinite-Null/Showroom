
import Aboutus from "@/components/global/Home/AboutUs";
import Carousel from "@/components/global/Home/Carousel";
import Footer from "@/components/global/Home/Footer";
import GetInTouch from "@/components/global/Home/GetInTouch";
import OurShowrooms from "@/components/global/Home/OurShowrooms";
import OurVehicles from "@/components/global/Home/OurVehicles";
import { API_URL } from "@/constants/backend";
import axios from "axios";
import NavBar from "../components/global/Navbar/NavBar";
import './animation.css';

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
