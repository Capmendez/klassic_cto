const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Ghost', href: '#ghost' },
  { label: 'Memes', href: '#memes' },
  { label: 'Token', href: '#token' },
  { label: 'Community', href: '#community' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#141415] border-t border-[#2A2A2C] pt-12 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Row 1: Logo + Nav */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2"
          >
            <img
              src="/images/hero-ghost.png"
              alt="KLASSIC Ghost"
              className="w-6 h-6 object-contain"
            />
            <span className="font-marker text-base text-white">KLASSIC</span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[13px] text-[#6E6E73] hover:text-[#A1A1A6] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Row 2: Contract + Disclaimer */}
        <div className="text-center mb-6 space-y-2">
          <code className="text-xs text-[#6E6E73] font-mono block">
            CA: 0x75f12882d9008faf16d9147d36ea35dac048cccc
          </code>
          <p className="text-[11px] text-[#6E6E73]">
            Disclaimer: $KLASSIC is a memecoin for entertainment purposes only. Not financial advice.
          </p>
        </div>

        {/* Row 3: Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 pt-6 border-t border-[#2A2A2C]">
          <span className="text-[11px] text-[#6E6E73]">
            &copy; 2025 $KLASSIC. All rights reserved.
          </span>
          <span className="text-[11px] text-[#6E6E73]">
            Built by the community.
          </span>
        </div>
      </div>
    </footer>
  );
}
