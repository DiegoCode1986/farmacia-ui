import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const hygieneProducts = [
  {
    id: 1,
    name: "Sabonete Líquido Antibacteriano",
    price: "R$ 15,90",
    imgSrc: "https://via.placeholder.com/200/E0FFFF/000000?text=Sabonete",
  },
  {
    id: 2,
    name: "Fio Dental Menta 100m",
    price: "R$ 9,50",
    imgSrc: "https://via.placeholder.com/200/F0FFF0/000000?text=Fio+Dental",
  },
  {
    id: 3,
    name: "Desodorante Roll-on Sem Perfume",
    price: "R$ 12,99",
    imgSrc: "https://via.placeholder.com/200/FFF0F5/000000?text=Desodorante",
  },
   {
    id: 4,
    name: "Creme Dental Branqueador",
    price: "R$ 7,75",
    imgSrc: "https://via.placeholder.com/200/F5FFFA/000000?text=Creme+Dental",
  },
];

const HygieneSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Banner */}
          <div className="lg:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white p-8 flex flex-col justify-center items-start" style={{backgroundImage: 'url(https://via.placeholder.com/400x600/0000FF/FFFFFF?text=Banner+BG)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="bg-blue-600 bg-opacity-50 p-6 rounded-lg">
              <h2 className="text-4xl font-bold mb-4">Higiene Pessoal</h2>
              <p className="mb-6">Tudo para o seu cuidado diário com até 30% de desconto.</p>
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 font-bold">
                Ver Ofertas
              </Button>
            </div>
          </div>

          {/* Right Products Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {hygieneProducts.map((product) => (
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

export default HygieneSection;
