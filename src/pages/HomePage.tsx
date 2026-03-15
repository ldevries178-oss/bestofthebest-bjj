import { motion } from "motion/react";
import { useLang } from "../LangContext";

export default function HomePage() {
  const { t } = useLang();

  return (
    <>
      <div className="w-full h-full flex flex-col justify-between items-center py-4 md:py-8 px-4 sm:px-6 lg:px-8 flex-1">
        {/* Top Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center mt-4 w-full relative z-10"
        >
          <div className="flex items-center justify-center gap-4 mb-4 opacity-80">
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-purple-400"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
          <h2 className="font-orbitron text-lg md:text-xl lg:text-2xl tracking-[0.4em] uppercase font-medium text-purple-600 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] text-center" data-text={t('theUltimateEvent')}>
            {t('theUltimateEvent')}
          </h2>
        </motion.div>

        {/* Middle Section - Image Title with VHS Glitch */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center justify-center w-full relative z-10 m-0 p-0"
        >
          <h1 className="sr-only">Best of the Best BJJ Edition</h1>
          <div className="relative w-full max-w-[95vw] md:max-w-4xl lg:max-w-5xl vhs-image-container flex justify-center items-center">
            <img 
              src="/hero-logo.png" 
              alt="" 
              className="vhs-image-glitch-1 absolute inset-0 w-full h-full object-contain" 
              aria-hidden="true" 
            />
            <img 
              src="/hero-logo.png" 
              alt="Best of the Best BJJ Edition" 
              className="vhs-image-base w-full h-auto object-contain" 
            />
            <img 
              src="/hero-logo.png" 
              alt="" 
              className="vhs-image-glitch-2 absolute inset-0 w-full h-full object-contain" 
              aria-hidden="true" 
            />
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center w-full mb-4"
        >
          <p className="font-rajdhani text-base md:text-lg lg:text-xl text-purple-500 tracking-[0.2em] uppercase max-w-3xl mx-auto mb-10 font-light leading-relaxed text-center">
            {t('heroSubtitle')}
          </p>

          <div className="flex items-center justify-center gap-4 mb-10 opacity-80 w-full">
            <div className="h-[1px] w-20 md:w-40 bg-gradient-to-r from-transparent to-purple-300"></div>
            <div className="w-2 h-2 rounded-full bg-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"></div>
            <div className="h-[1px] w-20 md:w-40 bg-gradient-to-l from-transparent to-purple-300"></div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 md:gap-8 w-full justify-center items-center">
            <a href="#tickets" className="group relative px-8 py-4 bg-purple-600 text-white font-orbitron text-sm md:text-base font-bold tracking-[0.2em] uppercase rounded-lg transition-all duration-300 hover:bg-purple-500 hover:-translate-y-1 overflow-hidden w-full sm:w-auto shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.4)] text-center no-underline">
              <span className="relative z-10 drop-shadow-md">{t('buyTickets')}</span>
            </a>
            
            <a href="#line-up" className="group relative px-8 py-4 bg-white text-purple-600 font-orbitron text-sm md:text-base font-bold tracking-[0.2em] uppercase rounded-lg transition-all duration-300 border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-50 hover:-translate-y-1 overflow-hidden w-full sm:w-auto shadow-[0_4px_20px_rgba(168,85,247,0.1)] text-center no-underline">
              <span className="relative z-10">{t('viewLineup')}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
