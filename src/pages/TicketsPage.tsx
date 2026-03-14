import { motion } from "motion/react";

const tickets = [
  {
    id: 'early-bird',
    name: 'Early Bird',
    price: '€35',
    description: 'Beperkt beschikbaar – voor de echte fans die er vroeg bij zijn.',
    features: ['Toegang tot het evenement', 'Gratis welkomstdrankje', 'Early Bird goodiebag'],
    accent: 'cyan',
    popular: false,
  },
  {
    id: 'regulier',
    name: 'Regulier',
    price: '€50',
    description: 'Standaard toegang tot Best of the Best BJJ Edition.',
    features: ['Toegang tot het evenement', 'Toegang tot alle wedstrijden', 'Food & drinks beschikbaar'],
    accent: 'pink',
    popular: true,
  },
  {
    id: 'vip',
    name: 'VIP',
    price: '€95',
    description: 'De ultieme ervaring – vooraan bij de actie met exclusieve privileges.',
    features: ['Voorrang bij binnenkomst', 'VIP-tribune met beste zicht', 'All-inclusive food & drinks', 'Meet & greet met fighters', 'Exclusief VIP-shirt'],
    accent: 'purple',
    popular: false,
  },
];

export default function TicketsPage() {
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
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-pink-500"></div>
            <div className="w-2 h-2 rounded-full bg-pink-500 box-glow-pink"></div>
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-pink-500"></div>
          </div>
          <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl tracking-widest uppercase text-center botb-title-glitch" data-text="Tickets">
            Tickets
          </h2>
          <p className="font-rajdhani text-base md:text-lg text-gray-300 tracking-[0.15em] uppercase mt-4 text-center max-w-2xl">
            Kies jouw ticket en wees erbij op de mat
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
              className={`relative flex flex-col rounded-xl border backdrop-blur-md p-8 transition-all duration-500 hover:-translate-y-2 group ${
                ticket.accent === 'cyan'
                  ? 'border-cyan-500/30 bg-cyan-950/20 hover:border-cyan-400/60 shadow-[0_0_20px_rgba(34,211,238,0.05)] hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]'
                  : ticket.accent === 'pink'
                  ? 'border-pink-500/30 bg-pink-950/20 hover:border-pink-400/60 shadow-[0_0_20px_rgba(236,72,153,0.05)] hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]'
                  : 'border-purple-500/30 bg-purple-950/20 hover:border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.05)] hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]'
              }`}
            >
              {ticket.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-pink-600 text-white font-orbitron text-xs tracking-[0.2em] uppercase rounded-full box-glow-pink">
                  Populair
                </div>
              )}

              <h2 className={`font-orbitron text-xl md:text-2xl font-bold tracking-[0.15em] uppercase mb-2 ${
                ticket.accent === 'cyan' ? 'text-cyan-400 text-glow-cyan' :
                ticket.accent === 'pink' ? 'text-pink-400 text-glow-pink' :
                'text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]'
              }`}>
                {ticket.name}
              </h2>

              <p className="font-rajdhani text-sm text-gray-400 mb-6 leading-relaxed">
                {ticket.description}
              </p>

              <div className={`font-orbitron text-4xl md:text-5xl font-black mb-8 ${
                ticket.accent === 'cyan' ? 'text-cyan-300' :
                ticket.accent === 'pink' ? 'text-pink-300' :
                'text-purple-300'
              }`}>
                {ticket.price}
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {ticket.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 font-rajdhani text-sm">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      ticket.accent === 'cyan' ? 'bg-cyan-400' :
                      ticket.accent === 'pink' ? 'bg-pink-400' :
                      'bg-purple-400'
                    }`}></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`vhs-button w-full py-3 px-6 font-orbitron text-sm font-bold tracking-[0.15em] uppercase rounded-lg transition-all duration-300 ${
                ticket.accent === 'cyan'
                  ? 'vhs-button-cyan bg-[#0a0514]/60 text-cyan-400 border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-950/60'
                  : ticket.accent === 'pink'
                  ? 'vhs-button-pink bg-pink-600/90 text-white hover:bg-pink-500'
                  : 'bg-purple-600/80 text-white border border-purple-500/50 hover:bg-purple-500/80 hover:border-purple-400'
              }`}>
                <span className="vhs-text relative z-10" data-text="Bestel Nu">Bestel Nu</span>
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
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>
          <p className="font-rajdhani text-sm text-gray-500 tracking-wider uppercase">
            Alle tickets zijn inclusief BTW • Geen restitutie mogelijk • 18+
          </p>
        </motion.div>
      </div>
    </>
  );
}
