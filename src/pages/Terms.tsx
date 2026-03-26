import PageLayout from '../components/PageLayout';
import { useLang } from '../LangContext';

export default function Terms() {
  const { t } = useLang();
  
  return (
    <PageLayout title={t('tos') || "Terms & Conditions"}>
      <div className="prose prose-invert max-w-none space-y-8 text-sm md:text-base leading-relaxed opacity-70">
        <section>
          <h2 className="font-orbitron text-synth-pink text-lg mb-4">{t('terms_agreement_title')}</h2>
          <p>{t('terms_agreement_text')}</p>
        </section>
        <section>
          <h2 className="font-orbitron text-synth-pink text-lg mb-4">{t('terms_refund_title')}</h2>
          <p>{t('terms_refund_text')}</p>
        </section>
        <section>
          <h2 className="font-orbitron text-synth-pink text-lg mb-4">{t('terms_jurisdiction_title')}</h2>
          <p>{t('terms_jurisdiction_text')}</p>
        </section>
      </div>
    </PageLayout>
  );
}
