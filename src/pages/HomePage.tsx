import { motion } from "motion/react";
import { useLang } from "../LangContext";

export default function HomePage() {
  const { t } = useLang();

  return (
    <div className="relative w-full h-full min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-4 md:py-8 px-4 sm:px-6 lg:px-8 flex-1 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
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
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center justify-center flex-1 space-y-8">
        {/* Slogan just above the logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center w-full"
        >
          <h2 className="font-orbitron text-base md:text-xl lg:text-2xl tracking-[0.2em] font-medium text-pink-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] text-center uppercase neon-text-flicker px-4">
            {t('slogan')}
          </h2>
        </motion.div>

        {/* Centered Logo */}
        <div className="w-full max-w-[95vw] md:max-w-xl lg:max-w-3xl flex justify-center items-center my-4 md:my-8 bg-transparent">
          <img 
            src="/hero-logo.png" 
            alt="Best of the Best BJJ Edition" 
            className="hero-logo-glow w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.8)] bg-transparent" 
          />
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center w-full mt-4 md:mt-12"
        >
          <a href="#smoothcomp" className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-orbitron text-sm md:text-xl font-bold tracking-[0.2em] uppercase rounded-xl transition-all duration-300 hover:from-pink-500 hover:to-purple-500 hover:-translate-y-1 overflow-hidden w-full sm:w-auto shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.8)] text-center no-underline border-2 border-pink-400/50">
            <span className="relative z-10 drop-shadow-md">{t('smoothcompCta')}</span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine z-0"></div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
