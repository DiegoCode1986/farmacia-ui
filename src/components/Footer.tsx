
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-teal-400 mb-4 flex items-center">
              <span className="text-3xl mr-2">💊</span>
              MediFine
            </h3>
            <p className="text-gray-300 mb-4">
              Sua farmácia online de confiança. Medicamentos, produtos de saúde e beleza com entrega rápida e segura.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                📘 Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                📷 Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                🐦 Twitter
              </a>
            </div>
          </div>

          {/* Atendimento */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Fale Conosco</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Política de Troca</a></li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Medicamentos</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Beleza e Cuidado</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Higiene Pessoal</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Mamãe e Bebê</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <span className="mr-2">📞</span>
                <div>
                  <p>(11) 99999-9999</p>
                  <p className="text-sm text-gray-400">Seg - Sáb: 8h às 22h</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-2">📧</span>
                <p>contato@medifine.com.br</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2">📍</span>
                <p>São Paulo, SP<br />Brasil</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MediFine. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-teal-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
