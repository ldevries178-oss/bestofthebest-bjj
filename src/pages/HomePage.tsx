import { useLang } from "../LangContext";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { t } = useLang();

  return (
    <div className="h-[100dvh] w-full text-white flex flex-col items-center justify-start relative overflow-hidden font-sans">
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
      <main className="relative z-10 flex flex-col items-center w-full h-full max-h-[950px] max-w-3xl px-4 text-center pt-20 pb-8 md:pt-28 md:pb-14 overflow-y-auto">

        {/* Main Slogan */}
        <div className="z-20">
          <h1 className="font-orbitron font-semibold text-lg md:text-2xl xl:text-3xl text-white/80 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] text-center px-4 tracking-wide leading-snug">
            {t('slogan') || "The Ultimate Grappling Championship."}
          </h1>
        </div>

        {/* Transparent Hero Logo */}
        <div className="z-20 w-full flex justify-center mt-6 md:mt-8">
          <img
            src="/hero-logo.png"
            alt="Best Of The Best - BJJ Edition"
            className="w-[75vw] md:w-[65vw] max-w-[560px] h-auto object-contain bg-transparent"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.7)) drop-shadow(0 0 20px rgba(255, 0, 255, 0.4)) brightness(1.1)'
            }}
          />
        </div>

        {/* Primary + Secondary CTA */}
        <div className="flex flex-col gap-3 w-full max-w-[520px] px-2 sm:px-4 z-20 mt-8 md:mt-10">
          <Link to="/andregalvao" className="neon-button-ref flex items-center justify-center w-full py-4 font-orbitron font-bold text-xs sm:text-sm xl:text-base tracking-wider rounded-lg whitespace-normal px-4 text-center">
            {t('navGalvao') || "André Galvão — November 28, 2026"}
          </Link>
          <Link to="/tournament" className="neon-button-outline flex items-center justify-center w-full py-3.5 font-orbitron font-semibold text-[11px] sm:text-xs xl:text-sm tracking-wider rounded-lg whitespace-normal px-4 text-center">
            {t('navTournament') || "The Tournament March 21, 2027"}
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[280px] h-px bg-white/10 my-3 md:my-4 z-20"></div>

        {/* Tertiary quick links */}
        <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 z-20 font-orbitron font-semibold text-[11px] sm:text-xs tracking-wider">
          <Link to="/teams" className="link-tertiary">{t('teamsAdmissions') || "Team Admissions"}</Link>
          <span className="text-white/25">•</span>
          <Link to="/sponsors" className="link-tertiary">{t('navSponsors') || "Sponsors"}</Link>
          <span className="text-white/25">•</span>
          <Link to="/contact" className="link-tertiary">{t('navContact') || "Contact"}</Link>
        </div>

        <div className="flex-grow"></div>

        {/* Footer Links */}
        <footer className="w-full max-w-[560px] border-t border-white/10 pt-4 mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-8 text-[9px] md:text-[10px] font-semibold tracking-widest z-20 font-orbitron">
          <Link to="/about" className="footer-link-muted">{t('footerAbout') || "About us"}</Link>
          <Link to="/rules" className="footer-link-muted">{t('footerRules') || "Rules"}</Link>
          <Link to="/terms" className="footer-link-muted">{t('tos') || "Terms & Conditions"}</Link>
          <Link to="/privacy" className="footer-link-muted">{t('privacy') || "Privacy Policy"}</Link>
          <Link to="/press" className="footer-link-muted">{t('footerPress') || "Press & Mediakit"}</Link>
        </footer>
      </main>


    </div>
  );
}
