import React from 'react';
import { Compass, MapPin, Calendar, Users, Search, ArrowRight, Clock, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full min-h-[650px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background-light dark:to-background-dark z-10"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1LzVewQxj9pKUIPN1L_G1loUdU4NLTkR5j37XtRj8uxAwdGxT1KL3McemqLO1jmZSgzsKkdrgnglX80NjzX4IsBGRQkYZjvmBmz7Qaelr3yOSv5QYcgwIbj5PCVdVr07hxc_LImmcItzjMmmn7pXZzwBchXoLktzWazBgcZTnpFtw5pHu02V6HBULh5utI5K44YgERALYTlnyDgZ5__HV-o43H2SU_bobjRNb2KqJRGKihRF317CLA9ishn9yMsfqeZsCi7ckO-A" 
            alt="Ha Long Bay Vietnam" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center pt-10 pb-20">
          <div className="text-center mb-10 max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-lg leading-tight">
              Discover the Soul <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">of Vietnam</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 font-medium drop-shadow-md max-w-2xl mx-auto">
              Curated tours, luxury stays, and authentic experiences crafted by locals who know the secrets.
            </p>
          </div>

          {/* Search Widget */}
          <div className="w-full max-w-4xl bg-surface-light dark:bg-surface-dark rounded-2xl shadow-float p-2 sm:p-4 md:p-6 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 transform translate-y-4">
            <div className="flex border-b border-gray-100 dark:border-gray-700 px-2 gap-6 mb-6 overflow-x-auto no-scrollbar">
              <button className="flex items-center gap-2 pb-3 border-b-[3px] border-primary text-primary transition-all group">
                <Compass size={20} />
                <span className="text-sm font-bold tracking-wide">Tours</span>
              </button>
              <button className="flex items-center gap-2 pb-3 border-b-[3px] border-transparent text-text-secondary hover:text-primary hover:border-primary/30 transition-all group">
                <MapPin size={20} className="group-hover:scale-110 transition-transform"/>
                <span className="text-sm font-bold tracking-wide">Hotels</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              <div className="md:col-span-4 flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-text-secondary ml-1">Destination</label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                  <input type="text" placeholder="Where to? (e.g. Hoi An)" className="w-full h-14 pl-12 pr-4 bg-gray-50 dark:bg-gray-800 rounded-xl border-none focus:ring-2 focus:ring-primary/20 text-gray-900 dark:text-white placeholder-gray-400 font-medium" />
                </div>
              </div>
              <div className="md:col-span-3 flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-text-secondary ml-1">Dates</label>
                <div className="relative group">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                  <input type="text" placeholder="Add dates" className="w-full h-14 pl-12 pr-4 bg-gray-50 dark:bg-gray-800 rounded-xl border-none focus:ring-2 focus:ring-primary/20 text-gray-900 dark:text-white placeholder-gray-400 font-medium" />
                </div>
              </div>
              <div className="md:col-span-3 flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-text-secondary ml-1">Guests</label>
                <div className="relative group">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                  <input type="text" placeholder="2 Adults" className="w-full h-14 pl-12 pr-4 bg-gray-50 dark:bg-gray-800 rounded-xl border-none focus:ring-2 focus:ring-primary/20 text-gray-900 dark:text-white placeholder-gray-400 font-medium" />
                </div>
              </div>
              <div className="md:col-span-2">
                <Link to="/tours" className="w-full h-14 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]">
                  <Search size={20} />
                  <span>Search</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flash Deals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-2">Flash Deals</h2>
            <p className="text-text-secondary">Limited time offers for spontaneous travelers.</p>
          </div>
          <Link to="/tours" className="hidden sm:flex items-center text-primary font-bold hover:underline gap-1">
            View all offers
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <DealCard 
            title="Ancient Town Cultural Immersion"
            location="Hoi An"
            days={4}
            originalPrice={450}
            price={338}
            badge="-25% OFF"
            badgeColor="bg-accent-coral"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDAaWv8VC5XvJ8H6_bcm60LNsfl8O1mIkbv1Ko27M8eXUFuhwQOw5pdf_Q2rj-t2jmAKUrkALu1P-rJRDAEnsRVulv91VmrrGklExsd0f-gYisrxJNy4K11VDcGWFIh01ZQObpTgZNFZjAyAEVtxrisTU3_vrhIP7OC3GARnbaZV1doMhrd0vikX1v_ggVV2PcB5uhorCAsxhdJhGvsrYg1-T8enk7Z5pc4cjv9L0rZMCTckDCKLDExIKLwYpwKQYOatM4H1VH_JBU"
          />
          <DealCard 
            title="Luxury Overnight Cruise"
            location="Ha Long"
            days={2}
            originalPrice={299}
            price={210}
            badge="HOT"
            badgeColor="bg-accent-coral"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDWpTn46PyZ7EaAnXHDk9hHX_Us68ksxqsGaF7GK42eZoUqptHyCaNougjeIo8hak-aPdEPGwI0o9bb6QsK08DFXJpCn_DME0eiGFgerv3R2Rxk-BMDVOdY674TdFWpSs6Yv7NXgDXNTiAQPFnC5RakXjBMXYhOV7Kc8j5nXumZyM5q2pBmiU7ibz74snPXnXkWex3Aa0wJA9f-qrJ_dQnIrhj9pccCItUHGnsq3whf15lCeXnhnEbixhOoavtwjKGOp8RKC8rmKtQ"
          />
          <DealCard 
            title="Hanoi Street Food Secrets"
            location="Hanoi"
            days={1}
            originalPrice={65}
            price={49}
            badge="NEW"
            badgeColor="bg-blue-500"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuD7bluiEOk6Qcnfz-L2Kibb2zJDQZQy3n2wFlpLPXqZKVfZrQr8ZDaErHFYqIhkdle1YWugmrnsODHSJaesnY9t9RYxtZYQo0a_3ad5_04IASk5wjn_xM6GxCu7KCaXOt9BfnfYRh5Qw99LP2cHnjVsfIvo0FjARwYI6nxT9UW9Oq8xZZsOQY0Ydyur3ua2neydyC1U1yH30LQK_iOZT46JPf-hr7Q3E-T64NM-WD1_RSIcuz9TGNAYjl7M6lvzryIEi4fV8j_EdR0"
          />
          <DealCard 
            title="Trekking the Misty Peaks"
            location="Sapa"
            days={3}
            originalPrice={220}
            price={187}
            badge="-15% OFF"
            badgeColor="bg-accent-coral"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCNRRTNFKs_QP0qhP_kUbsBvVBk04jH5Sr0IDzlfsrlylwKwSyfaeYcH-2dFGnCGE1ID3TcIXFCTOaqH2IbgyV41xb_f4XHL8V9gntYwhGzb_O2ld8bqGJiqter5IsLldaUiU2ENfoRbPOCA0LSsrTGsMyG0lGtMwbFME57rWEUQ4hkjPtkfTxK1dsqlrjRs_et1-60kOYOKXLKeDSrpkt8HkvAJ2JB-onIO63elucIEIk8-pmPCwUlPBOwr1sioRgQI1ZBK-d6G-Q"
          />
        </div>
      </section>

      {/* Trending Destinations */}
      <section className="bg-white dark:bg-[#1c1f26] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-3">Trending Destinations</h2>
            <p className="text-text-secondary max-w-xl mx-auto">Explore the most sought-after locations in Vietnam, from the northern mountains to the southern delta.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
            <DestinationCard 
              name="Ho Chi Minh City"
              desc="The vibrant economic heart of Vietnam."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDOqZ2Xy95EtK1DSvm_Q2qnc5J-g7o4xxlijdLNiAXUMrgwvp1ywgYCJL03mivYnGU5jTTC2uEIRpplbLhLLgSQHbpHt4ophlsW9quibsVofLp54s7Cu36MyVsuoJALIFzNIQB76jK4Y3rptOBvR8n7qceD2T-knK7nozfuw38eLBMkOBg-gqJQBpu0TP7c3rusvCOAOkF0cpC2HPdaqxoMneCwXd3ZTODu1cdZctrZaEhzAunlEtuhmYCaTCsIKTD4jXQStlNADeo"
              className="md:col-span-2 md:row-span-2"
            />
             <DestinationCard 
              name="Phong Nha"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAjnj_Co6ASu6Otm-Znr-RGbsqRk5l-XGAJvYSQsAzSVwakptg8Ye_bxJ4ngQT6_LGzMjqrm4NHdl2a-AOY4mM6Xf0jBw1Nu6vg4iVVmIAC-Yu_eRnCJtJTBJDu3ezpMVXae13bDnVcwxALfqS-69sTPEa-uWFFnUkR6V8vutCPX0ySgLqshD1ntwowjOuhsV4iJprfsmltstxol08umJ4tKiKJtxih3cvUoezoFNTHu9NMeAt7UDv4HXsaRtZvfswx3qu-Bjho_BM"
              className="md:col-span-1 md:row-span-1"
            />
            <DestinationCard 
              name="Da Nang"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCPLtCK9lKwFTxfxXDkHsjoh164BziPuxBU_SR2kHNDrooaNx8y2I6bw3IBIb8lfwZFJU5yeTZvkrzmxlomdu3wudpcXN9kRMJ_Gy96ICqj2pWFUOh-LbBuQm_Uxsxjq1xGIQgc-IlUz0ddE7PEB2xf6npXYa-VeastVKSNa5ofKKxjheJjWFYd-RfDZLoWXu4--8rXclhtgGl0oOCCwD9vMreaBMgRHWWy1A6hklOH-AhPBjuOdDDgPg9d_Yo_QTsfKs2q32zSkRs"
              className="md:col-span-1 md:row-span-1"
            />
            <DestinationCard 
              name="Mekong Delta"
              desc="River life and floating markets."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAkdGeVlHsjMxIHiIRchUOW-X6cVFuP3MdaJVdSHWaXKwqAgTfb5eB73Xyo34kco2vfYF66KRTTsP6iWW-z5q9V85GWzNv3krnf0r3rBy9NJDjZzKBIpMEN4zcYk-bBXOIO9dSxT-HcfsxXzi4ouuaEvrftBAWn0UF6LI17Xe28RArcQIspNDRjrNYHDQ8A8w-ZJqEy6Ij9K7pPMSWKMl7WFgv4EetJ3c8PfgQ9k6dIIoUspcPEsc2iYMZxYRFWVRjGcn0LSpV2CRw"
              className="md:col-span-2 md:row-span-1"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-4">Loved by Travelers</h2>
            <p className="text-text-secondary mb-6">We're proud to have guided over 10,000 travelers through the hidden gems of Vietnam. Our rating speaks for itself.</p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-primary">4.9/5</span>
                <span className="text-xs text-text-secondary uppercase tracking-wider">Average Rating</span>
              </div>
              <div className="h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-gray-900 dark:text-white">10k+</span>
                <span className="text-xs text-text-secondary uppercase tracking-wider">Happy Travelers</span>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold dark:bg-green-900/30 dark:text-green-400">Verified Guides</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold dark:bg-blue-900/30 dark:text-blue-400">24/7 Support</span>
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TestimonialCard 
              text="Vietmate organized the perfect honeymoon for us. The private boat in Ha Long was magical, and the guides were so knowledgeable."
              author="Sarah Jenkins"
              location="London, UK"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCkEk38N_cyNwv1fwgPOezVap-JHUHsmx2KSVc6uyg1S88W-mdHjUtmgqiyVFNBXilCz80Dp4V3DDE63X3mqaZbWHNxuwcpXL2Ql5VUJtyw9rRXnXvyRHdbFHZpjFaxlYGixItqyy2bD1OjKS_KM0ugGZW6TyA6O81xILsYHzph3o6HtEiA0szR03VsoMQRHfYMAGyzs-zYl9MCmUrWyIfDFIOB0_VPlc5w87qCcX2W9tj53QCG16jzaQGw6e2b9a16UzKyDfKSvj8"
            />
             <TestimonialCard 
              text="Booking was seamless. I loved the local food tour recommendation in Hanoi, something I wouldn't have found on my own."
              author="Michael Chen"
              location="Singapore"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuC8hUm-97TpILPYfH3g7lxaSM4uuNKMcoIcj6KRaXAp6gV8UAWLOQ-kvPjsqYCFmymuicgxX-VxTJENkVk9KGOZBa0b1QgENa8xguMZigiIGYK3_I6LE1J-IyADGWjXFVtFOtfNUlU_X5-K2VqzjKA1xAr3bOqiI4iTq5ddQjSPlw-fYbCMvxjbPqULnNlQJ6llWGZq1cuiLOyHotr-oVtzHF0M_i6iN51LBddRaD3DJNNRw9zUTqTljT8xwLD2FQtWMDLVOR-abic"
            />
          </div>
        </div>
      </section>
    </>
  );
};

const DealCard = ({ title, location, days, originalPrice, price, badge, badgeColor, image }: any) => (
  <Link to="/tours" className="group relative bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className={`absolute top-3 left-3 ${badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm`}>{badge}</div>
    <div className="aspect-[4/3] overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-4 flex flex-col gap-2">
      <div className="flex items-center gap-1 text-xs text-text-secondary">
        <Clock size={14} /> {days} Days
        <span className="mx-1">•</span>
        <MapPin size={14} /> {location}
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{title}</h3>
      <div className="flex items-end justify-between mt-2">
        <div>
          <p className="text-xs text-gray-400 line-through">${originalPrice}</p>
          <p className="text-xl font-black text-primary">${price}</p>
        </div>
        <button className="bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white text-gray-900 dark:text-white p-2 rounded-lg transition-colors">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  </Link>
);

const DestinationCard = ({ name, desc, image, className }: any) => (
  <div className={`${className} group relative rounded-2xl overflow-hidden cursor-pointer`}>
    <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-6 flex flex-col justify-end">
      <h3 className="text-white text-xl md:text-2xl font-bold mb-1">{name}</h3>
      {desc && <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">{desc}</p>}
    </div>
  </div>
);

const TestimonialCard = ({ text, author, location, image }: any) => (
  <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
    <div className="flex items-center gap-1 text-yellow-400 mb-3">
      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
    </div>
    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">"{text}"</p>
    <div className="flex items-center gap-3">
      <div className="size-8 rounded-full bg-gray-200 overflow-hidden">
        <img src={image} alt={author} className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="text-xs font-bold text-gray-900 dark:text-white">{author}</p>
        <p className="text-[10px] text-text-secondary">{location}</p>
      </div>
    </div>
  </div>
);

export default Home;