"use client"
import { useState, useRef } from "react";
import { Space_Mono } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, Link2Icon, MessageCircle, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const spacemono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

const quickLinks = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+92 316 2525612",
    href: "tel:+923162525612",
    color: "hover:border-green-400 hover:bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "shozebhasan@gmail.com",
    href: "mailto:shozebhasan@gmail.com",
    color: "hover:border-blue-400 hover:bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: <Link2Icon className="w-5 h-5" />,
    label: "LinkedIn",
    value: "Shozeb Hasan",
    href: "https://www.linkedin.com/in/shozeb-hasan-039862317/",
    color: "hover:border-blue-600 hover:bg-blue-50",
    iconColor: "text-blue-700",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: "WhatsApp",
    value: "+92 316 2525612",
    href: "https://wa.me/923162525612",
    color: "hover:border-green-500 hover:bg-green-50",
    iconColor: "text-green-600",
  },
];

const orbitItems = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
];

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.firstName.trim()) { toast.error("Please enter your first name."); return; }
    if (!form.lastName.trim())  { toast.error("Please enter your last name.");  return; }
    if (!form.email.trim())     { toast.error("Please enter your email address."); return; }
    if (!isValidEmail(form.email)) { toast.error("Please enter a valid email address."); return; }
    if (!form.message.trim())   { toast.error("Please write a message before sending."); return; }

    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          title: `${form.firstName} ${form.lastName}`,
          name: `${form.firstName} ${form.lastName}`,
          message: form.message,
          from_email: form.email,
          from_firstName: form.firstName,
          from_lastName: form.lastName,
          reply_to: form.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <Toaster
        position="top-center"
        toastOptions={{
          style: { fontFamily: "monospace", fontSize: "13px", borderRadius: "12px", border: "1px solid #e5e7eb" },
          success: { style: { background: "#4ade80", color: "#000" }, iconTheme: { primary: "#60a5fa", secondary: "#fff" } },
          error:   { style: { background: "#fecaca", color: "#000" }, iconTheme: { primary: "#f87171", secondary: "#fff" } },
        }}
      />

      <div className="container mx-auto px-6 lg:px-16">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`${spacemono.className} font-bold text-4xl md:text-5xl`}>Get In Touch .</h1>
          <p className={`${spacemono.className} text-gray-500 mt-3 text-lg`}>I&apos;d love to hear from you.</p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/*LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className={`${spacemono.className} font-bold text-2xl mb-8`}>Let&apos;s Connect!</h2>
            <p className={`${spacemono.className} text-base text-gray-600 mb-8 leading-relaxed`}>
              Feel free to reach out for collaborations, projects, or just a friendly conversation about tech and AI. Open to work and looking for a good opportunity.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className={`${spacemono.className} text-xs font-bold text-gray-500 uppercase tracking-wider`}>First Name</label>
                  <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Shozeb"
                    className={`${spacemono.className} border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50`} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className={`${spacemono.className} text-xs font-bold text-gray-500 uppercase tracking-wider`}>Last Name</label>
                  <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Hasan"
                    className={`${spacemono.className} border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50`} />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className={`${spacemono.className} text-xs font-bold text-gray-500 uppercase tracking-wider`}>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="recruiter@company.com"
                  className={`${spacemono.className} border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50`} />
              </div>

              <div className="flex flex-col gap-1">
                <label className={`${spacemono.className} text-xs font-bold text-gray-500 uppercase tracking-wider`}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Type something ..."
                  className={`${spacemono.className} border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50 resize-none`} />
              </div>

              <button type="submit" disabled={loading}
                className={`${spacemono.className} font-bold px-8 py-3.5 rounded-xl bg-blue-400 border border-blue-700 hover:bg-blue-500 transition-colors text-sm cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed`}>
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" />Sending...</> : <><Send className="w-4 h-4" />Send Message</>}
              </button>
            </form>
          </motion.div>

          {/*RIGHT*/}
          <motion.div
            className="flex flex-col gap-12 items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {/* Orbiting Image */}
            <div style={{ position: "relative", width: "260px", height: "260px", display: "flex", alignItems: "center", justifyContent: "center" }}>

              <style>{`
                @keyframes orbit-cw  { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
                @keyframes orbit-ccw { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }

                .orbit-icon-wrap {
                  position: absolute;
                  top: 50%; left: 50%;
                  width: 36px; height: 36px;
                  margin-top: -18px; margin-left: -18px;
                }
                .orbit-icon-inner {
                  width: 36px; height: 36px;
                  background: white;
                  border-radius: 50%;
                  border: 1px solid #e5e7eb;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
                  display: flex; align-items: center; justify-content: center;
                  animation: orbit-ccw 10s linear infinite;
                }

                @keyframes orbit-icon-0 { from { transform: rotate(0deg)   translateX(115px); } to { transform: rotate(360deg)   translateX(115px); } }
                @keyframes orbit-icon-1 { from { transform: rotate(60deg)  translateX(115px); } to { transform: rotate(420deg)  translateX(115px); } }
                @keyframes orbit-icon-2 { from { transform: rotate(120deg) translateX(115px); } to { transform: rotate(480deg) translateX(115px); } }
                @keyframes orbit-icon-3 { from { transform: rotate(180deg) translateX(115px); } to { transform: rotate(540deg) translateX(115px); } }
                @keyframes orbit-icon-4 { from { transform: rotate(240deg) translateX(115px); } to { transform: rotate(600deg) translateX(115px); } }
                @keyframes orbit-icon-5 { from { transform: rotate(300deg) translateX(115px); } to { transform: rotate(660deg) translateX(115px); } }

                .orbit-icon-wrap.i0 { animation: orbit-icon-0 10s linear infinite; }
                .orbit-icon-wrap.i1 { animation: orbit-icon-1 10s linear infinite; }
                .orbit-icon-wrap.i2 { animation: orbit-icon-2 10s linear infinite; }
                .orbit-icon-wrap.i3 { animation: orbit-icon-3 10s linear infinite; }
                .orbit-icon-wrap.i4 { animation: orbit-icon-4 10s linear infinite; }
                .orbit-icon-wrap.i5 { animation: orbit-icon-5 10s linear infinite; }

                .svg-ring { transform-origin: 50% 50%; animation: orbit-cw 10s linear infinite; }
              `}</style>

              {/* Single dashed ring */}
              <svg
                viewBox="0 0 260 260"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
              >
                <circle className="svg-ring" cx="130" cy="130" r="127" fill="none" stroke="#60a5fa" strokeWidth="1" strokeDasharray="16 7" strokeLinecap="round" />
              </svg>

              {/* Orbiting icons */}
              {orbitItems.map((item, i) => (
                <div key={i} className={`orbit-icon-wrap i${i}`}>
                  <div className="orbit-icon-inner">
                    <img src={item.icon} alt="" width={20} height={20} className="object-contain" />
                  </div>
                </div>
              ))}

              {/* Centre profile*/}
              <div style={{ position: "relative", width: "192px", height: "192px", zIndex: 10 }}>
                <Image
                  src="/me3.jpeg"
                  alt="Shozeb Hasan"
                  fill
                  className="object-cover object-center"
                  style={{ clipPath: "circle(50%)" }}
                />
              </div>
            </div>

            {/* Quick Contact */}
            <div className="w-full flex flex-col gap-3">
              {quickLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 px-4 py-2.5 rounded border border-gray-200 bg-gray-50 transition-all ${link.color}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className={link.iconColor}>{link.icon}</span>
                  <div>
                    <p className={`${spacemono.className} text-xs font-bold text-gray-400 uppercase tracking-wider`}>{link.label}</p>
                    <p className={`${spacemono.className} text-sm font-semibold text-gray-700`}>{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;