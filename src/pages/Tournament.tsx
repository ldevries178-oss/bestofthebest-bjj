import PageLayout from '../components/PageLayout';
import { useLang } from '../LangContext';

export default function Tournament() {
  const { t } = useLang();
  
  return (
    <PageLayout title={t('navTournament') || "The Tournament"}>
      <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          {t('tournament_p1')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 rounded-xl bg-synth-blue/5 border border-synth-blue/20">
            <h3 className="font-orbitron text-synth-blue text-lg mb-4">{t('tournament_venue_title')}</h3>
            <p className="whitespace-pre-line">{t('tournament_venue_text')}</p>
          </div>
          <div className="p-6 rounded-xl bg-synth-pink/5 border border-synth-pink/20">
            <h3 className="font-orbitron text-synth-pink text-lg mb-4">{t('tournament_format_title')}</h3>
            <p className="whitespace-pre-line">{t('tournament_format_text')}</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
