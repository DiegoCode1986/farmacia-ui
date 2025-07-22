
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Activity, Syringe, BarChart4 } from "lucide-react";
import { openWhatsApp, PHARMACY_WHATSAPP } from "@/utils/whatsapp";

const services = [
  {
    id: 1,
    name: "Medição de Pressão Arterial",
    description: "Aferição precisa e rápida, realizada por profissionais",
    icon: <Activity className="h-10 w-10 text-teal-600" />,
    price: "R$ 10,00"
  },
  {
    id: 2,
    name: "Aplicação de Vacinas",
    description: "Diversas vacinas disponíveis com total segurança",
    icon: <Syringe className="h-10 w-10 text-teal-600" />,
    price: "A partir de R$ 60,00"
  },
  {
    id: 3,
    name: "Testes Rápidos",
    description: "COVID-19, dengue, glicemia e outros exames",
    icon: <BarChart4 className="h-10 w-10 text-teal-600" />,
    price: "A partir de R$ 35,00"
  }
];

const ServicesSection = () => {
  const handleServiceConsult = (serviceName: string, price: string) => {
    openWhatsApp(PHARMACY_WHATSAPP, serviceName, price);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-teal-100 max-w-2xl mx-auto">
            Além de produtos farmacêuticos, oferecemos serviços de saúde realizados por profissionais qualificados para cuidar do seu bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="bg-white text-gray-800 overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-teal-50 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-teal-600 font-semibold mb-6">{service.price}</p>
                  <Button 
                    onClick={() => handleServiceConsult(service.name, service.price)}
                    className="bg-teal-600 hover:bg-teal-700 text-white w-full"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Agendar Serviço
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
