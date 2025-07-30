import { Card, CardContent } from "@/components/ui/card";
import { Syringe, HeartPulse, Stethoscope } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Aplicação de Injetáveis",
    description: "Procedimento seguro e rápido com profissionais qualificados.",
    icon: <Syringe className="h-10 w-10 text-red-500" />,
  },
  {
    id: 2,
    title: "Aferição de Pressão",
    description: "Monitore sua saúde cardiovascular com precisão.",
    icon: <HeartPulse className="h-10 w-10 text-red-500" />,
  },
  {
    id: 3,
    title: "Atenção Farmacêutica",
    description: "Orientação completa sobre seus medicamentos e tratamentos.",
    icon: <Stethoscope className="h-10 w-10 text-red-500" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Nossos Serviços</h2>
          <p className="text-gray-500 mt-2">Cuidando de você com a atenção que você merece.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="text-center p-6 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center">
                <div className="mb-4 p-4 bg-red-100 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
