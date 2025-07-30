import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Protetor Solar FPS 50",
    price: "R$ 49,90",
    imgSrc: "/protetor.jpg",
  },
  {
    id: 2,
    name: "Creme Hidratante Facial",
    price: "R$ 35,50",
    imgSrc: "https://via.placeholder.com/250/ADD8E6/000000?text=Hidratante",
  },
  {
    id: 3,
    name: "Shampoo Anticaspa",
    price: "R$ 22,99",
    imgSrc: "https://via.placeholder.com/250/90EE90/000000?text=Shampoo",
  },
  {
    id: 4,
    name: "Vitamina C Efervescente",
    price: "R$ 18,75",
    imgSrc: "https://via.placeholder.com/250/FFA500/000000?text=Vitamina+C",
  },
];

const ProductsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Produtos em Destaque</h2>
          <p className="text-gray-500 mt-2">Confira nossas melhores ofertas e novidades</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-0">
                <img src={product.imgSrc} alt={product.name} className="w-full h-48 object-contain" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800 truncate">{product.name}</h3>
                  <p className="text-2xl font-bold text-red-600 my-2">{product.price}</p>
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

export default ProductsSection;
