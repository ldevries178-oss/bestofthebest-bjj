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
      <main className="relative z-10 flex flex-col items-center justify-center gap-5 md:gap-8 w-full h-full max-h-[950px] max-w-3xl px-4 text-center py-6 md:py-12">
        
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
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-4 w-full max-w-[800px] px-2 sm:px-4 z-20 mt-2">
          <a href="#toernooi" className="neon-button-ref col-span-2 md:col-span-1 flex items-center justify-center w-full h-auto py-3 font-orbitron font-semibold text-[11px] sm:text-xs xl:text-sm tracking-wider md:tracking-widest rounded-lg whitespace-normal px-2 sm:px-6 text-center">
            {t('navTournament') || "The Tournament March 21, 2027"}
          </a>
          <a href="#smoothcomp" className="neon-button-ref col-span-2 md:col-span-1 flex items-center justify-center w-full h-auto py-3 font-orbitron font-semibold text-[11px] sm:text-xs xl:text-sm tracking-wider md:tracking-widest rounded-lg whitespace-normal px-2 sm:px-6 text-center">
            {t('smoothcompCta') || "Athletes sign up via Smoothcomp"}
          </a>
          <a href="#teams" className="neon-button-ref col-span-1 flex items-center justify-center w-full h-auto py-3 font-orbitron font-semibold text-[10px] sm:text-xs xl:text-sm tracking-wider md:tracking-widest rounded-lg whitespace-normal px-1 sm:px-6 text-center">
            {t('teamsAdmissions') || "Team Admissions"}
          </a>
          <a href="#sponsors" className="neon-button-ref col-span-1 flex items-center justify-center w-full h-auto py-3 font-orbitron font-semibold text-[10px] sm:text-xs xl:text-sm tracking-wider md:tracking-widest rounded-lg whitespace-normal px-1 sm:px-6 text-center">
            {t('navSponsors') || "Sponsors"}
          </a>
          <a href="#contact" className="neon-button-ref col-span-2 md:col-span-2 md:justify-self-center flex items-center justify-center w-full md:w-[380px] h-auto py-3 font-orbitron font-semibold text-[11px] sm:text-xs xl:text-sm tracking-wider md:tracking-widest rounded-lg whitespace-normal px-2 sm:px-6 text-center">
            {t('navContact') || "Contact"}
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


    </div>
  );
}
