import { Link } from 'react-router-dom';
import { Zap, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">WebBoostPartner</span>
            </div>
            <p className="text-gray-400 mb-4">
              Razendsnelle websites voor Rotterdamse ondernemers. 
              Geen gedoe, geen maandelijkse kosten.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/31642628242" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a 
                href="tel:+31642628242" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a 
                href="mailto:info@webboostpartner.nl" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Snelle links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/over-mij" className="hover:text-white transition-colors">
                  Over mij
                </Link>
              </li>
              <li>
                <Link to="/pakketten" className="hover:text-white transition-colors">
                  Pakketten
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+31 6 42628242</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@webboostpartner.nl</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Rotterdam</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} WebBoostPartner.nl - Alle rechten voorbehouden</p>
        </div>
      </div>
    </footer>
  );
}
