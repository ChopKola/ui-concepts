import { 
  Phone, MapPin, Mail,
  Facebook, Twitter, Instagram, Linkedin, 
  Send
} from 'lucide-react';
import { footerLinks, footerAccountsLinks } from '../../../data/nav';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 border-t border-gray-100 relative overflow-hidden">
      
      {/* Decorative Top Border/Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-brand-green to-brand-orange opacity-30" />

      <div className="container mx-auto px-4">
        
        {/* Newsletter Section - New Addition for Food Theme */}
        <div className="bg-[#f8f8fb] rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#5caf90]/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center md:text-left max-w-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-[#4b5966] font-manrope mb-2">
              Get Exclusive <span className="text-[#5caf90]">Deals</span>
            </h3>
            <p className="text-[#777] text-sm">
              Subscribe to get 20% off your first order and daily fresh food updates.
            </p>
          </div>

          <div className="relative z-10 w-full max-w-md">
            <form className="flex items-center bg-white p-1.5 rounded-full shadow-md border border-gray-100 focus-within:border-[#5caf90] transition-colors">
              <Mail className="ml-4 text-gray-400" size={20} />
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 h-12 px-4 bg-transparent outline-none text-[#4b5966] placeholder:text-gray-400 text-sm"
              />
              <button className="bg-[#4b5966] hover:bg-[#5caf90] text-white h-10 px-6 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2">
                <span className="hidden sm:inline">Subscribe</span>
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="/" className="inline-block">
              <span className="text-3xl font-extrabold text-brand-orange tracking-tight font-manrope">
                Chopkola<span className="text-[#5caf90]">.</span>
              </span>
            </a>
            <p className="text-[#777] text-sm leading-relaxed">
              The biggest marketplace for authentic African grocery & restaurant meals. Fresh ingredients, delivered to your doorstep with care.
            </p>
            <div className="pt-2">
              <p className="text-xs font-bold text-[#4b5966] uppercase tracking-wider mb-3">Download App</p>
              <div className="flex gap-3">
                <img src="https://placehold.co/120x40/000/fff?text=Google+Play" alt="Google Play" className="h-10 rounded-lg cursor-pointer hover:opacity-80 transition-opacity shadow-sm" />
                <img src="https://placehold.co/120x40/000/fff?text=App+Store" alt="App Store" className="h-10 rounded-lg cursor-pointer hover:opacity-80 transition-opacity shadow-sm" />
              </div>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold text-[#4b5966] mb-6 font-manrope">Services</h4>
            <ul className="space-y-4 text-[#777] text-sm">
              {[
                'Restaurants Near Me', 
                'African Food Grocery', 
                'Bulk Marketplace', 
                'Express Delivery'
              ].map(item => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 hover:text-brand-orange transition-all group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-brand-orange transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-bold text-[#4b5966] mb-6 font-manrope">Company</h4>
            <ul className="space-y-4 text-[#777] text-sm">
              {footerLinks.map(item => (
                <li key={item.id}>
                  <NavLink to={item.link} className="flex items-center gap-2 hover:text-brand-orange transition-all group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-brand-orange transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-bold text-[#4b5966] mb-6 font-manrope">Accounts</h4>
            <ul className="space-y-4 text-[#777] text-sm">
              {footerAccountsLinks.map(item => (
                <li key={item.id}>
                  <NavLink to={item.link} className="flex items-center gap-2 hover:text-brand-orange transition-all group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-brand-orange transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold text-[#4b5966] mb-6 font-manrope">Contact Us</h4>
            <ul className="space-y-5 text-[#777] text-sm">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-[#fff6ec] flex items-center justify-center flex-shrink-0 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <MapPin size={16} />
                </div>
                <span className="mt-1">123 Lagos Street, Victoria Island, Lagos, Nigeria.</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-[#fff6ec] flex items-center justify-center flex-shrink-0 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <span>+234 800 CHOP KOLA</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-[#fff6ec] flex items-center justify-center flex-shrink-0 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <Mail size={16} />
                </div>
                <span>help@chopkola.com</span>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-8">
              <p className="text-xs font-bold text-[#4b5966] uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-10 h-10 bg-white border border-gray-100 text-[#4b5966] flex items-center justify-center rounded-full hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-[#f8f8fb] border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-sm text-[#777]">
          <p className="flex items-center gap-1">
            Copyright © {new Date().getFullYear()} <span className="font-bold text-brand-orange">Chopkola</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="https://placehold.co/250x30/f8f8fb/4b5966?text=Visa+Mastercard+Verve+Paystack" alt="Secure Payments" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;