/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Monitor, Smartphone, CheckCircle2, ChevronDown, Menu, X, ShieldCheck, 
  Globe2, Film, HeartHandshake, Laptop, MessageCircleQuestion, MessagesSquare,
  Airplay, Cloud, PlayCircle, Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Pricing Plans Data
const PLANS = [
  { name: '1 MONTH', price: '18.99', duration: '1 Month' },
  { name: '3 MONTHS', price: '35.99', duration: '3 Months', popular: true },
  { name: '6 MONTHS', price: '45.99', duration: '6 Months' },
  { name: '1 YEAR', price: '64.99', duration: '1 Year' },
  { name: '2 YEARS', price: '104.99', duration: '2 Years' },
];

const FEATURES = [
  'HD/4K/8K IPTV',
  '+15,000 Channels',
  '+100,000 VOD',
  'Watch Channels',
  '99.99% Uptime Servers',
  'Refund'
];

const FAQS = [
  {
    q: "How does the IPTV free 24 hours trial work?",
    a: "It's simple! Just click the '24H Free Trial' button, and our trial setup script will quickly open. You'll instantly receive access to our entire premium catalog (all channels, VODs) absolutely free for a full 24 hours. No payment details required."
  },
  {
    q: "Available payment methods?",
    a: "We currently accept Credit Card, Crypto, and PayPal as payment methods after your free trial ends."
  },
  {
    q: "Which devices can be used for IPTV?",
    a: "Our IPTV services are accessible via all smart TV devices (Samsung, Sony, LG…), all Android devices (phones), Apple TV, iPhone, Google Chromecast, MAG box in the STB emulator app and FireStick."
  },
  {
    q: "Recommended internet speed?",
    a: "If your download speed is not less than 30 mbps, then everything will work smoothly in the highest quality. Choose the subscription plan that best fits your needs, or contact us on WhatsApp for help selecting the right plan."
  },
  {
    q: "Which countries are present?",
    a: "Netherlands, Belgium, France, UK, Germany, Switzerland, Austria, Poland, Spain, Malta, Portugal, Italy, USA, Canada, Australia, New Zealand, Arabic countries, UAE, Turkey, and many more."
  },
  {
    q: "How many connections at once?",
    a: "You may install your account on 1 device at a time. However, we offer discounts for multiple connections if needed."
  },
  {
    q: "How can I subscribe to the IPTV service?",
    a: "Choose your preferred IPTV subscription package, then contact us on WhatsApp to activate it. Your plan includes the available channels, movies, and series included in the selected package."
  }
];

function FAQItem({ question, answer }: { key?: string | number, question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#2a1b4d]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left text-lg font-medium text-gray-100 transition-colors hover:text-[#6a35ff] focus:outline-none"
      >
        <span>{question}</span>
        <ChevronDown
          className={`h-5 w-5 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#6a35ff]' : 'text-gray-500'
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleFreeTrial = () => {
    // Need to cast window to any to access the dynamically injected script
    if (typeof window !== 'undefined' && (window as any)._RH) {
      (window as any)._RH();
    } else {
      console.warn("Trial script not loaded yet.");
      alert("Please wait a moment for the system to load, or contact us directly on WhatsApp for a trial.");
    }
  };

  const getWhatsappLink = (planName?: string) => {
    const basePhone = "212667816780";
    if (planName) {
      return `https://api.whatsapp.com/send?phone=${basePhone}&text=Hello,%20I%20am%20interested%20in%20your%20IPTV%20service.%20I%20would%20like%20to%20subscribe%20to%20the%20${planName}%20IPTV%20plan`;
    }
    return `https://api.whatsapp.com/send?phone=${basePhone}&text=Hello,%20I%20am%20interested%20in%20your%20IPTV%20service.%20I%20would%20like%20to%20subscribe%20and%20choose%20the%20best%20plan%20for%20me.`;
  };

  return (
    <div className="min-h-screen bg-[#11091e] text-gray-50 font-sans selection:bg-[#6a35ff] selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-[#11091e]/90 backdrop-blur-md border-b border-[#2a1b4d]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="https://i.postimg.cc/WsS3jTJF/TV-Television-Youtube-Show-Channel-Video-Red-Blue-Black-Logo-removebg-preview-300x113.png" alt="Cloud TV Logo" className="h-10" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Home</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Pricing</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Contact us</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">FAQ</a>
              <button 
                onClick={handleFreeTrial}
                className="text-sm font-semibold px-6 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white transition-colors"
              >
                24H Free Trial
              </button>
              <a 
                href={getWhatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold px-6 py-2 rounded bg-[#6a35ff] hover:bg-[#5629cc] text-white transition-colors"
              >
                Subscribe Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-[#2a1b4d] bg-[#11091e]"
            >
              <div className="space-y-1 px-4 pb-6 pt-4 flex flex-col gap-2">
                <a href="#" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-gray-300">Home</a>
                <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-gray-300">Pricing</a>
                <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-gray-300">Contact us</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-gray-300">FAQ</a>
                <div className="mt-4 flex flex-col gap-3">
                  <button 
                    onClick={handleFreeTrial}
                    className="w-full text-center text-base font-semibold px-5 py-3 rounded-lg bg-gray-700 text-white"
                  >
                    24H Free Trial
                  </button>
                  <a 
                    href={getWhatsappLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center text-base font-semibold px-5 py-3 rounded-lg bg-[#6a35ff] text-white"
                  >
                    Subscribe Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight"
              >
                Claim Your IPTV<br />
                Free 24 Hours Trial
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base text-gray-300 mb-8 leading-relaxed max-w-lg"
              >
                Experience the ultimate entertainment with our premium IPTV free 24 hours test. We are the top provider for free 24-hour IPTV trials in 2026. Watch 18,000+ top channels and 88,000+ VODs risk-free before you subscribe.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-10 flex gap-4 flex-wrap"
              >
                <button 
                  onClick={handleFreeTrial}
                  className="px-8 py-3 text-base font-bold rounded bg-[#6a35ff] text-white hover:bg-[#5629cc] transition-colors shadow-[0_0_15px_rgba(106,53,255,0.4)]"
                >
                  Get 24H Free Trial Now
                </button>
                <a 
                  href={getWhatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-3 text-base font-bold rounded border border-[#6a35ff] text-white hover:bg-[#6a35ff]/20 transition-colors"
                >
                  Subscribe Now
                </a>
              </motion.div>

              {/* Supported Devices Icons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-8 text-gray-500"
              >
                <div className="flex flex-col items-center gap-2">
                  <img src="https://i.postimg.cc/zqpB58RB/tv.png" alt="Smart TV" className="h-8 w-8 object-contain" />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-300">Smart TV</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img src="https://i.postimg.cc/gGGJfnj5/laptop.png" alt="Laptop" className="h-8 w-8 object-contain" />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-300">Laptop/PC</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img src="https://i.postimg.cc/c0y6BDSg/android.png" alt="Android" className="h-8 w-8 object-contain" />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-300">Android</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img src="https://i.postimg.cc/z8Z3Fdrg/apple.png" alt="Apple" className="h-8 w-8 object-contain" />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-300">Apple</span>
                </div>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#2a1b4d]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#11091e] via-transparent to-transparent z-10" />
              <img 
                src="https://i.postimg.cc/Wss3Qhtj/people-enjoying-film-cinema-1-600x596.png" 
                alt="Family watching TV" 
                className="w-full h-auto object-cover aspect-square mix-blend-lighten opacity-90"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Brands & Features */}
      <section className="py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          {/* Faux Logos Row */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-16 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <img src="https://i.postimg.cc/FN51VP4j/brand-item05-150x46-1-1.webp" alt="Brand" className="h-10 object-contain" />
            <img src="https://i.postimg.cc/3Y5WFLTX/brand-item06-150x46-1-1.webp" alt="Brand" className="h-10 object-contain" />
            <img src="https://i.postimg.cc/c0RC9Qxr/brand-item08-150x46-1-1.webp" alt="Brand" className="h-10 object-contain" />
            <img src="https://i.postimg.cc/tp3JShqs/brand-item12-1.webp" alt="Brand" className="h-10 object-contain" />
            <img src="https://i.postimg.cc/Z48n7rbB/brand-item13-150x46-1-1.webp" alt="Brand" className="h-10 object-contain" />
            <img src="https://i.postimg.cc/mBYkXQL1/brand-item14-150x46-1-1.webp" alt="Brand" className="h-10 object-contain" />
            <img src="https://i.postimg.cc/vbrTqWY6/brand-item15-150x46-1-1.webp" alt="Brand" className="h-10 object-contain" />
            <img src="https://i.postimg.cc/fDcy2xz9/brand-item16-150x46-1-1.webp" alt="Brand" className="h-10 object-contain" />
            <img src="https://i.postimg.cc/HdwnZQY5/brand-item17-150x46-1-1.webp" alt="Brand" className="h-10 object-contain" />
            <img src="https://i.postimg.cc/bpxrCQyk/brand-item18-150x46-1-1.webp" alt="Brand" className="h-10 object-contain" />
            <img src="https://i.postimg.cc/Dnr0jqvq/brand-item21-150x46-1-1.webp" alt="Brand" className="h-10 object-contain" />
            <img src="https://i.postimg.cc/PTWJ3mXz/brand-item22-150x46-1-1.webp" alt="Brand" className="h-10 object-contain" />
          </div>

          {/* 3 Info Boxes */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="bg-[#150d28] p-6 border border-[#2a1b4d] rounded flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <img src="https://i.postimg.cc/D77Zt80N/Icon.png" className="w-16 h-16 mb-4 object-contain" alt="Coverage Icon" />
              <h3 className="text-[13px] font-bold text-white mb-2 uppercase tracking-wide">IPTV Free 24 Hours Trial<br/>in 115 Countries</h3>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Test our global TV channels completely free. Claim your IPTV free 24 hours trial to watch streams in Netherlands, UK, USA, Arabic, Turkey, and more before subscribing!
              </p>
            </div>
            
            <div className="bg-[#150d28] p-6 border border-[#2a1b4d] rounded flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <img src="https://i.postimg.cc/jRR5GL2k/Icon-2.png" className="w-16 h-16 mb-4 object-contain" alt="Guaranteed Icon" />
              <h3 className="text-[13px] font-bold text-white mb-2 uppercase tracking-wide">Guaranteed IPTV<br/>24H Trial Excellence</h3>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Choose top-notch service firsthand. Grab your IPTV free 24 hours trial today and discover why millions choose our premium ad-free platform.
              </p>
            </div>

            <div className="bg-[#150d28] p-6 border border-[#2a1b4d] rounded flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <img src="https://i.postimg.cc/SmmswJR1/Icon-1.png" className="w-16 h-16 mb-4 object-contain" alt="Experience Icon" />
              <h3 className="text-[13px] font-bold text-white mb-2 uppercase tracking-wide">Experience Free 24H Trial<br/>With 4K/8K Server Quality</h3>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Unlock HD, FHD, 4K, and 8K IPTV streams entirely free. Enjoy the smartest IPTV free 24 hours trial on TV, Android Box, Mobile, and PC!
              </p>
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-white max-w-2xl mx-auto leading-snug">
              In-Demand Movies, Shows, News & Sports:<br/>
              Unlock All-in-One Entertainment with Your<br/>
              IPTV Free 24 Hours Trial
            </h2>
          </div>

        </div>

        {/* Posters Carousel Area */}
        <div className="w-full overflow-hidden pb-16">
          <div className="flex justify-center gap-4 px-4 overflow-x-auto snap-x no-scrollbar pb-8">
            {[
              { src: 'https://i.postimg.cc/8NRcKhpK/efc10d-58769540c3af46e4b1b8373d25053dce-mv2.webp', label: 'Action' },
              { src: 'https://i.postimg.cc/kqQG1xJh/efc10d-82f6ea18c2494be98c46c59b9e55cf71-mv2.webp', label: 'Trending' },
              { src: 'https://i.postimg.cc/np4rRvF5/efc10d-c4763bc9523c4fc89ba4e9f22e5ce52d-mv2.webp', label: 'Drama' },
              { src: 'https://i.postimg.cc/np4rRvFg/efc10d-cf5918f2dcf64cf39fcefe135495cc43-mv2.webp', label: 'Comedy' },
              { src: 'https://i.postimg.cc/1sGXCpmL/efc10d-d0631c9b9c3f4be9bd6caef12c4d0694-mv2.webp', label: 'Series' },
              { src: 'https://i.postimg.cc/GdFt7kLW/efc10d-e83995fe1b33435a982de93f05c82c29-mv2.webp', label: 'Live Sports' },
              { src: 'https://i.postimg.cc/rqqmvKz8/photo-2023-09-20-04-19-57-cleanup.png', label: 'Top Movies' },
              { src: 'https://i.postimg.cc/5ff0Z6j2/photo-2023-09-20-04-23-20-cleanup.png', label: 'Classics' },
              { src: 'https://i.postimg.cc/Gbb2ZH9p/photo-2023-09-20-04-23-29-cleanup.png', label: 'Premium' },
              { src: 'https://i.postimg.cc/fMML6JkL/photo-2023-09-20-04-23-33-cleanup.png', label: 'Documentary' },
              { src: 'https://i.postimg.cc/6BB3DyTy/photo-2023-09-20-04-23-34-cleanup.png', label: 'Kids' },
            ].map((img, i) => (
              <div key={i} className="relative shrink-0 w-48 h-72 rounded-xl overflow-hidden shadow-2xl border border-gray-800 snap-center group">
                <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11091e] via-[#11091e]/20 to-transparent flex items-end justify-center pb-4">
                  <span className="font-bold text-white text-lg tracking-wide">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-[#150d28]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Start With Your IPTV Free 24 Hours Trial<br/>Then Pick A Tailored Plan</h2>
            <p className="text-sm text-gray-400">
              Not sure yet? <button onClick={handleFreeTrial} className="text-[#6a35ff] font-bold hover:text-[#906cff] underline">Claim your free 24H test now</button>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center max-w-7xl mx-auto">
            {PLANS.map((plan, index) => (
              <div 
                key={index}
                className="flex flex-col bg-[#11091e] rounded-xl overflow-hidden border border-[#2a1b4d] text-center pb-8"
              >
                <div className="bg-gradient-to-r from-[#6a35ff] to-[#402099] py-4">
                  <h3 className="text-xl font-bold text-white">€{plan.price}</h3>
                </div>
                <div className="pt-6 pb-4">
                  <span className="text-sm font-bold text-white">{plan.name}</span>
                </div>
                
                <ul className="flex-1 space-y-4 px-6 mb-8 text-[13px]">
                  {FEATURES.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#6a35ff] shrink-0" />
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="px-6 mb-4">
                  <a 
                    href={getWhatsappLink(plan.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full py-3 px-4 rounded text-sm font-bold bg-[#6a35ff] hover:bg-[#5629cc] text-white transition-colors uppercase tracking-wider"
                  >
                    Subscribe Now
                  </a>
                </div>
                <p className="text-[11px] text-gray-500 font-medium px-4">Ready within 1 - 12 Hours</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 border-y border-[#2a1b4d]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Get Your IPTV Free 24 Hours Trial?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="flex flex-col text-left">
              <div className="w-16 h-16 rounded bg-[#2a1b4d] flex items-center justify-center mb-6">
                <img src="https://i.postimg.cc/SmmswJR1/Icon-1.png" className="w-10 h-10 object-contain" alt="Play Icon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">1. Request Free Trial</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Click any of the "24H Free Trial" buttons or contact us on WhatsApp to request your free 24 hours test right away.<br/><br/>No credit card required. Test our premium platform risk-free!
              </p>
            </div>

            <div className="flex flex-col text-left">
              <div className="w-16 h-16 rounded bg-[#2a1b4d] flex items-center justify-center mb-6">
                <img src="https://i.postimg.cc/jRR5GL2k/Icon-2.png" className="w-10 h-10 object-contain" alt="Shield Icon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">2. Setup Your Account</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We'll instantly provide your free credentials. This process typically takes 5 to 10 minutes to set up your trial account.<br/><br/>
                Need help? WhatsApp us at **+212 667-816780**.
              </p>
            </div>

            <div className="flex flex-col text-left">
              <div className="w-16 h-16 rounded bg-[#2a1b4d] flex items-center justify-center mb-6">
                <img src="https://i.postimg.cc/2CC6PVy0/Film-Strip.png" className="w-10 h-10 object-contain" alt="Film Icon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">3. Test Premium TV For Free!</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Enjoy all 18,000+ VIP channels, movies and series completely free for a full day. If you love it, you can upgrade anytime.
              </p>
              <div className="flex gap-2">
                <button 
                  onClick={handleFreeTrial}
                  className="w-fit px-6 py-2.5 text-sm font-bold rounded bg-[#6a35ff] text-white hover:bg-[#5629cc] transition-colors"
                >
                  Get 24H Free Trial
                </button>
                <a 
                  href={getWhatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit px-6 py-2.5 text-sm font-bold rounded border border-[#6a35ff] text-white hover:bg-[#6a35ff]/20 transition-colors"
                >
                  Subscribe Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#150d28]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white text-center">Frequently Asked Questions (FAQ)</h2>
          </div>

          <div className="bg-[#11091e] border border-[#2a1b4d] p-4 md:p-8">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-[#2a1b4d]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-8">Customers Feedback</h2>
          <div className="flex justify-center flex-wrap gap-4 opacity-90">
            <img src="https://i.postimg.cc/vGXBMb6T/Trustpilot-2048x340-1.png" alt="Trustpilot Reviews" className="max-w-full h-auto w-[600px] object-contain" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a1b4d] bg-[#11091e] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400 font-medium">
            2026 © All rights reserved
          </div>
          <div className="text-sm text-gray-400 font-medium">
            Made with <span className="text-red-500">❤</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
