import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Github, Linkedin, Globe, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* Spline canvas */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient veil to keep text readable without blocking Spline interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-10 px-6 py-24 md:flex-row md:items-center md:gap-16 md:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <SparkleDot />
            <span>Futuristic • Minimal • Animated</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-4 font-['Geist',Inter,sans-serif] text-4xl font-bold leading-tight md:text-6xl"
          >
            SIDDHANT KALE
          </motion.h1>

          <motion.p variants={item} className="mt-4 max-w-xl text-white/80">
            Third-year Information Technology undergrad crafting clean, modern, and performant web experiences. Passionate about UI/UX, automation, and building tools that feel delightful.
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-col gap-3 text-sm text-white/80 md:flex-row md:gap-6">
            <InfoItem icon={MapPin} text="Mumbai, India" />
            <InfoItem icon={Mail} text="siddhantkale@email.com" href="mailto:siddhantkale@email.com" />
            <InfoItem icon={Phone} text="+91-XXXXXXXXXX" href="tel:+91XXXXXXXXXX" />
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <ActionButton icon={Linkedin} label="LinkedIn" href="#" />
            <ActionButton icon={Github} label="GitHub" href="#" variant="ghost" />
            <ActionButton icon={Globe} label="Portfolio" href="#projects" variant="ghost" />
          </motion.div>

          {/* Floating badges */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pointer-events-none mt-10 grid grid-cols-2 gap-3 sm:max-w-md"
          >
            <Floaty label="React.js" delay={0} />
            <Floaty label="Node.js" delay={0.1} />
            <Floaty label="MongoDB" delay={0.2} />
            <Floaty label="Python" delay={0.3} />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 mx-auto mb-8 flex w-full max-w-7xl justify-start px-6 md:mb-12"
      >
        <div className="flex items-center gap-2 text-sm text-white/60">
          <Sparkles className="h-4 w-4 text-cyan-400" />
          <span>Scroll to explore</span>
        </div>
      </motion.div>
    </section>
  );
}

function InfoItem({ icon: Icon, text, href }) {
  const content = (
    <div className="inline-flex items-center gap-2">
      <Icon className="h-4 w-4 text-cyan-400" />
      <span>{text}</span>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="transition-colors hover:text-white">
        {content}
      </a>
    );
  }
  return content;
}

function ActionButton({ icon: Icon, label, href, variant = 'solid' }) {
  const base = 'inline-flex items-center gap-2 rounded-md px-4 py-2 transition-all active:scale-[0.98]';
  const styles =
    variant === 'solid'
      ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_0_0_rgba(6,182,212,0.6)] hover:shadow-[0_0_40px_8px_rgba(6,182,212,0.15)]'
      : 'bg-white/10 text-white hover:bg-white/20';
  return (
    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href={href} className={`${base} ${styles}`}>
      <Icon className="h-4 w-4" />
      <span className="font-medium">{label}</span>
    </motion.a>
  );
}

function SparkleDot() {
  return (
    <span className="relative inline-flex h-2 w-2 items-center justify-center">
      <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-cyan-400 opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
    </span>
  );
}

function Floaty({ label, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 3.2, delay, ease: 'easeInOut' }}
      className="pointer-events-none inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur"
    >
      {label}
    </motion.div>
  );
}
