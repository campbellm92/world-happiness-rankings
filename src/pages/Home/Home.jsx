import HeroImage from "./Hero";
import HeroCarousel from "./Carousel";
import Rankings from "./Rankings";
import Trends from "./Trends";
import Factors from "./Factors";

function Home() {
  return (
    <main className="flex-grow-1">
      <section>
        <HeroImage />
        <HeroCarousel />
      </section>
      <section className="mt-5 first-rankings-section">
        <Rankings />
      </section>
      <section className="second-rankings-section">
        <Trends />
      </section>
      <section className="factors-section">
        <Factors />
      </section>
    </main>
  );
}

export default Home;
