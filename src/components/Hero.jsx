import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Github, Linkedin, Globe } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-10 px-6 py-24 md:flex-row md:items-center md:gap-16 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <SparkleDot />
            <span>Tech • Portfolio • Interactive</span>
          </div>
          <h1 className="mt-4 font-['Geist',Inter,sans-serif] text-4xl font-bold leading-tight md:text-6xl">
            SIDDHANT KALE
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            Third-year Information Technology undergrad crafting clean, modern, and performant web experiences. Passionate about UI/UX, automation, and building tools that feel delightful.
          </p>

          <div className="mt-6 flex flex-col gap-3 text-sm text-white/80 md:flex-row md:gap-6">
            <InfoItem icon={MapPin} text="Mumbai, India" />
            <InfoItem icon={Mail} text="siddhantkale@email.com" href="mailto:siddhantkale@email.com" />
            <InfoItem icon={Phone} text="+91-XXXXXXXXXX" href="tel:+91XXXXXXXXXX" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ActionButton icon={Linkedin} label="LinkedIn" href="#" />
            <ActionButton icon={Github} label="GitHub" href="#" variant="ghost" />
            <ActionButton icon={Globe} label="Portfolio" href="#projects" variant="ghost" />
          </div>
        </motion.div>
      </div>
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
      <a href={href} className="hover:text-white transition-colors">
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
      ? 'bg-cyan-500 text-black hover:bg-cyan-400'
      : 'bg-white/10 text-white hover:bg-white/20';
  return (
    <a href={href} className={`${base} ${styles}`}>
      <Icon className="h-4 w-4" />
      <span className="font-medium">{label}</span>
    </a>
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
