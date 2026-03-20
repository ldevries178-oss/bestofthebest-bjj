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

        {/* Transparent Hero Logo */}
        <div className="z-30 w-full flex justify-center mt-[-2rem] mb-8 md:mb-12">
          <img 
            src="/hero-logo.png" 
            alt="Best of the Best - BJJ Edition" 
            className="w-[90vw] max-w-[800px] h-auto object-contain bg-transparent"
            style={{ filter: "drop-shadow(0 0 20px rgba(255, 0, 255, 0.4))" }}
          />
        </div>

        {/* Buttons stacked tight (strak onder elkaar) */}
        <div className="flex flex-col gap-0 z-40 w-full max-w-lg px-4 mt-4 drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">
          <a href="#smoothcomp" className="w-full image-btn font-bold py-5 px-8 uppercase tracking-widest text-lg md:text-base text-center font-orbitron !rounded-b-none border-b-0 hover:z-10">
            {t('smoothcompCta')}
          </a>
          <a href="#teams" className="w-full image-btn font-bold py-5 px-8 uppercase tracking-widest text-lg md:text-base text-center font-orbitron !rounded-t-none hover:z-10">
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
