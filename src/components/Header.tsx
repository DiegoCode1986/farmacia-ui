
import { Search, Menu, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { openWhatsApp, PHARMACY_WHATSAPP } from "@/utils/whatsapp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    openWhatsApp(PHARMACY_WHATSAPP);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b">
          <div className="flex items-center space-x-4">
            <span className="text-teal-600 flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              (11) 99999-9999
            </span>
            <span className="text-gray-600">Segunda - Sábado: 8h às 22h</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleWhatsAppClick}
              className="text-green-600 hover:text-green-700"
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              Fale Conosco no WhatsApp
            </Button>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-teal-600 flex items-center">
              <span className="text-3xl mr-2">💊</span>
              MediFine
            </h1>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Buscar informações sobre produtos, medicamentos..."
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 bg-teal-600 hover:bg-teal-700"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side - WhatsApp button */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleWhatsAppClick}
              className="hidden md:flex bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>

            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block pb-4`}>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-2 md:space-y-0">
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Início</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Medicamentos</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Produtos</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Ofertas</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Sobre Nós</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Contato</a>
          </div>
        </nav>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full pl-4 pr-12 py-3"
            />
            <Button size="sm" className="absolute right-1 top-1 bg-teal-600 hover:bg-teal-700">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Button 
            onClick={handleWhatsAppClick}
            className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Fale Conosco no WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
