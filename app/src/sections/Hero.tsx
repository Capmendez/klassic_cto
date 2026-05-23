import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const stickers = [
  { src: '/images/sticker-1.png', alt: 'Thumbs up ghost', className: 'top-[15%] left-[8%] w-16 md:w-24', delay: '-2s', duration: '8s' },
  { src: '/images/sticker-2.png', alt: 'Dab ghost', className: 'top-[20%] right-[10%] w-14 md:w-20', delay: '-4s', duration: '10s' },
  { src: '/images/sticker-3.png', alt: 'Peace ghost', className: 'bottom-[25%] left-[5%] w-12 md:w-18', delay: '-1s', duration: '7s' },
  { src: '/images/sticker-4.png', alt: 'Shocked ghost', className: 'top-[40%] right-[5%] w-14 md:w-20', delay: '-3s', duration: '9s' },
  { src: '/images/ghost-happy.png', alt: 'Happy ghost', className: 'bottom-[20%] right-[8%] w-16 md:w-22', delay: '-5s', duration: '11s' },
  { src: '/images/ghost-cool.png', alt: 'Cool ghost', className: 'top-[60%] left-[10%] w-12 md:w-16', delay: '-2.5s', duration: '8s' },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url(/images/ig_08ba0047c5dc6f03016a116b371f408191b80c164fbc7adb6a.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[rgba(10,10,11,0.6)] to-[rgba(10,10,11,0.95)]" />

      {/* Floating Stickers */}
      {stickers.map((sticker, i) => (
        <div
          key={i}
          className={`absolute ${sticker.className} pointer-events-none hidden sm:block`}
          style={{
            animation: `float ${sticker.duration} ease-in-out infinite`,
            animationDelay: sticker.delay,
            opacity: loaded ? 0.5 : 0,
            transition: `opacity 0.5s ease ${0.1 * i}s`,
          }}
        >
          <img
            src={sticker.src}
            alt={sticker.alt}
            className="w-full h-auto drop-shadow-lg"
            loading="lazy"
          />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center flex flex-col items-center">
        {/* Ghost Mascot */}
        <div
          className={`mb-6 transition-all duration-700 ease-out ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.8]'
          }`}
        >
          <img
            src="/images/ig_08ba0047c5dc6f03016a0fd46fda5481919695d817e8e6968c.png"
            alt="KLASSIC Ghost Mascot"
            className="w-[200px] md:w-[300px] h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* KLASSIC Title */}
        <h1
          className={`font-marker text-5xl md:text-7xl lg:text-[80px] leading-none tracking-wide mb-4 transition-all duration-600 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <span className="text-[#E53935]">K</span>
          <span className="text-white">LASSIC</span>
        </h1>

        {/* Graffiti underline */}
        <div
          className={`w-32 h-1 bg-gradient-to-r from-[#7CB342] via-[#FFD600] to-[#E53935] rounded-full mb-6 transition-all duration-500 ease-out ${
            loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ transitionDelay: '0.35s' }}
        />

        {/* Tagline */}
        <p
          className={`text-[11px] font-semibold tracking-[0.15em] uppercase text-[#FFD600] mb-2 transition-all duration-500 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          THE MEME LANGUAGE
        </p>

        <p
          className={`text-xl md:text-2xl font-bold text-white mb-10 transition-all duration-500 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          👑 $KLASSIC on ETH
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-500 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <a
            href="https://app.uniswap.org/swap?outputCurrency=0x75f12882d9008faf16d9147d36ea35dac048cccc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#E53935] text-white font-bold text-base rounded-xl hover:bg-[#FF5252] hover:scale-[1.03] transition-all duration-200 shadow-lg shadow-[#E53935]/20"
          >
            Buy $KLASSIC
          </a>
          <a
            href="https://x.com/i/chat/group_join/2050572973829210547/P4GChr34M"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-bold text-base rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-200"
          >
            Join Community
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
        <ChevronDown className="w-6 h-6 text-[#6E6E73]" />
      </div>
    </section>
  );
}
