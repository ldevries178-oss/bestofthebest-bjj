import { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronDown, Ticket, Mail, AlertTriangle, List } from 'lucide-react';
import { useLang } from '../LangContext';
import type { TranslationKey } from '../i18n';
import { WEEZTIX_URL, CONTACT_EMAIL } from './AndreGalvaoPage';

// Number of Q&A items in each of the 12 FAQ sections, matching the
// faq_s{n}_q{m}/faq_s{n}_a{m} keys laid out in i18n.ts.
const SECTION_ITEM_COUNTS = [6, 4, 3, 6, 6, 5, 8, 4, 7, 6, 3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

// This project has no @types/react installed, so the JSX namespace never
// declares the usual `key` exclusion for component props — `key?` has to be
// spelled out on any locally-typed component that gets rendered from a .map().
function TicketLinkButton({ label }: { label: string; key?: string | number }) {
  return (
    <a
      href={WEEZTIX_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-synth-blue/50 bg-synth-blue/10 px-4 py-2 font-orbitron text-xs font-bold tracking-wider uppercase text-synth-blue transition-colors hover:bg-synth-blue/20"
    >
      <Ticket className="w-4 h-4" />
      {label}
    </a>
  );
}

function EmailLink() {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="inline-flex items-center gap-2 font-sans font-semibold text-white/80 underline decoration-white/20 underline-offset-4 hover:text-synth-pink hover:decoration-synth-pink/50 transition-colors"
    >
      <Mail className="w-4 h-4" />
      {CONTACT_EMAIL}
    </a>
  );
}

// Answer bodies come from i18n.ts as plain strings: paragraphs are
// separated by blank lines, a block whose lines all start with "• " renders
// as a bullet list, and the special tokens below swap in live components
// instead of dead text so the ticket link / email stay a single source of truth.
function AnswerBody({ text, ticketShopLabel }: { text: string; ticketShopLabel: string }) {
  const blocks = text.split('\n\n');

  return (
    <div className="space-y-3">
      {blocks.map((block, i) => {
        if (block === '{ticketLink}') {
          return <TicketLinkButton key={i} label={ticketShopLabel} />;
        }
        if (block === '{email}') {
          return <EmailLink key={i} />;
        }

        const lines = block.split('\n');
        const isList = lines.length > 0 && lines.every((line) => line.startsWith('• '));

        if (isList) {
          return (
            <ul key={i} className="space-y-1.5">
              {lines.map((line, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm md:text-base text-white/75">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-synth-pink flex-shrink-0" />
                  {line.replace(/^•\s*/, '')}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="text-sm md:text-base leading-relaxed text-white/75">
            {block}
          </p>
        );
      })}
    </div>
  );
}

function AccordionItem({
  q,
  a,
  ticketShopLabel,
}: {
  q: string;
  a: string;
  ticketShopLabel: string;
  key?: string | number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
      >
        <span className="font-sans font-semibold text-sm md:text-base text-white/90">{q}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-synth-blue transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-4">
          <AnswerBody text={a} ticketShopLabel={ticketShopLabel} />
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const { t } = useLang();
  // Dynamic per-section/per-item keys (faq_s{n}_title / faq_s{n}_q{m} /
  // faq_s{n}_a{m}) can't be spelled out as a literal union, so the bounded
  // template-string keys built from SECTION_ITEM_COUNTS are cast to
  // TranslationKey — every key they can produce is defined in i18n.ts.
  const tk = (key: string) => t(key as TranslationKey);

  const ticketShopLabel = tk('faq_ticket_shop_label');

  const packageRows = [
    {
      name: tk('faq_package_tribune_name'),
      attend: tk('faq_package_tribune_attend'),
      groupPhoto: tk('faq_package_tribune_group'),
      onetoone: tk('faq_package_tribune_onetoone'),
    },
    {
      name: tk('faq_package_seminar_name'),
      attend: tk('faq_package_seminar_attend'),
      groupPhoto: tk('faq_package_seminar_group'),
      onetoone: tk('faq_package_seminar_onetoone'),
    },
    {
      name: tk('faq_package_masterclass_name'),
      attend: tk('faq_package_masterclass_attend'),
      groupPhoto: tk('faq_package_masterclass_group'),
      onetoone: tk('faq_package_masterclass_onetoone'),
    },
  ];

  const sections = SECTION_ITEM_COUNTS.map((count, si) => {
    const n = si + 1;
    return {
      title: tk(`faq_s${n}_title`),
      items: Array.from({ length: count }, (_, qi) => {
        const m = qi + 1;
        return { q: tk(`faq_s${n}_q${m}`), a: tk(`faq_s${n}_a${m}`) };
      }),
    };
  });

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white relative overflow-x-hidden font-sans">
      <Helmet>
        <title>{tk('faq_meta_title')}</title>
        <meta name="description" content={tk('faq_meta_description')} />
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
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          }}
        ></div>
      </div>

      <main className="relative z-10 w-full max-w-4xl mx-auto px-4 pt-28 pb-24 md:pt-36 md:pb-32">
        <Link
          to="/andregalvao"
          className="mb-8 group inline-flex items-center gap-2 text-synth-blue hover:text-synth-pink transition-colors font-orbitron text-sm"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {tk('faq_back_to_event')}
        </Link>

        {/* Header */}
        <motion.div {...fadeUp} className="mb-10 text-center md:text-left">
          <p className="font-sans font-semibold text-xs tracking-[0.2em] uppercase text-synth-pink mb-3">
            {tk('faq_kicker')}
          </p>
          <h1 className="font-orbitron font-black text-3xl md:text-5xl leading-tight mb-4 neon-text-blue">
            {tk('faq_title')}
          </h1>
          <p className="text-sm md:text-base text-white/50 tracking-wide uppercase mb-6">
            {tk('faq_subtitle')}
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <TicketLinkButton label={ticketShopLabel} />
            <EmailLink />
          </div>
        </motion.div>

        {/* Important box */}
        <motion.div
          {...fadeUp}
          className="mb-10 rounded-xl border border-synth-pink/40 bg-synth-pink/5 p-6 shadow-[0_0_25px_rgba(255,0,255,0.08)]"
        >
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-synth-pink" />
            <h2 className="font-orbitron font-bold text-sm tracking-widest text-synth-pink">
              {tk('faq_important_label')}
            </h2>
          </div>
          <ul className="space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-white/80">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-synth-pink flex-shrink-0" />
                {tk(`faq_important_${i}`)}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contents */}
        <motion.div {...fadeUp} className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <List className="w-5 h-5 text-synth-blue" />
            <h2 className="font-orbitron font-bold text-lg md:text-xl neon-text-blue-subtle">
              {tk('faq_toc_title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 rounded-xl border border-white/10 bg-[#1a1a2e]/40 p-6">
            {sections.map((section, i) => (
              <a
                key={section.title}
                href={`#faq-section-${i + 1}`}
                className="text-sm md:text-base text-white/70 hover:text-synth-pink transition-colors"
              >
                {i + 1}. {section.title}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick Package Overview */}
        <motion.div {...fadeUp} className="mb-12">
          <h2 className="font-orbitron font-bold text-lg md:text-xl mb-4 neon-text-blue-subtle">
            {tk('faq_package_overview_title')}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-synth-blue/30 bg-[#1a1a2e]/60">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-synth-blue/30">
                  {[
                    tk('faq_package_header_package'),
                    tk('faq_package_header_attend'),
                    tk('faq_package_header_group_photo'),
                    tk('faq_package_header_onetoone'),
                  ].map((h) => (
                    <th
                      key={h}
                      className="font-orbitron text-[10px] md:text-xs tracking-widest uppercase text-synth-blue px-4 py-3 whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {packageRows.map((row) => (
                  <tr key={row.name} className="border-b border-white/10 last:border-b-0">
                    <td className="px-4 py-3 font-orbitron font-bold text-sm text-white">{row.name}</td>
                    <td className="px-4 py-3 text-sm text-white/70">{row.attend}</td>
                    <td className="px-4 py-3 text-sm text-white/70">{row.groupPhoto}</td>
                    <td className="px-4 py-3 text-sm text-white/70">{row.onetoone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <motion.section
              key={section.title}
              id={`faq-section-${i + 1}`}
              {...fadeUp}
              className="scroll-mt-24"
            >
              <h2 className="font-orbitron font-bold text-lg md:text-xl mb-2 text-synth-blue">
                {i + 1}. {section.title}
              </h2>
              <div className="rounded-xl border border-white/10 bg-[#1a1a2e]/40 px-5 md:px-6">
                {section.items.map((item) => (
                  <AccordionItem key={item.q} q={item.q} a={item.a} ticketShopLabel={ticketShopLabel} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Footer contact callout */}
        <motion.div {...fadeUp} className="mt-16 text-center">
          <h2 className="font-orbitron font-bold text-lg md:text-xl mb-4 neon-text-pink">
            {tk('faq_questions_label')}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <EmailLink />
            <TicketLinkButton label={ticketShopLabel} />
          </div>
        </motion.div>
      </main>
    </div>
  );
}
