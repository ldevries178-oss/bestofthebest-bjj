import PageLayout from '../components/PageLayout';
import { useLang } from '../LangContext';

// Beide logo's delen dezelfde hoogte zodat ze even groot ogen.
const partners = [
  { name: 'LV Media', logo: '/images/andregalvao/media/lv-media.png', url: 'https://www.lvmedia.nl' },
  { name: 'Sprint Studio', logo: '/images/andregalvao/media/sprint-studio-icon.png', url: 'https://www.sprintstudio.nl/' },
];

export default function Sponsors() {
  const { t } = useLang();
  
  return (
    <PageLayout title={t('navSponsors') || "Sponsors"}>
      <div className="text-center py-12 space-y-8">
        <p className="max-w-xl mx-auto text-lg md:text-xl">
          {t('sponsors_text')} 
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 py-6">
          {partners.map(partner => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={partner.name}
              className="opacity-90 hover:opacity-100 hover:scale-105 transition-all"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 md:h-24 w-auto object-contain"
              />
            </a>
          ))}
        </div>
        <div className="pt-12 flex flex-col items-center justify-center space-y-4">
          <a 
            href="mailto:info@bestofthebestbjj.com" 
            className="inline-block px-10 py-4 font-orbitron font-bold text-synth-blue border-2 border-synth-blue rounded-full shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:bg-synth-blue hover:text-black transition-all"
          >
            {t('sponsors_cta')}
          </a>
          <p className="text-synth-blue font-orbitron opacity-80">
            info@bestofthebestbjj.com
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
