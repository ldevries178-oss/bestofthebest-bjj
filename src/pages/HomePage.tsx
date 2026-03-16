import { motion } from "motion/react";
import { useLang } from "../LangContext";

export default function HomePage() {
  const { t } = useLang();

  return (
    <div className="relative w-full h-full min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-4 md:py-8 px-4 sm:px-6 lg:px-8 flex-1 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center neon-flicker-bg" 
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      ></div>
      
      {/* Fog Overlay */}
      <div className="fog-container absolute inset-0 z-0 overflow-hidden pointer-events-none mix-blend-screen opacity-70">
        <div className="fog-img fog-img-first"></div>
        <div className="fog-img fog-img-second"></div>
      </div>
      
      {/* Dark gradient overlay to make text pop */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center flex-1 space-y-8">
        {/* Slogan just above the logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="font-orbitron text-lg md:text-2xl lg:text-3xl tracking-[0.2em] font-medium text-pink-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] text-center uppercase neon-text-flicker">
            {t('slogan')}
          </h2>
        </motion.div>

        {/* Centered Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="w-full max-w-[95vw] md:max-w-xl lg:max-w-3xl flex justify-center items-center"
        >
          <img 
            src="/hero-logo.png" 
            alt="Best of the Best BJJ Edition" 
            className="hero-logo-glow w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]" 
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center w-full mt-12"
        >
          <a href="#smoothcomp" className="group relative px-10 py-5 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-orbitron text-base md:text-xl font-bold tracking-[0.2em] uppercase rounded-xl transition-all duration-300 hover:from-pink-500 hover:to-purple-500 hover:-translate-y-1 overflow-hidden w-full sm:w-auto shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.8)] text-center no-underline border-2 border-pink-400/50">
            <span className="relative z-10 drop-shadow-md">{t('smoothcompCta')}</span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine z-0"></div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
