import { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLang } from '../LangContext';

// Ticket sales open Monday 5 October 2026 — before that date the page shows a
// "coming soon" message, from that date the Weeztix embed below is shown.
const TICKET_SALES_START = new Date('2026-10-05T00:00:00');

// Paste the Weeztix embed snippet (iframe/script markup) here once it's delivered.
// Leave empty to show a "widget is being connected" placeholder instead.
const WEEZTIX_EMBED_HTML = '';

type Partner = { name: string; logoUrl?: string; url?: string };

// Add sponsors here once logos are delivered, e.g.:
// { name: 'Sponsor Name', logoUrl: '/andregalvao/sponsors/sponsor-name.png', url: 'https://sponsor.com' }
const sponsors: Partner[] = [];

// Add media partners here once logos are delivered, same shape as `sponsors` above.
const mediaPartners: Partner[] = [];

const CONTACT_EMAIL = 'info@bestofthebestbjj.com';

function FallbackImage({
  src,
  alt,
  className,
  showLabel = true,
}: {
  src: string;
  alt: string;
  className?: string;
  showLabel?: boolean;
}) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div
        className={`${className ?? ''} bg-gradient-to-br from-synth-purple/50 via-[#0a0a0f] to-black flex items-center justify-center border border-white/10`}
      >
        {showLabel && (
          <span className="font-orbitron text-[10px] md:text-xs tracking-[0.2em] text-white/30 uppercase px-6 text-center">
            {alt}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setBroken(true)}
    />
  );
}

function PartnerGrid({ items, placeholder }: { items: Partner[]; placeholder: string }) {
  if (items.length === 0) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40">
        {[1, 2, 3, 4].map((v) => (
          <div
            key={v}
            className="h-20 bg-white/5 rounded-lg flex items-center justify-center border border-white/10"
          >
            <span className="font-orbitron text-[10px] tracking-widest text-white/50 text-center px-2">
              {placeholder}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((partner) => {
        const content = partner.logoUrl ? (
          <FallbackImage
            src={partner.logoUrl}
            alt={partner.name}
            className="h-20 w-full object-contain rounded-lg bg-white/5 border border-white/10 p-3"
          />
        ) : (
          <div className="h-20 w-full flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
            <span className="font-orbitron text-xs tracking-widest text-white/70 text-center px-2">
              {partner.name}
            </span>
          </div>
        );

        return partner.url ? (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-80 transition-opacity"
          >
            {content}
          </a>
        ) : (
          <div key={partner.name}>{content}</div>
        );
      })}
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
};

export default function AndreGalvaoPage() {
  const { t } = useLang();
  const salesOpen = new Date() >= TICKET_SALES_START;

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white relative overflow-x-hidden font-sans">
      <Helmet>
        <title>André Galvão x Best of the Best BJJ — {t('galvao_date_value')}, {t('galvao_location_value')}</title>
        <meta
          name="description"
          content="André Galvão, a BJJ legend, is coming to the Netherlands for the first time ever. Best of the Best BJJ presents an exclusive seminar."
        />
        <link rel="canonical" href="/andregalvao" />
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

      {/* ===== HERO ===== */}
      <section className="relative z-10 min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 pt-28 pb-16 text-center">
        <FallbackImage
          src="/andregalvao/hero.jpg"
          alt="André Galvão"
          className="absolute inset-0 w-full h-full object-cover object-top -z-10"
          showLabel={false}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(circle at center, rgba(45, 0, 77, 0.35) 0%, rgba(10, 10, 15, 0.55) 55%, rgba(10, 10, 15, 0.95) 100%)',
          }}
        ></div>

        <motion.p
          {...fadeUp}
          className="font-orbitron text-xs md:text-sm tracking-[0.3em] text-synth-blue neon-text-blue-subtle mb-6"
        >
          {t('galvao_kicker')}
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-orbitron font-black text-5xl sm:text-6xl md:text-8xl tracking-tight neon-text-pink mb-6"
        >
          {t('galvao_title')}
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-base md:text-xl text-white/80 mb-10"
        >
          {t('galvao_hero_subtitle')}
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-10"
        >
          <div className="px-6 py-3 rounded-xl bg-[#1a1a2e]/70 backdrop-blur-md border border-synth-blue/30">
            <p className="font-orbitron text-[10px] tracking-widest text-synth-blue/70 uppercase mb-1">
              {t('galvao_date_label')}
            </p>
            <p className="font-orbitron text-sm md:text-base text-white">{t('galvao_date_value')}</p>
          </div>
          <div className="px-6 py-3 rounded-xl bg-[#1a1a2e]/70 backdrop-blur-md border border-synth-pink/30">
            <p className="font-orbitron text-[10px] tracking-widest text-synth-pink/70 uppercase mb-1">
              {t('galvao_location_label')}
            </p>
            <p className="font-orbitron text-sm md:text-base text-white">{t('galvao_location_value')}</p>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#tickets"
            className="neon-button-ref inline-flex items-center justify-center px-10 py-4 font-orbitron font-bold text-sm md:text-base tracking-widest uppercase"
          >
            {t('galvao_cta_tickets')}
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-10 py-4 font-orbitron font-bold text-sm md:text-base tracking-widest uppercase rounded-lg border-2 border-white/20 text-white/80 hover:border-synth-blue hover:text-synth-blue transition-all"
          >
            {t('galvao_cta_about')}
          </a>
        </motion.div>
      </section>

      {/* ===== ABOUT ===== */}
      <motion.section {...fadeUp} id="about" className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16 md:py-24 scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <FallbackImage
            src="/andregalvao/about.jpg"
            alt="André Galvão"
            className="w-full h-72 md:h-96 object-cover rounded-2xl border border-white/10"
          />
          <div>
            <h2 className="font-orbitron text-2xl md:text-3xl text-synth-blue neon-text-blue-subtle mb-6">
              {t('galvao_about_title')}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-white/80">{t('galvao_about_text')}</p>
          </div>
        </div>
      </motion.section>

      {/* ===== CAREER ===== */}
      <motion.section {...fadeUp} className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="md:order-2">
            <FallbackImage
              src="/andregalvao/career.jpg"
              alt="André Galvão"
              className="w-full h-72 md:h-96 object-cover rounded-2xl border border-white/10"
            />
          </div>
          <div className="md:order-1">
            <h2 className="font-orbitron text-2xl md:text-3xl text-synth-pink neon-text-pink-subtle mb-6">
              {t('galvao_career_title')}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-white/80">{t('galvao_career_text')}</p>
          </div>
        </div>
      </motion.section>

      {/* ===== TICKETS ===== */}
      <motion.section
        {...fadeUp}
        id="tickets"
        className="relative z-10 w-full max-w-3xl mx-auto px-4 py-16 md:py-24 scroll-mt-24 text-center"
      >
        <h2 className="font-orbitron text-2xl md:text-3xl neon-text-pink mb-8">{t('galvao_tickets_title')}</h2>

        <div className="rounded-2xl border border-synth-pink/30 bg-[#1a1a2e]/60 backdrop-blur-md p-8 md:p-12">
          {!salesOpen ? (
            <>
              <p className="font-orbitron text-lg md:text-xl text-synth-pink mb-4">
                {t('galvao_tickets_presale_title')}
              </p>
              <p className="text-sm md:text-base text-white/70">{t('galvao_tickets_presale_text')}</p>
            </>
          ) : WEEZTIX_EMBED_HTML ? (
            <>
              <p className="text-sm text-white/60 mb-6">{t('galvao_tickets_open_text')}</p>
              <div dangerouslySetInnerHTML={{ __html: WEEZTIX_EMBED_HTML }} />
            </>
          ) : (
            <>
              <p className="font-orbitron text-lg md:text-xl text-synth-pink mb-4">
                {t('galvao_tickets_open_text')}
              </p>
              <p className="text-sm md:text-base text-white/70">{t('galvao_tickets_pending')}</p>
            </>
          )}
          <p className="font-orbitron text-[10px] tracking-widest text-white/30 uppercase mt-8">
            {t('galvao_tickets_provider')}
          </p>
        </div>
      </motion.section>

      {/* ===== SPONSORS ===== */}
      <motion.section {...fadeUp} className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16 md:py-20">
        <h2 className="font-orbitron text-xl md:text-2xl tracking-widest text-white/80 uppercase mb-8 text-center">
          {t('galvao_sponsors_title')}
        </h2>
        <PartnerGrid items={sponsors} placeholder={t('galvao_sponsors_placeholder')} />
      </motion.section>

      {/* ===== MEDIA PARTNERS ===== */}
      <motion.section {...fadeUp} className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16 md:py-20">
        <h2 className="font-orbitron text-xl md:text-2xl tracking-widest text-white/80 uppercase mb-8 text-center">
          {t('galvao_media_title')}
        </h2>
        <PartnerGrid items={mediaPartners} placeholder={t('galvao_media_placeholder')} />
      </motion.section>

      {/* ===== PRESS & PARTNERSHIPS ===== */}
      <motion.section {...fadeUp} className="relative z-10 w-full max-w-2xl mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="font-orbitron text-xl md:text-2xl text-synth-blue neon-text-blue-subtle mb-6">
          {t('galvao_press_title')}
        </h2>
        <p className="text-sm md:text-base text-white/70 mb-4">{t('galvao_press_text')}</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-orbitron text-synth-blue hover:text-synth-pink transition-colors text-sm md:text-base"
        >
          {CONTACT_EMAIL}
        </a>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 w-full py-10 border-t border-white/10 flex flex-col items-center gap-4">
        <Link
          to="/"
          className="font-orbitron text-[10px] md:text-xs tracking-widest uppercase text-white/50 hover:text-synth-blue transition-colors"
        >
          {t('backToHome') || 'BACK TO HOME'}
        </Link>
        <p className="font-orbitron text-[10px] text-white/30">{t('copyright')}</p>
      </footer>
    </div>
  );
}
