"use client"
import { Space_Mono } from "next/font/google";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const spacemono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

const education = [
  {
    level: "School",
    institution: "White House Grammar School",
    year: "2020",
    description: "Completed secondary school education with a strong foundation in sciences and mathematics.",
  },
  {
    level: "College",
    institution: "Gulshan College",
    year: "2020 — 2022",
    description: "Completed intermediate studies in Pre-Engineering, building core skills in physics, chemistry, and mathematics.",
  },
  {
    level: "University",
    institution: "Sir Syed University of Engineering & Technology",
    year: "2022 — 2026",
    description: "Pursuing a Bachelor's degree in Computer Science. Focused on software development, machine learning, and full-stack engineering.",
    current: true,
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`${spacemono.className} font-bold text-4xl`}>
            About .
          </h2>
          <p className={`${spacemono.className} text-gray-500 mt-3 text-lg`}>
            My educational journey so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-2xl">

          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200" />

          <div className="flex flex-col gap-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-16"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
              >
                {/* Circle on timeline */}
                <div className={`absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center border-2 ${item.current ? "bg-blue-400 border-blue-500" : "bg-white border-gray-300"}`}>
                  <GraduationCap className={`w-5 h-5 ${item.current ? "text-white" : "text-gray-400"}`} />
                </div>

                {/* Card */}
                <div className={`bg-white rounded-2xl border p-6 shadow-sm ${item.current ? "border-blue-200" : "border-gray-100"}`}>

                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <span className={`${spacemono.className} text-xs font-bold uppercase tracking-widest text-gray-400`}>
                        {item.level}
                      </span>
                      <h3 className={`${spacemono.className} font-bold text-lg mt-1 text-gray-900`}>
                        {item.institution}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`${spacemono.className} text-xs px-3 py-1 rounded-full border font-semibold ${item.current ? "bg-blue-50 border-blue-300 text-blue-600" : "bg-gray-100 border-gray-200 text-gray-500"}`}>
                        {item.year}
                      </span>
                      {item.current && (
                        <span className={`${spacemono.className} text-xs px-3 py-1 rounded-full bg-blue-400 text-white font-semibold`}>
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`${spacemono.className} text-sm text-gray-500 mt-3 leading-relaxed`}>
                    {item.description}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;