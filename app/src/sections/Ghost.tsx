import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Crown, Ghost, Diamond } from 'lucide-react';

const features = [
  {
    icon: Crown,
    title: 'Community Owned',
    desc: 'CTO-led. Community-driven. No dev wallets, no hidden agendas. The Ghost belongs to the people.',
    color: '#FFD600',
  },
  {
    icon: Ghost,
    title: 'Meme Native',
    desc: 'Born on X, raised in group chats, crowned in memes. $KLASSIC is the native currency of meme culture.',
    color: '#7CB342',
  },
  {
    icon: Diamond,
    title: 'Ethereum Secured',
    desc: 'Built on ETH with verified contract. 100/100 Token Sniffer score. Trade with confidence on Uniswap.',
    color: '#E53935',
  },
];

export default function GhostSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section
      id="ghost"
      className="relative py-[120px] md:py-[120px] py-[60px]"
      style={{
        background: `linear-gradient(to bottom, rgba(10,10,11,0.97), rgba(10,10,11,0.97)), url(/images/banner-full.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div ref={ref} className="max-w-[1000px] mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#FFD600] mb-4 block">
            THE GHOST
          </span>
          <h2 className="font-marker text-3xl md:text-[56px] leading-tight text-white mb-4">
            From Faceless to King
          </h2>
          <p className="text-lg text-[#A1A1A6] max-w-[600px] mx-auto">
            Every Ghost starts the same — a blank face in the crowd. But through community,
            memes, and pure determination, they rise to claim the crown.
          </p>
        </div>

        {/* Main Banner Image */}
        <div
          className={`mb-12 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '0.1s' }}
        >
          <div className="bg-[#141415] rounded-[20px] border border-[#2A2A2C] overflow-hidden">
            <img
              src="/images/banner-full.jpg"
              alt="KLASSIC Ghost characters in graffiti style"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Transformation Image */}
        <div
          className={`mb-12 flex justify-center transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="bg-[#141415] rounded-[20px] border border-[#2A2A2C] overflow-hidden max-w-[500px]">
            <img
              src="/images/ghost-transform.png"
              alt="Ghost transformation from faceless to king"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`bg-[#141415] rounded-[20px] border border-[#2A2A2C] p-8 hover:border-[#3A3A3C] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.15 * (i + 1)}s`, transitionDuration: '0.6s' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon size={24} style={{ color: feature.color }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-[#A1A1A6] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
