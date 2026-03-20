import { useLang } from "../LangContext";

export default function HomePage() {
  const { t } = useLang();

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-start min-h-screen font-orbitron overflow-x-hidden text-white">
      {/* Background Image filling the screen */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      ></div>
      <div className="scanlines pointer-events-none"></div>

      {/* BEGIN: MainHeader Nav */}
      <header className="relative z-10 w-full px-8 py-6 flex justify-start md:justify-center items-center" data-purpose="top-navigation">
        <nav className="flex items-center space-x-8 text-sm tracking-widest uppercase">
          <div className="hidden md:flex space-x-6 text-synthPink">
            <a className="nav-3d-effect hover:text-synthBlue transition-colors font-orbitron" href="#">Home</a>
            <a className="nav-3d-effect hover:text-synthBlue transition-colors font-orbitron" href="#">About</a>
            <a className="nav-3d-effect hover:text-synthBlue transition-colors font-orbitron" href="#">Tickets</a>
            <a className="nav-3d-effect hover:text-synthBlue transition-colors font-orbitron" href="#">Line-up</a>
            <a className="nav-3d-effect hover:text-synthBlue transition-colors font-orbitron" href="#">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main Content Areas */}
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-4 w-full pt-12 pb-8 md:pt-16 md:pb-12 text-center h-full">
        
        {/* Top Text */}
        <div className="mb-4 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-orbitron font-medium text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] tracking-wide leading-relaxed">
            {t('slogan')}
          </h2>
        </div>

        {/* Chrome Title: BEST OF THE BEST */}
        <div className="flex flex-row items-center justify-center relative z-20 w-full mb-[-1rem] md:mb-[-2rem]">
          <span className="chrome-text text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-widest leading-none">BEST</span>
          <div className="flex flex-col items-center justify-center mx-2 md:mx-6 mt-[-3rem] md:mt-[-5rem]">
            <span className="text-white font-bold text-lg md:text-2xl lg:text-4xl neon-text-blue whitespace-nowrap tracking-wider">OF THE</span>
          </div>
          <span className="chrome-text text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-widest leading-none">BEST</span>
        </div>

        {/* Cursive Subtitle: BJJ Edition */}
        <div className="z-30 mt-[-2rem] md:mt-[-4rem] mb-12 md:mb-20">
          <h1 className="font-cursive text-6xl md:text-8xl lg:text-9xl text-white neon-text-pink rotate-[-3deg]">
            BJJ Edition
          </h1>
        </div>

        {/* Buttons separated */}
        <div className="flex flex-col gap-6 z-40 w-full max-w-lg px-4 mt-4">
          <a href="#smoothcomp" className="w-full image-btn font-bold py-5 px-8 uppercase tracking-widest text-lg md:text-base text-center font-orbitron">
            {t('smoothcompCta')}
          </a>
          <a href="#teams" className="w-full image-btn font-bold py-5 px-8 uppercase tracking-widest text-lg md:text-base text-center font-orbitron">
            {t('teamsAdmissions')}
          </a>
        </div>
      </main>

      {/* Footer Links */}
      <footer className="relative z-10 w-full text-center pb-8 pt-4 text-synthBlue text-sm md:text-base font-semibold tracking-widest drop-shadow-[0_0_5px_#00ffff]">
        <a href="#tos" className="hover:text-white transition-colors mr-8">{t('tos')}</a>
        <a href="#privacy" className="hover:text-white transition-colors">{t('privacy')}</a>
      </footer>

    </div>
  );
}
