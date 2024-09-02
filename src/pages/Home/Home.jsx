import HeroImage from "./Hero";
import HeroCarousel from "./Carousel";

function Home() {
  return (
    <main className="flex-grow-1">
      <HeroImage />
      <HeroCarousel />
    </main>
  );
}

export default Home;
