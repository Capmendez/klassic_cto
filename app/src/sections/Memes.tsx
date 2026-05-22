import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const memes = [
  { src: '/images/meme-crown.jpg', caption: 'Claim the Crown 👑' },
  { src: '/images/meme-diamond.jpg', caption: 'Diamond Hands 💎' },
  { src: '/images/meme-throne.jpg', caption: 'King of ETH' },
  { src: '/images/meme-party.jpg', caption: 'Ghost Party 🎉' },
  { src: '/images/meme-dab.jpg', caption: 'Dab King' },
  { src: '/images/meme-wink.jpg', caption: 'You Got This ✨' },
  { src: '/images/meme-sleep.jpg', caption: 'Sweet ETH Dreams 😴' },
  { src: '/images/ghost-angry.png', caption: 'Battle Mode 🔥' },
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
