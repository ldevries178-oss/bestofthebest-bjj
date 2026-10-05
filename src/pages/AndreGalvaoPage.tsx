import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { User, Trophy, Handshake, Mail, Ticket, HelpCircle } from 'lucide-react';
import { useLang } from '../LangContext';

// Weeztix ticket shop for this event.
export const WEEZTIX_URL = 'https://shop.weeztix.com/ae0d011a-0580-44a3-8160-82d56394354e';

// logoParts: logo dat uit losse stukken (bv. icoon + woordmerk) naast elkaar staat.
// logoClassName: eigen formaat voor één logo, i.p.v. de standaard in PartnerGrid.
type Partner = {
  name: string;
  logoUrl?: string;
  logoClassName?: string;
  logoParts?: { src: string; className: string }[];
  url?: string;
};

const sponsors: Partner[] = [];

// LV Media en Sprint Studio staan naast elkaar en moeten even groot ogen:
// beide logo's delen dezelfde hoogte.
const mediaPartners: Partner[] = [
  {
    name: 'LV Media',
    logoUrl: '/images/andregalvao/media/lv-media.png',
    logoClassName: 'h-16 md:h-20 w-auto',
    url: 'https://www.lvmedia.nl',
  },
  {
    name: 'Sprint Studio',
    url: 'https://www.sprintstudio.nl/',
    logoUrl: '/images/andregalvao/media/sprint-studio-icon.png',
    logoClassName: 'h-16 md:h-20 w-auto',
  },
];

export const CONTACT_EMAIL = 'info@bestofthebestbjj.com';

function FallbackImage({
  src,
  alt,
  className,
  showLabel = true,
}: {
  key?: string | number;
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
}: {
  items: Partner[];
  placeholder: string;
  comingSoonCount?: number;
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
        const content = partner.logoParts ? (
          <div role="img" aria-label={partner.name} className="flex items-center gap-3 md:gap-4">
            {partner.logoParts.map((part) => (
              <FallbackImage
                key={part.src}
                src={part.src}
                alt=""
                showLabel={false}
                className={`${part.className} object-contain`}
              />
            ))}
          </div>
        ) : partner.logoUrl ? (
          <FallbackImage
            src={partner.logoUrl}
            alt={partner.name}
            className={`${partner.logoClassName ?? 'h-24 md:h-28 w-auto max-w-[180px] md:max-w-[220px]'} object-contain`}
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
            {placeholder}
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

const NAV_SECTION_IDS = ['about', 'career', 'partners', 'contact'] as const;
type NavSectionId = (typeof NAV_SECTION_IDS)[number];

// Tracks which section is currently in view so both nav variants can
// highlight the right item as the visitor scrolls. Driven by scroll
// position rather than IntersectionObserver ratios: "Contact" is short, so
// on many viewports it never becomes the single highest-ratio entry, and
// the dot would get stuck on "Partners" even once you've scrolled past
// everything. Reaching the bottom of the page always forces the last item
// active, matching what a visitor expects from a progress indicator.
function useActiveSection() {
  const [active, setActive] = useState<NavSectionId | ''>('');

  useEffect(() => {
    const elements = NAV_SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    let ticking = false;

    const update = () => {
      ticking = false;

      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(NAV_SECTION_IDS[NAV_SECTION_IDS.length - 1]);
        return;
      }

      // Reference line ~30% down the viewport — roughly where the fixed
      // header's scroll-mt offset already aims scrolled-to sections.
      const referenceY = window.scrollY + window.innerHeight * 0.3;

      let current: NavSectionId | '' = '';
      for (const el of elements) {
        if (el.getBoundingClientRect().top + window.scrollY <= referenceY) {
          current = el.id as NavSectionId;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return active;
}

function useSectionNavItems() {
  const { t } = useLang();
  return [
    { id: 'about' as const, label: t('galvao_nav_about'), Icon: User },
    { id: 'career' as const, label: t('galvao_nav_career'), Icon: Trophy },
    { id: 'partners' as const, label: t('galvao_nav_partners'), Icon: Handshake },
    { id: 'contact' as const, label: t('galvao_nav_contact'), Icon: Mail },
  ];
}

// App-style bottom tab bar: the primary section nav on phones, where a
// thumb-reachable fixed bar beats a top menu most visitors would have to
// stretch for.
function MobileSectionNav({ active }: { active: NavSectionId | '' }) {
  const { t } = useLang();
  const items = useSectionNavItems();

  return (
    <nav
      aria-label="Section navigation"
      className="fixed inset-x-0 bottom-0 z-[90] md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="mx-3 mb-3 flex items-center gap-1 rounded-2xl border border-white/10 bg-[#0a0a0f]/90 backdrop-blur-xl px-1.5 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.55)]">
        {items.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-current={isActive ? 'true' : undefined}
              className={`flex flex-1 flex-col items-center gap-1 rounded-xl px-1 py-2 transition-colors ${
                isActive ? 'text-synth-blue' : 'text-white/50'
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 1.75} />
              <span className="font-orbitron text-[9px] leading-none tracking-widest uppercase">{label}</span>
            </a>
          );
        })}
        <a
          href={WEEZTIX_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center gap-1 rounded-xl border border-synth-pink/40 bg-synth-pink/15 px-1 py-2 text-synth-pink"
        >
          <Ticket className="w-5 h-5" strokeWidth={2} />
          <span className="font-orbitron text-[9px] leading-none tracking-widest uppercase">
            {t('galvao_nav_tickets')}
          </span>
        </a>
      </div>
    </nav>
  );
}

// On wider screens the whole page fits comfortably, so a slim glowing dot
// rail on the edge (à la synthwave indicator lights) gives orientation
// without competing with the fixed header for space.
function DesktopSectionNav({ active }: { active: NavSectionId | '' }) {
  const { t } = useLang();
  const items = useSectionNavItems();

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 z-[90] hidden -translate-y-1/2 flex-col items-center gap-4 rounded-full border border-white/10 bg-[#0a0a0f]/70 backdrop-blur-md px-2.5 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.45)] md:flex"
    >
      {items.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <a key={id} href={`#${id}`} aria-label={label} className="group relative flex items-center justify-center py-1">
            <span
              className={`h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                isActive
                  ? 'scale-125 border-synth-blue bg-synth-blue shadow-[0_0_10px_rgba(0,255,255,0.8)]'
                  : 'border-white/40 bg-transparent group-hover:border-white/80'
              }`}
            />
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md border border-white/10 bg-[#0a0a0f]/90 px-2.5 py-1 font-orbitron text-[10px] tracking-widest uppercase text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
              {label}
            </span>
          </a>
        );
      })}
      <span className="h-px w-4 bg-white/15" aria-hidden="true" />
      <a
        href={WEEZTIX_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('galvao_nav_tickets')}
        className="group relative flex items-center justify-center py-1"
      >
        <Ticket className="h-4 w-4 text-synth-pink drop-shadow-[0_0_6px_rgba(255,0,255,0.7)]" strokeWidth={2} />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md border border-synth-pink/30 bg-[#0a0a0f]/90 px-2.5 py-1 font-orbitron text-[10px] tracking-widest uppercase text-synth-pink opacity-0 transition-opacity group-hover:opacity-100">
          {t('galvao_nav_tickets')}
        </span>
      </a>
    </nav>
  );
}

export default function AndreGalvaoPage() {
  const { t } = useLang();
  const active = useActiveSection();

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
      <section className="relative z-10 min-h-[100dvh] w-full flex flex-col justify-end overflow-hidden px-7 pt-28 pb-28 md:px-14 md:pb-14 lg:px-24 lg:pb-16">
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
            className="font-orbitron font-black text-[44px] md:text-[68px] lg:text-[88px] leading-[1.12] text-white mb-3.5 md:mb-4 lg:mb-5"
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
            <Link
              to="/andregalvao/faq"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-synth-blue/60 bg-white/5 px-7 py-[11px] md:px-9 md:py-[13px] lg:px-11 lg:py-[15px] font-orbitron font-bold text-xs md:text-[13px] lg:text-sm tracking-wider uppercase text-synth-blue shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all hover:bg-synth-blue/10 hover:border-synth-blue hover:scale-[1.03]"
            >
              <HelpCircle className="w-4 h-4" />
              {t('galvao_cta_faq')}
            </Link>
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
      <motion.section {...fadeUpOnceScrolled} id="career" className="relative z-10 w-full max-w-5xl mx-auto px-4 pt-6 pb-16 md:pt-8 md:pb-24 scroll-mt-24">
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

      {/* ===== PARTNERS ===== */}
      <motion.section {...fadeUp} id="partners" className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16 md:py-20 scroll-mt-24">
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
        />
      </motion.section>

      {/* ===== PRESS & PARTNERSHIPS ===== */}
      <motion.section {...fadeUp} id="contact" className="relative z-10 w-full max-w-2xl mx-auto px-4 pt-16 pb-8 md:pt-24 md:pb-10 text-center scroll-mt-24">
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
      <footer className="relative z-10 w-full pt-6 pb-28 md:pb-6 border-t border-white/10 flex flex-col items-center gap-4">
        <p className="font-sans text-[10px] text-white/30">{t('copyright')}</p>
      </footer>

      <MobileSectionNav active={active} />
      <DesktopSectionNav active={active} />
    </div>
  );
}
