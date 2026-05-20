"use client"
import { Space_Mono } from "next/font/google";
import { motion } from "framer-motion";

const spacemono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

const categories = [
  {
    label: "Frameworks",
    skills: [
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    ],
  },
  {
    label: "Libraries",
    skills: [
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "Seaborn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "shutil / os", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    label: "Trained Machine Learning Models On Networks",
    skills: [
      { name: "CNN", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "MobileNetV2", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "EfficientNetB3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    ],
  },
  {
    label: "Languages & Tools",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Neon DB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white">
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
            Skills .
          </h2>
          <p className={`${spacemono.className} text-gray-500 mt-3 text-lg`}>
            Technologies I&apos;ve worked with.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-col gap-14">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: catIndex * 0.05 }}
            >
              {/* Category Label */}
              <div className="flex items-center gap-4 mb-6">
                <h3 className={`${spacemono.className} font-bold text-sm uppercase tracking-widest text-gray-400`}>
                  {category.label}
                </h3>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              {/* Skill */}
              <motion.div
                className="flex flex-wrap gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-default"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                    <span className={`${spacemono.className} text-sm font-semibold text-gray-700`}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;