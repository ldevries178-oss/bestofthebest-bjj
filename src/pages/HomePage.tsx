import { useLang } from "../LangContext";

export default function HomePage() {
  const { t } = useLang();

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-start min-h-screen font-orbitron overflow-x-hidden text-white">
      {/* BEGIN: Background Elements */}
      <div className="scanlines pointer-events-none"></div>
      <div className="fixed inset-0 hero-overlay z-0 pointer-events-none"></div>
      <div className="grid-bg pointer-events-none"></div>
      {/* END: Background Elements */}

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

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-4 w-full -mt-20 md:-mt-10" data-purpose="hero-content">
        {/* Slogan */}
        <div className="mb-[-3rem] md:mb-[-5rem] lg:mb-[-6rem] z-20">
          <h2 className="font-cursive text-3xl md:text-5xl lg:text-6xl neon-text-pink text-center px-4 leading-tight">
            {t('slogan')}
          </h2>
        </div>
        
        {/* Main Logo */}
        <div className="w-full max-w-4xl flex justify-center z-10">
          <img 
            alt="Best Of Best BJJ Edition Logo" 
            className="w-full h-auto drop-shadow-[0_0_50px_rgba(255,0,255,0.4)] bg-transparent" 
            data-purpose="hero-logo" 
            src="/hero-logo.png" 
          />
        </div>

        {/* Action Buttons tightly directly under each other */}
        <div className="flex flex-col z-20 w-full max-w-sm px-4 mt-6">
          <a href="#smoothcomp" className="w-full neon-button bg-synthDark border-2 border-synthBlue text-synthBlue font-bold py-4 px-8 rounded-t-sm uppercase tracking-wider text-sm md:text-base text-center hover:bg-synthBlue hover:text-synthDark font-orbitron transition-all">
            {t('smoothcompCta')}
          </a>
          <a href="#teams" className="w-full neon-button bg-synthPurple border-2 border-t-0 border-synthPink text-synthPink font-bold py-4 px-8 rounded-b-sm uppercase tracking-wider text-sm md:text-base text-center hover:bg-synthPink hover:text-white font-orbitron transition-all">
            {t('teamsAdmissions')}
          </a>
        </div>
      </main>

    </div>
  );
}
