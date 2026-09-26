import { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useLang } from '../LangContext';

// Weeztix ticket shop for this event.
const WEEZTIX_URL = 'https://shop.weeztix.com/ae0d011a-0580-44a3-8160-82d56394354e';

type Partner = { name: string; logoUrl?: string; url?: string };

const sponsors: Partner[] = [];

const mediaPartners: Partner[] = [
  { name: 'LV Media', logoUrl: '/images/andregalvao/media/lv-media.png' },
];

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

function PartnerGrid({
  items,
  placeholder,
  comingSoonCount = 0,
  comingSoonLabel,
}: {
  items: Partner[];
  placeholder: string;
  comingSoonCount?: number;
  comingSoonLabel?: string;
}) {
  if (items.length === 0 && comingSoonCount === 0) {
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
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
      {items.map((partner) => {
        const content = partner.logoUrl ? (
          <FallbackImage
            src={partner.logoUrl}
            alt={partner.name}
            className="h-24 md:h-28 w-auto max-w-[180px] md:max-w-[220px] object-contain"
          />
        ) : (
          <div className="h-20 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 px-6">
            <span className="font-orbitron text-xs tracking-widest text-white/70 text-center">
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
      {Array.from({ length: comingSoonCount }, (_, i) => (
        <div
          key={`coming-soon-${i}`}
          className="h-20 min-w-[160px] flex items-center justify-center rounded-lg bg-white/5 border border-dashed border-white/15 px-6"
        >
          <span className="font-orbitron text-[10px] tracking-widest text-white/40 uppercase text-center">
            {comingSoonLabel ?? placeholder}
          </span>
        </div>
      ))}
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
};

// Hero content reveals on mount (time-based), not on scroll — the hero sits
// above the fold, so its text and buttons must stay in sync with each other
// regardless of whether the button row happens to start below the fold on a
// short viewport. A viewport-triggered fade would otherwise pop the buttons
// in late, out of step with the text above, once the user scrolls to them.
const heroReveal = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

// Zelfde fade-up, maar pas onthuld zodra een substantieel deel van de sectie
// (inclusief de tekst eronder) al zichtbaar is — i.p.v. meteen bij het eerste
// randje. Voorkomt dat Tickets/About/Career al "poppen" voordat je er
// daadwerkelijk naartoe bent gescrold.
const fadeUpOnceScrolled = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.6 },
};

export default function AndreGalvaoPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white relative overflow-x-hidden font-sans">
      <Helmet>
        <title>{`André Galvão x Best of the Best BJJ — ${t('galvao_date_value')}, ${t('galvao_location_value')}`}</title>
        <meta
          name="description"
          content="André Galvão, a BJJ legend, is coming to the Netherlands for the first time ever. Best of the Best BJJ presents an exclusive seminar."
        />
        <link rel="canonical" href="https://bestofthebestbjj.com/andregalvao" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Best of the Best BJJ" />
        <meta property="og:url" content="https://bestofthebestbjj.com/andregalvao" />
        <meta
          property="og:title"
          content={`André Galvão x Best of the Best BJJ — ${t('galvao_date_value')}, ${t('galvao_location_value')}`}
        />
        <meta
          property="og:description"
          content="André Galvão, a BJJ legend, is coming to the Netherlands for the first time ever. Best of the Best BJJ presents an exclusive seminar."
        />
        <meta property="og:image" content="https://bestofthebestbjj.com/images/andregalvao/hero.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`André Galvão x Best of the Best BJJ — ${t('galvao_date_value')}, ${t('galvao_location_value')}`}
        />
        <meta
          name="twitter:description"
          content="André Galvão, a BJJ legend, is coming to the Netherlands for the first time ever. Best of the Best BJJ presents an exclusive seminar."
        />
        <meta name="twitter:image" content="https://bestofthebestbjj.com/images/andregalvao/hero.jpg" />
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
      <section className="relative z-10 min-h-[100dvh] w-full flex flex-col justify-end overflow-hidden px-7 pt-28 pb-10 md:px-14 md:pb-14 lg:px-24 lg:pb-16">
        <FallbackImage
          src="/images/andregalvao/hero.jpg"
          alt="André Galvão"
          className="absolute inset-0 w-full h-full object-cover object-top -z-10"
          showLabel={false}
        />
        {/* Vaste donkere gradient onderin: geeft de tekst altijd genoeg contrast,
            ongeacht hoe licht de foto op die plek toevallig is. */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,15,0) 0%, rgba(10,10,15,0.12) 40%, rgba(10,10,15,0.76) 70%, rgba(10,10,15,0.97) 100%)',
          }}
        ></div>
        <div
          className="absolute inset-0 -z-10"
          style={{ background: 'linear-gradient(90deg, rgba(10,10,15,0.55) 0%, rgba(10,10,15,0) 50%)' }}
        ></div>

        <div className="max-w-full md:max-w-[480px] lg:max-w-[640px]">
          <motion.p
            {...heroReveal}
            transition={{ duration: 0.6, delay: 0 }}
            className="font-sans font-semibold text-[11px] md:text-xs lg:text-[13px] tracking-[0.2em] lg:tracking-[0.25em] uppercase text-white/60 mb-3 md:mb-3.5 lg:mb-4"
          >
            {t('galvao_kicker')}
          </motion.p>

          <motion.h1
            {...heroReveal}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-orbitron font-black text-[44px] md:text-[68px] lg:text-[88px] leading-[0.95] text-white mb-3.5 md:mb-4 lg:mb-5"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.6), 0 0 25px rgba(0,255,255,0.35), 0 0 50px rgba(255,0,255,0.2)' }}
          >
            {t('galvao_title').split(' ')[0]}
            <br />
            {t('galvao_title').split(' ').slice(1).join(' ')}
          </motion.h1>

          <motion.p
            {...heroReveal}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[320px] md:max-w-[420px] lg:max-w-[520px] text-[15px] md:text-lg lg:text-xl leading-relaxed text-white/90 mb-[18px] md:mb-6 lg:mb-7"
          >
            {t('galvao_hero_subtitle')}
          </motion.p>

          <motion.p
            {...heroReveal}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans font-semibold text-[11px] md:text-xs lg:text-[13px] tracking-[0.1em] lg:tracking-[0.12em] uppercase text-white/75 mb-[22px] md:mb-7 lg:mb-8"
          >
            {t('galvao_date_value')}
            <span className="mx-2 md:mx-3 text-synth-pink">&bull;</span>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t('galvao_location_value'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {t('galvao_location_value')}
            </a>
          </motion.p>

          <motion.div
            {...heroReveal}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-5 md:gap-6 lg:gap-8"
          >
            <a
              href={WEEZTIX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-synth-pink px-7 py-[13px] md:px-9 md:py-[15px] lg:px-11 lg:py-[17px] font-orbitron font-bold text-xs md:text-[13px] lg:text-sm tracking-wider uppercase text-[#0a0a0f] shadow-[0_6px_22px_rgba(255,0,255,0.35)] md:shadow-[0_8px_30px_rgba(255,0,255,0.35)] transition-transform hover:scale-[1.03]"
            >
              {t('galvao_cta_tickets')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <motion.section {...fadeUpOnceScrolled} id="about" className="relative z-10 w-full max-w-5xl mx-auto px-4 pt-16 pb-6 md:pt-24 md:pb-8 scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <FallbackImage
            src="/images/andregalvao/about.jpg"
            alt="André Galvão"
            className="w-full h-72 md:h-96 object-cover rounded-2xl border border-white/10"
          />
          <div>
            <h2 className="font-orbitron font-bold text-2xl md:text-3xl text-white mb-6 neon-text-blue">
              {t('galvao_about_title')}
            </h2>
            {t('galvao_about_text').split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-sm md:text-base leading-relaxed text-white/80 mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== CAREER ===== */}
      <motion.section {...fadeUpOnceScrolled} className="relative z-10 w-full max-w-5xl mx-auto px-4 pt-6 pb-16 md:pt-8 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="md:order-2">
            <FallbackImage
              src="/images/andregalvao/career.jpg"
              alt="André Galvão"
              className="w-full h-72 md:h-96 object-cover rounded-2xl border border-white/10"
            />
          </div>
          <div className="md:order-1">
            <h2 className="font-orbitron font-bold text-2xl md:text-3xl text-white mb-6 neon-text-pink">
              {t('galvao_career_title')}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-white/80 mb-6">{t('galvao_career_text')}</p>
            <h3 className="font-orbitron font-bold text-xs md:text-sm tracking-widest uppercase text-synth-pink mb-3">
              {t('galvao_titles_heading')}
            </h3>
            <ul className="space-y-2">
              {[
                t('galvao_major_title_1'),
                t('galvao_major_title_2'),
                t('galvao_major_title_3'),
                t('galvao_major_title_4'),
                t('galvao_major_title_5'),
              ].map((title) => (
                <li key={title} className="flex items-center gap-2.5 text-sm md:text-base text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-synth-pink flex-shrink-0" />
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ===== SPONSORS ===== */}
      <motion.section {...fadeUp} className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16 md:py-20">
        <h2 className="font-orbitron text-xl md:text-2xl tracking-widest text-synth-blue neon-text-blue-subtle uppercase mb-8 text-center">
          {t('galvao_sponsors_title')}
        </h2>
        <PartnerGrid items={sponsors} placeholder={t('galvao_sponsors_placeholder')} comingSoonCount={1} />
      </motion.section>

      {/* ===== MEDIA PARTNERS ===== */}
      <motion.section {...fadeUp} className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16 md:py-20">
        <h2 className="font-orbitron text-xl md:text-2xl tracking-widest text-synth-pink neon-text-pink-subtle uppercase mb-8 text-center">
          {t('galvao_media_title')}
        </h2>
        <PartnerGrid
          items={mediaPartners}
          placeholder={t('galvao_media_placeholder')}
          comingSoonCount={1}
          comingSoonLabel={t('galvao_media_more_placeholder')}
        />
      </motion.section>

      {/* ===== PRESS & PARTNERSHIPS ===== */}
      <motion.section {...fadeUp} className="relative z-10 w-full max-w-2xl mx-auto px-4 pt-16 pb-8 md:pt-24 md:pb-10 text-center">
        <h2 className="font-orbitron font-bold text-xl md:text-2xl text-white mb-6 neon-text-blue">
          {t('galvao_press_title')}
        </h2>
        <p className="text-sm md:text-base text-white/70 mb-4">{t('galvao_press_text')}</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-sans font-semibold text-sm md:text-base text-white/80 underline decoration-white/20 underline-offset-4 hover:text-synth-pink hover:decoration-synth-pink/50 transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 w-full py-6 border-t border-white/10 flex flex-col items-center gap-4">
        <p className="font-sans text-[10px] text-white/30">{t('copyright')}</p>
      </footer>
    </div>
  );
}
