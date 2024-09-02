import HeroImage from "./Hero";
import HeroCarousel from "./Carousel";
import Rankings from "./Rankings";

function Home() {
  return (
    <main className="flex-grow-1">
      <HeroImage />
      <HeroCarousel />
      <Rankings />
    </main>
  );
}

export default Home;
