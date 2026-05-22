import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Copy, Check, ExternalLink } from 'lucide-react';

const CA = '0x75f12882d9008faf16d9147d36ea35dac048cccc';

const stats = [
  { label: 'Price', value: '~$0.000085', color: 'white' },
  { label: 'Market Cap', value: '~$80K', color: 'white' },
  { label: 'Liquidity', value: '$34K', color: 'white' },
  { label: '24h Volume', value: '$27K', color: 'white' },
  { label: '24h Change', value: '+22.17%', color: '#4CAF50' },
  { label: 'Holders', value: '1,248', color: 'white' },
  { label: 'Token Sniffer', value: '100/100', color: '#4CAF50', badge: true },
  { label: 'DEX', value: 'Uniswap v2', color: 'white' },
];

export default function Token() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CA);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = CA;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="token" className="bg-[#141415] border-t border-[#2A2A2C] py-[60px] md:py-[120px]">
      <div ref={ref} className="max-w-[800px] mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-10 transition-all duration-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7CB342] mb-4 block">
            TOKEN INFO
          </span>
          <h2 className="font-marker text-3xl md:text-[56px] leading-tight text-white">
            $KLASSIC on Ethereum
          </h2>
        </div>

        {/* Contract Address Card */}
        <div
          className={`bg-[#1E1E1F] rounded-[20px] p-6 md:p-8 mb-8 transition-all duration-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.1s' }}
        >
          <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#6E6E73] mb-3 block">
            CONTRACT ADDRESS
          </span>
          <div className="flex items-center gap-3 flex-wrap">
            <code className="font-mono text-sm md:text-base text-white break-all flex-1">
              {CA}
            </code>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 bg-[#2A2A2C] hover:bg-[#3A3A3C] rounded-lg transition-colors duration-200 shrink-0"
              aria-label="Copy contract address"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-[#4CAF50]" />
                  <span className="text-sm text-[#4CAF50]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} className="text-[#A1A1A6]" />
                  <span className="text-sm text-[#A1A1A6]">Copy</span>
                </>
              )}
            </button>
          </div>
          <a
            href={`https://etherscan.io/token/${CA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-4 text-sm text-[#7CB342] hover:text-[#9CCC65] transition-colors"
          >
            View on Etherscan
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`bg-[#141415] rounded-xl p-4 md:p-5 border border-[#2A2A2C] transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${0.1 + 0.08 * i}s` }}
            >
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#6E6E73] mb-2 block">
                {stat.label}
              </span>
              {stat.badge ? (
                <span className="inline-block px-3 py-1 bg-[#4CAF50] text-white text-sm font-bold rounded-lg">
                  {stat.value}
                </span>
              ) : (
                <span
                  className="text-lg md:text-xl font-bold"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Trading Links */}
        <div
          className={`flex flex-col sm:flex-row gap-3 justify-center transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <a
            href="https://app.uniswap.org/swap?outputCurrency=0x75f12882d9008faf16d9147d36ea35dac048cccc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E53935] text-white font-bold text-sm rounded-xl hover:bg-[#FF5252] hover:scale-[1.03] transition-all duration-200"
          >
            Buy on Uniswap
            <ExternalLink size={14} />
          </a>
          <a
            href="https://dexscreener.com/ethereum/0x75f12882d9008faf16d9147d36ea35dac048cccc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#7CB342] text-[#7CB342] font-bold text-sm rounded-xl hover:bg-[#7CB342] hover:text-black transition-all duration-200"
          >
            View on DEXScreener
            <ExternalLink size={14} />
          </a>
          <a
            href={`https://etherscan.io/token/${CA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#3A3A3C] text-white font-bold text-sm rounded-xl hover:bg-[#2A2A2C] transition-all duration-200"
          >
            View on Etherscan
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
