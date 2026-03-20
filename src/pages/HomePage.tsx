import { useLang } from "../LangContext";

export default function HomePage() {
  const { t } = useLang();

  return (
    <div className="bg-synthwave min-h-screen text-white flex flex-col items-center justify-between relative overflow-hidden font-sans">
      {/* Overlay to darken background slightly if needed */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-grow w-full max-w-4xl px-4 text-center mt-[-5vh]">
        
        {/* Voeg transparant logo toe op de lege plek in de hero-sectie */}
        <div className="mb-0 w-full flex justify-center">
          <img 
            src="/hero-logo.png" 
            alt="Hero Logo" 
            className="w-full max-w-[800px] h-auto object-contain filter drop-shadow-[0_0_20px_#ff00ff]" 
          />
        </div>
        
        {/* Actieknoppen strak onder elkaar */}
        <div className="flex flex-col items-center justify-center gap-0 w-full max-w-[400px] px-4 mt-8 z-20">
          <a href="#smoothcomp" className="flex items-center justify-center text-center w-full md:w-[350px] py-4 bg-transparent border-2 border-[#ff00ff] text-white font-orbitron font-bold text-lg md:text-xl uppercase tracking-wider rounded-t-lg rounded-b-none shadow-[0_0_10px_#ff00ff,inset_0_0_10px_#ff00ff] hover:bg-[#ff00ff]/20 transition-all duration-300 relative z-10 border-b-0">
            {t('smoothcompCta') || "Schrijf je in via Smoothcomp"}
          </a>
          <a href="#teams" className="flex items-center justify-center text-center w-full md:w-[350px] py-4 bg-transparent border-2 border-[#ff00ff] text-white font-orbitron font-bold text-lg md:text-xl uppercase tracking-wider rounded-b-lg rounded-t-none shadow-[0_0_10px_#00ffff,inset_0_0_10px_#00ffff] hover:bg-[#00ffff]/20 transition-all duration-300 relative z-0 border-t border-[#00ffff]">
            {t('teamsAdmissions') || "Teams admissions"}
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full relative z-10 flex justify-center items-center gap-4 p-6 text-sm text-[#00ffff] font-medium">
        <a className="hover:text-white transition-colors" href="#">{t('tos') || "Terms of Service"}</a>
        <span className="text-white/50">|</span>
        <a className="hover:text-white transition-colors" href="#">{t('privacy') || "Privacy Policy"}</a>
      </footer>
    </div>
  );
}
