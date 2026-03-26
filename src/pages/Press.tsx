import PageLayout from '../components/PageLayout';
import { useLang } from '../LangContext';

export default function Press() {
  const { t } = useLang();
  
  return (
    <PageLayout title={t('footerPress') || "Press & Mediakit"}>
      <div className="prose prose-invert max-w-none space-y-8 text-sm md:text-base leading-relaxed text-center">
        <p className="max-w-xl mx-auto italic text-lg opacity-80 mb-10">
          "The most visually appealing grappling event in the world – A return to the 80s 
          through the eyes of a warrior."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-synth-blue transition-all">
            <h3 className="font-orbitron text-synth-blue text-sm mb-4">LOGOS & COLOR PALETTE</h3>
            <p className="text-xs opacity-60">High-res PNG & SVG files including neon effects.</p>
            <button className="mt-6 text-xs font-orbitron text-white underline hover:text-synth-blue">DOWNLOAD KIT (ZIP)</button>
          </div>
          <div className="p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-synth-pink transition-all">
            <h3 className="font-orbitron text-synth-pink text-sm mb-4">OFFICIAL PRESS RELEASE</h3>
            <p className="text-xs opacity-60">Full schedule and athlete lineup announcements.</p>
            <button className="mt-6 text-xs font-orbitron text-white underline hover:text-synth-pink">DOWNLOAD PDF</button>
          </div>
        </div>
        <p className="mt-12 opacity-60">For press inquiries: info@bestofthebestbjj.com</p>
      </div>
    </PageLayout>
  );
}
