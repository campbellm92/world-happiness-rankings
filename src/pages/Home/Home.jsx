import HeroImage from "./Hero";
import HeroCards from "./HeroCards";
import Rankings from "./Rankings";
import Trends from "./Trends";
import FactorsMain from "./FactorsMain";
// import Factors from "./Factors";

function Home() {
  return (
    <main className="flex-grow-1">
      <section className="hero-section">
        <HeroImage />
        <HeroCards />
        {/* <HeroCarousel /> */}
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
      {/* <section className="factors-section">
        <Factors />
      </section> */}
    </main>
  );
}

export default Home;
