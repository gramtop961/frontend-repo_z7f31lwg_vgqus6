import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Brain, Activity } from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
            <h2 className="flex items-center gap-2 text-3xl font-semibold md:text-4xl">
              <GraduationCap className="h-7 w-7 text-cyan-400" /> Education
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="font-medium">Bachelor of Engineering (B.E.) in Information Technology</p>
              <p className="text-white/80">Vidyavardhini’s College of Engineering and Technology, Mumbai University</p>
              <p className="text-white/60">2023 – 2027 (Expected) • Current Year: Third Year (T.E.)</p>
              <p className="mt-2 text-white/70">CGPA: 8.3/10</p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-2xl font-semibold">
                <Award className="h-6 w-6 text-cyan-400" /> Certifications / Achievements
              </h3>
              <ul className="mt-4 space-y-2 text-white/80">
                <li>• Member of VCET Hackathon Club</li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
            <h2 className="flex items-center gap-2 text-3xl font-semibold md:text-4xl">
              <Briefcase className="h-7 w-7 text-cyan-400" /> Experience
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="font-medium">Freelance Web Developer (2025 – Present)</p>
              <ul className="mt-2 space-y-2 text-white/80">
                <li>• Designed and deployed personal and client-based web applications.</li>
                <li>• Focused on clean UI and responsive front-end development.</li>
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-2xl font-semibold">
                <Brain className="h-6 w-6 text-cyan-400" /> Soft Skills
              </h3>
              <p className="mt-2 text-white/80">Teamwork • Problem Solving • Communication • Adaptability • Creativity • Time Management</p>

              <h3 className="mt-6 flex items-center gap-2 text-2xl font-semibold">
                <Activity className="h-6 w-6 text-cyan-400" /> Interests
              </h3>
              <p className="mt-2 text-white/80">Coding Challenges • AI & Automation • Fitness & Gym • UI/UX Design • Gaming</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
