import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const beautyProducts = [
  {
    id: 1,
    name: "Sérum Facial Vitamina C",
    price: "R$ 89,90",
    imgSrc: "/nivea.jpg",
  },
  {
    id: 2,
    name: "Máscara de Cílios Alongadora",
    price: "R$ 45,00",
    imgSrc: "https://via.placeholder.com/200/DDA0DD/000000?text=Máscara",
  },
  {
    id: 3,
    name: "Batom Matte Longa Duração",
    price: "R$ 32,50",
    imgSrc: "https://via.placeholder.com/200/FFB6C1/000000?text=Batom",
  },
   {
    id: 4,
    name: "Água Micelar Demaquilante",
    price: "R$ 28,80",
    imgSrc: "https://via.placeholder.com/200/E6E6FA/000000?text=Água+Micelar",
  },
];

const BeautySection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse gap-8 items-stretch">
          {/* Right Banner */}
          <div className="lg:w-1/3 bg-pink-500 rounded-lg overflow-hidden text-white p-8 flex flex-col justify-center items-start" style={{backgroundImage: 'url(https://via.placeholder.com/400x600/C71585/FFFFFF?text=Banner+BG)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="bg-pink-600 bg-opacity-50 p-6 rounded-lg">
              <h2 className="text-4xl font-bold mb-4">Beleza & Cuidado</h2>
              <p className="mb-6">Realce sua beleza com produtos de alta qualidade.</p>
              <Button variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100 font-bold">
                Descobrir
              </Button>
            </div>
          </div>

          {/* Left Products Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {beautyProducts.map((product) => (
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

export default BeautySection;
