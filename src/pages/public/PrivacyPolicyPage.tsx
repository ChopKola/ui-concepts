import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Lock, Eye, Database, ShieldAlert, 
  FileKey, Globe, Mail, Check, 
  Fingerprint, Cookie
} from 'lucide-react';
import { cn } from '../../utils/helpers';

// --- Data ---
const LAST_UPDATED = "November 23, 2025";

const PROMISES = [
  { 
    icon: <ShieldAlert size={24} />, 
    title: "Bank-Grade Security", 
    desc: "We use 256-bit SSL encryption to protect your payment and personal info." 
  },
  { 
    icon: <Database size={24} />, 
    title: "No Data Selling", 
    desc: "We do not sell your personal data to third-party brokers. Ever." 
  },
  { 
    icon: <Eye size={24} />, 
    title: "Full Transparency", 
    desc: "You have full control to view, edit, or delete your data at any time." 
  },
];

const SECTIONS = [
  {
    id: "collection",
    title: "1. Information We Collect",
    icon: <Fingerprint size={20} />,
    content: (
      <div className="space-y-4">
        <p>We collect information to provide better services to all our users. The types of information we collect include:</p>
        <div className="overflow-hidden border border-gray-100 rounded-2xl">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#f8f8fb] text-[#4b5966]">
              <tr>
                <th className="px-6 py-3 font-bold">Data Type</th>
                <th className="px-6 py-3 font-bold">Examples</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-[#777]">
              <tr>
                <td className="px-6 py-4 font-medium">Personal Info</td>
                <td className="px-6 py-4">Name, Email, Phone Number, Delivery Address</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Financial Info</td>
                <td className="px-6 py-4">Payment card details (processed securely via Paystack/Stripe), Transaction history</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Location Data</td>
                <td className="px-6 py-4">GPS location (for delivery tracking), IP Address</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: "usage",
    title: "2. How We Use Information",
    icon: <FileKey size={20} />,
    content: (
      <div className="space-y-4">
        <p>We use the information we collect for the following purposes:</p>
        <ul className="space-y-3">
          {[
            "To process and deliver your orders",
            "To communicate with you regarding order updates",
            "To improve our platform through analytics",
            "To detect and prevent fraud",
            "To provide personalized food recommendations"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 min-w-[20px] h-5 rounded-full bg-[#e2fde2] flex items-center justify-center text-[#5caf90]">
                <Check size={12} strokeWidth={3} />
              </div>
              <span className="text-[#777] text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  },
  {
    id: "sharing",
    title: "3. Information Sharing",
    icon: <Globe size={20} />,
    content: (
      <p>
        We do not share your personal information with companies, organizations, or individuals outside of Chopkola except in the following cases: 
        <strong> With Vendors:</strong> To prepare your food. 
        <strong> With Riders:</strong> To deliver your food. 
        <strong> For Legal Reasons:</strong> If required by law enforcement.
      </p>
    )
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking",
    icon: <Cookie size={20} />,
    content: (
      <p>
        We use cookies to improve your experience. Cookies allow us to remember your login status, cart items, and language preferences. You can control cookies through your browser settings, though some features of the app may not function properly without them.
      </p>
    )
  }
];

// --- Components ---

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f8fb] font-poppins text-[#4b5966]">

      {/* Hero Section */}
      <section className="bg-[#4b5966] text-white pt-20 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium text-[#5caf90] mb-6 backdrop-blur-md">
            <Lock size={14} />
            <span>Privacy Center</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-manrope mb-6 leading-tight">
            Your Privacy is <br/> <span className="text-[#5caf90]">Our Priority</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We believe you should always know what data we collect from you and how we use it, and that you should have meaningful control over both.
          </p>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#5caf90] rounded-full blur-[120px] opacity-20"></div>
      </section>

      {/* "Our Promises" Grid - Floating overlap */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROMISES.map((promise, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#f8f8fb] flex items-center justify-center text-brand-orange mb-4">
                {promise.icon}
              </div>
              <h3 className="font-bold text-lg text-[#4b5966] mb-2">{promise.title}</h3>
              <p className="text-sm text-[#777]">{promise.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block w-1/4 flex-shrink-0">
            <div className="sticky top-32">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-sm text-[#777] uppercase tracking-wider mb-4 px-4">Contents</h3>
                <nav className="space-y-1">
                  {SECTIONS.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-3",
                        activeSection === section.id 
                          ? "bg-[#5caf90] text-white shadow-md" 
                          : "text-[#4b5966] hover:bg-[#f8f8fb]"
                      )}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
              <div className="mt-6 px-4 text-xs text-[#777]">
                Last Updated: <span className="font-bold">{LAST_UPDATED}</span>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:w-3/4 space-y-8">
            {SECTIONS.map((section) => (
              <motion.div 
                key={section.id}
                id={section.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#fff6ec] flex items-center justify-center text-brand-orange">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold font-manrope text-[#4b5966]">
                    {section.title}
                  </h2>
                </div>

                <div className="text-[#777] leading-relaxed text-base">
                  {section.content}
                </div>
              </motion.div>
            ))}

            {/* Contact for Data Rights */}
            <div className="bg-[#4b5966] text-white p-10 rounded-3xl shadow-xl mt-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold font-manrope mb-2">Have privacy concerns?</h3>
                <p className="text-gray-300 text-sm max-w-md">
                  If you want to download your data or request account deletion, contact our Data Protection Officer.
                </p>
              </div>
              <a 
                href="mailto:privacy@chopkola.com"
                className="bg-[#5caf90] text-white px-8 py-3.5 rounded-full font-bold hover:bg-white hover:text-[#4b5966] transition-all flex items-center gap-2 shadow-lg"
              >
                <Mail size={18} /> Contact DPO
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;