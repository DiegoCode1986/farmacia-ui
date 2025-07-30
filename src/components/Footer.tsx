import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">FarmaExpress</h2>
            <p className="text-gray-400">
              Sua saúde e bem-estar em primeiro lugar. Produtos de qualidade com entrega rápida.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube /></a>
            </div>
          </div>

          {/* Column 2: Institutional Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Atendimento</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fale Conosco</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dúvidas Frequentes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nossas Lojas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Entregas e Prazos</a></li>
            </ul>
          </div>

          {/* Column 4: Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Formas de Pagamento</h3>
            <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-700 p-2 rounded flex items-center justify-center text-xs">Visa</div>
                <div className="bg-gray-700 p-2 rounded flex items-center justify-center text-xs">Master</div>
                <div className="bg-gray-700 p-2 rounded flex items-center justify-center text-xs">Elo</div>
                <div className="bg-gray-700 p-2 rounded flex items-center justify-center text-xs">Amex</div>
                <div className="bg-gray-700 p-2 rounded flex items-center justify-center text-xs">Pix</div>
                <div className="bg-gray-700 p-2 rounded flex items-center justify-center text-xs">Boleto</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} FarmaExpress. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
