import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const firstAidProducts = [
  {
    id: 1,
    name: "Kit de Primeiros Socorros Básico",
    price: "R$ 39,90",
    imgSrc: "https://via.placeholder.com/200/F0F8FF/000000?text=Kit+Primeiros+Socorros",
  },
  {
    id: 2,
    name: "Antisséptico Spray 50ml",
    price: "R$ 12,00",
    imgSrc: "https://via.placeholder.com/200/B0E0E6/000000?text=Antisséptico",
  },
  {
    id: 3,
    name: "Caixa de Curativos Adesivos",
    price: "R$ 8,50",
    imgSrc: "https://via.placeholder.com/200/ADD8E6/000000?text=Curativos",
  },
   {
    id: 4,
    name: "Gaze Estéril Pacote com 10",
    price: "R$ 6,80",
    imgSrc: "https://via.placeholder.com/200/E0FFFF/000000?text=Gaze",
  },
];

const FirstAidSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Banner */}
          <div className="lg:w-1/3 bg-slate-500 rounded-lg overflow-hidden text-white p-8 flex flex-col justify-center items-start" style={{backgroundImage: 'url(https://via.placeholder.com/400x600/708090/FFFFFF?text=Banner+BG)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="bg-slate-600 bg-opacity-50 p-6 rounded-lg">
              <h2 className="text-4xl font-bold mb-4">Primeiros Socorros</h2>
              <p className="mb-6">Esteja preparado para qualquer emergência.</p>
              <Button variant="secondary" className="bg-white text-slate-600 hover:bg-gray-100 font-bold">
                Montar Kit
              </Button>
            </div>
          </div>

          {/* Right Products Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {firstAidProducts.map((product) => (
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

export default FirstAidSection;
