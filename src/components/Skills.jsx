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

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold md:text-4xl"
        >
          Skills
        </motion.h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
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
        </div>
      </div>
    </section>
  );
}
