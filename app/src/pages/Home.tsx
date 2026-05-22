import { useLenis } from '../hooks/useLenis';
import Navigation from '../sections/Navigation';
import Hero from '../sections/Hero';
import About from '../sections/About';
import GhostSection from '../sections/Ghost';
import Memes from '../sections/Memes';
import Token from '../sections/Token';
import Community from '../sections/Community';
import Footer from '../sections/Footer';

export default function Home() {
  useLenis();

  return (
    <div className="min-h-[100dvh] bg-[#0A0A0B]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <GhostSection />
        <Memes />
        <Token />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
