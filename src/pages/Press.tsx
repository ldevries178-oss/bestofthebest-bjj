import PageLayout from '../components/PageLayout';
import { useLang } from '../LangContext';

export default function Press() {
  const { t } = useLang();
  
  return (
    <PageLayout title={t('footerPress') || "Press & Mediakit"}>
      <div className="prose prose-invert max-w-none space-y-8 text-sm md:text-base leading-relaxed text-center">
        <p className="max-w-xl mx-auto italic text-lg opacity-80 mb-10">
          {t('press_quote')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-synth-blue transition-all">
            <h3 className="font-orbitron text-synth-blue text-sm mb-4 neon-text-blue-subtle">{t('press_kit_title')}</h3>
            <p className="text-xs opacity-60">{t('press_kit_text')}</p>
            <button className="mt-6 text-xs font-orbitron text-white underline hover:text-synth-blue">{t('press_kit_btn')}</button>
          </div>
          <div className="p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-synth-pink transition-all">
            <h3 className="font-orbitron text-synth-pink text-sm mb-4 neon-text-pink-subtle">{t('press_release_title')}</h3>
            <p className="text-xs opacity-60">{t('press_release_text')}</p>
            <button className="mt-6 text-xs font-orbitron text-white underline hover:text-synth-pink">{t('press_release_btn')}</button>
          </div>
        </div>
        <p className="mt-12 opacity-60">{t('press_inquiries')}</p>
      </div>
    </PageLayout>
  );
}
