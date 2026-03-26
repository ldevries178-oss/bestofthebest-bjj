import PageLayout from '../components/PageLayout';
import { useLang } from '../LangContext';

export default function Sponsors() {
  const { t } = useLang();
  
  return (
    <PageLayout title={t('navSponsors') || "Sponsors"}>
      <div className="text-center py-12 space-y-8">
        <p className="max-w-xl mx-auto text-lg md:text-xl">
          Join the neon revolution. Partner with the most visually stunning 
          grappling event in the world. 
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 opacity-30">
          {[1,2,3,4,5,6].map(v => (
            <div key={v} className="h-24 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 font-orbitron text-xs">
              PARTNER {v}
            </div>
          ))}
        </div>
        <div className="pt-12">
          <a 
            href="mailto:info@bestofthebestbjj.com" 
            className="inline-block px-10 py-4 font-orbitron font-bold text-synth-blue border-2 border-synth-blue rounded-full shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:bg-synth-blue hover:text-black transition-all"
          >
            BECOME A SPONSOR
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
