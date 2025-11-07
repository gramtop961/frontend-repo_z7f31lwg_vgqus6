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

function ProjectCard({ title, points }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-black p-6 text-white shadow-lg"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_80%_120%,rgba(14,165,233,0.12),transparent_40%)]" />
      <div className="relative z-10">
        <h3 className="text-xl font-semibold">{title}</h3>
        <ul className="mt-3 list-inside space-y-2 text-sm text-white/80">
          {points.map((p) => (
            <li key={p}>• {p}</li>
          ))}
        </ul>
        <button className="mt-4 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 transition-colors hover:bg-white/10">
          <ExternalLink className="h-4 w-4" />
          <span>View details</span>
        </button>
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

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} points={p.points} />
          ))}
        </div>
      </div>
    </section>
  );
}
