import PageLayout from '../components/PageLayout';
import { useLang } from '../LangContext';

export default function Terms() {
  const { t } = useLang();
  
  return (
    <PageLayout title={t('tos') || "Terms & Conditions"}>
      <div className="prose prose-invert max-w-none space-y-8 text-sm md:text-base leading-relaxed opacity-70">
        <section>
          <h2 className="font-orbitron text-synth-pink text-lg mb-4">Agreement</h2>
          <p>By using this website, you agree to comply with our terms of service. Best of the Best BJJ 
            is a Belgian organization in the heart of Brussels. All events are subject to safety protocols 
            and athlete codes of conduct.
          </p>
        </section>
        <section>
          <h2 className="font-orbitron text-synth-pink text-lg mb-4">Refund Policy</h2>
          <p>Tickets are generally non-refundable unless the event is cancelled or rescheduled. 
            Athlete registrations follow specific team guidelines.
          </p>
        </section>
        <section>
          <h2 className="font-orbitron text-synth-pink text-lg mb-4">Jurisdiction</h2>
          <p>This agreement is governed by the laws of Belgium.</p>
        </section>
      </div>
    </PageLayout>
  );
}
