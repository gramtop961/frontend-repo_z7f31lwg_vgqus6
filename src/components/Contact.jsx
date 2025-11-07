import { Mail, MessageSquare, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-slate-950 to-black py-20 text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute right-16 bottom-0 -z-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Let’s build something delightful</h2>
          <p className="mt-3 text-white/80">
            Open to freelance and collaborations. Drop a message and I’ll get back within 24 hours.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          <form
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none placeholder:text-white/40"
                placeholder="Your name"
                required
              />
              <input
                className="rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none placeholder:text-white/40"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <textarea
              className="mt-4 h-32 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none placeholder:text-white/40"
              placeholder="Message"
            />
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-cyan-500 px-4 py-2 font-medium text-black hover:bg-cyan-400"
            >
              <MessageSquare className="h-4 w-4" />
              Send message
            </button>
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-white/80">
              <li>
                <a className="hover:text-white" href="#skills">
                  • Skills
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#projects">
                  • Projects
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#about">
                  • About
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm hover:bg-white/20"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm hover:bg-white/20"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm hover:bg-white/20"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
