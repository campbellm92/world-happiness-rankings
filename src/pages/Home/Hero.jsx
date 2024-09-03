function HeroImage() {
  return (
    <div className="p-5 text-center bg-image hero-custom">
      <div className="d-flex justify-content-center align-items-center h-100 w-100">
        <div className="p-5 rounded hero-mask">
          <h1 className="mb-3 hero-header">World Happiness Report</h1>
          <h4 className="mb-3 hero-sub-header">
            Results for the World Happiness Report are in. Explore our data
            story below and see how your country and other countries fared.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
