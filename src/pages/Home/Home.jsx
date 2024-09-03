import HeroImage from "./Hero";
import HeroCarousel from "./Carousel";
import Rankings from "./Rankings";

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
    </main>
  );
}

export default Home;
