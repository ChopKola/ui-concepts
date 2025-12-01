import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const RegisterPageLayout: React.FC = () => {
  return (
    <div className="min-h-[50%] flex items-stretch bg-white overflow-hidden">
      
      {/* Left Side - Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 relative z-10 overflow-y-auto h-screen">
        
        {/* Back to Home Link */}
        <a href="/" className="absolute top-8 left-8 md:left-16 text-[#777] hover:text-brand-orange flex items-center gap-2 text-sm font-medium transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </a>

        <div className="max-w-lg w-full mx-auto mt-16 lg:mt-0">
          
          {/* Header */}
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-[#4b5966] font-manrope mb-3">
              Create <span className="text-brand-orange">Account</span>
            </h2>
            <p className="text-[#777] text-sm leading-relaxed">
              Join us to order your favorite meals, track deliveries, and get exclusive offers.
            </p>
          </div>

          {/* Form */}
          <form action="#" method="post" className="space-y-6">
            
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#4b5966] ml-1">First Name*</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter your first name"
                  className="w-full px-4 py-3.5 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white focus:border-brand-orange/50 focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#4b5966] ml-1">Last Name*</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter your last name"
                  className="w-full px-4 py-3.5 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white focus:border-brand-orange/50 focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#4b5966] ml-1">Email*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3.5 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white focus:border-brand-orange/50 focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#4b5966] ml-1">Phone Number*</label>
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3.5 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white focus:border-brand-orange/50 focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#4b5966] ml-1">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Address Line 1"
                className="w-full px-4 py-3.5 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white focus:border-brand-orange/50 focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400"
              />
            </div>

            {/* Location Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#4b5966] ml-1">City *</label>
                <div className="relative">
                  <select
                    name="gi_select_city"
                    id="gi-select-city"
                    className="w-full px-4 py-3.5 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white focus:border-brand-orange/50 focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all text-[#4b5966] text-sm font-medium appearance-none cursor-pointer"
                    defaultValue="default"
                  >
                    <option value="default" disabled>Select City</option>
                    <option value="1">City 1</option>
                    <option value="2">City 2</option>
                    <option value="3">City 3</option>
                    <option value="4">City 4</option>
                    <option value="5">City 5</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#4b5966] ml-1">Post Code</label>
                <input
                  type="text"
                  name="postalcode"
                  placeholder="Post Code"
                  className="w-full px-4 py-3.5 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white focus:border-brand-orange/50 focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#4b5966] ml-1">Country *</label>
                <div className="relative">
                  <select
                    name="gi_select_country"
                    id="gi-select-country"
                    className="w-full px-4 py-3.5 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white focus:border-brand-orange/50 focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all text-[#4b5966] text-sm font-medium appearance-none cursor-pointer"
                    defaultValue="default"
                  >
                    <option value="default" disabled>Select Country</option>
                    <option value="1">Country 1</option>
                    <option value="2">Country 2</option>
                    <option value="3">Country 3</option>
                    <option value="4">Country 4</option>
                    <option value="5">Country 5</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#4b5966] ml-1">Region State</label>
                <div className="relative">
                  <select
                    name="gi_select_state"
                    id="gi-select-state"
                    className="w-full px-4 py-3.5 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white focus:border-brand-orange/50 focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all text-[#4b5966] text-sm font-medium appearance-none cursor-pointer"
                    defaultValue="default"
                  >
                    <option value="default" disabled>Select Region/State</option>
                    <option value="1">Region/State 1</option>
                    <option value="2">Region/State 2</option>
                    <option value="3">Region/State 3</option>
                    <option value="4">Region/State 4</option>
                    <option value="5">Region/State 5</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-4 bg-[#4b5966] text-white rounded-2xl font-bold text-sm hover:bg-brand-orange transition-all duration-300 shadow-lg shadow-[#4b5966]/20 flex items-center justify-center gap-2 group"
            >
              Register
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

          </form>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-[#777] text-sm">
              Already have an account?{' '}
              <a href="login.html" className="font-bold text-brand-orange hover:text-[#4b5966] transition-colors">
                Login
              </a>
            </p>
          </div>

        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden h-screen sticky top-0">
        <div className="absolute inset-0 bg-brand-orange/10 backdrop-blur-[2px] z-10"></div>
        <img
          src="/ui-concepts/vendor-resource/img/PROFILE.png"
          alt="Food Background"
          className="absolute inset-0 w-full h-full "
        />
        
        {/* Quote/Content Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-16 z-20 bg-gradient-to-t from-black/80 to-transparent text-white">
          <h3 className="text-3xl font-bold font-manrope mb-4">"Taste the best food from your favorite restaurants."</h3>
          <p className="text-white/80 text-sm">Sign up to start ordering delicious meals.</p>
        </div>
      </div>

    </div>
  );
};

export default RegisterPageLayout;