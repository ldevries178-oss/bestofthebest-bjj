import PageLayout from '../components/PageLayout';
import { useLang } from '../LangContext';

export default function About() {
  const { t } = useLang();
  
  return (
    <PageLayout title={t('footerAbout') || "About Us"}>
      <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base leading-relaxed opacity-90">
        <p>
          {t('about_intro1')}
        </p>
        <p>
          {t('about_intro2')}
        </p>

        <div className="border-l-4 border-synth-pink pl-6 py-4 my-10 bg-synth-pink/5">
          <h2 className="font-orbitron text-xl text-synth-pink mb-2">{t('about_mission_title')}</h2>
          <p className="italic text-lg">
            {t('about_mission_text')}
          </p>
        </div>

        <h2 className="font-orbitron text-xl text-synth-blue mt-8 mb-4">{t('about_vision_title')}</h2>
        <p>
          {t('about_vision_text')}
        </p>

        <h2 className="font-orbitron text-xl text-synth-blue mt-8 mb-4">{t('about_core_values_title')}</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>{t('about_core_values_1')}</li>
          <li>{t('about_core_values_2')}</li>
          <li>{t('about_core_values_3')}</li>
          <li>{t('about_core_values_4')}</li>
          <li>{t('about_core_values_5')}</li>
          <li>{t('about_core_values_6')}</li>
          <li>{t('about_core_values_7')}</li>
          <li>{t('about_core_values_8')}</li>
        </ul>

        <h2 className="font-orbitron text-xl text-synth-blue mt-8 mb-4">{t('about_strive_title')}</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>{t('about_strive_1')}</li>
          <li>{t('about_strive_2')}</li>
          <li>{t('about_strive_3')}</li>
          <li>{t('about_strive_4')}</li>
          <li>{t('about_strive_5')}</li>
        </ul>

        <p className="mt-8">
          {t('about_outro1')}
        </p>
        <p>
          {t('about_outro2')}
        </p>
      </div>
    </PageLayout>
  );
}
