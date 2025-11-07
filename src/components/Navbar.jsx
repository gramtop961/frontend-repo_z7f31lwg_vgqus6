import { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-white/10 transition-colors ${
        scrolled ? 'bg-black/70 backdrop-blur' : 'bg-black/30 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide">
          <Rocket className="h-4 w-4 text-cyan-400" />
          <span>AI Aura</span>
        </a>
        <nav className="hidden gap-6 md:flex">
          <a href="#skills" className="text-sm text-white/80 hover:text-white">Skills</a>
          <a href="#projects" className="text-sm text-white/80 hover:text-white">Projects</a>
          <a href="#about" className="text-sm text-white/80 hover:text-white">About</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-medium text-black hover:bg-cyan-400">Get in touch</a>
      </div>
    </header>
  );
}
