"use client";
import { Space_Mono } from "next/font/google";
import { Mail, PhoneIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import Link from "next/link";

const spacemono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.png"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="md:text-6xl text-5xl tracking-wider">
              My Name
              <br />
              is{" "}
              <span className={`${spacemono.className} font-bold`}>Shozeb</span>
              <br />
              <span className={`${spacemono.className} font-bold`}>
                Hasan...
              </span>
            </h1>

            <p className="text-xl mt-4">
              <span className="font-bold italic">Computer Science </span>{" "}
              Student from <span className="font-bold italic">Karachi</span>
            </p>
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contact"
                className={`${spacemono.className} inline-flex font-semibold cursor-pointer border border-blue-700 px-7 py-3 rounded bg-blue-400 transition-colors`}
              >
                Get in Touch
              </Link>
            </motion.div>

            <div className="flex gap-5 flex-wrap">
              {/* WhatsApp */}
              <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              >
              <Link
                href="https://wa.me/923162525612"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex italic border rounded-full md:px-4 md:py-2 bg-green-300 transition-colors cursor-pointer px-2 py-2"
              >
                <span className="flex justify-center gap-2">
                  <PhoneIcon className="w-5 h-5" /> +92 3162525612
                </span>
              </Link>
              </motion.div>

              {/* Gmail */}
              <motion.div
              className="inline-block"
              whileHover={{scale:1.05}}
              whileTap={{scale:0.95}}
              >
              <Link
                href="mailto:shozebhasan@gmail.com"
                className="inline-flex italic border rounded-full md:px-4 md:py-2 bg-gray-100 transition-colors cursor-pointer px-2 py-2"
              >
                <span className="flex justify-center gap-2">
                  <Mail className="w-5 h-5" /> shozebhasan@gmail.com
                </span>
              </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="flex justify-center items-center order-first lg:order-last"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Orbit wrapper */}
            <div
              style={{
                position: "relative",
                width: "clamp(200px, 40vw, 384px)",
                aspectRatio: "1 / 1",
              }}
            >
              {/* Orbiting rings */}
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  overflow: "visible",
                  pointerEvents: "none",
                }}
              >
                <style>{`
                  @keyframes orbit-cw {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                  }
                  @keyframes orbit-ccw {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(-360deg); }
                  }
                  .ring-cw {
                    transform-origin: 50px 50px;
                    animation: orbit-cw 8s linear infinite;
                  }
                  .ring-ccw {
                    transform-origin: 50px 50px;
                    animation: orbit-ccw 12s linear infinite;
                  }
                `}</style>

                {/* Outer ring */}
                <circle
                  className="ring-cw"
                  cx="50"
                  cy="50"
                  r="49"
                  fill="none"
                  stroke="#1E40AF"
                  strokeWidth="0.8"
                  strokeDasharray="18 8"
                  strokeLinecap="round"
                />

                {/* Inner ring */}
                <circle
                  className="ring-ccw"
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="0.5"
                  strokeDasharray="18 8"
                  strokeLinecap="round"
                />
              </svg>

              {/* Profile image  */}
              <div style={{ position: "absolute", inset: "10%" }}>
                <Image
                  src="/me3.jpeg"
                  alt="Shozeb Hasan"
                  fill
                  priority
                  className="object-cover object-center"
                  style={{ clipPath: "circle(50%)" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;