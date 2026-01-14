import React from 'react';
import { Search, Calendar, CreditCard, Shield, FileText, Map, Activity, MessageSquare, Mail, ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <div className="flex-grow">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-10 lg:py-8">
          <div className="relative flex min-h-[400px] flex-col gap-6 overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat p-8 items-center justify-center shadow-soft" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfKuus8HqH4AQ5teaBfXU0Ay9AShrYRYgnusQWPq3Ei_uGN92aI64yXayOAVrmRNX2CKa08YakFMuNMShmI8A5omJuhDSYlgtVgzmOUMGMVCbsHssjF2AX0bBqvNG5m9NfM0Dt2DelrfL9aMv2mbr2GagNLfDTR4kMcUuyU8xMhDkPb-CdBCNRT_cEUA_tjWfjjRA4zOjjMu00lOWK5SMETG3Opeu0M5isn4biNuV2r0d34vBQkyo_e-S7WkHVqY7t4D9lHHWawEs")'}}>
             <div className="z-10 flex flex-col items-center gap-6 max-w-2xl text-center">
               <h1 className="text-white text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl drop-shadow-md">Hello, how can we help you explore Vietnam?</h1>
               <div className="w-full max-w-[560px]">
                 <form className="group relative flex h-14 w-full items-center rounded-xl bg-surface-light shadow-lg transition-all focus-within:ring-2 focus-within:ring-primary/50">
                    <div className="flex h-full w-12 items-center justify-center text-text-muted"><Search size={24} /></div>
                    <input type="text" placeholder="Search for answers (e.g., 'Visa requirements', 'Refund policy')..." className="h-full w-full border-none bg-transparent px-2 text-base text-text-main placeholder:text-text-muted/70 focus:ring-0" />
                    <div className="hidden sm:flex pr-2">
                      <button className="h-10 rounded-lg bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-primary-dark">Search</button>
                    </div>
                 </form>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 md:px-10">
        <h2 className="text-2xl font-bold tracking-tight text-text-main dark:text-white md:text-3xl mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          <CategoryCard title="Booking & Payments" icon={<Calendar size={32} />} bg="https://lh3.googleusercontent.com/aida-public/AB6AXuAn_TlpMF31URAYxVmjk8iR_wAjVfvtI9a4dk0fUCrIttOWu89ngC4KGKAqTPjNNsKFh6zH8iHOhGoC6jntn98d7NWxq7TrPwOunyuunp6nj2hoh6ql1HMY9PRj93Sxv5zZO3neY63cu2gpjra3ltCXSuSDDy4eVtzikrOYwhUDaAvOoazFC3PAJbe4JGx5yhw52b0TT4eoXyXZ3T2lMZd_op4oU-Xho0xegGhkgNoKOrObK1I3Tm5i1jSYScphFurxE-4VknnYdZY" />
          <CategoryCard title="Cancellations & Refunds" icon={<CreditCard size={32} />} bg="https://lh3.googleusercontent.com/aida-public/AB6AXuA2J4C9JdY7Pnl6x-U2cmP1Fcp15J5I2A1a1kvpMrGFpCBlBz2MLnKnw2f8GhmUw6rrrTknzEZ7Q5klLjMCxPdwWtCCIoLUNIwTKdRzUH66yzzy3Ym8DW-SHgkM-CjlAfQCyFHXa55iK5CYDRh28cF1t3WBo1IKvOREEB9L_cMMLo01RyNPURPwOKOEF5jyuHl0Oc-OUEf4MKLMuNECRmCJDrETbLI9Bf9AsuOftSlKSYw0qrWw5BdajoJCNzI-U5JdurhvHiGJlA8" />
          <CategoryCard title="Travel Insurance" icon={<Shield size={32} />} bg="https://lh3.googleusercontent.com/aida-public/AB6AXuCla8DrYTQ5JEcmtgCgSKtjaUr8jmO0iFDkTrbEAkYX6i29p1nnyvFJjRJEGt2SQfhSiU-DeW-LTnh4Ro9EAOshz5ZSUTnTpfRukI-QRu7pXCvYUMVqnUS4-kbP0PueHiAhKOPifdiTGTlFy6bXKrhrtCa_HM6xULf8HraCT0M9AsBMa5HqTRsp1H-Oz_dvpCAK1YINo_3Gv-R3tYhm5745oVCL6gz2T76wYlFBadUwpE2IxbtmcigBJil9-B9UY89X0bSyoxifjM8" />
          <CategoryCard title="Visa & Entry" icon={<FileText size={32} />} bg="https://lh3.googleusercontent.com/aida-public/AB6AXuDm-_VlYzwYtjDpBrauKmz4Fda0_GX8odAU5meR2wFJkYkrlGQ1VpLC85UqxnYnaLLxHAg4i5pDy3rO1ThPX_HsZq0VCJ1dC32d8n5C7osjlo80Lufu_7J5ZnBrwcxJtbMkNX_ACX81NU0l4uaribCXfMyu3__DDKA6wWKSbn4VcCaIm-RGdp72vG0IP40-ZbZpeTQgIMvPb_JO-41EFYYRJZfmvcUwAD-3n5CHeuNaCWu-APWtA1elVioRJleulyrz1_MFmzwk2fQ" />
          <CategoryCard title="Tours & Itineraries" icon={<Map size={32} />} bg="https://lh3.googleusercontent.com/aida-public/AB6AXuD_7Cm-qzXvZ7ZxMFg2sKdr7ZktM20gaVwOUMS4HqPcTMS8-pxkFxmMuwVtT6K_HcPsW2-tIzGoS4dNeBUuW2ypyJ1ZP7bCqnsZAFmB-iQxCHKtLedtaTs22yZiiR7TVoW30ze4jGQhxBbwWw6gZ-B6DIYWS8JgOlA17B5CTpAk3eL5ZXZ_yRVfM9G30lYthozLuI1jLyNins517wncBQhaA8LGwAjxUUA2xkIIc5YvVTBMn-EF-QN_x-RqRgZHxWH5GTfdpJayCKY" />
          <CategoryCard title="Health & Safety" icon={<Activity size={32} />} bg="https://lh3.googleusercontent.com/aida-public/AB6AXuC4739xC1o-NqeuInZvMfL_KVqJYGJM7q03U9vjP91nI4NZPRAR5-pTv9wZbvOrrFHjbGOLaSX984Ge_rH6QIf5urnkBXne_TyS-xEEnvz5Ur8mkoYGYMPVf9Qj5mPB8pTJEkTi1c8jFJPytsdtBjasmTlWIHy2JR-8Xcw-wSJSyjxxF_ncrjMA6IL9GQozZbs_s7s86KBLU22abz3PVP_NIAlFEdVFKRN9nYgKAuIgCOmTmZmwDmTj7FmLh9kC3IK6m8wEH2n9x0A" />
        </div>
      </section>

      {/* Accordion */}
      <section className="mx-auto w-full max-w-4xl px-4 py-10 md:px-10">
        <h2 className="text-2xl font-bold tracking-tight text-text-main dark:text-white md:text-3xl mb-8">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4">
           <FAQItem question="Do I need a visa for Vietnam?" answer="Most travelers need a visa to enter Vietnam. However, citizens of certain countries (including UK, France, Germany, Italy, Spain) are eligible for a visa exemption for stays up to 45 days. For longer stays or other nationalities, an E-visa is widely available and valid for up to 90 days. We recommend applying at least 2 weeks before your trip." />
           <FAQItem question="What is the best time of year to visit?" answer="Vietnam is a long country with three distinct climate zones, so there's always a good place to visit! generally, November to April is considered the best time for the whole country, offering drier and cooler weather." />
           <FAQItem question="Can I customize my tour package?" answer="Absolutely! Vietmate specializes in tailor-made experiences. You can start with one of our existing itineraries and modify it, or build a trip completely from scratch with our local travel experts. Just click on 'Plan Your Trip' in the menu to get started." />
           <FAQItem question="What payment methods do you accept?" answer="We accept all major international credit cards (Visa, Mastercard, Amex) securely via our online payment portal. We also accept bank transfers for larger bookings. All prices are quoted in USD to avoid confusion with exchange rates." />
        </div>
      </section>
      
      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-10">
        <div className="relative overflow-hidden rounded-2xl bg-[#F0F8FA] dark:bg-gray-800 p-8 md:p-12">
           <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
           <div className="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
              <div className="flex flex-col gap-2 max-w-xl">
                 <h2 className="text-2xl font-bold text-text-main dark:text-white md:text-3xl">Still need help?</h2>
                 <p className="text-text-muted dark:text-gray-300">Can't find the answer you're looking for? Our local team in Hanoi is available 24/7 to assist you.</p>
              </div>
              <div className="flex flex-col w-full gap-3 sm:w-auto sm:flex-row">
                 <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-sm transition-all hover:bg-primary-dark"><MessageSquare size={20} /> Chat with an Agent</button>
                 <button className="flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-white dark:bg-transparent px-6 py-3 text-base font-bold text-primary transition-all hover:bg-primary/5"><Mail size={20} /> Email Support</button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

const CategoryCard = ({ title, icon, bg }: any) => (
  <a href="#" className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 p-6 transition-all hover:shadow-hover">
    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%), url("${bg}")`}}></div>
    <div className="relative z-10 flex flex-col gap-1 text-white">
      <div className="mb-1">{icon}</div>
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  </a>
);

const FAQItem = ({ question, answer }: any) => (
  <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark open:border-primary/50 open:shadow-soft">
    <summary className="flex cursor-pointer list-none items-center justify-between p-6 focus:outline-none">
      <span className="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">{question}</span>
      <ChevronDown className="text-text-muted transition-transform duration-300 group-open:rotate-180 group-open:text-primary" />
    </summary>
    <div className="border-t border-gray-100 dark:border-gray-700 px-6 pb-6 pt-4 text-text-muted dark:text-gray-300 leading-relaxed">
      <p>{answer}</p>
    </div>
  </details>
);

export default FAQ;