
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const OffersSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Ofertas Especiais</h2>
          <p className="text-gray-600">Não perca essas oportunidades incríveis!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                ATÉ 35% OFF
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Antisséptico para<br />as Mãos
              </h3>
              <p className="text-blue-100 mb-6">Higienização completa e proteção</p>
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                COMPRE AGORA
              </Button>
            </div>
            <div className="absolute right-4 bottom-4 w-20 h-20 opacity-20">
              {/* Adicione imageUrl aqui quando disponível */}
              {/* <img src="URL_DA_IMAGEM" alt="Antisséptico" className="w-full h-full object-contain" /> */}
              <span className="text-8xl">🧴</span>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                ATÉ 30% OFF
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Colírios e<br />Gotas Oculares
              </h3>
              <p className="text-yellow-100 mb-6">Cuidado especial para seus olhos</p>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                VER OFERTAS
              </Button>
            </div>
            <div className="absolute right-4 bottom-4 w-20 h-20 opacity-20">
              {/* Adicione imageUrl aqui quando disponível */}
              {/* <img src="URL_DA_IMAGEM" alt="Colírios" className="w-full h-full object-contain" /> */}
              <span className="text-8xl">👁️</span>
            </div>
          </Card>
        </div>

        {/* Delivery banner */}
        <Card className="bg-gradient-to-r from-teal-500 to-green-500 text-white p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4 w-16 h-16 flex items-center justify-center">
                {/* Adicione imageUrl aqui quando disponível */}
                {/* <img src="URL_DA_IMAGEM" alt="Entrega" className="w-8 h-8 object-contain" /> */}
                <span className="text-2xl">🚚</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Entrega 100% Segura</h3>
                <p className="text-green-100">Sem contato com o entregador</p>
              </div>
            </div>
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              SAIBA MAIS
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default OffersSection;
