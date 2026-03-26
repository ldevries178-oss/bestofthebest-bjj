import PageLayout from '../components/PageLayout';
import { useLang } from '../LangContext';

export default function Privacy() {
  const { t } = useLang();
  
  return (
    <PageLayout title={t('privacy') || "Privacy Policy"}>
      <div className="prose prose-invert max-w-none space-y-8 text-sm md:text-base leading-relaxed opacity-70">
        <section>
          <h2 className="font-orbitron text-synth-pink text-lg mb-4">Data Collection</h2>
          <p>We only collect data necessary for event registrations and newsletter updates. 
            This typically includes names, emails, and belt ranks for athletes.
          </p>
        </section>
        <section>
          <h2 className="font-orbitron text-synth-pink text-lg mb-4">Third-Party Tools</h2>
          <p>We use Smoothcomp for athlete management. Their privacy policies apply to 
            registrations made on their platform.
          </p>
        </section>
        <section>
          <h2 className="font-orbitron text-synth-pink text-lg mb-4">GDPR Compliance</h2>
          <p>We respect your privacy under the GDPR (General Data Protection Regulation). 
            You have the right to request deletion of your data at any time.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
