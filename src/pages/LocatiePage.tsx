import { motion } from "motion/react";
import { useLang } from "../LangContext";

export default function LocatiePage() {
  const { t } = useLang();

  const infoItems = [
    {
      icon: '📍',
      title: t('address'),
      lines: ['AFAS Live', 'Johan Cruijff Boulevard 590', '1101 DZ Amsterdam'],
    },
    {
      icon: '📅',
      title: t('dateTime'),
      lines: [t('dateTimeLine1'), t('dateTimeLine2'), t('dateTimeLine3')],
    },
    {
      icon: '🚆',
      title: t('publicTransport'),
      lines: [t('ptLine1'), t('ptLine2'), t('ptLine3')],
    },
    {
      icon: '🚗',
      title: t('byCar'),
      lines: [t('carLine1'), t('carLine2'), t('carLine3')],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white relative overflow-x-hidden font-sans">
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
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 w-full"
        >
          <div className="flex items-center justify-center gap-4 mb-6 opacity-80">
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-synth-blue"></div>
            <div className="w-2 h-2 rounded-full bg-synth-blue drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"></div>
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-synth-blue"></div>
          </div>
          <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl tracking-widest uppercase text-center neon-text-blue">
            {t('locatieTitle')}
          </h2>
          <p className="font-rajdhani text-base md:text-lg text-white/60 tracking-[0.15em] uppercase mt-4 text-center max-w-2xl">
            {t('locatieSubtitle')}
          </p>
        </motion.div>

        {/* Venue Hero Card */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-5xl mb-12"
        >
          <div className="relative rounded-2xl border border-synth-blue/20 bg-[#1a1a2e]/60 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,255,0.1)] overflow-hidden">
            {/* Map embed area */}
            <div className="w-full h-64 md:h-80 bg-gradient-to-br from-synth-purple/40 to-black border-b border-white/10 flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl mb-4 block">🗺️</span>
                <p className="font-orbitron text-synth-blue text-sm tracking-widest uppercase">AFAS Live • Amsterdam</p>
                <p className="font-rajdhani text-white/50 text-xs mt-2 tracking-wider">Johan Cruijff Boulevard 590</p>
              </div>
            </div>

            {/* Venue Name Bar */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="font-orbitron text-xl md:text-2xl font-bold text-white tracking-[0.15em] uppercase">
                  AFAS Live
                </h2>
                <p className="font-rajdhani text-white/50 text-sm tracking-wider mt-1">
                  {t('capacity')}
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=AFAS+Live+Amsterdam"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 bg-transparent text-synth-blue font-orbitron text-xs font-bold tracking-[0.15em] uppercase rounded-lg transition-all duration-300 border-2 border-synth-blue/40 hover:border-synth-blue hover:bg-synth-blue/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:-translate-y-1 no-underline"
              >
                {t('openInMaps')}
              </a>
            </div>
          </div>
        </motion.section>

        {/* Info Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl w-full mb-16">
          {infoItems.map((item, index) => (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={item.title}
              id={`info-${item.title.toLowerCase().replace(/[^a-z]/g, '-')}`}
              className="group rounded-xl border border-white/10 bg-[#1a1a2e]/60 backdrop-blur-md p-6 transition-all duration-500 hover:border-synth-blue/50 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)]"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl mt-1">{item.icon}</span>
                <div>
                  <h3 className="font-orbitron text-sm md:text-base font-bold text-synth-blue neon-text-blue-subtle tracking-[0.15em] uppercase mb-3">
                    {item.title}
                  </h3>
                  {item.lines.map((line, i) => (
                    <p key={i} className="font-rajdhani text-white/70 text-sm leading-relaxed tracking-wider">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Bottom Divider */}
        <div className="flex items-center justify-center gap-4 opacity-60">
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-synth-blue/60"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-synth-blue/80"></div>
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-synth-blue/60"></div>
        </div>
      </div>
    </div>
  );
}
