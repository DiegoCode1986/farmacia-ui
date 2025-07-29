
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { openWhatsApp, PHARMACY_WHATSAPP } from "@/utils/whatsapp";

const categories = [
  {
    id: 1,
    name: "Medicamentos",
    description: "Prescrição médica e venda livre",
    icon: "💊",
    color: "bg-blue-100 hover:bg-blue-200",
    textColor: "text-blue-700"
  },
  {
    id: 2,
    name: "Beleza",
    description: "Cosméticos e cuidados pessoais",
    icon: "💄",
    color: "bg-pink-100 hover:bg-pink-200",
    textColor: "text-pink-700"
  },
  {
    id: 3,
    name: "Higiene",
    description: "Produtos de limpeza e cuidado",
    icon: "🧴",
    color: "bg-green-100 hover:bg-green-200",
    textColor: "text-green-700"
  },
  {
    id: 4,
    name: "Infantil",
    description: "Produtos para bebês e crianças",
    icon: "👶",
    color: "bg-yellow-100 hover:bg-yellow-200",
    textColor: "text-yellow-700"
  },
  {
    id: 5,
    name: "Nutrição",
    description: "Vitaminas e suplementos",
    icon: "🥗",
    color: "bg-orange-100 hover:bg-orange-200",
    textColor: "text-orange-700"
  },
  {
    id: 6,
    name: "Primeiros Socorros",
    description: "Materiais de emergência",
    icon: "🩹",
    color: "bg-red-100 hover:bg-red-200",
    textColor: "text-red-700"
  }
];

const CategoriesSection = () => {
  const handleCategoryConsult = (categoryName: string) => {
    openWhatsApp(PHARMACY_WHATSAPP, `Produtos da categoria: ${categoryName}`);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Categorias</h2>
          <p className="text-gray-600">Encontre produtos organizados por categoria</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className={`${category.color} border-0 transition-all duration-300 hover:shadow-lg cursor-pointer group`}
              onClick={() => handleCategoryConsult(category.name)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className={`font-bold text-lg mb-2 ${category.textColor}`}>{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`${category.textColor} hover:bg-white/50 group-hover:bg-white/70`}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Consultar
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
