const HeroSection = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Banner */}
        <div className="mb-8">
          <a href="#">
            <img src="/popular.PNG" alt="Main Banner" className="w-full h-50 rounded-lg" />
          </a>
        </div>

        {/* Small Banners */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <a href="#">
            <img src="/nivea.jpg" alt="" className="w-full h-auto rounded-lg" />
          </a>
          <a href="#">
            <img src="/elseve.png" alt="Promo 2" className="w-full h-auto rounded-lg" />
          </a>
          <a href="#">
            <img src="/el" alt="Promo 3" className="w-full h-auto rounded-lg" />
          </a>
          <a href="#">
            <img src="https://via.placeholder.com/220x220/FFF9C4/000000?text=Promo+4" alt="Promo 4" className="w-full h-auto rounded-lg" />
          </a>
          <a href="#">
            <img src="https://via.placeholder.com/220x220/FFCDD2/000000?text=Promo+5" alt="Promo 5" className="w-full h-auto rounded-lg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
