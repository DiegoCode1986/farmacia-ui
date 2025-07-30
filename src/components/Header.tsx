import { Search, User, ShoppingCart, Phone, Menu, Smartphone, Store, Package, MapPin, Tag } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="bg-white border-b">
      {/* Top bar */}
      <div className="bg-red-600 text-white text-xs">
        <div className="container mx-auto flex justify-between items-center py-1 px-4">
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-1 hover:underline">
              <Smartphone size={14} />
              <span>Baixe nosso App</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:underline">
              <Store size={14} />
              <span>Nossas Lojas</span>
            </a>
             <a href="#" className="flex items-center space-x-1 hover:underline">
              <Package size={14} />
              <span>Seja um franqueado</span>
            </a>
             <a href="#" className="flex items-center space-x-1 hover:underline">
              <MapPin size={14} />
              <span>Retire na loja</span>
            </a>
          </div>
          <div className="flex items-center space-x-1">
            <Phone size={14} />
            <span>Central de atendimento</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div>
          <a href="/">
            <img src="/descontologo.PNG" alt="FarmaExpress Logo" className="h-12 w-auto" />
          </a>
        </div>
        <div className="flex-1 mx-8">
          <div className="relative">
            <Input type="text" placeholder="O que você procura?" className="w-full pr-12 rounded-full border-gray-300 focus:ring-red-500 focus:border-red-500" />
            <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-full text-red-600 hover:bg-transparent">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-6">
           <a href="#" className="flex items-center space-x-2 text-sm">
            <User className="h-8 w-8 text-gray-500" />
            <div>
                <span>Olá, seja bem-vindo(a)</span>
                <div className="font-semibold">Acesse sua conta ou cadastre-se</div>
            </div>
          </a>
          <a href="#" className="relative flex items-center space-x-2">
            <ShoppingCart className="h-8 w-8 text-gray-500" />
             <div>
                <span className="text-sm">Meu</span>
                <div className="font-semibold">Carrinho</div>
            </div>
            <span className="absolute top-0 right-8 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
          </a>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-white border-t">
        <div className="container mx-auto flex items-center justify-between py-2 px-4 text-sm font-medium text-gray-700">
          <Button className="bg-red-600 text-white hover:bg-red-700 flex items-center space-x-2">
            <Menu className="h-5 w-5" />
            <span>COMPRE POR CATEGORIAS</span>
          </Button>
          <div className="hidden lg:flex space-x-6">
            <a href="#" className="hover:text-red-600">Medicamentos</a>
            <a href="#" className="hover:text-red-600">Genéricos</a>
            <a href="#" className="hover:text-red-600">Skincare</a>
            <a href="#" className="hover:text-red-600">Higiene Pessoal</a>
            <a href="#" className="hover:text-red-600">Mamãe e Bebê</a>
            <a href="#" className="hover:text-red-600">Dermocosméticos</a>
          </div>
           <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white flex items-center space-x-2">
            <Tag className="h-5 w-5" />
            <span>OFERTAS DA SEMANA</span>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
