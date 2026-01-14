import React from 'react';
import { Lock, Send, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="flex-grow pb-20">
      {/* Hero */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDoMGIVfoFiDDADIOJS4-DDeTSa8-YqFRzgxzQkbHXNXd4pQG02J4XhnIcoKwu0g_05SXo0_YkAy7APDgUsbd0rvtp0eIxzhV3AxgHb6RXFpCv0PGLRJlKGxRYCXU6mmEzuSKsvvOPwyteHANO4RSsKE58wrSFpgJ3O_G9TYlBu_PLHY5Wet6USIp7WPWleZAg5Ecb7-llHHIpxQwuaIFraoImRGr1DGgULWvvY0C87YbGkeod6uZRINMsQJFMg0o-heG8zJCVsTt8")'}}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-black tracking-tight mb-4 drop-shadow-lg">Let's Plan Your Journey</h1>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl drop-shadow-md">We are here to help you customize the perfect tour. Reach out to our local experts.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto -mt-20 z-20 relative px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form */}
          <div className="lg:col-span-7 bg-surface-light dark:bg-surface-dark rounded-xl shadow-float p-8 md:p-10 border border-gray-100 dark:border-gray-800">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary dark:text-white mb-2">Send us a message</h2>
              <p className="text-text-secondary dark:text-gray-400">Tell us about your travel plans and we'll reply within 24 hours.</p>
            </div>
            <form className="flex flex-col gap-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-text-primary dark:text-gray-200">Full Name</span>
                  <input type="text" placeholder="Jane Doe" className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark px-4 h-12 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400 dark:text-white" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-text-primary dark:text-gray-200">Email Address</span>
                  <input type="email" placeholder="jane@example.com" className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark px-4 h-12 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400 dark:text-white" />
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-text-primary dark:text-gray-200">Phone Number</span>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark px-4 h-12 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400 dark:text-white" />
                </label>
                <label className="flex flex-col gap-2 relative">
                  <span className="text-sm font-semibold text-text-primary dark:text-gray-200">How can we help?</span>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark px-4 h-12 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-primary dark:text-white cursor-pointer">
                      <option>Booking Inquiry</option>
                      <option>Custom Tour Request</option>
                      <option>Partnership</option>
                      <option>Other Question</option>
                    </select>
                  </div>
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-text-primary dark:text-gray-200">Message</span>
                <textarea className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark px-4 py-3 min-h-[140px] text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400 resize-y dark:text-white" placeholder="Tell us about your dream trip, preferred dates, and group size..."></textarea>
              </label>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-2">
                <div className="flex items-center gap-2 text-text-secondary dark:text-gray-400 text-xs">
                  <Lock size={14} className="text-primary" />
                  <span>Your data is secure. We never share your info.</span>
                </div>
                <button className="w-full md:w-auto min-w-[160px] h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
             <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-float p-8 border border-gray-100 dark:border-gray-800 h-full">
               <h3 className="text-xl font-bold text-text-primary dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={18} />
                  </span>
                  Contact Information
               </h3>
               <div className="space-y-8">
                  <div className="flex gap-4 group">
                    <div className="mt-1"><MapPin size={20} className="text-gray-400 group-hover:text-primary transition-colors" /></div>
                    <div>
                      <h4 className="font-bold text-text-primary dark:text-white mb-1">Headquarters</h4>
                      <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed">123 Old Quarter, Hoan Kiem District<br/>Hanoi, Vietnam 100000</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="mt-1"><Phone size={20} className="text-gray-400 group-hover:text-primary transition-colors" /></div>
                    <div>
                      <h4 className="font-bold text-text-primary dark:text-white mb-1">Support & Bookings</h4>
                      <a href="tel:+84901234567" className="text-text-secondary dark:text-gray-400 text-sm hover:text-primary transition-colors block mb-1">+84 90 123 4567</a>
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-accent-coral/10 text-accent-coral text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-coral animate-pulse"></span> We reply within 24h
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="mt-1"><Mail size={20} className="text-gray-400 group-hover:text-primary transition-colors" /></div>
                    <div>
                      <h4 className="font-bold text-text-primary dark:text-white mb-1">Email Us</h4>
                      <a href="mailto:hello@vietmate.com" className="text-text-secondary dark:text-gray-400 text-sm hover:text-primary transition-colors">hello@vietmate.com</a>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 dark:border-gray-700 my-6"></div>
                  <div>
                    <h4 className="font-bold text-text-primary dark:text-white mb-4 text-sm uppercase tracking-wider">Follow our journey</h4>
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"><Facebook size={18} /></a>
                      <a href="#" className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"><Instagram size={18} /></a>
                      <a href="#" className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"><span className="font-bold text-xs tracking-tighter">Zalo</span></a>
                    </div>
                  </div>
               </div>
             </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-soft h-[320px] relative group border border-gray-200 dark:border-gray-800">
           <div className="w-full h-full bg-gray-200 relative">
             <iframe className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096814183863!2d105.85012587599507!3d21.028811887779344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2sHanoi%20Old%20Quarter!5e0!3m2!1sen!2s!4v1709825631256!5m2!1sen!2s" loading="lazy"></iframe>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;