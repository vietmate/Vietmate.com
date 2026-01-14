import React from 'react';
import { Search, SlidersHorizontal, Grid, List, Clock, Star, Heart } from 'lucide-react';

const Tours: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Condensed Hero */}
      <div className="relative w-full">
        <div 
          className="flex h-[380px] w-full flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-4" 
          style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGyh-rwPgWSc3EfguNuSz5zf-ezP2vzVrTATE66DBsnSRvNu-lTu5MHNwn7yKHi4CW2hsq4qgXh1N2Qhlogfuwd-6OD-tUgim5vH_Mrt_6OHUkbWt_pm2vs4tDavwJngPllMcqmPiAwb12gXfIUq1G46uxgqqDyiM3ho-99mcodMejk1s6C9f0ImunkmwOlvvbIMpM-Enk4IENqfMop81dmDEczvlsDwVAZtU4WIVVX8IXGpBHtkASsOJj5kiCWRNkmadzO9tlaEU")'}}
        >
          <div className="flex flex-col gap-2 text-center max-w-3xl animate-fade-in-up">
            <h1 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] drop-shadow-md">
              Curated Vietnam Journeys
            </h1>
            <h2 className="text-gray-100 text-base lg:text-lg font-medium leading-normal drop-shadow-sm max-w-xl mx-auto">
              Unlock exclusive packages and unforgettable adventures from North to South.
            </h2>
          </div>
          
          <div className="w-full max-w-[600px] shadow-xl rounded-lg overflow-hidden">
            <div className="flex w-full items-stretch h-14 bg-white dark:bg-surface-dark rounded-lg">
              <div className="flex items-center justify-center pl-4 text-text-muted">
                <Search size={20} />
              </div>
              <input 
                className="w-full bg-transparent border-none focus:ring-0 text-text-main dark:text-white placeholder:text-text-muted px-4 text-sm font-medium" 
                placeholder="Search destinations (e.g., 'Ha Long Bay', 'Hoi An')..."
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-8 font-bold text-sm transition-colors">
                Find Tours
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="layout-container flex w-full justify-center py-10 px-4 md:px-8 lg:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-8">
          
          {/* Sidebar Filters */}
          <aside className="hidden lg:flex w-72 flex-col gap-8 shrink-0">
            <div className="sticky top-24 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
                <h3 className="text-lg font-bold">Filters</h3>
                <button className="text-sm text-primary font-medium hover:underline">Reset</button>
              </div>

              {/* Price Filter */}
              <div className="flex flex-col gap-4">
                <p className="text-base font-bold">Price Range</p>
                <div className="relative h-10 w-full pt-4">
                  <div className="relative h-1 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="absolute left-[20%] right-[30%] h-full rounded-full bg-primary"></div>
                    <div className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 size-4 rounded-full border-2 border-primary bg-white cursor-pointer hover:scale-110 transition-transform shadow-sm"></div>
                    <div className="absolute top-1/2 right-[30%] translate-x-1/2 -translate-y-1/2 size-4 rounded-full border-2 border-primary bg-white cursor-pointer hover:scale-110 transition-transform shadow-sm"></div>
                  </div>
                </div>
                <div className="flex justify-between text-sm font-medium text-text-muted">
                  <span>$500</span>
                  <span>$3,500</span>
                </div>
              </div>

              {/* Duration Filter */}
              <div className="flex flex-col gap-3">
                <p className="text-base font-bold">Duration</p>
                {['Under 5 Days', '5-10 Days', '10+ Days'].map((label, idx) => (
                  <label key={idx} className="group flex cursor-pointer items-center gap-3">
                    <input type="checkbox" className="size-5 rounded border-2 border-gray-300 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary checked:border-primary transition-all" defaultChecked={idx===1} />
                    <span className="text-sm text-text-main dark:text-gray-300 group-hover:text-primary transition-colors">{label}</span>
                  </label>
                ))}
              </div>

              {/* Travel Style */}
              <div className="flex flex-col gap-3">
                <p className="text-base font-bold">Travel Style</p>
                <div className="flex flex-wrap gap-2">
                  {['Cultural', 'Adventure', 'Luxury', 'Culinary', 'Family'].map((style, idx) => (
                     <button key={idx} className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${style === 'Adventure' ? 'border-primary bg-primary/10 text-primary font-bold' : 'border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary bg-white dark:bg-surface-dark'}`}>
                       {style}
                     </button>
                  ))}
                </div>
              </div>

              {/* Help Box */}
              <div className="mt-4 rounded-xl bg-primary/10 p-4 border border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white p-1 rounded-full"><SlidersHorizontal size={16} className="text-primary" /></div>
                  <p className="text-sm font-bold text-primary">Need Help?</p>
                </div>
                <p className="text-xs text-text-muted mb-3">Our local experts are ready to customize your trip.</p>
                <a href="#" className="text-xs font-bold text-primary underline">Contact Support</a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex flex-1 flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg bg-surface-light dark:bg-surface-dark p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <p className="text-sm font-medium text-text-muted">Showing <span className="font-bold text-text-main dark:text-white">12</span> of <span className="font-bold text-text-main dark:text-white">45</span> packages</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-text-muted hidden sm:inline">Sort by:</span>
                  <select className="h-9 rounded-md border-gray-200 bg-transparent text-sm font-medium focus:border-primary focus:ring-0 dark:border-gray-700 cursor-pointer">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Duration</option>
                  </select>
                </div>
                <div className="h-6 w-px bg-gray-200 dark:bg-gray-800"></div>
                <div className="flex gap-1">
                  <button className="flex size-8 items-center justify-center rounded bg-primary/10 text-primary transition-colors"><Grid size={18} /></button>
                  <button className="flex size-8 items-center justify-center rounded text-text-muted hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"><List size={18} /></button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <TourCard 
                title="Classic Vietnam: North to South"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAq0GC8LsGm50u-ApsKZzmTdMypYMVGh7sGu3RcHL7m0nR7ziOAr4WjJsnjDnJjGe-QR7idQMoX0wO2nd9KQkfrCItT1Ocy5QmDwtnTL469VqN9t24IsduLieHDxC8LhnrGY5W_6hbgg1PyoNXrAq4peDFokCG-z3D5Cz44XaHZTBCJOR5EUTdA__0-_-b4runK8fGqq-6Cp69Im6-WGkHajitk1L5XCynhmJbUg5JCkCFgmoZDu12LeCA07nQxZX749pzpBQxh9_Q"
                days={12}
                rating={4.9}
                reviews={128}
                price={1299}
                desc="Experience the essential highlights from Hanoi's history to the Mekong Delta's waterways."
                badge="Best Seller"
                badgeColor="bg-accent-coral"
              />
              <TourCard 
                title="Luxury Hue & Hoi An Escape"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuD82LYxI9yx9bIstRhgdD_eshKKAupC02eHlSWYrMJWTHM6m7hc62LulmJFwSGWCesJ5hKtR4DMNR-28AjZ96sNI7_TKSDrTUfxVWP6UxFoeVaXAGqti8NFmOGlWgff4uP0jm656D62tc4r-ZqsKpBUsnFiI318Hq7An07PsajMHMnsDMU9I3tAWfKgOlQfar5HdErf9YHY1Vaw04ruZggSlkwBUB6F5bnc4jVGhLVwGdDQ4mqQ_OavrrIu_irV0nsbiS9nemqtyX4"
                days={5}
                rating={4.8}
                reviews={84}
                price={850}
                desc="Indulge in 5-star resorts, private cooking classes, and ancient town walking tours."
                badge="Relaxing"
                badgeColor="bg-green-600"
              />
               <TourCard 
                title="Sapa Trekking Adventure"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuARI_iWqKMMzPgHwWKIRBaiGxmESXHnMl8lreXmhtIWa9GeRB1Fme-eqNbEKWi0dInNCOCZIhptdP8_jIChLTF2pjaILKYWVpcmnHyji-tFgVsbYdsYS1WJZsrBHl3nQNKeRpkiCDsB5b-OMV2_ysi5FHV4-bByf0JRVF8mbWLqGU_3nzf3jGo7QJtO9lUYRSQ2zk2twlyLEKQ0npHrEOGQGsgxZwdX1VYbVBjFR4BVrxnc259gOjVS3CIv4NM8W8_SX5oQ5V9QKR0"
                days={4}
                rating={5.0}
                reviews={42}
                price={350}
                oldPrice={420}
                desc="Hike through the majestic rice terraces and visit local hill tribe villages."
                badge="Adventure"
                badgeColor="bg-purple-600"
              />
               <TourCard 
                title="Taste of Vietnam: Food Tour"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAeZmGRW8m3EP_40yOLylqxREKPPXOqKQO471-lPEa6MpwaEMv-IIhXuxZL073QA_iQ9Z580u0Td-duZVKyTRMwOcP4vJk-rfhQTtKwnfQu35JjzV9O11JJtW738gDIMKmQI1m1qFhIC1cDAWcFMhvm-095_kYJPS3mYCRsXsKlGDPPUnr2hljgMXTgMzIq9fawzJiiLnGhYri2NRsUT_gng6LoQxl6tPLkTPf_CkZGYl4KvnveFEjGV251bK4Cf3FJdA401NOL4zE"
                days={9}
                rating={4.7}
                reviews={96}
                price={1150}
                desc="A gastronomic journey from the street food stalls of Hanoi to the floating markets of Can Tho."
                badge="Culinary"
                badgeColor="bg-orange-500"
              />
              <TourCard 
                title="Da Nang & Central Heritage"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDxZK3h8ECz1ORWX-svaBvNV9oFQia4hPIpiePbHt68CJh6B0e44_PpZef50_luW7xcND3vIBf-lGo9tmgAU_EYNC0eR4yMHGGJmwstaePP0G09JDcl3MQVho02_naPpwc2ZSX-kB7VM4hO8xVdWYXCEibUIiJFVpVRweo1-66OFg1JB0MODzSGETXv-4odZWOdWNGqUxPpaFjMIEKa7GJ0dUlccL-DCGWIZLbEx90q4ifP5EWryMe8F_7ozWyXKkUIYzJ9QQOF_0c"
                days={7}
                rating={4.8}
                reviews={210}
                price={920}
                desc="Discover the Golden Bridge, the Imperial City of Hue, and My Son Sanctuary."
                badge="Trending"
                badgeColor="bg-[#149cb8]"
              />
              <TourCard 
                title="Ha Long Bay Cruise"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAYlqwiiyENBRRWXfibD8Q9CjiyIg0yebC6UpfdApi09_RIc3ilS1WUh6HWzWIl_jEStGmDR3ruhNHoXMpMboAKeFFdfWp4DTEL0NIB5I3X4m39Rmx_yjAm4nxmXTdPTJvcad924SLkZYnJBq522jJZC36E460a8-Fx7SbKnUF4wlwltBQdyuv22aDqW4JRufmAF77k4e5bh56xbnLTUQBw1ZZhSl6b9S0LbN4S31H_JquTjPIzUXtedPMGI_CkB4vbj7LADffpe2Q"
                days={3}
                rating={4.6}
                reviews={55}
                price={299}
                oldPrice={350}
                desc="A compact luxury cruise experience exploring the hidden caves and grottos."
                badge="-15% Off"
                badgeColor="bg-red-500"
              />
            </div>
            
             <div className="flex justify-center mt-8">
                <button className="flex items-center gap-2 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 py-3 px-8 text-sm font-bold shadow-sm hover:border-primary hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-lg">cached</span>
                    Load More Adventures
                </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

const TourCard = ({ title, image, days, rating, reviews, price, oldPrice, desc, badge, badgeColor }: any) => (
  <div className="group flex flex-col rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className={`absolute top-3 left-3 ${badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm`}>
        {badge}
      </div>
      <button className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/80 dark:bg-black/50 text-text-muted hover:bg-white hover:text-red-500 transition-colors backdrop-blur-sm">
        <Heart size={18} />
      </button>
    </div>
    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          <Star size={14} className="text-yellow-500 fill-current" />
          <span className="text-xs font-bold">{rating}</span>
          <span className="text-xs text-text-muted">({reviews} reviews)</span>
        </div>
        <div className="flex items-center gap-1 text-text-muted">
          <Clock size={14} />
          <span className="text-xs font-medium">{days} Days</span>
        </div>
      </div>
      <h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-text-muted line-clamp-2 mb-4">{desc}</p>
      <div className="mt-auto flex items-end justify-between border-t border-gray-100 dark:border-gray-800 pt-4">
        <div className="flex flex-col">
          <span className="text-xs text-text-muted">From</span>
          <div className="flex items-center gap-2">
             <span className="text-xl font-bold text-primary">${price}</span>
             {oldPrice && <span className="text-xs line-through text-text-muted">${oldPrice}</span>}
          </div>
        </div>
        <button className="bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors shadow-sm">
            View Deal
        </button>
      </div>
    </div>
  </div>
);

export default Tours;