
import { Search, Menu, Phone, MessageCircle, MapPin } from "lucide-react";
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
    <header className="bg-white shadow-sm">
      {/* Top notification bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-sm">
            <span className="font-medium">🚚 Frete GRÁTIS para compras acima de R$ 99,00</span>
          </div>
        </div>
      </div>

      {/* Top bar */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6">
              <span className="text-gray-600 flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                São Paulo, SP
              </span>
              <span className="text-gray-600 flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                (11) 99999-9999
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-gray-600">Segunda - Sábado: 8h às 22h</span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleWhatsAppClick}
                className="text-green-600 hover:text-green-700"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                Atendimento
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-red-600 flex items-center">
              <span className="text-3xl mr-2">💊</span>
              MediFine
            </h1>
          </div>

          {/* Search bar - desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Buscar medicamentos, produtos, informações..."
                className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 bg-red-600 hover:bg-red-700"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side actions */}
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
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block pb-4 border-t md:border-t-0`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-12 space-y-3 md:space-y-0 pt-4 md:pt-0">
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium py-2 md:py-0">Início</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium py-2 md:py-0">Medicamentos</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium py-2 md:py-0">Beleza</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium py-2 md:py-0">Infantil</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium py-2 md:py-0">Nutrição</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium py-2 md:py-0">Ofertas</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium py-2 md:py-0">Contato</a>
          </div>
        </nav>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <div className="relative mb-3">
            <Input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500"
            />
            <Button size="sm" className="absolute right-1 top-1 bg-red-600 hover:bg-red-700">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Button 
            onClick={handleWhatsAppClick}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Atendimento WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
