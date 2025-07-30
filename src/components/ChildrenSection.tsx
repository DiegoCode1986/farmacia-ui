import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const childrenProducts = [
  {
    id: 1,
    name: "Fralda Descartável Pacote G",
    price: "R$ 55,90",
    imgSrc: "https://via.placeholder.com/200/98FB98/000000?text=Fralda",
  },
  {
    id: 2,
    name: "Lenços Umedecidos Hipoalergênicos",
    price: "R$ 18,00",
    imgSrc: "https://via.placeholder.com/200/F0E68C/000000?text=Lenços",
  },
  {
    id: 3,
    name: "Pomada para Assaduras 45g",
    price: "R$ 25,50",
    imgSrc: "https://via.placeholder.com/200/AFEEEE/000000?text=Pomada",
  },
   {
    id: 4,
    name: "Shampoo Infantil Suave",
    price: "R$ 21,80",
    imgSrc: "https://via.placeholder.com/200/FFE4B5/000000?text=Shampoo",
  },
];

const ChildrenSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Banner */}
          <div className="lg:w-1/3 bg-green-500 rounded-lg overflow-hidden text-white p-8 flex flex-col justify-center items-start" style={{backgroundImage: 'url(https://via.placeholder.com/400x600/2E8B57/FFFFFF?text=Banner+BG)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="bg-green-600 bg-opacity-50 p-6 rounded-lg">
              <h2 className="text-4xl font-bold mb-4">Mundo Infantil</h2>
              <p className="mb-6">O melhor para o cuidado e bem-estar do seu bebê.</p>
              <Button variant="secondary" className="bg-white text-green-600 hover:bg-gray-100 font-bold">
                Ver Produtos
              </Button>
            </div>
          </div>

          {/* Right Products Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {childrenProducts.map((product) => (
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

export default ChildrenSection;
