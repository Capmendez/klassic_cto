import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { MessageCircle } from 'lucide-react';

export default function Community() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="community" className="bg-[#0A0A0B] py-[60px] md:py-[120px]">
      <div ref={ref} className="max-w-[800px] mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#FFD600] mb-4 block">
            JOIN THE GHOST GANG
          </span>
          <h2 className="font-marker text-3xl md:text-[56px] leading-tight text-white mb-4">
            Be Part of the Crown
          </h2>
          <p className="text-lg text-[#A1A1A6] max-w-[600px] mx-auto">
            The $KLASSIC community lives on X. Join the conversation, share your memes, and help
            the Ghost take over crypto.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* X Card */}
          <div
            className={`bg-[#141415] rounded-[20px] border border-[#2A2A2C] p-8 text-center hover:border-[#3A3A3C] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '0.15s', transitionDuration: '0.6s' }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 mx-auto mb-4 text-white"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">@KLASSIC_cto</h3>
            <p className="text-sm text-[#A1A1A6] mb-6">
              Official CTO account. 71 posts. 150 followers. The home of $KLASSIC.
            </p>
            <a
              href="https://x.com/KLASSIC_cto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-bold text-sm rounded-xl hover:bg-[#f0f0f0] transition-colors duration-200"
            >
              Follow on X
            </a>
          </div>

          {/* XChat Card */}
          <div
            className={`bg-[#141415] rounded-[20px] border border-[#2A2A2C] p-8 text-center hover:border-[#3A3A3C] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '0.25s', transitionDuration: '0.6s' }}
          >
            <MessageCircle size={32} className="mx-auto mb-4 text-[#7CB342]" />
            <h3 className="text-xl font-bold text-white mb-2">XChat Community</h3>
            <p className="text-sm text-[#A1A1A6] mb-6">
              Join the group chat. Talk directly with the Ghost gang. Real-time vibes only.
            </p>
            <a
              href="https://x.com/i/chat/group_join/2050572973829210547/P4GChr34M"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#7CB342] text-black font-bold text-sm rounded-xl hover:bg-[#9CCC65] transition-colors duration-200"
            >
              Join Chat
            </a>
          </div>
        </div>

        {/* CTA Banner */}
        <div
          className={`text-center transition-all duration-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.35s' }}
        >
          <h3 className="font-marker text-2xl md:text-4xl text-white mb-3">
            Make Your Own Ghost Meme
          </h3>
          <p className="text-base text-[#A1A1A6] mb-6">
            Create, tag @KLASSIC_cto, and get featured in the gallery.
          </p>
          <a
            href="https://x.com/KLASSIC_cto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-[#FFD600] text-[#FFD600] font-bold text-sm rounded-xl hover:bg-[#FFD600] hover:text-black transition-all duration-200"
          >
            Start Creating
          </a>
        </div>
      </div>
    </section>
  );
}
