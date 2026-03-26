import PageLayout from '../components/PageLayout';
import { useLang } from '../LangContext';

export default function Privacy() {
  const { t } = useLang();
  
  return (
    <PageLayout title={t('privacy') || "Privacy Policy"}>
      <div className="prose prose-invert max-w-none space-y-8 text-sm md:text-base leading-relaxed opacity-70">
        <section>
          <h2 className="font-orbitron text-synth-pink text-lg mb-4">{t('privacy_data_title')}</h2>
          <p>{t('privacy_data_text')}</p>
        </section>
        <section>
          <h2 className="font-orbitron text-synth-pink text-lg mb-4">{t('privacy_thirdparty_title')}</h2>
          <p>{t('privacy_thirdparty_text')}</p>
        </section>
        <section>
          <h2 className="font-orbitron text-synth-pink text-lg mb-4">{t('privacy_gdpr_title')}</h2>
          <p>{t('privacy_gdpr_text')}</p>
        </section>
      </div>
    </PageLayout>
  );
}
