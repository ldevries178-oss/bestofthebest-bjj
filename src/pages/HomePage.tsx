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
        <div className="flex flex-col items-center justify-center w-full max-w-[420px] px-4 z-20 gap-4 mt-2">
          <a 
            href="#smoothcomp" 
            className="neon-button-ref flex items-center justify-center w-full h-[42px] md:h-[48px] font-orbitron font-semibold text-xs md:text-sm tracking-widest rounded-lg whitespace-nowrap px-6"
          >
            {t('smoothcompCta') || "Athletes sign up via Smoothcomp"}
          </a>
          <a 
            href="#teams" 
            className="neon-button-ref flex items-center justify-center w-full h-[42px] md:h-[48px] font-orbitron font-semibold text-xs md:text-sm tracking-widest rounded-lg whitespace-nowrap px-6"
          >
            {t('teamsAdmissions') || "Team Admissions"}
          </a>
        </div>

        {/* Footer Links */}
        <footer className="w-full flex flex-wrap justify-center gap-6 md:gap-10 mt-8 text-white text-xs md:text-sm font-semibold tracking-widest z-20 font-orbitron">
          <a href="#about" className="footer-link-neon">{t('footerAbout') || "About us"}</a>
          <a href="#tos" className="footer-link-neon">{t('tos') || "Terms & Conditions"}</a>
          <a href="#privacy" className="footer-link-neon">{t('privacy') || "Privacy Policy"}</a>
          <a href="#press" className="footer-link-neon">{t('footerPress') || "Press & Mediakit"}</a>
        </footer>
      </main>

      {/* Right-Side Vertical Navigation */}
      <nav className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 md:gap-6 z-50 pointer-events-auto text-right font-orbitron text-[10px] md:text-xs xl:text-sm tracking-widest font-semibold hidden md:flex">
        <a href="#toernooi" className="nav-link-vert">{t('navTournament') || "1. The Tournament March 21, 2027"}</a>
        <a href="#smoothcomp" className="nav-link-vert">{t('navSmoothcomp') || "2. Athletes via Smoothcomp"}</a>
        <a href="#teams" className="nav-link-vert">{t('navTeams') || "3. Team Admissions"}</a>
        <a href="#sponsors" className="nav-link-vert">{t('navSponsors') || "4. Sponsors"}</a>
        <a href="#contact" className="nav-link-vert">{t('navContact') || "5. Contact"}</a>
      </nav>

    </div>
  );
}
