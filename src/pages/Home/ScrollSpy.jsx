import ScrollSpy from "react-scrollspy-navigation";

// Content blocks

function ScrollSpyNav() {
  const ContentWithBoxes = () => {
    return (
      <>
        <section id="target-1">Content here</section>
        <section id="target-2">Content here</section>
        <section id="target-3">Content here</section>
      </>
    );
  };

  // Heading tags
  const ContentWithHeaders = () => {
    return (
      <>
        <section>
          <h2 id="target-1">Target 1</h2>
        </section>
        <section>
          <h2 id="target-2">Target 2</h2>
        </section>
        <section>
          <h2 id="target-3">Target 3</h2>
        </section>
      </>
    );
  };

  const Navigation = () => {
    return (
      <ScrollSpy activeClass="nav-active">
        <nav>
          <ul>
            <li>
              <a href="#target-1">...</a>
            </li>
            <li>
              <a href="#target-2">...</a>
            </li>
            <li>
              <a href="#target-3">...</a>
            </li>
          </ul>
        </nav>
      </ScrollSpy>
    );
  };

  return (
    <div>
      <Navigation />
      <ContentWithBoxes />
      <ContentWithHeaders />
    </div>
  );
}

export default ScrollSpyNav;
