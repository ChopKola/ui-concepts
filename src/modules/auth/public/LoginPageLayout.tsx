import React, { useState } from 'react';
import { ArrowRight, Mail, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPageLayout: React.FC = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', credentials);
  };

  return (
    <div className="min-h-[50%] flex items-stretch bg-white overflow-hidden">
      
      {/* Left Side - Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 relative z-10">
        
        {/* Back to Home Link */}
        <a href="/" className="absolute top-8 left-8 md:left-16 text-[#777] hover:text-brand-orange flex items-center gap-2 text-sm font-medium transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </a>

        <div className="max-w-md w-full mx-auto">
          
          {/* Header */}
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-[#4b5966] font-manrope mb-3">
              Welcome <span className="text-brand-orange">Back!</span>
            </h2>
            <p className="text-[#777] text-sm leading-relaxed">
              Log in to access your orders, saved restaurants, and personalized food recommendations.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#4b5966] ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3.5 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white focus:border-brand-orange/50 focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-[#4b5966]">Password</label>
                <Link to="/forgotten-password" className="text-xs font-medium text-brand-orange hover:underline">Forgot Password?</Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3.5 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white focus:border-brand-orange/50 focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-4 bg-[#4b5966] text-white rounded-2xl font-bold text-sm hover:bg-brand-orange transition-all duration-300 shadow-lg shadow-[#4b5966]/20 flex items-center justify-center gap-2 group"
            >
              Log In
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Or</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-[#777] text-sm">
              Don't have an account yet?{' '}
              <Link to="/register" className="font-bold text-brand-orange hover:text-[#4b5966] transition-colors">
                Create Account
              </Link>
            </p>
          </div>

        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange/10 backdrop-blur-[2px] z-10"></div>
        <img
          src="/vendor-resource/img/PROFILE.png" 
          alt="Food Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Quote/Content Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-16 z-20 bg-gradient-to-t from-black/80 to-transparent text-white">
          <h3 className="text-3xl font-bold font-manrope mb-4">"The closest thing to home cooking, delivered."</h3>
          <p className="text-white/80 text-sm">Join thousands of food lovers enjoying authentic meals every day.</p>
        </div>
      </div>

    </div>
  );
};

export default LoginPageLayout;