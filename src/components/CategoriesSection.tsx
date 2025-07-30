const CategoriesSection = () => {
  const categories = [
    { name: "Medicamentos", imgSrc: "/medicamento.jpg" },
    { name: "Beleza", imgSrc: "https://via.placeholder.com/100/4682B4/FFFFFF?text=B" },
    { name: "Mamãe e Bebê", imgSrc: "https://via.placeholder.com/100/32CD32/FFFFFF?text=MB" },
    { name: "Higiene", imgSrc: "https://via.placeholder.com/100/FFD700/FFFFFF?text=H" },
  ];

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <a href="#" key={category.name} className="flex flex-col items-center space-y-3 text-center group">
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-red-500 group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                <img src={category.imgSrc} alt={category.name} className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-lg text-gray-800 group-hover:text-red-600 transition-colors duration-300">{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
