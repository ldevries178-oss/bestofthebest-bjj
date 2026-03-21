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
      <main className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl px-4 text-center gap-0">
        
        {/* Main Slogan */}
        <div className="z-20">
          <h1 className="font-orbitron font-semibold text-xl md:text-2xl xl:text-3xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] text-center px-4 tracking-wide leading-snug">
            {t('slogan') || "The Ultimate Brazilian Jiu Jitsu Championship."}
          </h1>
        </div>

        {/* Transparent Hero Logo */}
        <div className="z-20 w-full flex justify-center -mt-2">
          <img 
            src="/hero-logog.png.png" 
            alt="Best Of The Best - BJJ Edition" 
            className="w-[80vw] max-w-[650px] h-auto object-contain bg-transparent"
            style={{ filter: "drop-shadow(0 0 20px rgba(255, 0, 255, 0.4))" }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center w-full max-w-[420px] px-4 z-20 gap-1.5 -mt-2">
          <a 
            href="#smoothcomp" 
            className="neon-button-ref flex items-center justify-center w-full h-[48px] md:h-[52px] font-orbitron font-semibold text-sm md:text-base tracking-wider rounded-lg whitespace-nowrap px-6"
          >
            {t('smoothcompCta') || "Schrijf je in via Smoothcomp"}
          </a>
          <a 
            href="#teams" 
            className="neon-button-ref flex items-center justify-center w-full h-[48px] md:h-[52px] font-orbitron font-semibold text-sm md:text-base tracking-wider rounded-lg whitespace-nowrap px-6"
          >
            {t('teamsAdmissions') || "Teams admissions"}
          </a>
        </div>

        {/* Footer Links */}
        <footer className="w-full text-center pt-2 text-[#00ffff] text-sm md:text-base font-semibold tracking-widest drop-shadow-[0_0_5px_#00ffff]">
          <a href="#tos" className="hover:text-white transition-colors mr-8">{t('tos')}</a>
          <a href="#privacy" className="hover:text-white transition-colors">{t('privacy')}</a>
        </footer>
      </main>
    </div>
  );
}
