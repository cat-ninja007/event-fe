import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UpcomingEvents from "@/components/UpcomingEvents";
import BrowseArts from "@/components/BrowseArts";
import BrowseConcert from "@/components/BrowseConcert";
import HotOffers from "@/components/HotOffers";
import TopSelling from "@/components/TopSelling";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <HotOffers />
      <TopSelling />
      <BrowseArts />
      <BrowseConcert />
      <Footer />
    </>
  );
}
