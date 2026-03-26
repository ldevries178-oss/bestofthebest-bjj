import PageLayout from '../components/PageLayout';
import { useLang } from '../LangContext';

export default function About() {
  const { t } = useLang();
  
  return (
    <PageLayout title={t('footerAbout') || "About Us"}>
      <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base leading-relaxed opacity-90">
        <p>
          "Best of the Best BJJ Edition" is more than just a competition – it's a retro-futuristic spectacle 
          celebrating the art of grappling through the lens of 80s synthwave aesthetics.
        </p>
        <div className="border-l-4 border-synth-pink pl-6 py-4 my-10 bg-synth-pink/5">
          <p className="font-orbitron italic text-lg text-synth-pink">
            The ultimate blend of top-tier Jiu Jitsu and immersive neon visuals.
          </p>
        </div>
        <p>
          Our mission is to push the boundaries of how combat sports events are presented, creating 
          an unforgettable experience for both athletes and spectators. We invite the absolute elite 
          to prove themselves under the neon lights.
        </p>
        <p>Location: Brussels, Belgium. Vision: Global.</p>
      </div>
    </PageLayout>
  );
}
