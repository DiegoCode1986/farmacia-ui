
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";
import { openWhatsApp, PHARMACY_WHATSAPP } from "@/utils/whatsapp";

const products = [
  {
    id: 1,
    name: "Dipirona 500mg",
    description: "Analgésico e antitérmico",
    price: "R$ 8,90",
    originalPrice: "R$ 12,90",
    image: "💊",
    rating: 4.8,
    reviews: 156,
    discount: "31% OFF"
  },
  {
    id: 2,
    name: "Vitamina C 1000mg",
    description: "Suplemento vitamínico",
    price: "R$ 24,90",
    originalPrice: "R$ 34,90",
    image: "🍊",
    rating: 4.9,
    reviews: 89,
    discount: "29% OFF"
  },
  {
    id: 3,
    name: "Protetor Solar FPS 60",
    description: "Proteção UVA e UVB",
    price: "R$ 45,90",
    originalPrice: "R$ 59,90",
    image: "☀️",
    rating: 4.7,
    reviews: 234,
    discount: "23% OFF"
  },
  {
    id: 4,
    name: "Shampoo Anticaspa",
    description: "Tratamento completo",
    price: "R$ 19,90",
    originalPrice: "R$ 27,90",
    image: "🧴",
    rating: 4.6,
    reviews: 67,
    discount: "29% OFF"
  },
  {
    id: 5,
    name: "Termômetro Digital",
    description: "Medição precisa e rápida",
    price: "R$ 35,90",
    originalPrice: "R$ 49,90",
    image: "🌡️",
    rating: 4.8,
    reviews: 143,
    discount: "28% OFF"
  },
  {
    id: 6,
    name: "Complexo B",
    description: "Vitaminas do complexo B",
    price: "R$ 29,90",
    originalPrice: "R$ 39,90",
    image: "💊",
    rating: 4.5,
    reviews: 91,
    discount: "25% OFF"
  }
];

const ProductsSection = () => {
  const handleProductConsult = (productName: string, price: string) => {
    openWhatsApp(PHARMACY_WHATSAPP, productName, price);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Produtos em Destaque</h2>
          <p className="text-gray-600">Consulte preços e disponibilidade dos nossos produtos</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-red-200">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-4xl">{product.image}</span>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    {product.discount}
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({product.reviews} avaliações)</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg font-bold text-red-600">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => handleProductConsult(product.name, product.price)}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Consultar no WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-red-600 text-red-600 hover:bg-red-50"
            onClick={() => openWhatsApp(PHARMACY_WHATSAPP, "Ver mais produtos")}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Ver Mais Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
