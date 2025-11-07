import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const sectionRef = useRef(null);

  // Subtle mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const xNorm = (e.clientX - rect.left) / rect.width;
    const yNorm = (e.clientY - rect.top) / rect.height;
    mx.set(xNorm - 0.5);
    my.set(yNorm - 0.5);
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    sectionRef.current.style.setProperty('--x', `${x}px`);
    sectionRef.current.style.setProperty('--y', `${y}px`);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
    sectionRef.current?.style.setProperty('--x', '50%');
    sectionRef.current?.style.setProperty('--y', '50%');
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white"
    >
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Veil for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        {/* Radial spotlight that follows the cursor */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(600px 400px at var(--x,50%) var(--y,50%), rgba(168,85,247,0.14), transparent 60%), radial-gradient(560px 360px at var(--x,50%) var(--y,50%), rgba(56,189,248,0.12), transparent 65%)',
          }}
        />
        {/* Soft gradient blobs for extra depth */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Center content card */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center justify-center px-6 py-16">
        <motion.div
          style={{ rotateX, rotateY }}
          className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10"
        >
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
              <span className="relative inline-flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              Interactive 3D • Keyboard Scene
            </span>

            <h1 className="mt-5 font-['Geist',Inter,sans-serif] text-4xl font-bold leading-tight md:text-6xl">
              SIDDHANT KALE
            </h1>
            <p className="mt-3 text-lg text-white/80 md:mt-4">
              Building sleek, performant, and human-friendly web experiences.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <CTA href="#projects" label="View Projects" />
              <CTA href="#contact" label="Contact" variant="ghost" icon={Mail} />
              <CTA href="#" label="GitHub" variant="ghost" icon={Github} />
              <CTA href="#" label="LinkedIn" variant="ghost" icon={Linkedin} />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Pill>React</Pill>
              <Pill>Node</Pill>
              <Pill>MongoDB</Pill>
              <Pill>Framer Motion</Pill>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTA({ href, label, variant = 'solid', icon: Icon }) {
  const base = 'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm transition-all active:scale-[0.98]';
  const styles =
    variant === 'solid'
      ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_0_0_rgba(6,182,212,0.6)] hover:shadow-[0_0_40px_8px_rgba(6,182,212,0.15)]'
      : 'bg-white/10 text-white hover:bg-white/20';
  return (
    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href={href} className={`${base} ${styles}`}>
      {Icon ? <Icon className="h-4 w-4" /> : null}
      <span className="font-medium">{label}</span>
    </motion.a>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
      {children}
    </span>
  );
}
