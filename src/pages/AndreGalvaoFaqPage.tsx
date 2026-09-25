import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLang } from '../LangContext';

// Placeholder Q&A — replace with the client's FAQ document once delivered.
const faqs: { question: string; answer: string }[] = [
  {
    question: 'When and where does the seminar take place?',
    answer: '28 November 2026 at Topsportcentrum Almere.',
  },
  {
    question: 'How do I get tickets?',
    answer: 'Tickets are sold via Weeztix. Use the "Get Tickets" button on the event page to go to the ticket shop.',
  },
  {
    question: 'What does the seminar include?',
    answer: 'A one-hour main No-Gi seminar with André Galvão, plus an exclusive Masters Session with limited spots in a closed small-group setting.',
  },
  {
    question: 'Who can I contact with other questions?',
    answer: 'For press, partnership, or other questions, email info@bestofthebestbjj.com.',
  },
];

export default function AndreGalvaoFaqPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white relative overflow-x-hidden font-sans">
      <Helmet>
        <title>{`FAQ — André Galvão x Best of the Best BJJ`}</title>
        <meta
          name="description"
          content="Frequently asked questions about the André Galvão seminar hosted by Best of the Best BJJ."
        />
        <link rel="canonical" href="https://bestofthebestbjj.com/andregalvao/faq" />
      </Helmet>

      {/* Static Retro Grid (matches site-wide background) */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00ffff 1px, transparent 1px),
              linear-gradient(to bottom, #00ffff 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage:
              'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          }}
        ></div>
      </div>

      <main className="relative z-10 w-full max-w-2xl mx-auto px-4 pt-28 pb-20 md:pt-36 md:pb-28">
        <Link
          to="/andregalvao"
          className="mb-10 group flex items-center gap-2 text-synth-blue hover:text-synth-pink transition-colors font-orbitron text-xs md:text-sm w-fit"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {t('galvao_title')}
        </Link>

        <h1 className="font-orbitron font-bold text-3xl md:text-4xl mb-10 tracking-tight neon-text-blue">
          {t('galvao_cta_faq')}
        </h1>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 open:bg-white/[0.05] transition-colors"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-sans font-semibold text-sm md:text-base text-white">
                {faq.question}
                <svg
                  className="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-45 text-synth-pink"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-white/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </main>

      <footer className="relative z-10 w-full py-6 border-t border-white/10 flex flex-col items-center gap-4">
        <p className="font-sans text-[10px] text-white/30">{t('copyright')}</p>
      </footer>
    </div>
  );
}
