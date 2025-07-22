
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useRef } from "react";
import { openWhatsApp, PHARMACY_WHATSAPP } from "@/utils/whatsapp";

const products = [
  {
    id: 1,
    name: "Vitaminas",
    description: "Suplementação diária",
    price: "A partir de R$ 25,90",
    image: "💊",
    color: "bg-orange-100"
  },
  {
    id: 2,
    name: "Suplementos Proteicos",
    description: "Para ganho muscular",
    price: "A partir de R$ 69,90",
    image: "💪",
    color: "bg-blue-100"
  },
  {
    id: 3,
    name: "Alimentos Diet",
    description: "Baixo teor de açúcar",
    price: "A partir de R$ 8,90",
    image: "🥗",
    color: "bg-green-100"
  },
  {
    id: 4,
    name: "Suplementos Especiais",
    description: "Para necessidades específicas",
    price: "A partir de R$ 45,90",
    image: "🧪",
    color: "bg-purple-100"
  }
];

const NutritionSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleProductConsult = (productName: string, price: string) => {
    openWhatsApp(PHARMACY_WHATSAPP, productName, price);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Nutrição</h2>
          <div className="hidden md:flex space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scroll('left')}
              className="p-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scroll('right')}
              className="p-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 pb-4"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            {products.map((product) => (
              <Card 
                key={product.id} 
                className="min-w-[250px] md:min-w-[280px] p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className={`${product.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{product.image}</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="text-teal-600 font-medium text-sm mb-4">{product.price}</p>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full hover:bg-green-50 hover:border-green-300"
                  onClick={() => handleProductConsult(product.name, product.price)}
                >
                  <MessageCircle className="h-3 w-3 mr-1" />
                  CONSULTAR
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile scroll indicators */}
        <div className="flex justify-center mt-4 md:hidden space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => scroll('left')}
            className="p-2"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => scroll('right')}
            className="p-2"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default NutritionSection;
