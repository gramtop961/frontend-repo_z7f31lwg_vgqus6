import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#" className="text-sm font-semibold tracking-wide">SIDDHANT KALE</a>
        <nav className="hidden gap-6 md:flex">
          <a href="#skills" className="text-sm text-white/80 hover:text-white">Skills</a>
          <a href="#projects" className="text-sm text-white/80 hover:text-white">Projects</a>
          <a href="#about" className="text-sm text-white/80 hover:text-white">About</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-medium text-black hover:bg-cyan-400">Hire Me</a>
      </div>
    </header>
  );
}

function Contact() {
  return (
    <section id="contact" className="w-full bg-gradient-to-b from-slate-950 to-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold md:text-4xl">Contact</h2>
        <p className="mt-3 max-w-2xl text-white/80">
          Open to freelance and internship opportunities. Reach out for collaborations or just a tech chat!
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <form
            action="mailto:siddhantkale@email.com"
            method="post"
            encType="text/plain"
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none placeholder:text-white/40" placeholder="Your name" required />
              <input className="rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none placeholder:text-white/40" type="email" placeholder="Email" required />
            </div>
            <textarea className="mt-4 h-32 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none placeholder:text-white/40" placeholder="Message" />
            <button type="submit" className="mt-4 rounded-md bg-cyan-500 px-4 py-2 font-medium text-black hover:bg-cyan-400">Send</button>
          </form>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-white/80">
              <li><a className="hover:text-white" href="#skills">• Skills</a></li>
              <li><a className="hover:text-white" href="#projects">• Projects</a></li>
              <li><a className="hover:text-white" href="#about">• Education & Experience</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
