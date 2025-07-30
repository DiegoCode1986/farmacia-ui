import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const nutritionProducts = [
  {
    id: 1,
    name: "Multivitamínico A-Z Homem",
    price: "R$ 45,90",
    imgSrc: "https://via.placeholder.com/200/FFDAB9/000000?text=Multivitamínico",
  },
  {
    id: 2,
    name: "Whey Protein Concentrado 900g",
    price: "R$ 120,00",
    imgSrc: "https://via.placeholder.com/200/F4A460/000000?text=Whey+Protein",
  },
  {
    id: 3,
    name: "Ômega 3 1000mg 120 Cápsulas",
    price: "R$ 65,50",
    imgSrc: "https://via.placeholder.com/200/FFDEAD/000000?text=Ômega+3",
  },
   {
    id: 4,
    name: "Vitamina D3 2000UI",
    price: "R$ 35,80",
    imgSrc: "https://via.placeholder.com/200/FFE4C4/000000?text=Vitamina+D3",
  },
];

const NutritionSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse gap-8 items-stretch">
          {/* Right Banner */}
          <div className="lg:w-1/3 bg-orange-500 rounded-lg overflow-hidden text-white p-8 flex flex-col justify-center items-start" style={{backgroundImage: 'url(https://via.placeholder.com/400x600/D2691E/FFFFFF?text=Banner+BG)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="bg-orange-600 bg-opacity-50 p-6 rounded-lg">
              <h2 className="text-4xl font-bold mb-4">Nutrição & Vitaminas</h2>
              <p className="mb-6">Suplementos para sua saúde e performance.</p>
              <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 font-bold">
                Conferir
              </Button>
            </div>
          </div>

          {/* Left Products Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {nutritionProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden group transition-all duration-300 hover:shadow-lg flex flex-col">
                  <CardContent className="p-4 flex-grow flex flex-col">
                     <img src={product.imgSrc} alt={product.name} className="w-full h-32 object-cover rounded-md mb-4" />
                     <div className="flex-grow">
                       <h3 className="font-semibold text-md text-gray-800">{product.name}</h3>
                       <p className="text-xl font-bold text-red-600 my-2">{product.price}</p>
                     </div>
                     <Button size="sm" className="w-full bg-red-600 hover:bg-red-700 mt-2">
                       <ShoppingCart className="mr-2 h-4 w-4" /> Comprar
                     </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
