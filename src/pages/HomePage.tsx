import { motion } from "motion/react";
import { useLang } from "../LangContext";

export default function HomePage() {
  const { t } = useLang();

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-80" 
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      ></div>

      {/* Targeted Neon Flickers for Pink Lamps */}
      <div className="neon-lamp-glow" style={{ top: '20%', left: '8%', width: '400px', height: '400px' }}></div>
      <div className="neon-lamp-glow" style={{ top: '30%', right: '10%', width: '350px', height: '350px', animationDelay: '1s' }}></div>
      <div className="neon-lamp-glow" style={{ top: '15%', left: '45%', width: '250px', height: '250px', opacity: 0.7, animationDelay: '2s' }}></div>
      <div className="neon-lamp-glow" style={{ bottom: '15%', right: '25%', width: '300px', height: '300px', animationDelay: '3s' }}></div>
      
      {/* Fog Overlay */}
      <div className="fog-container absolute inset-0 z-10 pointer-events-none">
        <div className="fog-layer"></div>
        <div className="fog-layer fog-layer-2"></div>
      </div>
      
      {/* Dark gradient overlay to make text pop */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-black/60 pointer-events-none"></div>

      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center justify-center space-y-4 md:space-y-6">
        
        {/* Slogan just above the logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center w-full z-30"
        >
          <h2 className="font-orbitron font-bold text-lg md:text-2xl lg:text-3xl tracking-[0.15em] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] uppercase px-4 pointer-events-none">
            {t('slogan')}
          </h2>
        </motion.div>

        {/* Centered Logo */}
        <div className="w-full max-w-[85vw] md:max-w-2xl lg:max-w-4xl flex justify-center items-center my-0 bg-transparent z-30 pointer-events-none">
          <img 
            src="/hero-logo.png" 
            alt="Best of the Best BJJ Edition" 
            className="hero-logo-glow w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.8)] bg-transparent" 
          />
        </div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center w-full mt-2 space-y-4 md:space-y-5 z-40"
        >
          <a href="#smoothcomp" className="group relative px-6 py-3 md:px-10 md:py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-orbitron text-sm md:text-lg font-bold tracking-[0.15em] uppercase rounded-xl transition-all duration-300 hover:from-pink-500 hover:to-purple-500 hover:-translate-y-1 overflow-hidden w-full sm:w-auto min-w-[280px] shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.8)] text-center no-underline border-2 border-pink-400/50">
            <span className="relative z-10 drop-shadow-md">{t('smoothcompCta')}</span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine z-0"></div>
          </a>

          <a href="#teams" className="group relative px-6 py-3 md:px-10 md:py-4 bg-black/40 text-purple-100 font-orbitron text-sm md:text-lg font-bold tracking-[0.15em] uppercase rounded-xl transition-all duration-300 hover:bg-black/60 hover:-translate-y-1 overflow-hidden w-full sm:w-auto min-w-[280px] shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] text-center no-underline border-2 border-purple-500/60 backdrop-blur-md">
            <span className="relative z-10 drop-shadow-md">{t('teamsAdmissions')}</span>
            <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:animate-shine z-0"></div>
          </a>
        </motion.div>

      </div>
    </div>
  );
}
