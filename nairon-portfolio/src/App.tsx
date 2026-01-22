import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Terminal, Cpu, 
  Layers, ArrowUpRight, Code2, Sparkles, ChevronRight, Command
} from 'lucide-react';

import naironImage from './assets/nairon.jpg'; 

// Corrected Slugs for Simple Icons CDN
const techStack = [
  { name: "Java", slug: "openjdk" },
  { name: "C#", slug: "csharp" },
  { name: "JavaScript", slug: "javascript" },
  { name: "SQL", slug: "postgresql" },
  { name: "Firebase", slug: "firebase" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "Stripe", slug: "stripe" },
  { name: "Framer", slug: "framer" },
  { name: "CSS3", slug: "css3" },
  { name: "HTML5", slug: "html5" },
  { name: "Vercel", slug: "vercel" },
  { name: "GitHub", slug: "github" },
  { name: "Notion", slug: "notion" }
];

const projects = [
  {
    title: "Venda Já ERP",
    role: "Full-Stack Developer",
    description: "Built a full-stack ERP system with inventory management, invoicing, and role-based access. Designed relational database schemas and implemented real-time stock updates.",
    tech: ["Java", "SQL", "React", "REST API"],
    link: "https://venda-japro.vercel.app/",
    highlight: true
  },
  {
    title: "Home Pro Help",
    role: "Full-Stack Developer",
    description: "Developed a service marketplace MVP with booking flows, authentication, and payment-ready architecture. Focused on UX and scalable backend structure.",
    tech: ["Next.js", "Auth", "Payments", "UI/UX"],
    link: "https://homeprohelp.vercel.app/",
    highlight: false
  },
  {
    title: "Angel's Path Agency",
    role: "Frontend Developer",
    description: "Built a high-conversion landing page with animations and responsive layouts. Optimized for performance, SEO, and Core Web Vitals.",
    tech: ["Framer Motion", "Tailwind CSS", "Performance"],
    link: "https://angels-path-agency-6huy.vercel.app/",
    highlight: false
  }
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
};

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scrollSmooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    const timer = setTimeout(() => setShowLoader(false), 2200);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const imageRotateX = (mousePos.y - window.innerHeight / 2) / 50;
  const imageRotateY = (mousePos.x - window.innerWidth / 2) / -50;

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-slate-900 overflow-hidden selection:bg-emerald-500 selection:text-white">
      
      {/* 1. THE VIRTUAL RAIL */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 h-64 w-[1px] bg-slate-200 z-50">
        <motion.div className="w-full bg-emerald-500 origin-top shadow-[0_0_15px_rgba(16,185,129,0.5)]" style={{ height: '100%', scaleY: scrollSmooth }} />
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-[8px] font-black tracking-[0.3em] text-slate-400 uppercase [writing-mode:vertical-lr]">N_PORTFOLIO_v4</div>
      </div>

      {/* 2. DYNAMIC AMBIENCE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.4]" />
        <motion.div 
          className="absolute w-[800px] h-[800px] bg-emerald-400/10 rounded-full blur-[140px]"
          animate={{ x: mousePos.x - 400, y: mousePos.y - 400 }}
          transition={{ type: 'spring', damping: 60, stiffness: 150 }}
        />
      </div>

      <AnimatePresence>
        {showLoader && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[120] bg-white flex flex-col items-center justify-center">
             <div className="flex gap-2 mb-6">
                {[...Array(3)].map((_, i) => (
                  <motion.div key={i} animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }} className="w-2 h-2 rounded-full bg-emerald-500" />
                ))}
             </div>
             <p className="text-[10px] font-black tracking-[1em] text-slate-300 uppercase">System.Loading</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-24">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-20 items-center pt-20">
          
          <div className="lg:col-span-8 space-y-12 z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-4 px-4 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm">
                <Command size={14} className="text-emerald-500" />
                <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">Architecture & Engineering</span>
              </div>
            </FadeIn>

            <div className="relative">
              <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="text-8xl md:text-[13rem] font-black tracking-tighter leading-[0.7] text-slate-900">
                Nairon <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-emerald-600 to-indigo-500 bg-[length:200%_auto] animate-pulse">Malone.</span>
              </motion.h1>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 flex items-baseline gap-6">
                <span className="text-4xl md:text-5xl font-light text-slate-300 italic tracking-tighter">Cossa</span>
                <div className="h-[1px] w-32 bg-slate-200" />
                <span className="text-[11px] font-mono font-bold text-emerald-500 uppercase tracking-[0.4em]">Sandton, SA // GMT+2 // Remote</span>
              </motion.div>
            </div>

            <FadeIn delay={0.2}>
              <p className="max-w-2xl text-2xl text-slate-400 leading-relaxed font-light">
                I’m a 21-year-old developer who builds and ships <span className="text-slate-900 font-medium">real products</span> end-to-end. I bridge the gap between heavy backend logic and pixel-perfect UI.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-8 items-center">
                <a href="#work" className="px-14 py-7 bg-slate-900 text-white font-black rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:bg-emerald-600 hover:-translate-y-1 transition-all duration-500 flex items-center gap-4 group">
                  EXPLORE SYSTEMS <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex gap-4">
                   <a href="https://github.com/Nairon-Cossa" className="p-5 rounded-3xl border border-slate-200 bg-white hover:border-emerald-500 transition-colors text-slate-400 hover:text-emerald-500 shadow-sm"><Github size={24} /></a>
                   <a href="https://www.linkedin.com/in/nairon-cossa-dev" className="p-5 rounded-3xl border border-slate-200 bg-white hover:border-emerald-500 transition-colors text-slate-400 hover:text-emerald-500 shadow-sm"><Linkedin size={24} /></a>
                </div>
              </div>
            </FadeIn>
          </div>

          <motion.div 
            style={{ rotateX: imageRotateX, rotateY: imageRotateY }}
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="lg:col-span-4 relative hidden lg:block perspective-1000"
          >
             <div className="relative group transition-all duration-300 ease-out">
                <div className="absolute inset-0 bg-emerald-500/10 rounded-[5.5rem] translate-x-6 translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 blur-xl" />
                <div className="relative aspect-[3/4] rounded-[5rem] overflow-hidden border-[20px] border-white shadow-[0_40px_80px_rgba(0,0,0,0.1)] z-10 bg-white">
                   <img src={naironImage} alt="Nairon Malone Cossa" className="w-full h-full object-cover grayscale-[60%] hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white rounded-[3rem] flex items-center justify-center shadow-2xl z-20 border border-slate-50 rotate-[-10deg] group-hover:rotate-0 transition-transform duration-500">
                   <div className="text-center">
                      <p className="text-[11px] font-black text-slate-300 uppercase tracking-tighter mb-1">Portfolio</p>
                      <p className="text-[18px] font-black text-slate-900 uppercase italic">v.2026</p>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. THE BENTO GRID - UPDATED LOGOS */}
      <section className="py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-white border border-slate-100 p-16 rounded-[4.5rem] relative overflow-hidden group shadow-sm">
               <div className="absolute top-0 right-0 p-12 text-slate-50/50 group-hover:text-emerald-500/5 transition-colors duration-700"><Code2 size={240} /></div>
               <Layers className="text-emerald-500 mb-8" size={64} />
               <h3 className="text-5xl font-black mb-10 tracking-tight">Core Stack</h3>
               
               <div className="grid grid-cols-4 md:grid-cols-5 gap-y-12 gap-x-8 relative z-10">
                 {techStack.map((tech) => (
                   <motion.div 
                    key={tech.name} 
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-2 group/icon"
                   >
                     <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center p-3 grayscale group-hover/icon:grayscale-0 group-hover/icon:bg-white group-hover/icon:shadow-lg transition-all duration-300">
                        <img 
                          src={`https://cdn.simpleicons.org/${tech.slug}/64748b`} 
                          alt={tech.name}
                          className="w-full h-full object-contain"
                          onMouseOver={(e) => (e.currentTarget.src = `https://cdn.simpleicons.org/${tech.slug}/10b981`)}
                          onMouseOut={(e) => (e.currentTarget.src = `https://cdn.simpleicons.org/${tech.slug}/64748b`)}
                        />
                     </div>
                     <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover/icon:text-emerald-500">{tech.name}</span>
                   </motion.div>
                 ))}
               </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-8">
               <div className="flex-1 bg-white border border-slate-100 p-10 rounded-[4rem] flex flex-col justify-center items-center text-center space-y-4 shadow-sm">
                  <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center text-emerald-500"><Cpu size={32} /></div>
                  <h3 className="text-xl font-black uppercase tracking-[0.2em] text-slate-800">Performance</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter italic">Scalable Logic & Clean Flow</p>
               </div>
               <div className="flex-1 p-10 rounded-[4rem] bg-slate-900 text-white group overflow-hidden relative shadow-2xl">
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-500/20 rounded-full blur-[80px]" />
                  <Sparkles className="text-emerald-400 mb-6" size={32} />
                  <h3 className="text-2xl font-bold italic tracking-tight underline decoration-emerald-500 underline-offset-8">Production First</h3>
                  <p className="text-slate-400 text-sm mt-6 leading-relaxed">Building tools that solve real business problems, from payments to data.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section className="py-48 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="flex items-center gap-6">
             <div className="h-[1px] w-24 bg-emerald-500" />
             <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.6em]">Professional Bio</h2>
          </div>
          <p className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.05]">
            "My name is Nairon Malone Cossa. I’m a 21-year-old computer science student. I love anime, story-driven series, and obsessing over product UX."
          </p>
          <div className="grid md:grid-cols-2 gap-16 pt-10">
             <div className="space-y-6">
                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em]">Core Interests</p>
                <p className="text-2xl text-slate-500 font-light leading-relaxed">
                  "I’m especially interested in <span className="text-slate-900 font-semibold underline decoration-slate-200">tech companies</span>, startups, product design, and story-driven tech."
                </p>
             </div>
             <div className="flex items-center justify-between border-l border-slate-100 pl-16">
                <div className="text-center">
                   <p className="text-6xl font-black text-slate-900 tracking-tighter italic">21</p>
                   <p className="text-[10px) font-black text-slate-300 uppercase tracking-widest mt-4">Years of Age</p>
                </div>
                <div className="text-center">
                   <p className="text-6xl font-black text-slate-900 tracking-tighter italic">CS</p>
                   <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-4">Undergrad</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. PROJECTS */}
      <section id="work" className="py-48 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-32">
             <div>
                <h2 className="text-9xl font-black tracking-tighter leading-none text-slate-900">Work.</h2>
                <p className="text-slate-400 font-mono text-xs mt-6 uppercase tracking-[0.8em]">End-to-End Engineering</p>
             </div>
             <div className="hidden md:block text-right">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Scroll to explore</p>
                <div className="h-12 w-[1px] bg-slate-200 mx-auto mt-4" />
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {projects.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group bg-white p-14 rounded-[5rem] h-full flex flex-col border border-slate-100 hover:border-emerald-500/20 transition-all duration-700 shadow-sm hover:shadow-2xl">
                  <div className="flex justify-between items-start mb-16 mt-4">
                    <div className="w-16 h-16 bg-slate-50 rounded-[2rem] flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-inner"><Terminal size={32} /></div>
                    <a href={p.link} target="_blank" className="p-4 rounded-full bg-slate-50 hover:bg-emerald-50 transition-all"><ArrowUpRight size={24} /></a>
                  </div>
                  <h3 className="text-3xl font-black mb-4 tracking-tight text-slate-900">{p.title}</h3>
                  <p className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-10">{p.role}</p>
                  <p className="text-slate-400 text-lg leading-relaxed mb-16 flex-grow font-light italic">"{p.description}"</p>
                  <div className="pt-10 border-t border-slate-50 flex flex-wrap gap-3">
                    {p.tech.map(t => <span key={t} className="px-4 py-2 bg-slate-50 text-[10px] font-bold text-slate-400 rounded-xl uppercase tracking-widest">{t}</span>)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-56 px-6 text-center bg-white relative">
        <div className="max-w-6xl mx-auto">
           <h2 className="text-[10rem] md:text-[18rem] font-black tracking-tighter mb-20 text-slate-900 opacity-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">COSSA</h2>
           <h2 className="text-7xl md:text-9xl font-black tracking-tighter mb-24 relative z-10 text-slate-900">Let's Build<span className="text-emerald-500">.</span></h2>
           
           <div className="flex justify-center gap-12 relative z-10 mb-40">
              {[
                { icon: <Github size={36} />, link: "https://github.com/Nairon-Cossa" },
                { icon: <Linkedin size={36} />, link: "https://www.linkedin.com/in/nairon-cossa-dev" },
                { icon: <Mail size={36} />, link: "mailto:naironcossa.dev@gmail.com" }
              ].map((social, i) => (
                <motion.a key={i} whileHover={{ y: -12, scale: 1.15 }} href={social.link} className="w-28 h-28 bg-white border border-slate-100 rounded-[3rem] flex items-center justify-center text-slate-300 hover:text-emerald-500 hover:shadow-2xl hover:border-emerald-100 transition-all duration-500">
                  {social.icon}
                </motion.a>
              ))}
           </div>

           <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 border-t border-slate-100 relative z-10">
              <div className="text-left">
                <p className="text-[12px] font-black text-slate-900 uppercase tracking-widest">Nairon Malone Cossa</p>
                <p className="text-[10px] font-medium text-slate-400 mt-2 uppercase tracking-tighter italic">Computer Science Student // Full-Stack Developer</p>
              </div>
              <p className="text-[10px] font-black text-slate-200 tracking-[1.5em] uppercase hidden lg:block">Architecture.Production</p>
              <div className="flex gap-6 items-center">
                 <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_#10b981]" />
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Sandton, SA // GMT+2</p>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}