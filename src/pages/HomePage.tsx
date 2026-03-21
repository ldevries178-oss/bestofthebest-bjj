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
      <main className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl px-4 text-center">
        
        {/* Main Slogan */}
        <div className="mb-12 z-20">
          <h1 className="font-orbitron font-semibold text-2xl md:text-3xl xl:text-4xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] text-center px-4 tracking-wide leading-snug">
            {t('slogan') || "The Ultimate Brazilian Jiu Jitsu Championship."}
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center w-full max-w-[420px] px-4 z-20 gap-3">
          <a 
            href="#smoothcomp" 
            className="neon-button-ref flex items-center justify-center w-full h-[54px] md:h-[58px] font-orbitron font-semibold text-sm md:text-base tracking-wider rounded-lg whitespace-nowrap px-6"
          >
            {t('smoothcompCta') || "Schrijf je in via Smoothcomp"}
          </a>
          <a 
            href="#teams" 
            className="neon-button-ref flex items-center justify-center w-full h-[54px] md:h-[58px] font-orbitron font-semibold text-sm md:text-base tracking-wider rounded-lg whitespace-nowrap px-6"
          >
            {t('teamsAdmissions') || "Teams admissions"}
          </a>
        </div>
      </main>
    </div>
  );
}
