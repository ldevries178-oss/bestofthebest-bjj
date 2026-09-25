import { motion } from "motion/react";
import { useLang } from "../LangContext";

const fighters = [
  { name: 'Ricardo "The Machine" Silva', weight: '-77kg', beltKey: 'blackBelt' as const, record: '28-3', country: '🇧🇷' },
  { name: 'Dmitri Volkov', weight: '-85kg', beltKey: 'blackBelt' as const, record: '22-5', country: '🇷🇺' },
  { name: 'Kenji Tanaka', weight: '-70kg', beltKey: 'brownBelt' as const, record: '19-2', country: '🇯🇵' },
  { name: 'Marcus "Iron Grip" Johnson', weight: '-93kg', beltKey: 'blackBelt' as const, record: '31-4', country: '🇺🇸' },
  { name: 'Ahmed El Fassi', weight: '-77kg', beltKey: 'blackBelt' as const, record: '24-6', country: '🇲🇦' },
  { name: 'Lars van den Berg', weight: '-85kg', beltKey: 'brownBelt' as const, record: '17-1', country: '🇳🇱' },
  { name: 'Gabriel "Cobra" Costa', weight: '-70kg', beltKey: 'blackBelt' as const, record: '26-3', country: '🇧🇷' },
  { name: 'Yuki Miyamoto', weight: '-93kg', beltKey: 'blackBelt' as const, record: '20-2', country: '🇯🇵' },
];

const weightClasses = ['-70kg', '-77kg', '-85kg', '-93kg'];

export default function LineupPage() {
  const { t } = useLang();

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
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-synth-pink"></div>
            <div className="w-2 h-2 rounded-full bg-synth-pink drop-shadow-[0_0_8px_rgba(255,0,255,0.6)]"></div>
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-synth-pink"></div>
          </div>
          <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl tracking-widest uppercase text-center neon-text-pink">
            {t('lineupTitle')}
          </h2>
          <p className="font-rajdhani text-base md:text-lg text-white/60 tracking-[0.15em] uppercase mt-4 text-center max-w-2xl">
            {t('lineupSubtitle')}
          </p>
        </motion.div>

        {/* Weight Class Filter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {weightClasses.map((wc) => (
            <span
              key={wc}
              className="px-4 py-2 font-orbitron text-xs tracking-[0.15em] uppercase rounded-full border border-synth-pink/30 text-white/70 bg-[#1a1a2e]/60 backdrop-blur-md cursor-pointer hover:bg-synth-pink/10 hover:border-synth-pink hover:text-synth-pink transition-colors"
            >
              {wc}
            </span>
          ))}
        </motion.div>

        {/* Fighter Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
          {fighters.map((fighter, index) => (
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              key={fighter.name}
              id={`fighter-${index}`}
              className="group relative flex flex-col rounded-xl border border-white/10 bg-[#1a1a2e]/60 backdrop-blur-md p-6 transition-all duration-500 hover:-translate-y-2 hover:border-synth-pink/50 hover:shadow-[0_0_25px_rgba(255,0,255,0.15)]"
            >
              {/* Fighter Avatar Placeholder */}
              <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-synth-purple/40 to-black border border-white/10 mb-5 flex items-center justify-center overflow-hidden">
                <span className="text-6xl">{fighter.country}</span>
              </div>

              {/* Fighter Info */}
              <h2 className="font-orbitron text-sm md:text-base font-bold text-white tracking-wider uppercase mb-2 leading-snug group-hover:text-synth-pink transition-all duration-300">
                {fighter.name}
              </h2>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-0.5 text-xs font-rajdhani bg-synth-pink/10 text-synth-pink rounded border border-synth-pink/30">
                  {fighter.weight}
                </span>
                <span className="px-2 py-0.5 text-xs font-rajdhani bg-synth-blue/10 text-synth-blue rounded border border-synth-blue/30">
                  {t(fighter.beltKey)}
                </span>
              </div>

              <p className="font-rajdhani text-white/50 text-sm tracking-wider">
                {t('record')}: <span className="text-white/80 font-medium">{fighter.record}</span>
              </p>

              {/* Glow line at bottom */}
              <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-synth-pink to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.article>
          ))}
        </div>

        {/* More Fighters Teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6 opacity-60">
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-synth-pink/60"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-synth-pink/80"></div>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-synth-pink/60"></div>
          </div>
          <p className="font-rajdhani text-sm text-white/50 tracking-wider uppercase text-center">
            {t('moreFighters')}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
