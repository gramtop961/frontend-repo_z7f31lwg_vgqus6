import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Face Recognition–Based Attendance System',
    points: [
      'Flask-based app using face_recognition and OpenCV',
      'MongoDB for student data and attendance records',
      'Clean UI with real-time recognition feedback',
    ],
  },
  {
    title: 'SplitEase – Bill Splitter App',
    points: [
      'Inspired by Splitwise for managing shared expenses',
      'Built with React.js, Node.js, and MongoDB',
      'Group expenses, balance tracking, and analytics dashboard',
    ],
  },
  {
    title: 'Personal Portfolio Website',
    points: [
      'Red & black–themed animated personal website',
      'Pages for Skills, Education, and Contact with smooth transitions',
      'Fully responsive for desktop and mobile',
    ],
  },
];

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function ProjectCard({ title, points, i }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-black p-6 text-white shadow-lg"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
        background:
          'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(56,189,248,0.12), transparent 40%)',
      }} />
      <div className="relative z-10">
        <h3 className="text-xl font-semibold">{title}</h3>
        <ul className="mt-3 list-inside space-y-2 text-sm text-white/80">
          {points.map((p) => (
            <li key={p}>• {p}</li>
          ))}
        </ul>
        <motion.button whileTap={{ scale: 0.98 }} className="mt-4 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 transition-colors hover:bg-white/10">
          <ExternalLink className="h-4 w-4" />
          <span>View details</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-gradient-to-b from-black to-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-white md:text-4xl"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p, idx) => (
            <ProjectCard key={p.title} i={idx} title={p.title} points={p.points} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Fancy cursor-parallax highlight on hover
if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.group');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  });
}
