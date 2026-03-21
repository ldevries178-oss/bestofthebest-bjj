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

      {/* Stitch Background Elements */}
      <div className="absolute inset-0 hero-overlay z-[0]"></div>
      <div className="scanlines z-[1]"></div>
      <div className="grid-bg z-[0]"></div>

      {/* Main Content Container (Centered over video) */}
      <main className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4 text-center mt-[-5vh]">
        
        {/* Slogan */}
        <div className="mb-2 z-20">
          <h2 className="font-cursive text-base md:text-lg neon-text-pink text-center px-4 tracking-wider">
            VOOR DE BESTE EUROPESE TEAMS DIE TEGEN ELKAAR STRIJDEN
          </h2>
        </div>

        {/* Main Logo */}
        <div className="w-full flex justify-center z-20 mb-6">
          <img 
            src="/hero-logog.png.png" 
            alt="Best Of Best BJJ Edition Logo" 
            className="relative z-10 w-full max-w-[400px] md:max-w-[500px] h-auto drop-shadow-[0_0_30px_rgba(255,0,255,0.4)]" 
          />
        </div>

        {/* Actieknoppen strak onder elkaar */}
        <div className="flex flex-col items-center justify-center w-full max-w-[320px] px-4 z-20 gap-3">
          <a 
            href="#smoothcomp" 
            className="neon-button flex items-center justify-center w-full py-3 bg-transparent border-2 border-[#ff00ff] text-white font-orbitron font-bold text-sm md:text-base uppercase tracking-wider rounded-lg hover:bg-[#ff00ff]/20"
          >
            {t('smoothcompCta') || "Schrijf je in via Smoothcomp"}
          </a>
          <a 
            href="#teams" 
            className="neon-button flex items-center justify-center w-full py-3 bg-transparent border-2 border-[#ff00ff] text-white font-orbitron font-bold text-sm md:text-base uppercase tracking-wider rounded-lg hover:bg-[#ff00ff]/20"
          >
            {t('teamsAdmissions') || "Teams admissions"}
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full z-10 flex justify-center items-center gap-4 p-6 text-sm text-[var(--color-synth-blue)] font-medium font-orbitron">
        <a className="hover:text-white transition-colors" href="#">{t('tos') || "Terms of Service"}</a>
        <span className="text-white/50">|</span>
        <a className="hover:text-white transition-colors" href="#">{t('privacy') || "Privacy Policy"}</a>
      </footer>
    </div>
  );
}
