import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="bg-[#0A0A0B] py-[120px] md:py-[120px] py-[60px]">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-center">
          {/* Left Column - Text */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7CB342] mb-4 block">
              ABOUT
            </span>
            <h2 className="font-marker text-3xl md:text-[56px] leading-tight text-white mb-6">
              The Meme Language
            </h2>
            <p className="text-lg text-[#A1A1A6] leading-relaxed mb-4">
              $KLASSIC isn't just a token — it's a movement. Born from the streets of crypto
              culture, the Ghost mascot represents every degen who started faceless and crowned
              themselves king. With community at its core and memes as its voice, $KLASSIC speaks
              the universal language of the internet.
            </p>
            <p className="text-base text-[#A1A1A6] leading-relaxed">
              No roadmap. No promises. Just pure meme energy on Ethereum. 👑
            </p>
          </div>

          {/* Right Column - Image */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '0.15s' }}
          >
            <div className="bg-[#141415] rounded-[20px] border border-[#2A2A2C] overflow-hidden">
              <img
                src="/images/ghost-love.png"
                alt="KLASSIC Ghost with love expression"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
