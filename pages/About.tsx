import React from 'react';
import { ArrowRight, Map, Heart, Headphones } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center transition-transform duration-[20s] hover:scale-105" style={{backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuASP0F8CjJ_X8H5gNAaKyFT2nRrw3sKyiBTMF06elGQh9VeqwGKxd-NLA0tC5B3gc-xFVCynHwXdEDm61hZz6xclHGzYDvpivhGJx8b5lpeYWNp1oHQej0L1vumt7lQKgHij6UksVBFp9CtkdbAIPMA1-bpOmXp7Bx1WqW9qiMdslvkIIG3UETElXSj1zV76cS3cYv7Z0ZVmqbBjwIlElpmp6T3CxqCLqnL-mhOugv2THRwuXqoz1voCbTP-H67qr4m9JyLtKweZ4c")'}}></div>
        </div>
        <div className="relative z-10 w-full max-w-[1280px] px-4 sm:px-8 xl:px-12 mt-20">
          <div className="max-w-2xl bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-float border border-white/20 dark:border-gray-700/50">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-accent-coral"></span>
                <span className="text-accent-coral font-bold uppercase tracking-widest text-xs">Since 2015</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary dark:text-white leading-[1.1] tracking-tight">
                Discover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-coral">Soul</span> of Vietnam
              </h1>
              <p className="text-lg text-text-secondary dark:text-gray-300 leading-relaxed font-medium">
                We don't just show you the sights. We connect you with the authentic heart of our homeland through crafted, unforgettable journeys.
              </p>
              <div className="pt-4 flex gap-4">
                <button className="flex items-center gap-2 text-primary dark:text-primary font-bold hover:underline decoration-2 underline-offset-4 group">
                  Explore Our Story 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32 bg-background-light dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-text-primary dark:text-white mb-6">
                  More than just a travel agency
                </h2>
                <div className="space-y-6 text-lg text-text-secondary dark:text-gray-300 leading-relaxed">
                  <p>Vietmate was born from a simple yet powerful passion: to show the world the real Vietnam—beyond the guidebooks and tourist traps.</p>
                  <p>Founded by a group of friends who grew up exploring the misty highlands of Sapa and the bustling canals of the Mekong Delta, we realized that the most meaningful travel moments happen in the spaces between the landmarks.</p>
                  <p>We believe in sustainable tourism that respects local culture and creates meaningful connections between travelers and communities. Every trip we plan is a personal invitation to our home.</p>
                </div>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">5,000+</span>
                  <span className="text-sm text-text-secondary dark:text-gray-400 font-medium uppercase tracking-wider">Happy Travelers</span>
                </div>
                <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">50+</span>
                  <span className="text-sm text-text-secondary dark:text-gray-400 font-medium uppercase tracking-wider">Local Partners</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-[600px] w-full order-1 lg:order-2">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-soft z-10 group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbUlqH-yag-DYC_DuALpj1YJ3pn4yVooPUgCCtA_Hc8J2MWO9W9wFUiwXAlNNzP0SDnqpTo8KDLiiOy9QLN5MHzyw12WB_BvxqyxRfGFi61fkDpiyMpTOjY2sPgLCVEi66_xcBeXIJURisWWu1isw2kcXQTyka8HrTGlW1m1ISAQDwEVW1ht_vCdess_7VI9XFC2pKOKL76ohyrA2HOR9EeOQw2ZdeZOrbJpRazV6N6POkNtIlm9bpw4vrtGly526Ha4sArlsdteQ" alt="Traveler" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-float z-20 border-8 border-background-light dark:border-background-dark group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrm-CpATamlosvZ7q4eqLHeF97SB7nkxIgOXXxfzvvgKEeQ0b9VDCMxhROyj_SyyzBrC69yKzZqrs0gnybib77f8cb5jlMbR5psmAmo6glbnO5Ej1aJfQv58Z1IfWm8qrztzNVGPJS9P0CC5KxuhuEiMDjQMr00ZxI0Ji43L8OeBy89saWfeezj3OKG-JzxTI7xZ5k-gUS0ZK0Lz67oX5fEPKmBh6n1-sr2_ObUIP7NrUBHwdlNp0TL4kPsQ8fiIsKyGss25rOuH4" alt="Food" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-coral/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-surface-dark/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-coral font-bold uppercase tracking-widest text-xs mb-3 block">Our Promise</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-text-primary dark:text-white mb-4">Why Choose Vietmate?</h2>
            <p className="text-text-secondary dark:text-gray-400 text-lg">We don't just book tours; we curate experiences that linger in your memory long after you return home.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Map size={32} />}
              title="Local Experts"
              desc="Our guides aren't just employees; they are storytellers who know every hidden alley, best street food stall, and local secret not found on maps."
            />
            <ValueCard 
              icon={<Heart size={32} />}
              title="Best Price Guarantee"
              desc="Experience luxury without the markup. We work directly with local providers to ensure fair wages for them and the best value for you."
            />
            <ValueCard 
              icon={<Headphones size={32} />}
              title="24/7 Support"
              desc="Travel with peace of mind. From the moment you land until you depart, our dedicated team is just a message away, day or night."
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-text-primary dark:text-white mb-2">Meet the Vietmates</h2>
              <p className="text-text-secondary dark:text-gray-400 text-lg">The passionate people behind your perfect holiday.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamCard name="Linh Nguyen" role="Founder & CEO" image="https://lh3.googleusercontent.com/aida-public/AB6AXuAqP5jM7H3F1Sv9VBeTRrIsgVnt4Zkw-FGBcOHk5PoWc4bQ7G1Zfe3EOkwrSgW3RX8fzb-M_ZpKTtP8QZZNe3ux-951-y2q7fSKz0zvlR9M3FqiCcnD8QTa_Jx2RpW6SGtUqtZD_4rPJ3AKYn8N-3MRGz2tJKuCwp8vTYx941BZkjCyYNVr-dcaYBL6rD-j68kLaPTtC42_YlBLx6lzzIo1a8oItKNlzU7wl2mfCL5xfnRdCrqwqPUGaE7JXN2U9WatOvWSGWT8Ifg" />
            <TeamCard name="Minh Tran" role="Head of Adventure" image="https://lh3.googleusercontent.com/aida-public/AB6AXuBpbvvUZ2FKKozQ1q7jI0Qp5-TtRbY-Q1rxvNZcjeZN9CEuqiBVWyriaL-u94ycxb20E2NQaYc9iscRlVmoYtB3QApMgg69Q3tZ00xpkrO4enklB3Y3Ni5KUAzu1-676uJUK1Pr4w69k5ezjTpEV3RoO6uavz6HLWasRbh9YaTtDAgXElm9kV9N99poPYfHl14lSUbSX1Z1U5Zn5NKxX8VRHqdVIj02741fVzOXUOc_wrEcxon_pXUbANLFePI-sB6V1GFDulRQuoE" className="lg:mt-12" />
            <TeamCard name="Sarah Jenkins" role="Customer Success Lead" image="https://lh3.googleusercontent.com/aida-public/AB6AXuDmvdk2Ydxiqxh30nG8FKDFn5P7BrfzteI2IHjcjm9tHHLb_ZI8hw7dKgnU78bYkuG49IJZwsseenWF6EoVYlEDxDRuoOF9uK75xWJ_zJ--1s7xf_EhyraoC8qQDCQaAEsgBDdnUgGp_bqkPWIRip-y8GGnnpk83LJILC6Jnh1_CRsK2h1_It22gKR89t3dL2-0hmO7cO8Zz-4zjN0nv9waqbSoRc6TGMMWFIOd6lNOCddQG_SNcTmnkl9G9gmH-9HNCDqrw57aKyc" />
            <TeamCard name="David Pham" role="Culinary Specialist" image="https://lh3.googleusercontent.com/aida-public/AB6AXuBqrH4jpQ4YniL07kGEu5afn23VtsJcqopI2tx3MaNtnXh7aeCV-OazOsrxBdj3ky_H8kcnz6NuC3_6Cv0fxWeZn1kWmZAY9vk7xMdehPPyELxLlz0jRxR7SATaf64YEQlVzYgsv7dLs0SPdofJdas6-0ZouUrcu6OiVSbAeBRaMOQvGKcm-k3HiN8HaQQtIzoz2FQujhyC11XPIc-9f0dTmd6Ct8QJMOfvCMxlVlHKMmJo96AX9srTDHnD7AMdn9sJ51q9zUg4si0" className="lg:mt-12" />
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ icon, title, desc }: any) => (
  <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-soft hover:shadow-float transition-all duration-300 hover:-translate-y-2 group border border-gray-100 dark:border-gray-800">
    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-text-primary dark:text-white mb-3">{title}</h3>
    <p className="text-text-secondary dark:text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

const TeamCard = ({ name, role, image, className }: any) => (
  <div className={`group relative overflow-hidden rounded-xl bg-white dark:bg-surface-dark shadow-sm hover:shadow-lg transition-all ${className}`}>
    <div className="aspect-[4/5] overflow-hidden w-full bg-gray-200">
      <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="p-4 relative">
      <div className="w-8 h-1 bg-accent-coral mb-3 rounded-full"></div>
      <h3 className="text-lg font-bold text-text-primary dark:text-white">{name}</h3>
      <p className="text-sm text-text-secondary dark:text-gray-400">{role}</p>
    </div>
  </div>
);

export default About;