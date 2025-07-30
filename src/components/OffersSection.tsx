import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Tag } from "lucide-react";

const offerProducts = [
  {
    id: 1,
    name: "Analgésico 20 Comprimidos",
    originalPrice: "R$ 25,00",
    newPrice: "R$ 19,90",
    imgSrc: "https://via.placeholder.com/250/FFE4E1/000000?text=Analgésico",
  },
  {
    id: 2,
    name: "Xarope para Tosse 150ml",
    originalPrice: "R$ 32,50",
    newPrice: "R$ 27,99",
    imgSrc: "https://via.placeholder.com/250/E6E6FA/000000?text=Xarope",
  },
  {
    id: 3,
    name: "Protetor Labial com FPS 30",
    originalPrice: "R$ 18,00",
    newPrice: "R$ 14,50",
    imgSrc: "https://via.placeholder.com/250/FFFACD/000000?text=Protetor+Labial",
  },
  {
    id: 4,
    name: "Suplemento de Ferro",
    originalPrice: "R$ 45,00",
    newPrice: "R$ 38,75",
    imgSrc: "https://via.placeholder.com/250/F08080/000000?text=Suplemento",
  },
];

const OffersSection = () => {
  return (
    <section className="py-12 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-red-700 tracking-tight">Ofertas da Semana</h2>
          <p className="text-gray-600 mt-2">Aproveite descontos imperdíveis em produtos selecionados!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
              <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                <Tag className="h-3 w-3 mr-1" />
                OFERTA
              </div>
              <CardContent className="p-0">
                <img src={product.imgSrc} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800 truncate">{product.name}</h3>
                  <div className="my-2">
                    <span className="text-gray-500 line-through mr-2">{product.originalPrice}</span>
                    <span className="text-2xl font-bold text-red-600">{product.newPrice}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Adicionar ao Carrinho
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
