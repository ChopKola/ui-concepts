import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, ArrowRight, ArrowLeft, Timer, 
  LockKeyhole 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ForgotPaaswordPageLayout = () => {
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);

  // Timer logic for OTP resend
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (step === 'otp' && timer > 0) {
        interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    }

    return () => clearInterval(interval);
  }, [step, timer]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API Call to send OTP would go here
    setStep('otp');
    setTimer(30);
  };

  const handleOtpChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Auto-focus next input
    if (element.nextSibling && element.value) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Verifying OTP:", otp.join(''));
    // Navigate to Change Password Page upon success
    window.location.href = '/change-password'; 
  };

  return (
    <div className="min-h-[50%] bg-white flex overflow-hidden font-poppins">
      
      {/* --- Left Side: Form Area --- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 relative z-10">
        
        <Link to="/login" className="absolute top-8 left-8 text-[#777] hover:text-[#4b5966] flex items-center gap-2 text-sm font-bold transition-colors">
          <ArrowLeft size={16} /> Back to Login
        </Link>

        <div className="max-w-md w-full mx-auto">
          
          <div className="mb-8">
            <div className="w-12 h-12 bg-[#fff6ec] rounded-2xl flex items-center justify-center text-brand-orange mb-6">
              <LockKeyhole size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#4b5966] font-manrope mb-3">
              {step === 'email' ? 'Forgot Password?' : 'Verify Account'}
            </h1>
            <p className="text-[#777] text-sm leading-relaxed">
              {step === 'email' 
                ? "Don't worry, it happens. Enter your email and we'll send you a verification code to reset your password." 
                : `We've sent a 4-digit code to ${email}. Please enter it below to verify your identity.`}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {step === 'email' ? (
              /* --- STEP 1: EMAIL INPUT --- */
              <motion.form 
                key="email-form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleEmailSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#4b5966] uppercase tracking-wider ml-1">Email Address</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-orange transition-colors">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full pl-11 pr-4 py-4 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400 focus:ring-4 focus:border-brand-orange/50 focus:ring-brand-orange/10"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="w-full py-4 bg-[#4b5966] text-white rounded-2xl font-bold text-sm hover:bg-brand-orange transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                  Send Code <ArrowRight size={18} />
                </button>
              </motion.form>
            ) : (
              /* --- STEP 2: OTP INPUT --- */
              <motion.form 
                key="otp-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleVerify}
                className="space-y-8"
              >
                <div className="flex gap-4 justify-between">
                  {otp.map((data, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      value={data}
                      onChange={e => handleOtpChange(e.target, index)}
                      onFocus={e => e.target.select()}
                      className="w-16 h-16 md:w-20 md:h-20 text-center bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white outline-none transition-all text-[#4b5966] text-2xl font-extrabold focus:ring-4 focus:border-[#5caf90]/50 focus:ring-[#5caf90]/10"
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#777]">Didn't receive code?</span>
                  {timer > 0 ? (
                    <span className="text-[#4b5966] font-bold flex items-center gap-1">
                      <Timer size={14} /> Resend in 00:{timer < 10 ? `0${timer}` : timer}
                    </span>
                  ) : (
                    <button type="button" onClick={() => setTimer(30)} className="text-brand-orange font-bold hover:underline">
                      Resend Code
                    </button>
                  )}
                </div>

                <button type="submit" className="w-full py-4 bg-[#5caf90] text-white rounded-2xl font-bold text-sm hover:bg-[#4b5966] transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                  Verify & Proceed
                </button>
                
                <button type="button" onClick={() => setStep('email')} className="w-full text-[#777] text-sm hover:text-[#4b5966]">
                  Change Email Address
                </button>
              </motion.form>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* --- Right Side: Visual --- */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden bg-[#f8f8fb]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-[100px]"></div>
        
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <img 
            src="https://placehold.co/600x600/4b5966/ffffff?text=Secure+Account" 
            alt="Security Illustration" 
            className="relative z-10 w-full max-w-md rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700"
          />
        </div>
      </div>

    </div>
  );
};

export default ForgotPaaswordPageLayout