import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const memes = [
  { src: '/images/ig_08ba0047c5dc6f03016a0fd46fda5481919695d817e8e6968c.png', caption: 'Klassic Vibe ✨' },
  { src: '/images/ig_08ba0047c5dc6f03016a0fd4fa46ec8191a7275faaed330b0a.png', caption: 'Hold Tight 💎' },
  { src: '/images/ig_08ba0047c5dc6f03016a0fdfebe5708191bedf736380f4944b.png', caption: 'Ghost Power 👑' },
  { src: '/images/ig_08ba0047c5dc6f03016a116a94e5a8819195bf4c02ad05ac26.png', caption: 'Community Spirit 👻' },
  { src: '/images/ig_08ba0047c5dc6f03016a116b371f408191b80c164fbc7adb6a.png', caption: 'To the Moon 🚀' },
  { src: '/images/ig_08ba0047c5dc6f03016a116b9923b8819189115d5be4274691.png', caption: 'Ghost Mode 🕶️' },
  { src: '/images/ig_08ba0047c5dc6f03016a116bfbcf9c81919dc79a402c79fd7d.png', caption: 'Crypto Life 📈' },
  { src: '/images/ig_08ba0047c5dc6f03016a116c6484a881918d06f606f0d1a631.png', caption: 'Victory Dance 🏆' },
];

export default function Memes() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="memes" className="bg-[#0A0A0B] py-[60px] md:py-[120px]">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#E53935] mb-4 block">
            MEME GALLERY
          </span>
          <h2 className="font-marker text-3xl md:text-[56px] leading-tight text-white mb-4">
            Community Ghosts
          </h2>
          <p className="text-lg text-[#A1A1A6] max-w-[600px] mx-auto">
            The best memes from the $KLASSIC community. Create, share, and spread the Ghost energy.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {memes.map((meme, i) => (
            <div
              key={i}
              className={`group relative aspect-square rounded-2xl overflow-hidden bg-[#141415] border border-[#2A2A2C] cursor-pointer transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${0.08 * i}s` }}
            >
              <img
                src={meme.src}
                alt={meme.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[rgba(10,10,11,0.7)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium text-center px-4">
                  {meme.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
