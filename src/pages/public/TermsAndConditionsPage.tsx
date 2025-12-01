import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Shield, Truck, CreditCard, 
  AlertCircle, UserCheck, Ban, Scale, 
  ArrowRight, Download, Calendar
} from 'lucide-react';
import { cn } from '../../utils/helpers';

// --- Data ---
const LAST_UPDATED = "November 23, 2025";

const SECTIONS = [
  {
    id: "introduction",
    title: "1. Introduction",
    icon: <FileText size={20} />,
    content: "Welcome to Chopkola. These Terms and Conditions ('Terms') govern your use of our website and mobile application. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.",
    summary: "Basically: By using our app, you agree to follow our rules. If you don't agree, you can't use the app."
  },
  {
    id: "accounts",
    title: "2. User Accounts",
    icon: <UserCheck size={20} />,
    content: "When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account. You are responsible for safeguarding the password that you use to access the Service.",
    summary: "Basically: Tell the truth about who you are, keep your password safe, and don't share your account."
  },
  {
    id: "orders",
    title: "3. Orders & Payments",
    icon: <CreditCard size={20} />,
    content: "All orders are subject to acceptance and availability. Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.",
    summary: "Basically: Prices might change. If an item is out of stock, we might have to cancel that part of your order."
  },
  {
    id: "delivery",
    title: "4. Delivery Policy",
    icon: <Truck size={20} />,
    content: "Delivery times quoted at the time of ordering are approximate only and may vary. Food will be delivered to the address as designated by you at the time of ordering. If you are not available to take delivery, we may leave the items at a secure location or return them to the vendor, for which you may be charged.",
    summary: "Basically: We try to be on time, but traffic happens. Please be there to pick up your food when we arrive."
  },
  {
    id: "cancellations",
    title: "5. Cancellations & Refunds",
    icon: <Ban size={20} />,
    content: "You have the right to cancel an order within a reasonable time and before the order becomes a 'Started Order'. An order is classified as started once the restaurant has begun preparation. Refunds for non-compliant orders will be processed to the original method of payment within 5-10 business days.",
    summary: "Basically: You can cancel if the kitchen hasn't started cooking yet. If we mess up your order, we'll refund you."
  },
  {
    id: "liability",
    title: "6. Limitation of Liability",
    icon: <AlertCircle size={20} />,
    content: "In no event shall Chopkola, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.",
    summary: "Basically: We aren't responsible for indirect losses. Our liability is limited to the cost of your order."
  },
  {
    id: "governing",
    title: "7. Governing Law",
    icon: <Scale size={20} />,
    content: "These Terms shall be governed and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.",
    summary: "Basically: Legal disputes are handled under Nigerian law."
  }
];

// --- Components ---

const TermsAndConditionsPage = () => {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  // Simple scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      SECTIONS.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Height of sticky header + margin
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f8fb] font-poppins text-[#4b5966]">

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 pt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-[#5caf90] font-bold text-sm uppercase tracking-widest mb-3">
              <Shield size={16} />
              <span>Legal Information</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-manrope mb-4 leading-tight text-[#4b5966]">
              Terms & <span className="text-brand-orange">Conditions</span>
            </h1>
            <p className="text-[#777] text-lg mb-6">
              Please read these terms carefully before using our services. They define the relationship between you and Chopkola.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center text-sm text-[#777]">
              <div className="flex items-center gap-2 bg-[#f8f8fb] px-4 py-2 rounded-full border border-gray-200">
                <Calendar size={16} className="text-[#4b5966]" />
                Last Updated: <span className="font-bold text-[#4b5966]">{LAST_UPDATED}</span>
              </div>
              <button className="flex items-center gap-2 hover:text-brand-orange transition-colors font-medium group">
                <Download size={16} />
                Download PDF Version
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Sidebar - Sticky Navigation */}
          <aside className="hidden lg:block w-1/4 flex-shrink-0">
            <div className="sticky top-32">
              <h3 className="font-bold text-lg mb-4 font-manrope px-4">Table of Contents</h3>
              <nav className="space-y-1">
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-3",
                      activeSection === section.id 
                        ? "bg-[#4b5966] text-white shadow-md" 
                        : "text-[#777] hover:bg-white hover:text-[#5caf90]"
                    )}
                  >
                    <span className={cn(
                      activeSection === section.id ? "opacity-100" : "opacity-50"
                    )}>
                      {section.icon}
                    </span>
                    {section.title}
                  </button>
                ))}
              </nav>

              {/* Contact Card */}
              <div className="mt-10 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-sm mb-2">Have questions?</h4>
                <p className="text-xs text-[#777] mb-4">Our support team is here to help clarify any points.</p>
                <button className="text-brand-orange text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Contact Support <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </aside>

          {/* Right Content - Terms */}
          <div className="lg:w-3/4 space-y-8">
            {SECTIONS.map((section) => (
              <motion.div 
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-dashed border-gray-100">
                  <div className="w-12 h-12 rounded-2xl bg-[#f8f8fb] flex items-center justify-center text-[#5caf90]">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold font-manrope text-[#4b5966]">
                    {section.title}
                  </h2>
                </div>

                <div className="text-[#777] leading-relaxed mb-6 text-base">
                  <p>{section.content}</p>
                </div>

                {/* "Simply Put" Box - UX Best Practice */}
                <div className="bg-[#fff6ec] border border-[#ffe0b2] rounded-xl p-5 flex gap-4 items-start">
                  <div className="mt-1">
                    <div className="w-5 h-5 rounded-full bg-brand-orange text-white flex items-center justify-center text-xs font-bold">
                      i
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#4b5966] mb-1">Simply Put:</h4>
                    <p className="text-sm text-[#777] italic">
                      "{section.summary}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Acceptance Footer */}
            <div className="py-12 text-center">
              <p className="text-[#777] text-sm mb-6">
                By clicking "I Agree" or using our platform, you acknowledge that you have read and understood these terms.
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-8 py-3 bg-[#4b5966] text-white rounded-full font-bold hover:bg-[#5caf90] transition-colors shadow-lg">
                  I Agree to Terms
                </button>
                <button className="px-8 py-3 bg-white border border-gray-200 text-[#777] rounded-full font-bold hover:bg-gray-50 transition-colors">
                  Decline
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default TermsAndConditionsPage;