import PageLayout from '../components/PageLayout';
import { useLang } from '../LangContext';

export default function Tournament() {
  const { t } = useLang();
  
  return (
    <PageLayout title={t('navTournament') || "The Tournament"}>
      <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          March 21, 2027 – Save the date. Best of the Best BJJ Edition returns for the most prestigious 
          grappling event of the year. A retro-futuristic stage where the finest athletes collide in 
          a high-stakes synthwave atmosphere.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 rounded-xl bg-synth-blue/5 border border-synth-blue/20">
            <h3 className="font-orbitron text-synth-blue text-lg mb-4">Venue</h3>
            <p>Brussels, Belgium<br/>Premium Arena<br/>The Heart of Europe</p>
          </div>
          <div className="p-6 rounded-xl bg-synth-pink/5 border border-synth-pink/20">
            <h3 className="font-orbitron text-synth-pink text-lg mb-4">Format</h3>
            <p>EBI Overtime Rules<br/>Submission Only<br/>Invite & Qualifiers Only</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
