import { motion } from "motion/react";

const infoItems = [
  {
    icon: '📍',
    title: 'Adres',
    lines: ['AFAS Live', 'Johan Cruijff Boulevard 590', '1101 DZ Amsterdam'],
  },
  {
    icon: '📅',
    title: 'Datum & Tijd',
    lines: ['Zaterdag 12 juli 2026', 'Deuren open: 18:00', 'Start: 19:00'],
  },
  {
    icon: '🚆',
    title: 'Met OV',
    lines: ['Metro 54: Station Strandvliet', '5 min lopen vanaf het station', 'Bus 46 & 47 stoppen voor de deur'],
  },
  {
    icon: '🚗',
    title: 'Met de Auto',
    lines: ['A2 / A9 richting Amsterdam Arena', 'Parkeergarage P1 Arena', '€10 dagtarief parkeren'],
  },
];

export default function LocatiePage() {
  return (
    <>
      <div className="w-full flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 w-full"
        >
          <div className="flex items-center justify-center gap-4 mb-6 opacity-80">
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-purple-500"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"></div>
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>
          <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl tracking-widest uppercase text-center synthwave-title-best">
            Locatie
          </h2>
          <p className="font-rajdhani text-base md:text-lg text-gray-300 tracking-[0.15em] uppercase mt-4 text-center max-w-2xl">
            AFAS Live — Het hart van Amsterdam Southeast
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
          <div className="relative rounded-2xl border border-cyan-500/20 bg-[#0a0514]/70 backdrop-blur-md overflow-hidden">
            {/* Map embed area */}
            <div className="w-full h-64 md:h-80 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border-b border-cyan-500/10 flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl mb-4 block">🗺️</span>
                <p className="font-orbitron text-cyan-500/60 text-sm tracking-widest uppercase">AFAS Live • Amsterdam</p>
                <p className="font-rajdhani text-gray-500 text-xs mt-2 tracking-wider">Johan Cruijff Boulevard 590</p>
              </div>
            </div>

            {/* Venue Name Bar */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="font-orbitron text-xl md:text-2xl font-bold text-cyan-300 tracking-[0.15em] uppercase text-glow-cyan">
                  AFAS Live
                </h2>
                <p className="font-rajdhani text-gray-400 text-sm tracking-wider mt-1">
                  Capaciteit: 6.000 plaatsen • Indoor arena
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=AFAS+Live+Amsterdam"
                target="_blank"
                rel="noopener noreferrer"
                className="vhs-button vhs-button-cyan group relative px-6 py-3 bg-[#0a0514]/60 backdrop-blur-md text-cyan-400 font-orbitron text-xs font-bold tracking-[0.15em] uppercase rounded-lg transition-all duration-300 border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-950/60 hover:-translate-y-1 no-underline"
              >
                <span className="vhs-text relative z-10 text-glow-cyan" data-text="Open in Maps">Open in Maps</span>
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
              className="group rounded-xl border border-purple-500/20 bg-purple-950/15 backdrop-blur-md p-6 transition-all duration-500 hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.08)]"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl mt-1">{item.icon}</span>
                <div>
                  <h3 className="font-orbitron text-sm md:text-base font-bold text-purple-300 tracking-[0.15em] uppercase mb-3 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                    {item.title}
                  </h3>
                  {item.lines.map((line, i) => (
                    <p key={i} className="font-rajdhani text-gray-300 text-sm leading-relaxed tracking-wider">
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
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-purple-500"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>
      </div>
    </>
  );
}
