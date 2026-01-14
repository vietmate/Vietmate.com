import React from 'react';
import { Search, Bell, CreditCard, Heart, User, LifeBuoy, LogOut, CalendarPlus, Download, Share2, ArrowRight, PlaneTakeoff, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display overflow-hidden">
       {/* Dashboard Header */}
       <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#f0f4f4] dark:border-[#2a2e35] px-6 py-3 bg-surface-light dark:bg-surface-dark z-20 shrink-0">
          <div className="flex items-center gap-8">
             <Link to="/" className="flex items-center gap-2 text-primary">
               <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
                  <svg viewBox="0 0 48 48" fill="none" className="size-6 text-primary"><path d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor"/><path d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor"/></svg>
               </div>
               <h2 className="text-xl font-bold tracking-tight">Vietmate</h2>
             </Link>
             <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                   <div className="text-text-muted flex border-none bg-[#f0f4f4] dark:bg-[#2a2e35] items-center justify-center pl-4 rounded-l-lg border-r-0"><Search size={18} /></div>
                   <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f0f4f4] dark:bg-[#2a2e35] h-full placeholder:text-text-muted px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal" placeholder="Find a tour..." />
                </div>
             </label>
          </div>
          <div className="flex items-center gap-6">
             <div className="hidden md:flex items-center gap-6">
               <Link to="/tours" className="text-sm font-medium hover:text-primary transition-colors">Destinations</Link>
               <Link to="/tours" className="text-sm font-medium hover:text-primary transition-colors">Tours</Link>
               <Link to="#" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
             </div>
             <div className="flex items-center gap-3 border-l border-[#f0f4f4] dark:border-[#2a2e35] pl-6">
                <button className="relative p-2 text-text-muted hover:text-primary transition-colors">
                  <Bell size={20} />
                  <span className="absolute top-1.5 right-1.5 size-2 bg-accent-coral rounded-full border-2 border-white dark:border-surface-dark"></span>
                </button>
                <div className="bg-center bg-no-repeat bg-cover rounded-full size-9 cursor-pointer ring-2 ring-offset-2 ring-transparent hover:ring-primary/20 transition-all" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCv0_QiPwTODEQrGQfWAbrQWUwTSambRJ-WK3JmVzo5O9yQJ64YyBJFjD3mhMQb75Pl9tC6i0shZjhkfwYoSYnjnn2ufrxVaC4sc3Twaw833n52SMtuoAHS82cWyrcEDLWdkzbTUD5es9Ya-L3ZQu5RS9Icn7ZBJQ-rHrJO6dDUb00x17XdkVimUeunBZvdzANb7dFXr4B4dusZvxR1_N4hsxBeHpahwiOQznIVgQO_nXC2zBazoFOUMyEU3gnfkaimMUNMOXNt3GU")'}}></div>
             </div>
          </div>
       </header>

       <div className="flex flex-1 overflow-hidden relative">
          {/* Sidebar */}
          <aside className="hidden lg:flex w-72 flex-col justify-between bg-surface-light dark:bg-surface-dark border-r border-[#f0f4f4] dark:border-[#2a2e35] p-4 shrink-0 overflow-y-auto">
             <div className="flex flex-col gap-8">
                <div className="flex gap-4 items-center p-3 rounded-xl bg-background-light dark:bg-[#252830]">
                   <div className="bg-center bg-no-repeat bg-cover rounded-full size-12 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5U6akpTQ5bBtvULuLunaRYgdpOThEGEhO5SckhF5Opviv4WZlQ7qqoFW0O-EiC61lTMLyQ2rC8uE8130V7Iibb9fKZvlN5aCJToYjl4lurbzwNPqY8EPYGXfmU6OWcN41OZREMvawmISlgmW0FqArLNzYWmTz0sUEh0t_ZDUQtyUj1HXto9my5tWxYfE-wT9n49epH16HnyDpMaTD1RKLR59Z_D8v8Fq9hs8LuyERlRLgakx2v114r0aBZJMi_6YxwArVAVUZlt4")'}}></div>
                   <div className="flex flex-col overflow-hidden">
                      <h1 className="text-sm font-bold truncate">Xin chào, Alex!</h1>
                      <p className="text-text-muted text-xs">Adventure seeker</p>
                   </div>
                </div>
                <nav className="flex flex-col gap-2">
                   <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary group transition-all" href="#"><CreditCard size={18} /><span className="text-sm font-bold">My Bookings</span></a>
                   <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-[#f0f4f4] dark:hover:bg-[#2a2e35] hover:text-text-main dark:hover:text-white transition-all" href="#">
                     <Heart size={18} />
                     <span className="text-sm font-medium">Saved Trips</span>
                     <span className="ml-auto text-[10px] font-bold bg-accent-coral text-white px-1.5 py-0.5 rounded-full">3</span>
                   </a>
                   <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-[#f0f4f4] dark:hover:bg-[#2a2e35] hover:text-text-main dark:hover:text-white transition-all" href="#"><User size={18} /><span className="text-sm font-medium">Profile Settings</span></a>
                   <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-[#f0f4f4] dark:hover:bg-[#2a2e35] hover:text-text-main dark:hover:text-white transition-all" href="#"><LifeBuoy size={18} /><span className="text-sm font-medium">Support</span></a>
                </nav>
             </div>
             <div className="flex flex-col gap-4">
               <div className="p-4 rounded-xl bg-gradient-to-br from-[#149cb8] to-[#0d7489] text-white">
                 <p className="text-xs font-medium opacity-80 mb-1">Loyalty Program</p>
                 <p className="text-sm font-bold mb-3 leading-snug">Complete your profile to earn 500 points!</p>
                 <button className="w-full py-2 text-xs font-bold bg-white/20 hover:bg-white/30 rounded-lg transition-colors">Complete Now</button>
               </div>
               <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-[#f0f4f4] dark:hover:bg-[#2a2e35] hover:text-text-main dark:hover:text-white transition-all">
                  <LogOut size={18} />
                  <span className="text-sm font-medium">Log Out</span>
               </Link>
             </div>
          </aside>

          {/* Main Area */}
          <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10 scroll-smooth">
             <div className="max-w-[1000px] mx-auto flex flex-col gap-10 pb-20">
                <section className="flex flex-col gap-6">
                   <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                      <div className="flex flex-col gap-1">
                         <h1 className="text-3xl md:text-4xl font-extrabold text-text-main dark:text-white tracking-tight">My Dashboard</h1>
                         <p className="text-text-muted">Manage your upcoming Vietnam adventures</p>
                      </div>
                      <div className="hidden md:flex gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white dark:bg-surface-dark border border-[#dce4e5] dark:border-[#2a2e35] rounded-lg shadow-sm hover:bg-[#fbfaf9] dark:hover:bg-[#252830] transition-colors">
                          <CalendarPlus size={18} /> Plan New Trip
                        </button>
                      </div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <StatCard title="Total Trips" value="5" icon={<PlaneTakeoff size={20} />} iconClass="text-primary/40 bg-primary/10" />
                      <StatCard title="Countries Visited" value="2" icon={<Globe size={20} />} iconClass="text-purple-500/40 bg-purple-500/10" />
                      <StatCard title="Loyalty Points" value="1,250" icon={<Award size={20} />} iconClass="text-accent-coral/40 bg-accent-coral/10" />
                   </div>
                </section>

                <section>
                   <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-bold">Next Adventure</h2>
                      <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold uppercase rounded-full tracking-wide">Confirmed</span>
                   </div>
                   <div className="relative w-full h-[400px] rounded-2xl overflow-hidden group shadow-lg">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBf215mFhpnaOEqO2RjmUDmnY3wb-odi8LoV8ZcDDHuB_Kwwg-utBm-f5h1g_JjCJRpPA7TVjdGSV_l54Th78JO-43cNTi8tFzl5bpen71k5ZUl892F1dpD79EBmJPWgRtFKFictLh9v17Vou7e4f5X5YdXdOZGzzioz7jlfAe1j_8ehUDwQZzNFEG01ZV2WWDlaqEYp1ye8netk93nxICehqfuyCcajSP8Xbz5nbtpKQ3YZr4UMHpYkTNVkkzDHrdKezmdW_N-3U8")'}}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                         <div className="flex flex-col gap-2 max-w-xl">
                            <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                               <CalendarPlus size={18} /><span>Oct 12 - Oct 20, 2023</span><span className="w-1 h-1 bg-white/50 rounded-full mx-1"></span><span>8 Days</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">Hanoi & Ha Long Bay Explorer</h3>
                            <p className="text-white/80 line-clamp-2 md:line-clamp-none">Experience the magic of Northern Vietnam. From the bustling streets of Hanoi to the tranquil waters of Ha Long Bay.</p>
                         </div>
                         <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto">
                            <div className="flex items-center gap-2 mb-1"><div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded text-white text-xs font-bold uppercase">14 Days To Go</div></div>
                            <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-primary/30">View Itinerary <ArrowRight size={18} /></button>
                            <div className="flex gap-2">
                               <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium py-2.5 px-4 rounded-lg transition-all border border-white/10"><Download size={18} /><span className="text-sm">Tickets</span></button>
                               <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium py-2.5 px-4 rounded-lg transition-all border border-white/10"><Share2 size={18} /><span className="text-sm">Share</span></button>
                            </div>
                         </div>
                      </div>
                   </div>
                </section>

                <section>
                   <div className="flex items-center justify-between mb-4 px-1">
                      <h2 className="text-xl font-bold">Past Trips</h2>
                      <a className="text-primary text-sm font-bold hover:underline" href="#">View All</a>
                   </div>
                   <div className="flex flex-col gap-3">
                      <HistoryCard title="Hoi An Ancient Town Getaway" date="Jun 2023" status="Completed" duration="3 Days" refNo="#VN-88321" img="https://lh3.googleusercontent.com/aida-public/AB6AXuCCqftA-hjMnLZDF_RccaBH5LKhEBWEJbD2Tj9Ni4k70biehQ22P2va57UjNcWC1KJRGhiQO0VV1O32YqnOfH_n578jmHuORYi3Zdzk8WYTrNOwOmWnS16FbbK6oks4Y87AgFdAPOk-E73ZwDojZBbshlBi3Qth96JVKnJC7hJekH876bAWwgB9_-ota1ptyfTCN5gYmL9QLhfE0xUgdA9s6JrjCh_GXWRl1TI7AAtDZhQeMSxmX6ds6aeLdhPc6NhzdjKUvmsyQCg" />
                      <HistoryCard title="Mekong Delta River Life" date="Jan 2023" status="Completed" duration="2 Days" refNo="#VN-77492" img="https://lh3.googleusercontent.com/aida-public/AB6AXuB3htVYjG9bBPTnAhf0roL0jDEjhzlB4KYJgy_qqCr3hN5ZaCZRakwXHAo33vHRb9CBCoHjGDz2SvcDGkU0BF6BrzUO87ozb2gDXL-C5QRfI19T_dPU6NtsLTSe3HFKSTQ8GXc0cLVbrfna6bWhpGDp4G1oHPbc6gGeiiglucVw6qJ6z1poo2mb_-hquB4x39sAqvNIkf6vsJIdWXMlocGToqajl1hRbj6lEiN70N1p1zBSHKqc8Y_WhGydPswrM-GKJ2sWgHqrCVU" />
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white dark:bg-surface-dark p-4 rounded-xl border border-[#f0f4f4] dark:border-[#2a2e35] opacity-75 hover:opacity-100 transition-opacity">
                         <div className="size-16 sm:size-20 rounded-lg bg-cover bg-center shrink-0 grayscale" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDF_7c1NoCfXTEaE8QZjgDEmnznjUN2YL-t0i5FyzVn7O61AWwHcilJlw2wQElJyHeAwyFQxN9L-IGEE0OPxTqWEmQv6Qw1ceOJD8fVqg8BGJuSS3YFtzqVmx8Lm0I5aHINje7GrZFKWsDXREchCUjeTyShm3IQ-b85_SKn3n0q-HkJ3AAXOzivtfZFxQhe0JHmQsXsG0hounQH2tObVEa7CxdB9vRwgydXpSLJhYigXHhUctk6d6Y2yYVkX5nP1NDphOCU2iWNLD4")'}}></div>
                         <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1"><span className="text-xs font-bold text-red-500 uppercase tracking-wide">Nov 2022</span><span className="size-1 bg-red-500 rounded-full"></span><span className="text-xs text-red-500 font-bold">Cancelled</span></div>
                            <h4 className="text-lg font-bold text-text-main dark:text-white truncate">Sapa Trekking Adventure</h4>
                            <p className="text-sm text-text-muted truncate">4 Days • Booking Ref: #VN-55201</p>
                         </div>
                      </div>
                   </div>
                </section>
             </div>
          </main>
       </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, iconClass }: any) => (
  <div className="flex flex-col gap-1 bg-white dark:bg-surface-dark p-5 rounded-xl border border-[#f0f4f4] dark:border-[#2a2e35] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
     <div className="flex items-center justify-between">
        <p className="text-text-muted text-sm font-medium">{title}</p>
        <span className={`p-1 rounded-md ${iconClass}`}>{icon}</span>
     </div>
     <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
);

const HistoryCard = ({ title, date, status, duration, refNo, img }: any) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white dark:bg-surface-dark p-4 rounded-xl border border-[#f0f4f4] dark:border-[#2a2e35] hover:border-primary/30 transition-colors group">
     <div className="size-16 sm:size-20 rounded-lg bg-cover bg-center shrink-0" style={{backgroundImage: `url("${img}")`}}></div>
     <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1"><span className="text-xs font-bold text-text-muted uppercase tracking-wide">{date}</span><span className="size-1 bg-text-muted rounded-full"></span><span className="text-xs text-text-muted">{status}</span></div>
        <h4 className="text-lg font-bold text-text-main dark:text-white truncate group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-sm text-text-muted truncate">{duration} • Booking Ref: {refNo}</p>
     </div>
     <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
        <button className="flex-1 sm:flex-none py-2 px-4 rounded-lg border border-[#f0f4f4] dark:border-[#3a3f4b] text-text-main dark:text-white text-sm font-medium hover:bg-[#fbfaf9] dark:hover:bg-[#252830] transition-colors">Write Review</button>
        <button className="flex-1 sm:flex-none py-2 px-4 rounded-lg bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-colors">Book Again</button>
     </div>
  </div>
);

export default Dashboard;