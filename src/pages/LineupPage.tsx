import { motion } from "motion/react";

const fighters = [
  { name: 'Ricardo "The Machine" Silva', weight: '-77kg', belt: 'Zwarte Band', record: '28-3', country: '🇧🇷' },
  { name: 'Dmitri Volkov', weight: '-85kg', belt: 'Zwarte Band', record: '22-5', country: '🇷🇺' },
  { name: 'Kenji Tanaka', weight: '-70kg', belt: 'Bruine Band', record: '19-2', country: '🇯🇵' },
  { name: 'Marcus "Iron Grip" Johnson', weight: '-93kg', belt: 'Zwarte Band', record: '31-4', country: '🇺🇸' },
  { name: 'Ahmed El Fassi', weight: '-77kg', belt: 'Zwarte Band', record: '24-6', country: '🇲🇦' },
  { name: 'Lars van den Berg', weight: '-85kg', belt: 'Bruine Band', record: '17-1', country: '🇳🇱' },
  { name: 'Gabriel "Cobra" Costa', weight: '-70kg', belt: 'Zwarte Band', record: '26-3', country: '🇧🇷' },
  { name: 'Yuki Miyamoto', weight: '-93kg', belt: 'Zwarte Band', record: '20-2', country: '🇯🇵' },
];

const weightClasses = ['-70kg', '-77kg', '-85kg', '-93kg'];

export default function LineupPage() {
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
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-500 box-glow-cyan"></div>
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>
          <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl tracking-widest uppercase text-center botb-title-glitch" data-text="Line-up">
            Line-up
          </h2>
          <p className="font-rajdhani text-base md:text-lg text-gray-300 tracking-[0.15em] uppercase mt-4 text-center max-w-2xl">
            De beste fighters van de wereld – klaar voor de strijd
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
              className="px-4 py-2 font-orbitron text-xs tracking-[0.15em] uppercase rounded-full border border-purple-500/40 text-purple-300 bg-purple-950/30 backdrop-blur-sm cursor-pointer hover:bg-purple-900/40 transition-colors"
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
              className="group relative flex flex-col rounded-xl border border-cyan-500/20 bg-[#0a0514]/60 backdrop-blur-md p-6 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]"
            >
              {/* Fighter Avatar Placeholder */}
              <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border border-cyan-500/10 mb-5 flex items-center justify-center overflow-hidden">
                <span className="text-6xl">{fighter.country}</span>
              </div>

              {/* Fighter Info */}
              <h2 className="font-orbitron text-sm md:text-base font-bold text-cyan-300 tracking-wider uppercase mb-2 leading-snug group-hover:text-glow-cyan transition-all duration-300">
                {fighter.name}
              </h2>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-0.5 text-xs font-rajdhani bg-pink-600/30 text-pink-300 rounded border border-pink-500/30">
                  {fighter.weight}
                </span>
                <span className="px-2 py-0.5 text-xs font-rajdhani bg-purple-600/30 text-purple-300 rounded border border-purple-500/30">
                  {fighter.belt}
                </span>
              </div>

              <p className="font-rajdhani text-gray-400 text-sm tracking-wider">
                Record: <span className="text-cyan-400 font-medium">{fighter.record}</span>
              </p>

              {/* Glow line at bottom */}
              <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-pink-500"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-pink-500"></div>
          </div>
          <p className="font-rajdhani text-sm text-gray-500 tracking-wider uppercase text-center">
            Meer fighters worden binnenkort aangekondigd • Volg ons voor updates
          </p>
        </motion.div>
      </div>
    </>
  );
}
