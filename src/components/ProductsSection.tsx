
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Álcool em Gel Antisséptico",
    price: "R$ 9,90",
    originalPrice: "R$ 15,90",
    discount: "38% OFF",
    rating: 4.8,
    image: "🧴",
    isNew: true
  },
  {
    id: 2,
    name: "Máscara Cirúrgica Tripla",
    price: "R$ 2,50",
    originalPrice: "R$ 4,90",
    discount: "49% OFF",
    rating: 4.9,
    image: "😷",
    isNew: false
  },
  {
    id: 3,
    name: "Termômetro Digital",
    price: "R$ 25,90",
    originalPrice: "R$ 35,90",
    discount: "28% OFF",
    rating: 4.7,
    image: "🌡️",
    isNew: false
  },
  {
    id: 4,
    name: "Vitamina C 1000mg",
    price: "R$ 35,90",
    originalPrice: "R$ 49,90",
    discount: "28% OFF",
    rating: 4.6,
    image: "💊",
    isNew: true
  },
  {
    id: 5,
    name: "Monitor de Pressão Digital",
    price: "R$ 89,90",
    originalPrice: "R$ 129,90",
    discount: "31% OFF",
    rating: 4.8,
    image: "🩺",
    isNew: false
  },
  {
    id: 6,
    name: "Kit Curativos Sortidos",
    price: "R$ 12,90",
    originalPrice: "R$ 18,90",
    discount: "32% OFF",
    rating: 4.5,
    image: "🩹",
    isNew: false
  }
];

const ProductsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Produtos em Destaque</h2>
          <p className="text-gray-600">Os melhores produtos com os melhores preços</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative p-6 bg-gray-100">
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    NOVO
                  </span>
                )}
                <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {product.discount}
                </span>
                <div className="flex justify-center items-center h-32">
                  <span className="text-6xl">{product.image}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 h-12 line-clamp-2">{product.name}</h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 text-sm">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-gray-500 text-sm ml-1">({product.rating})</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-teal-600">{product.price}</span>
                    <span className="text-gray-400 line-through ml-2 text-sm">{product.originalPrice}</span>
                  </div>
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700 flex items-center justify-center">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Adicionar ao Carrinho
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="hover:bg-teal-50 hover:border-teal-300">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
