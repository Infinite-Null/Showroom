import NavBar from "@/components/global/Navbar/NavBar";
import Feature from "@/components/Product Detail/Feature";
import Hero from "@/components/Product Detail/Hero";

export default function ProductDetailPage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Feature />
      </main>
    </>
  );
}
