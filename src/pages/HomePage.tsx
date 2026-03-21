import { useLang } from "../LangContext";

export default function HomePage() {
  const { lang, setLang, t } = useLang();

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
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
          <h2 className="font-cursive text-2xl md:text-4xl lg:text-5xl neon-text-pink text-center px-4 leading-tight">
            VOOR DE BESTE EUROPESE TEAMS DIE TEGEN ELKAAR STRIJDEN
          </h2>
        </div>

        {/* Main Logo */}
        <div className="w-full flex justify-center z-20 mb-8">
          <img 
            src="/hero-logog.png.png" 
            alt="Best Of Best BJJ Edition Logo" 
            className="relative z-10 w-full max-w-[800px] h-auto drop-shadow-[0_0_50px_rgba(255,0,255,0.4)]" 
          />
        </div>

        {/* Actieknoppen strak onder elkaar */}
        <div className="flex flex-col items-center justify-center w-full max-w-[400px] px-4 z-20 gap-4">
          <a 
            href="#smoothcomp" 
            className="neon-button flex items-center justify-center w-full py-4 bg-transparent border-2 border-[#ff00ff] text-white font-orbitron font-bold text-lg md:text-xl uppercase tracking-wider rounded-lg hover:bg-[#ff00ff]/20"
          >
            {t('smoothcompCta') || "Schrijf je in via Smoothcomp"}
          </a>
          <a 
            href="#teams" 
            className="neon-button flex items-center justify-center w-full py-4 bg-transparent border-2 border-[#ff00ff] text-white font-orbitron font-bold text-lg md:text-xl uppercase tracking-wider rounded-lg hover:bg-[#ff00ff]/20"
          >
            {t('teamsAdmissions') || "Teams admissions"}
          </a>
        </div>

        {/* Taalselectie in het midden */}
        <div className="flex items-center justify-center space-x-4 font-bold mt-10 z-20 font-orbitron text-xl">
          <span 
            onClick={() => setLang('nl')}
            className={`nav-3d-effect cursor-pointer transition-opacity ${lang === 'nl' ? 'text-synthBlue opacity-100' : 'text-synthPink opacity-80 hover:opacity-100 hover:text-synthBlue'}`}
          >
            NL
          </span>
          <span className="text-white/50">|</span>
          <span 
            onClick={() => setLang('fr')}
            className={`nav-3d-effect cursor-pointer transition-opacity ${lang === 'fr' ? 'text-synthBlue opacity-100' : 'text-synthPink opacity-80 hover:opacity-100 hover:text-synthBlue'}`}
          >
            FR
          </span>
          <span className="text-white/50">|</span>
          <span 
            onClick={() => setLang('de')}
            className={`nav-3d-effect cursor-pointer transition-opacity ${lang === 'de' ? 'text-synthBlue opacity-100' : 'text-synthPink opacity-80 hover:opacity-100 hover:text-synthBlue'}`}
          >
            DE
          </span>
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
