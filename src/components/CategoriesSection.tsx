
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const categories = [
  {
    id: 1,
    name: "Máscaras Faciais",
    price: "A partir de R$ 2,50",
    image: "💊",
    imageUrl: "", // Adicione URL da imagem aqui
    color: "bg-green-100"
  },
  {
    id: 2,
    name: "Medidor de Pressão",
    price: "A partir de R$ 89,90",
    image: "🩺",
    imageUrl: "", // Adicione URL da imagem aqui
    color: "bg-blue-100"
  },
  {
    id: 3,
    name: "Frasco para Remédios",
    price: "A partir de R$ 15,90",
    image: "💉",
    imageUrl: "", // Adicione URL da imagem aqui
    color: "bg-red-100"
  },
  {
    id: 4,
    name: "Termômetro Digital",
    price: "A partir de R$ 25,90",
    image: "🌡️",
    imageUrl: "", // Adicione URL da imagem aqui
    color: "bg-yellow-100"
  },
  {
    id: 5,
    name: "Curativos",
    price: "A partir de R$ 8,90",
    image: "🩹",
    imageUrl: "", // Adicione URL da imagem aqui
    color: "bg-purple-100"
  },
  {
    id: 6,
    name: "Vitaminas",
    price: "A partir de R$ 35,90",
    image: "💊",
    imageUrl: "", // Adicione URL da imagem aqui
    color: "bg-orange-100"
  },
  {
    id: 7,
    name: "Produtos de Higiene",
    price: "A partir de R$ 12,90",
    image: "🧴",
    imageUrl: "", // Adicione URL da imagem aqui
    color: "bg-pink-100"
  },
  {
    id: 8,
    name: "Equipamentos",
    price: "A partir de R$ 45,90",
    image: "⚕️",
    imageUrl: "", // Adicione URL da imagem aqui
    color: "bg-indigo-100"
  }
];

const CategoriesSection = () => {
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

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Categorias Populares</h2>
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
            {categories.map((category) => (
              <Card 
                key={category.id} 
                className="min-w-[200px] md:min-w-[250px] p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform overflow-hidden`}>
                  {category.imageUrl ? (
                    <img 
                      src={category.imageUrl} 
                      alt={category.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-2xl">{category.image}</span>
                  )}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-teal-600 font-medium text-sm">{category.price}</p>
                <Button size="sm" variant="outline" className="mt-4 w-full hover:bg-teal-50 hover:border-teal-300">
                  VER PRODUTOS
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

export default CategoriesSection;
