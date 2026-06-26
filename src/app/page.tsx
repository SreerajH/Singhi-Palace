import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import Venue from "@/components/Venue";
import GalleryHall from "@/components/GalleryHall";
import Testimonials from "@/components/Testimonials";
import Enquire from "@/components/Enquire";
import Footer from "@/components/Footer";
import MobileEnquireBar from "@/components/MobileEnquireBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Offerings />
        <Venue />
        <GalleryHall />
        <Testimonials />
        <Enquire />
      </main>
      <Footer />
      <MobileEnquireBar />
    </>
  );
}
