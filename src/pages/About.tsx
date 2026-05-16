import PageLayout from '../components/PageLayout';
import { useLang } from '../LangContext';

export default function About() {
  const { t } = useLang();
  
  return (
    <PageLayout title={t('footerAbout') || "About Us"}>
      <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base leading-relaxed opacity-90">
        <p>
          Het idee voor het evenement Best Of The Best ontstond in 2024 en werd in 2025 en 2026 verder ontwikkeld en uitgewerkt tot een professioneel concept, met als doel een nieuwe standaard neer te zetten binnen de Nederlandse Brazilian Jiu-Jitsu scene.
        </p>
        <p>
          Wij bestaan uit een team van vier gedreven professionals met een sterke passie voor Brazilian Jiu-Jitsu en evenementenorganisatie. Dankzij onze ervaring, visie en toewijding streven wij ernaar het sportevenement Best Of The Best naar een hoger niveau te tillen en een nieuwe standaard neer te zetten binnen de Europese Brazilian Jiu-Jitsu community.
        </p>

        <div className="border-l-4 border-synth-pink pl-6 py-4 my-10 bg-synth-pink/5">
          <h2 className="font-orbitron text-xl text-synth-pink mb-2">Missie</h2>
          <p className="italic text-lg">
            Het bevorderen van de groei en ontwikkeling van de sport Brazilian Jiu-Jitsu door atleten, partners en bezoekers hoogwaardige diensten en unieke ervaringen te bieden. Daarnaast streven wij ernaar een gezonde sociale, sportieve en culturele uitwisseling mogelijk te maken binnen de internationale BJJ-community.
          </p>
        </div>

        <h2 className="font-orbitron text-xl text-synth-blue mt-8 mb-4">Visie</h2>
        <p>
          Uitgroeien tot dé toonaangevende organisatie op het gebied van Brazilian Jiu-Jitsu evenementen en competitieorganisatie binnen Europa. Dit realiseren wij door de sport naar een hoger niveau te tillen, sterke verbindingen met de community op te bouwen en bij te dragen aan een betere kwaliteit van leven voor iedereen die betrokken is bij onze organisatie.
        </p>

        <h2 className="font-orbitron text-xl text-synth-blue mt-8 mb-4">Kernwaarden</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Innovatie</li>
          <li>Betrouwbaarheid</li>
          <li>Professionaliteit</li>
          <li>Integriteit en ethiek</li>
          <li>Competitiviteit</li>
          <li>Kwaliteit</li>
          <li>Toegevoegde waarde</li>
          <li>Menselijke prestaties en ontwikkeling</li>
        </ul>

        <h2 className="font-orbitron text-xl text-synth-blue mt-8 mb-4">Waar wij continu naar streven</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Excellentie</li>
          <li>Ethisch en transparant handelen</li>
          <li>Maatschappelijke verantwoordelijkheid</li>
          <li>Respect</li>
          <li>Passie voor ons vak</li>
        </ul>

        <p className="mt-8">
          Wij versterken de waarde van onze atleten, sponsors, partners en supporters door verwachtingen te overtreffen, behoeften centraal te stellen en duurzame waarde toe te voegen aan de relatie tussen ons merk en onze community.
        </p>
        <p>
          Wij geloven in ons unieke en transparante proces voor het organiseren van evenementen. Best Of The Best is de eerste van vele evenementen die nog zullen volgen. Hiermee creëren wij professionele, spannende en uitstekend gestructureerde competities die bijdragen aan de verdere groei van Brazilian Jiu-Jitsu binnen Nederland, Europa en daarbuiten.
        </p>
      </div>
    </PageLayout>
  );
}
