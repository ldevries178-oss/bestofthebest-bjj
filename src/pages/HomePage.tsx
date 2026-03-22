import { useLang } from "../LangContext";

export default function HomePage() {
  const { lang, setLang, t } = useLang();

  return (
    <div className="h-[100dvh] w-full text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Fullscreen Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="object-cover inset-0 fixed z-[-1] w-full h-full"
        src="/achtergrond.mp4"
      ></video>

      {/* Main Content Container (Centered over video) */}
      <main className="relative z-10 flex flex-col items-center justify-center gap-8 w-full h-full max-h-[950px] max-w-3xl px-4 text-center py-8 md:py-12">
        
        {/* Main Slogan */}
        <div className="z-20">
          <h1 className="font-orbitron font-semibold text-xl md:text-2xl xl:text-3xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] text-center px-4 tracking-wide leading-snug">
            {t('slogan') || "The Ultimate Grappling Championship."}
          </h1>
        </div>

        {/* Transparent Hero Logo */}
        <div className="z-20 w-full flex justify-center">
          <img 
            src="/hero-logo.png" 
            alt="Best Of The Best - BJJ Edition" 
            className="w-[85vw] md:w-[80vw] max-w-[650px] h-auto object-contain bg-transparent"
            style={{ 
              filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.7)) drop-shadow(0 0 20px rgba(255, 0, 255, 0.4)) brightness(1.1)'
            }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center w-full max-w-[420px] px-4 z-20 gap-3">
          <a 
            href="#smoothcomp" 
            className="neon-button-ref flex items-center justify-center w-full h-[48px] md:h-[52px] font-orbitron font-semibold text-sm md:text-base tracking-wider rounded-lg whitespace-nowrap px-6"
          >
            {t('smoothcompCta') || "Athletes Sign up via Smoothcomp"}
          </a>
          <a 
            href="#teams" 
            className="neon-button-ref flex items-center justify-center w-full h-[48px] md:h-[52px] font-orbitron font-semibold text-sm md:text-base tracking-wider rounded-lg whitespace-nowrap px-6"
          >
            {t('teamsAdmissions') || "Teams admissions"}
          </a>
        </div>

        {/* Footer Links */}
        <footer className="w-full flex flex-wrap justify-center gap-6 md:gap-10 mt-8 text-white text-xs md:text-sm font-semibold tracking-widest z-20 font-orbitron">
          <a href="#about" className="footer-link-neon">About us</a>
          <a href="#tos" className="footer-link-neon">Terms & Conditions</a>
          <a href="#privacy" className="footer-link-neon">Privacy Policy</a>
          <a href="#press" className="footer-link-neon">Press & Mediakit</a>
        </footer>
      </main>

      {/* Right Side Vertical Navigation */}
      <nav className="fixed right-0 top-1/2 -translate-y-1/2 p-4 md:p-8 z-50 flex flex-col gap-4 md:gap-6 text-right items-end pointer-events-none">
        <a href="#toernooi" className="pointer-events-auto font-orbitron font-semibold text-xs md:text-sm tracking-widest nav-link-vert uppercase">
          1. Het toernooi 21 maart 2027
        </a>
        <a href="#smoothcomp" className="pointer-events-auto font-orbitron font-semibold text-xs md:text-sm tracking-widest nav-link-vert uppercase">
          2. Athleten via Smoothcomp
        </a>
        <a href="#teams" className="pointer-events-auto font-orbitron font-semibold text-xs md:text-sm tracking-widest nav-link-vert uppercase">
          3. Team Admissions
        </a>
        <a href="#sponsors" className="pointer-events-auto font-orbitron font-semibold text-xs md:text-sm tracking-widest nav-link-vert uppercase">
          4. Sponsors
        </a>
        <a href="#contact" className="pointer-events-auto font-orbitron font-semibold text-xs md:text-sm tracking-widest nav-link-vert uppercase">
          5. Contact
        </a>
      </nav>
    </div>
  );
}
