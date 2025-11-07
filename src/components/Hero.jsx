import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const sectionRef = useRef(null);

  // Mouse-driven interactivity (parallax + tilt)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 110, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 110, damping: 18, mass: 0.6 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const glowShiftX = useTransform(sx, [-0.5, 0.5], ['-10%', '10%']);

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
      {/* Spline scene: AI voice agent aura animation */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Depth veil for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        {/* Cursor-reactive radial spotlight (CSS vars --x, --y) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(640px 420px at var(--x,50%) var(--y,50%), rgba(168,85,247,0.18), transparent 60%), radial-gradient(560px 360px at var(--x,50%) var(--y,50%), rgba(56,189,248,0.14), transparent 65%), radial-gradient(520px 320px at var(--x,50%) var(--y,50%), rgba(251,146,60,0.12), transparent 62%)',
          }}
        />
        {/* Ambient aura blobs */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"
          style={{ x: glowShiftX }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
          style={{ x: glowShiftX }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
      </div>

      {/* Center content card with subtle tilt */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center justify-center px-6 py-16">
        <motion.div
          style={{ rotateX, rotateY }}
          className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-xl md:p-10"
        >
          {/* Animated gradient ring */}
          <div className="pointer-events-none absolute inset-0 -z-[0] rounded-3xl">
            <motion.div
              className="absolute inset-[-1px] rounded-3xl opacity-60"
              style={{
                background:
                  'conic-gradient(from 90deg at 50% 50%, rgba(168,85,247,0.4), rgba(56,189,248,0.35), rgba(251,146,60,0.35), rgba(168,85,247,0.4))',
                filter: 'blur(14px)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="relative flex flex-col items-center text-center">
            <Badge>
              <Sparkles className="h-3.5 w-3.5" />
              <span>AI Voice Agent • Live Aura</span>
            </Badge>

            <motion.h1
              className="mt-5 font-['Geist',Inter,sans-serif] text-4xl font-bold leading-tight tracking-tight md:text-6xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Conversational Interfaces, Reimagined
            </motion.h1>
            <motion.p
              className="mt-3 max-w-2xl text-balance text-lg text-white/80 md:mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              Futuristic, minimal, and fast. Building delightful web experiences with 3D, motion, and clean code.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-7 flex flex-wrap items-center justify-center gap-3"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            >
              <CTA href="#projects" label="View Projects" />
              <CTA href="#contact" label="Contact" variant="ghost" icon={Mail} />
              <CTA href="#" label="GitHub" variant="ghost" icon={Github} />
              <CTA href="#" label="LinkedIn" variant="ghost" icon={Linkedin} />
            </motion.div>

            {/* Tech Pills */}
            <motion.div
              className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Pill>React</Pill>
              <Pill>Node</Pill>
              <Pill>MongoDB</Pill>
              <Pill>Framer Motion</Pill>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] text-white/80">
      {children}
    </span>
  );
}

function CTA({ href, label, variant = 'solid', icon: Icon }) {
  const base = 'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm transition-all active:scale-[0.98]';
  const styles =
    variant === 'solid'
      ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_0_0_rgba(6,182,212,0.6)] hover:shadow-[0_0_40px_10px_rgba(6,182,212,0.15)]'
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
