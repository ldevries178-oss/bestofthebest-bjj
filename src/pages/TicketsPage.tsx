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
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-purple-400"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
          <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl tracking-widest uppercase text-center text-purple-700">
            {t('ticketsTitle')}
          </h2>
          <p className="font-rajdhani text-base md:text-lg text-purple-400 tracking-[0.15em] uppercase mt-4 text-center max-w-2xl">
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
              className={`relative flex flex-col rounded-xl border bg-white p-8 transition-all duration-500 hover:-translate-y-2 group shadow-sm hover:shadow-lg ${
                ticket.accent === 'cyan'
                  ? 'border-cyan-200 hover:border-cyan-400 hover:shadow-cyan-100/50'
                  : ticket.accent === 'pink'
                  ? 'border-pink-200 hover:border-pink-400 hover:shadow-pink-100/50'
                  : 'border-purple-200 hover:border-purple-400 hover:shadow-purple-100/50'
              }`}
            >
              {ticket.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-pink-500 text-white font-orbitron text-xs tracking-[0.2em] uppercase rounded-full shadow-md">
                  {t('popular')}
                </div>
              )}

              <h2 className={`font-orbitron text-xl md:text-2xl font-bold tracking-[0.15em] uppercase mb-2 ${
                ticket.accent === 'cyan' ? 'text-cyan-600' :
                ticket.accent === 'pink' ? 'text-pink-600' :
                'text-purple-600'
              }`}>
                {ticket.name}
              </h2>

              <p className="font-rajdhani text-sm text-gray-500 mb-6 leading-relaxed">
                {ticket.description}
              </p>

              <div className={`font-orbitron text-4xl md:text-5xl font-black mb-8 ${
                ticket.accent === 'cyan' ? 'text-cyan-600' :
                ticket.accent === 'pink' ? 'text-pink-600' :
                'text-purple-600'
              }`}>
                {ticket.price}
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {ticket.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 font-rajdhani text-sm">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      ticket.accent === 'cyan' ? 'bg-cyan-500' :
                      ticket.accent === 'pink' ? 'bg-pink-500' :
                      'bg-purple-500'
                    }`}></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 font-orbitron text-sm font-bold tracking-[0.15em] uppercase rounded-lg transition-all duration-300 cursor-pointer ${
                ticket.accent === 'cyan'
                  ? 'bg-white text-cyan-600 border-2 border-cyan-300 hover:bg-cyan-50 hover:border-cyan-500'
                  : ticket.accent === 'pink'
                  ? 'bg-pink-500 text-white border-none hover:bg-pink-600 shadow-md'
                  : 'bg-purple-600 text-white border-none hover:bg-purple-700 shadow-md'
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
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-purple-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-purple-300"></div>
          </div>
          <p className="font-rajdhani text-sm text-gray-400 tracking-wider uppercase">
            {t('ticketsFooter')}
          </p>
        </motion.div>
      </div>
    </>
  );
}
