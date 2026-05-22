"use client"
import { Space_Mono } from "next/font/google";
import Image from "next/image";
import { ExternalLink, CodeIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import {
  fadeInUp,
  cardHover
} from '@/utils/animations'

const spacemono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

const projects = [
  {
    title: "Neuro Sense",
    images: ["/landedneuro.png","/chatnene.png","/testpic.png","/analyzepic.png"],
    description: "An AI-powered healthcare application that analyzes medical reports and evaluates cognitive health through quizzes and puzzle-based activities.",
    techStack: ["Next.js", "PostgreSQL", "Fast API", "Python"],
    links: [
      { label: "Frontend", href: "https://github.com/shozebhasan/NeuroSense-Fyp-Webapp", icon: "code" },
      { label: "Backend", href: "https://github.com/shozebhasan/neurosense_backend", icon: "code" },
    ],
  },
  {
    title: "AI Hiring Platform",
    images: ["/kh3.png","/khudhee.png","/ai4.png"],
    description: "An intelligent recruitment platform that automates candidate evaluation using AI-driven analysis. Schedules Interviews and Tests.",
    techStack: ["Next.js", "Python", "PostgreSql", "Socket API"],
    links: [
      { label: "Frontend", href: "https://github.com/shozebhasan/aimanager-frontend-main", icon: "code" },
      { label: "Backend", href: "https://github.com/shozebhasan/aimanager-backend", icon: "code" },
    ],
  },
  {
    title: "Agronomist Chatbot",
    images: ["/agropic.jpeg","/agro7.png","/landedagro.jpeg"],
    description: "An AI-powered agricultural chatbot developed to assist farmers with crop-related guidance and support.",
    techStack: ["Next.js", "OpenAI API", "Tavily API", "Gemini API"],
    links: [
      { label: "Frontend", href: "https://github.com/shozebhasan/agronomy_app", icon: "code" },
      { label: "Backend", href: "https://github.com/shozebhasan/AI_AGRONOMIST/tree/shozeb", icon: "code" },
      { label: "Live", href: "https://agri-bot.rcai.com.pk/login", icon: "live" },
    ],
  },
  {
    title: "DropOut Prediction Model",
    images: ["/dropout.jpeg"],
    description: "A machine learning model designed to predict the likelihood of student dropout using academic and behavioral data.",
    techStack: ["Next.js", "Hadoop", "Spark", "Linear Regression"],
    links: [
      { label: "Backend", href: "https://github.com/shozebhasan/student_backend", icon: "code" },
    ],
  },
  {
    title: "Yolo v8 Car Speed Detection",
    images: ["/val_batch1_pred.jpg","/BoxF1_curve.png","/confusion_matrix_normalized.png","/labels_correlogram.jpg","/labels.jpg","/results.png","/val_batch0_pred.jpg"],
    description: "A real-time vehicle monitoring system built using YOLOv8 for car detection and speed estimation. It detect's speed sign.",
    techStack: ["React", "Socket.io", "Firebase", "Express"],
    links: [
      { label: "Kaggle Notebook", href: "https://www.kaggle.com/code/shozebhasan/car-object-detection/edit", icon: "code" },
    ],
  },
  {
    title: "Rag Project For Ecommerce Store",
    images: ["/ecom.png"],
    description: "A Retrieval-Augmented Generation (RAG) system developed for ecommerce stores to provide intelligent product assistance.",
    techStack: ["Next.js", "Embeddings", "Vector - DB"],
    links: [
      { label: "Frontend", href: "https://github.com/shozebhasan/ecomchatbotfrontend", icon: "code" },
      { label: "Backend", href: "https://github.com/shozebhasan/E-commerce--Chatbot-RAG-", icon: "code" },
    ],
  },
  {
    title: "Crops Classifier - 94% Accuracy",
    images: ["/cotton.png"],
    description: "A deep learning-based crop disease detection system trained on multiple major crops including rice, cotton, corn, sugarcane, and wheat. It helps to identify crops.",
    techStack: ["Numpy", "OS", "Shutil", "Random", "Matplotlib", "Tensorflow", "Sklearn", "Seaborn", "CNN", "MobileNetv2", "EfficientNetb3"],
    links: [
      { label: "Github - IPYNB", href: "https://github.com/shozebhasan/crops-classifier", icon: "code" },
    ],
  },
  {
    title: "Corn Disease Model - 97% Accuracy",
    images: ["/corn.png"],
    description: "A machine learning model trained on corn (maize) leaf datasets for disease classification. Helps in timely identification and prevention of crop damage.",
    techStack: ["Numpy", "OS", "Shutil", "Random", "Matplotlib", "Tensorflow", "Sklearn", "Seaborn", "CNN", "MobileNetv2", "EfficientNetb3"],
    links: [
      { label: "Github - IPYNB", href: "https://github.com/shozebhasan/corn-infection-detector", icon: "code" },
    ],
  },
  {
    title: "Cotton Disease Model - 99.1% Accuracy",
    images: ["/cotton.png"],
    description: "A CNN-based classifier trained on cotton leaf images to recognize various disease patterns. Designed to support early diagnosis and improve cotton crop productivity.",
    techStack: ["Numpy", "OS", "Shutil", "Random", "Matplotlib", "Tensorflow", "Sklearn", "Seaborn", "CNN", "MobileNetv2", "EfficientNetb3"],
    links: [
      { label: "Github - IPYNB", href: "https://github.com/shozebhasan/cotton-infection-detector", icon: "code" },
    ],
  },
  {
    title: "Sugarcane Disease Model - 98% Accuracy",
    images: ["/sugar.png"],
    description: "A deep learning model built to classify sugarcane leaf conditions into healthy and diseased categories. Assists in early disease detection for better sugarcane yield management.",
    techStack: ["Numpy", "OS", "Shutil", "Random", "Matplotlib", "Tensorflow", "Sklearn", "Seaborn", "CNN", "MobileNetv2", "EfficientNetb3"],
    links: [
      { label: "Github - IPYNB", href: "https://github.com/shozebhasan/sugarcane-plant-infection-detector", icon: "code" },
    ],
  },
  {
    title: "Wheat Disease Model - 91% Accuracy",
    images: ["/wheat.png"],
    description: "A CNN-based image classification model trained on wheat crop leaves. It identifies common wheat diseases through pattern recognition in leaf images.",
    techStack: ["Numpy", "OS", "Shutil", "Random", "Matplotlib", "Tensorflow", "Sklearn", "Seaborn", "CNN", "MobileNetv2", "EfficientNetb3"],
    links: [
      { label: "Github - IPYNB", href: "https://github.com/shozebhasan/wheat-leaf-infection-detector", icon: "code" },
    ],
  },
  {
    title: "Rice Disease Model - 99% Accuracy",
    images: ["/rice.png"],
    description: "A deep learning model trained specifically on rice crop leaf images to detect healthy and diseased conditions. Helps farmers detect issues early for better yield protection and crop management.",
    techStack: ["Numpy", "OS", "Shutil", "Random", "Matplotlib", "Tensorflow", "Sklearn", "Seaborn", "CNN", "MobileNetv2", "EfficientNetb3"],
    links: [
      { label: "Github - IPYNB", href: "https://github.com/shozebhasan/rice-leaf-infection-detector", icon: "code" },
    ],
  },
];

const Lightbox = ({ images, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback((e) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback((e) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Image wrapper*/}
      <div
        className="relative flex items-center justify-center w-full h-full px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="relative w-full h-full max-w-5xl max-h-[85vh]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.18 }}
          >
            <Image
              src={images[current]}
              alt={`Image ${current + 1}`}
              fill
              quality={100}
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* Previous and Next */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Counter */}
            <span
              className={`${spacemono.className} absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80 bg-black/50 px-3 py-1 rounded-full`}
            >
              {current + 1} / {images.length}
            </span>
          </>
        )}
      </div>
    </motion.div>
  );
};

const CardImageCarousel = ({ images, onImageClick }) => {
  const [current, setCurrent] = useState(0);

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };

  const next = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <div
      className="relative w-full aspect-video cursor-zoom-in group"
      onClick={() => onImageClick(current)}
    >
      {/* Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={images[current]}
            alt={`Slide ${current + 1}`}
            fill
            quality={100}
            priority
            className="object-contain"
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle zoom hint overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 rounded-t-2xl" />

      {/* Previous and Next */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Image counter */}
          <span
            className={`${spacemono.className} absolute bottom-2 right-2 text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-full z-10 select-none`}
          >
            {current + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const images = project.images ?? [project.image];

  return (
    <>
      <motion.div
        className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
        variants={fadeInUp}
        {...cardHover}
      >
        {/* Image carousel */}
        <CardImageCarousel
          images={images}
          onImageClick={(idx) => setLightboxIndex(idx)}
        />

        {/* Body */}
        <div className="p-5 flex flex-col flex-1 gap-4">
          <h3 className={`${spacemono.className} font-bold text-lg`}>
            {project.title}
          </h3>

          <p className={`${spacemono.className} text-gray-600 text-sm leading-relaxed flex-1`}>
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className={`${spacemono.className} text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-1">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${spacemono.className} flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded transition-colors ${
                  link.icon === "live"
                    ? "border border-blue-700 bg-blue-400 hover:bg-blue-500"
                    : "border border-gray-800 hover:bg-gray-200"
                }`}
              >
                {link.icon === "live" ? (
                  <ExternalLink className="w-4 h-4" />
                ) : (
                  <CodeIcon className="w-4 h-4" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Lightbox portal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">

        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <h2 className={`${spacemono.className} font-bold text-4xl`}>
            Projects .
          </h2>
          <p className={`${spacemono.className} text-gray-500 mt-3 text-lg`}>
            A selection of Projects I&apos;ve built so far.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;