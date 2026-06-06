import PageLayout from '../components/PageLayout';
import { useLang } from '../LangContext';

export default function Rules() {
  const { t } = useLang();
  
  return (
    <PageLayout title={t('rules_title') || "RULES"}>
      <div className="prose prose-invert max-w-none space-y-8 text-sm md:text-base leading-relaxed opacity-70">
        <section>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>{t('rules_content_1')}</li>
            <li>{t('rules_content_2')}</li>
            <li>{t('rules_content_3')}</li>
          </ul>
          <p className="italic text-white/80">
            {t('rules_subtext')}
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
