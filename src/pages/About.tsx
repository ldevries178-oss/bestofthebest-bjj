import PageLayout from '../components/PageLayout';
import { useLang } from '../LangContext';

export default function About() {
  const { t } = useLang();
  
  return (
    <PageLayout title={t('footerAbout') || "About Us"}>
      <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base leading-relaxed opacity-90">
        <p>
          {t('about_p1')}
        </p>
        <div className="border-l-4 border-synth-pink pl-6 py-4 my-10 bg-synth-pink/5">
          <p className="font-orbitron italic text-lg text-synth-pink">
            {t('about_quote')}
          </p>
        </div>
        <p>
          {t('about_p2')}
        </p>
        <p>{t('about_location')}</p>
      </div>
    </PageLayout>
  );
}
