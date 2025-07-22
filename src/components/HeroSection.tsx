
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
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

  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main hero card */}
          <Card className="lg:col-span-2 bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                ATÉ 40% OFF
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Álcool em Gel<br />
                Antisséptico
              </h2>
              <p className="text-blue-100 mb-6">A partir de apenas</p>
              <div className="text-4xl font-bold text-yellow-400 mb-6">
                R$ 9,90
              </div>
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-gray-100"
                onClick={handleMainProductClick}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                CONSULTAR PREÇO
              </Button>
            </div>
            {/* Área para imagem do produto - substitua a URL pela imagem desejada */}
            <div className="absolute right-4 top-4 w-32 h-32 opacity-20">
              {/* Adicione imageUrl aqui quando disponível */}
              {/* <img src="URL_DA_IMAGEM" alt="Álcool em Gel" className="w-full h-full object-contain" /> */}
              <div className="w-32 h-32 bg-white rounded-full"></div>
            </div>
          </Card>

          {/* Side promotional cards */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-6 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2">
                  Vitaminas e<br />Minerais
                </h3>
                <p className="text-orange-100 text-sm mb-3">Até 30% OFF</p>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="bg-white text-orange-600 hover:bg-gray-100"
                  onClick={handleVitaminsClick}
                >
                  <MessageCircle className="h-3 w-3 mr-1" />
                  CONSULTAR
                </Button>
              </div>
              {/* Área para imagem do produto */}
              <div className="absolute right-4 bottom-4 w-16 h-16 opacity-20">
                {/* <img src="URL_DA_IMAGEM" alt="Vitaminas" className="w-full h-full object-contain" /> */}
                <span className="text-4xl">💊</span>
              </div>
            </Card>

            <Card className="bg-gradient-to-r from-teal-400 to-teal-500 text-white p-6 relative overflow-hidden">
              <h3 className="text-lg font-semibold mb-2">
                Monitor de<br />Pressão
              </h3>
              <p className="text-teal-100 text-sm mb-3">Até 25% OFF</p>
              <Button 
                size="sm" 
                variant="secondary" 
                className="bg-white text-teal-600 hover:bg-gray-100"
                onClick={handleMonitorClick}
              >
                <MessageCircle className="h-3 w-3 mr-1" />
                CONSULTAR
              </Button>
              {/* Área para imagem do produto */}
              <div className="absolute right-4 bottom-4 w-16 h-16 opacity-20">
                {/* <img src="URL_DA_IMAGEM" alt="Monitor de Pressão" className="w-full h-full object-contain" /> */}
                <span className="text-4xl">🩺</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
