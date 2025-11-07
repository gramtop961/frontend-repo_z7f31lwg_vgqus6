import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Cpu } from 'lucide-react';

const skills = [
  {
    title: 'Programming Languages',
    icon: Code2,
    items: ['Python', 'JavaScript', 'C', 'C++', 'Java'],
  },
  {
    title: 'Web Development',
    icon: Cpu,
    items: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'Flask'],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Firebase'],
  },
];

const container = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative w-full overflow-hidden bg-black py-16 text-white">
      {/* soft aurora background */}
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold md:text-4xl"
        >
          Skills
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((group) => (
            <motion.div
              key={group.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/10"
            >
              <div className="flex items-center gap-2">
                <group.icon className="h-5 w-5 text-cyan-400" />
                <h3 className="text-lg font-medium">{group.title}</h3>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-white/80">
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
