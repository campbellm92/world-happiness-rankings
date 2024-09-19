import HeroImage from "./Hero";
import HeroCards from "./HeroCards";
import Rankings from "./Rankings";
import Trends from "./Trends";
import FactorsMain from "./FactorsMain";

function Home() {
  return (
    <main className="flex-grow-1">
      <section className="hero-section">
        <HeroImage />
        <HeroCards />
      </section>
      <section id="rankings" className="mt-5 first-rankings-section">
        <Rankings />
      </section>
      <section id="trends" className="second-rankings-section">
        <Trends />
      </section>
      <section id="factors" className="factors-main-section">
        <FactorsMain />
      </section>
    </main>
  );
}

export default Home;
