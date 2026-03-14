import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Best of the Best – BJJ Edition | De Ultieme Confrontatie</title>
        <meta name="description" content="Best of the Best BJJ Edition – De ultieme confrontatie op de mat. Ervaar de retro-futuristische strijd in 80s synthwave stijl." />
        <meta name="keywords" content="BJJ, Best of the Best, Brazilian Jiu-Jitsu, martial arts, evenement, synthwave" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="w-full h-full flex flex-col justify-between items-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex-1">
        {/* Top Section */}
        <div className="flex flex-col items-center mt-4 w-full">
          <div className="flex items-center justify-center gap-4 mb-4 opacity-80">
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-pink-500"></div>
            <div className="w-2 h-2 rounded-full bg-pink-500 box-glow-pink"></div>
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-pink-500"></div>
          </div>
          <h2 className="font-orbitron text-lg md:text-xl lg:text-2xl text-purple-400 tracking-[0.4em] uppercase font-medium drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] text-center">
            Best of the Best
          </h2>
        </div>

        {/* Middle Section */}
        <div className="flex-1 flex items-center justify-center w-full">
          <h1 className="vhs-hero-text font-orbitron text-5xl md:text-7xl lg:text-8xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-cyan-100 to-cyan-500 text-glow-cyan uppercase leading-tight text-center drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]" data-text="BJJ Edition">
            BJJ Edition
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center w-full mb-4">
          <p className="font-rajdhani text-base md:text-lg lg:text-xl text-gray-200 tracking-[0.2em] uppercase max-w-3xl mx-auto mb-10 font-light leading-relaxed text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            De ultieme confrontatie op de mat. Ervaar de retro-futuristische strijd.
          </p>

          <div className="flex items-center justify-center gap-4 mb-10 opacity-80 w-full">
            <div className="h-[1px] w-20 md:w-40 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-500 box-glow-cyan"></div>
            <div className="h-[1px] w-20 md:w-40 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 md:gap-8 w-full justify-center items-center">
            <a href="/tickets" className="vhs-button vhs-button-pink group relative px-8 py-4 bg-pink-600/90 backdrop-blur-md text-white font-orbitron text-sm md:text-base font-bold tracking-[0.2em] uppercase rounded-lg transition-all duration-300 hover:bg-pink-500 hover:-translate-y-1 overflow-hidden w-full sm:w-auto shadow-[0_0_30px_rgba(236,72,153,0.2)] text-center no-underline">
              <span className="vhs-text relative z-10 drop-shadow-md" data-text="Koop Tickets">Koop Tickets</span>
              <div className="absolute inset-0 rounded-lg box-glow-pink opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </a>
            
            <a href="/line-up" className="vhs-button vhs-button-cyan group relative px-8 py-4 bg-[#0a0514]/60 backdrop-blur-md text-cyan-400 font-orbitron text-sm md:text-base font-bold tracking-[0.2em] uppercase rounded-lg transition-all duration-300 border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-950/60 hover:-translate-y-1 overflow-hidden w-full sm:w-auto shadow-[0_0_30px_rgba(34,211,238,0.1)] text-center no-underline">
              <span className="vhs-text relative z-10 text-glow-cyan group-hover:text-cyan-300 transition-colors duration-300" data-text="Bekijk Line-up">Bekijk Line-up</span>
              <div className="absolute inset-0 rounded-lg box-glow-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
