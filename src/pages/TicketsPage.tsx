import { motion } from "motion/react";
import { useLang } from "../LangContext";

export default function TicketsPage() {
  const { t } = useLang();

  const tickets = [
    {
      id: 'early-bird',
      name: t('earlyBird'),
      price: '€35',
      description: t('earlyBirdDesc'),
      features: [t('earlyBirdF1'), t('earlyBirdF2'), t('earlyBirdF3')],
      accent: 'cyan',
      popular: false,
    },
    {
      id: 'regulier',
      name: t('regulier'),
      price: '€50',
      description: t('regulierDesc'),
      features: [t('regulierF1'), t('regulierF2'), t('regulierF3')],
      accent: 'pink',
      popular: true,
    },
    {
      id: 'vip',
      name: t('vip'),
      price: '€95',
      description: t('vipDesc'),
      features: [t('vipF1'), t('vipF2'), t('vipF3'), t('vipF4'), t('vipF5')],
      accent: 'purple',
      popular: false,
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
            {t('ticketsTitle')}
          </h2>
          <p className="font-rajdhani text-base md:text-lg text-white/60 tracking-[0.15em] uppercase mt-4 text-center max-w-2xl">
            {t('ticketsSubtitle')}
          </p>
        </motion.div>

        {/* Ticket Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {tickets.map((ticket, index) => (
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              key={ticket.id}
              id={`ticket-${ticket.id}`}
              className={`relative flex flex-col rounded-xl border bg-[#1a1a2e]/60 backdrop-blur-md p-8 transition-all duration-500 hover:-translate-y-2 group ${
                ticket.accent === 'cyan'
                  ? 'border-synth-blue/30 hover:border-synth-blue shadow-[0_0_20px_rgba(0,255,255,0.08)] hover:shadow-[0_0_30px_rgba(0,255,255,0.25)]'
                  : ticket.accent === 'pink'
                  ? 'border-synth-pink/30 hover:border-synth-pink shadow-[0_0_20px_rgba(255,0,255,0.08)] hover:shadow-[0_0_30px_rgba(255,0,255,0.25)]'
                  : 'border-purple-400/30 hover:border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.08)] hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]'
              }`}
            >
              {ticket.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-synth-pink text-[#0a0a0f] font-orbitron text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-[0_0_15px_rgba(255,0,255,0.6)]">
                  {t('popular')}
                </div>
              )}

              <h2 className={`font-orbitron text-xl md:text-2xl font-bold tracking-[0.15em] uppercase mb-2 ${
                ticket.accent === 'cyan' ? 'text-synth-blue' :
                ticket.accent === 'pink' ? 'text-synth-pink' :
                'text-purple-400'
              }`}>
                {ticket.name}
              </h2>

              <p className="font-rajdhani text-sm text-white/60 mb-6 leading-relaxed">
                {ticket.description}
              </p>

              <div className={`font-orbitron text-4xl md:text-5xl font-black mb-8 ${
                ticket.accent === 'cyan' ? 'text-synth-blue' :
                ticket.accent === 'pink' ? 'text-synth-pink' :
                'text-purple-400'
              }`}>
                {ticket.price}
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {ticket.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 font-rajdhani text-sm">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      ticket.accent === 'cyan' ? 'bg-synth-blue' :
                      ticket.accent === 'pink' ? 'bg-synth-pink' :
                      'bg-purple-400'
                    }`}></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 font-orbitron text-sm font-bold tracking-[0.15em] uppercase rounded-lg transition-all duration-300 cursor-pointer ${
                ticket.accent === 'cyan'
                  ? 'bg-transparent text-synth-blue border-2 border-synth-blue/50 hover:bg-synth-blue/10 hover:border-synth-blue hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]'
                  : ticket.accent === 'pink'
                  ? 'bg-synth-pink text-[#0a0a0f] border-none hover:shadow-[0_0_25px_rgba(255,0,255,0.6)] hover:scale-[1.02]'
                  : 'bg-purple-500 text-[#0a0a0f] border-none hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:scale-[1.02]'
              }`}>
                {t('orderNow')}
              </button>
            </motion.article>
          ))}
        </div>

        {/* Info section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6 opacity-60">
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-synth-blue/60"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-synth-blue/80"></div>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-synth-blue/60"></div>
          </div>
          <p className="font-rajdhani text-sm text-white/50 tracking-wider uppercase">
            {t('ticketsFooter')}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
