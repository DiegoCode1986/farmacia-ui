
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Percent, Clock, Truck } from "lucide-react";
import { openWhatsApp, PHARMACY_WHATSAPP } from "@/utils/whatsapp";

const HeroSection = () => {
  const handleMainProductClick = () => {
    openWhatsApp(PHARMACY_WHATSAPP, "Álcool em Gel Antisséptico", "R$ 9,90");
  };

  const handleVitaminsClick = () => {
    openWhatsApp(PHARMACY_WHATSAPP, "Vitaminas e Minerais");
  };

  const handleMonitorClick = () => {
    openWhatsApp(PHARMACY_WHATSAPP, "Monitor de Pressão");
  };

  const handleBeautyClick = () => {
    openWhatsApp(PHARMACY_WHATSAPP, "Produtos de Beleza");
  };

  return (
    <section className="bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        {/* Benefits bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center justify-center bg-white rounded-lg p-4 shadow-sm">
            <Truck className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-sm font-medium">Frete GRÁTIS acima de R$ 99</span>
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg p-4 shadow-sm">
            <Clock className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium">Entrega em até 2 horas</span>
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg p-4 shadow-sm">
            <Percent className="h-5 w-5 text-red-600 mr-2" />
            <span className="text-sm font-medium">Até 60% de desconto</span>
          </div>
        </div>

        {/* Main promotional banner */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="lg:col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                ATÉ 60% OFF
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Álcool em Gel<br />
                Antisséptico
              </h2>
              <p className="text-blue-100 mb-2">Proteção e higiene para toda família</p>
              <p className="text-blue-100 mb-6">A partir de apenas</p>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
                R$ 9,90
              </div>
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold"
                onClick={handleMainProductClick}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                CONSULTAR PREÇO
              </Button>
            </div>
            <div className="absolute right-4 top-4 w-32 h-32 opacity-20">
              <div className="w-32 h-32 bg-white rounded-full"></div>
            </div>
          </Card>

          <div className="space-y-4">
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 relative overflow-hidden">
              <h3 className="text-lg font-bold mb-2">
                Vitaminas e<br />Minerais
              </h3>
              <p className="text-green-100 text-sm mb-3">Até 30% OFF</p>
              <Button 
                size="sm" 
                variant="secondary" 
                className="bg-white text-green-600 hover:bg-gray-100 font-medium"
                onClick={handleVitaminsClick}
              >
                <MessageCircle className="h-3 w-3 mr-1" />
                CONSULTAR
              </Button>
              <div className="absolute right-4 bottom-4 w-12 h-12 opacity-20">
                <span className="text-3xl">💊</span>
              </div>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 relative overflow-hidden">
              <h3 className="text-lg font-bold mb-2">
                Produtos de<br />Beleza
              </h3>
              <p className="text-purple-100 text-sm mb-3">Até 40% OFF</p>
              <Button 
                size="sm" 
                variant="secondary" 
                className="bg-white text-purple-600 hover:bg-gray-100 font-medium"
                onClick={handleBeautyClick}
              >
                <MessageCircle className="h-3 w-3 mr-1" />
                CONSULTAR
              </Button>
              <div className="absolute right-4 bottom-4 w-12 h-12 opacity-20">
                <span className="text-3xl">💄</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Secondary promotional cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-6 relative overflow-hidden">
            <h3 className="text-xl font-bold mb-2">Monitor de Pressão</h3>
            <p className="text-orange-100 mb-4">Cuide da sua saúde com precisão</p>
            <p className="text-orange-100 text-sm mb-4">Até 25% OFF</p>
            <Button 
              size="sm" 
              variant="secondary" 
              className="bg-white text-orange-600 hover:bg-gray-100 font-medium"
              onClick={handleMonitorClick}
            >
              <MessageCircle className="h-3 w-3 mr-1" />
              CONSULTAR
            </Button>
            <div className="absolute right-4 bottom-4 w-16 h-16 opacity-20">
              <span className="text-4xl">🩺</span>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-teal-400 to-teal-500 text-white p-6 relative overflow-hidden">
            <h3 className="text-xl font-bold mb-2">Medicamentos</h3>
            <p className="text-teal-100 mb-4">Consulte disponibilidade e preços</p>
            <p className="text-teal-100 text-sm mb-4">Atendimento especializado</p>
            <Button 
              size="sm" 
              variant="secondary" 
              className="bg-white text-teal-600 hover:bg-gray-100 font-medium"
              onClick={() => openWhatsApp(PHARMACY_WHATSAPP, "Medicamentos")}
            >
              <MessageCircle className="h-3 w-3 mr-1" />
              CONSULTAR
            </Button>
            <div className="absolute right-4 bottom-4 w-16 h-16 opacity-20">
              <span className="text-4xl">💊</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
