export type Lang = 'en' | 'nl' | 'fr' | 'de';

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    tickets: 'Tickets',
    lineup: 'Line-up',
    locatie: 'Location',
    contact: 'Contact',

    // Hero
    theUltimateEvent: 'The Ultimate Event',
    heroSubtitle: 'The ultimate confrontation on the mat. Experience the retro-futuristic fight.',
    slogan: 'The Ultimate Grappling Championship.',
    teamsAdmissions: 'Team Admissions',
    buyTickets: 'Buy Tickets',
    viewLineup: 'View Line-up',
    smoothcompCta: 'Athletes sign up via Smoothcomp',

    // Vertical Nav
    navTournament: 'The Tournament March 21, 2027',
    navSmoothcomp: 'Athletes via Smoothcomp',
    navTeams: 'Team Admissions',
    navSponsors: 'Sponsors',
    navContact: 'Contact',

    // Footer Extras
    footerAbout: 'About us',
    footerPress: 'Press & Mediakit',

    // Tickets
    ticketsTitle: 'Tickets',
    ticketsSubtitle: 'Choose your ticket and be there on the mat',
    earlyBird: 'Early Bird',
    earlyBirdDesc: 'Limited availability – for the real fans who are early.',
    earlyBirdF1: 'Access to the event',
    earlyBirdF2: 'Free welcome drink',
    earlyBirdF3: 'Early Bird goodie bag',
    regulier: 'Regular',
    regulierDesc: 'Standard access to Best of the Best BJJ Edition.',
    regulierF1: 'Access to the event',
    regulierF2: 'Access to all matches',
    regulierF3: 'Food & drinks available',
    vip: 'VIP',
    vipDesc: 'The ultimate experience – front row with exclusive privileges.',
    vipF1: 'Priority entry',
    vipF2: 'VIP stand with best view',
    vipF3: 'All-inclusive food & drinks',
    vipF4: 'Meet & greet with fighters',
    vipF5: 'Exclusive VIP shirt',
    popular: 'Popular',
    orderNow: 'Order Now',
    ticketsFooter: 'All tickets include VAT • No refunds • 18+',

    // Line-up
    lineupTitle: 'Line-up',
    lineupSubtitle: 'The best fighters in the world – ready for battle',
    record: 'Record',
    blackBelt: 'Black Belt',
    brownBelt: 'Brown Belt',
    moreFighters: 'More fighters will be announced soon • Follow us for updates',

    // Locatie
    locatieTitle: 'Location',
    locatieSubtitle: 'AFAS Live — The heart of Amsterdam Southeast',
    address: 'Address',
    dateTime: 'Date & Time',
    dateTimeLine1: 'Saturday 12 July 2026',
    dateTimeLine2: 'Doors open: 18:00',
    dateTimeLine3: 'Start: 19:00',
    publicTransport: 'Public Transport',
    ptLine1: 'Metro 54: Strandvliet Station',
    ptLine2: '5 min walk from the station',
    ptLine3: 'Bus 46 & 47 stop at the door',
    byCar: 'By Car',
    carLine1: 'A2 / A9 towards Amsterdam Arena',
    carLine2: 'Parking garage P1 Arena',
    carLine3: '€10 daily rate',
    capacity: 'Capacity: 6,000 seats • Indoor arena',
    openInMaps: 'Open in Maps',

    // Footer
    copyright: '© 2026 Best of the Best BJJ Edition. All rights reserved.',
    tos: 'Terms & Conditions',
    privacy: 'Privacy Policy',
    backToHome: 'BACK TO HOME',

    // About Page
    about_intro1: 'The idea for the event Best Of The Best originated in 2024 and was further developed and elaborated in 2025 and 2026 into a professional concept, with the aim of setting a new standard within the Dutch Brazilian Jiu-Jitsu scene.',
    about_intro2: 'We consist of a team of four driven professionals with a strong passion for Brazilian Jiu-Jitsu and event organization. Thanks to our experience, vision and dedication, we strive to take the Best Of The Best sports event to a higher level and set a new standard within the European Brazilian Jiu-Jitsu community.',
    about_mission_title: 'Mission',
    about_mission_text: 'Promoting the growth and development of the sport of Brazilian Jiu-Jitsu by providing high-quality services and unique experiences to athletes, partners and visitors. In addition, we strive to facilitate a healthy social, athletic and cultural exchange within the international BJJ community.',
    about_vision_title: 'Vision',
    about_vision_text: 'To grow into the leading organization in the field of Brazilian Jiu-Jitsu events and competition organization within Europe. We realize this by taking the sport to a higher level, building strong connections with the community and contributing to a better quality of life for everyone involved in our organization.',
    about_core_values_title: 'Core Values',
    about_core_values_1: 'Innovation',
    about_core_values_2: 'Reliability',
    about_core_values_3: 'Professionalism',
    about_core_values_4: 'Integrity and ethics',
    about_core_values_5: 'Competitiveness',
    about_core_values_6: 'Quality',
    about_core_values_7: 'Added value',
    about_core_values_8: 'Human performance and development',
    about_strive_title: 'What we continuously strive for',
    about_strive_1: 'Excellence',
    about_strive_2: 'Acting ethically and transparently',
    about_strive_3: 'Social responsibility',
    about_strive_4: 'Respect',
    about_strive_5: 'Passion for our profession',
    about_outro1: 'We strengthen the value of our athletes, sponsors, partners and supporters by exceeding expectations, putting needs first and adding sustainable value to the relationship between our brand and our community.',
    about_outro2: 'We believe in our unique and transparent process for organizing events. Best Of The Best is the first of many events yet to come. With this we create professional, exciting and excellently structured competitions that contribute to the further growth of Brazilian Jiu-Jitsu within the Netherlands, Europe and beyond.',

    // Terms Page
    terms_agreement_title: 'Agreement',
    terms_agreement_text: 'By using this website, you agree to comply with our terms of service. Best of the Best BJJ is a Dutch organization in the Netherlands. All events are subject to safety protocols and athlete codes of conduct.',
    terms_refund_title: 'Refund Policy',
    terms_refund_text: 'Tickets are generally non-refundable unless the event is cancelled or rescheduled. Athlete registrations follow specific team guidelines.',
    terms_jurisdiction_title: 'Jurisdiction',
    terms_jurisdiction_text: 'This agreement is governed by the laws of the Netherlands.',

    // Privacy Page
    privacy_data_title: 'Data Collection',
    privacy_data_text: 'We only collect data necessary for event registrations and newsletter updates. This typically includes names, emails, and belt ranks for athletes.',
    privacy_thirdparty_title: 'Third-Party Tools',
    privacy_thirdparty_text: 'We use Smoothcomp for athlete management. Their privacy policies apply to registrations made on their platform.',
    privacy_gdpr_title: 'GDPR Compliance',
    privacy_gdpr_text: 'We respect your privacy under the GDPR (General Data Protection Regulation). You have the right to request deletion of your data at any time.',

    // Tournament Page
    tournament_p1: 'March 21, 2027 – Save the date. Best of the Best BJJ Edition returns for the most prestigious grappling event of the year. A retro-futuristic stage where the finest athletes collide in a high-stakes synthwave atmosphere.',
    tournament_venue_title: 'Venue',
    tournament_venue_text: 'Pierre de Coubertinplein 4, 1362 LB Almere\nEvent time: 08:00 to 19:00',
    tournament_format_title: 'Format',
    tournament_format_text: 'Morning: 1 vs 1 BJJ competition\nAfternoon: Main event, Team vs Team',

    // Sponsors Page
    sponsors_text: 'Join the BJJ revolution. Partner with the most spectacular grappling event in the Netherlands and become part of a movement that is redefining the sport. Step in early as an official partner and grow alongside one of the fastest rising events in European grappling.',
    sponsors_cta: 'BECOME A SPONSOR',

    // Press Page
    press_quote: 'Cover the BJJ revolution. Gain exclusive access to one of the most spectacular grappling event in the Netherlands and follow the rise of a movement that is reshaping the sport. From elite 1vs 1 matchups to a unique team based format, this is where the next chapter of European grappling begins.',
    press_kit_title: 'LOGOS & COLOR PALETTE',
    press_kit_text: 'High-res PNG & SVG files including neon effects.',
    press_kit_btn: 'DOWNLOAD KIT (ZIP)',
    press_release_title: 'OFFICIAL PRESS RELEASE',
    press_release_text: 'Full schedule and athlete lineup announcements.',
    press_release_btn: 'DOWNLOAD PDF',
    press_inquiries: 'For press inquiries: info@bestofthebestbjj.com',

    // Team Admissions Page
    teams_subtitle: 'Register your team for 2027.',
    teams_teamname: 'Team Name',
    teams_contact: 'Contact Person',
    teams_email: 'Email Address',
    teams_experience: 'Experience Level',
    teams_experience_placeholder: "Briefly describe your team's background...",
    teams_submit: 'SEND APPLICATION',

    // Contact Page
    contact_subtitle: 'Reach out for any questions or inquiries.',
    contact_fullname: 'Full Name',
    contact_email: 'Email Address',
    contact_message: 'Your Message',
    contact_message_placeholder: 'How can we help you?',
    contact_submit: 'SEND MESSAGE',

    // Rules Page
    footerRules: 'Rules',
    rules_title: 'RULES',
    rules_content_1: 'Team versus Team format follows the CJI x Quintet ruleset.',
    rules_content_2: 'The Absolutes follow the ADCC ruleset.',
    rules_content_3: 'Round Robin follows the ADCC ruleset.',
    rules_subtext: 'As an organization, we like to adhere to known and recognized rulesets. However, the safety of our participants is always our highest priority. Until the event, some changes to the rules may therefore be implemented to ensure the safety of all participants. Even within official rulesets, there are techniques and situations that carry an increased risk of injury. Where necessary, we reserve the right to modify or exclude such components. Any changes will be communicated to all participants in a timely manner.',
  },

  nl: {
    // Navigation
    home: 'Home',
    about: 'About',
    tickets: 'Tickets',
    lineup: 'Line-up',
    locatie: 'Locatie',
    contact: 'Contact',

    // Hero
    theUltimateEvent: 'The Ultimate Event',
    heroSubtitle: 'De ultieme confrontatie op de mat. Ervaar de retro-futuristische strijd.',
    slogan: 'The Ultimate Grappling Championship.',
    teamsAdmissions: 'Team Admissions',
    buyTickets: 'Koop Tickets',
    viewLineup: 'Bekijk Line-up',
    smoothcompCta: 'Athleten Schrijf je in via Smoothcomp',

    // Vertical Nav
    navTournament: 'Het toernooi 21 maart 2027',
    navSmoothcomp: 'Athleten via Smoothcomp',
    navTeams: 'Team Admissions',
    navSponsors: 'Sponsors',
    navContact: 'Contact',

    // Footer Extras
    footerAbout: 'Over ons',
    footerPress: 'Pers & Mediakit',

    // Tickets
    ticketsTitle: 'Tickets',
    ticketsSubtitle: 'Kies jouw ticket en wees erbij op de mat',
    earlyBird: 'Early Bird',
    earlyBirdDesc: 'Beperkt beschikbaar – voor de echte fans die er vroeg bij zijn.',
    earlyBirdF1: 'Toegang tot het evenement',
    earlyBirdF2: 'Gratis welkomstdrankje',
    earlyBirdF3: 'Early Bird goodiebag',
    regulier: 'Regulier',
    regulierDesc: 'Standaard toegang tot Best of the Best BJJ Edition.',
    regulierF1: 'Toegang tot het evenement',
    regulierF2: 'Toegang tot alle wedstrijden',
    regulierF3: 'Food & drinks beschikbaar',
    vip: 'VIP',
    vipDesc: 'De ultieme ervaring – vooraan bij de actie met exclusieve privileges.',
    vipF1: 'Voorrang bij binnenkomst',
    vipF2: 'VIP-tribune met beste zicht',
    vipF3: 'All-inclusive food & drinks',
    vipF4: 'Meet & greet met fighters',
    vipF5: 'Exclusief VIP-shirt',
    popular: 'Populair',
    orderNow: 'Bestel Nu',
    ticketsFooter: 'Alle tickets zijn inclusief BTW • Geen restitutie mogelijk • 18+',

    // Line-up
    lineupTitle: 'Line-up',
    lineupSubtitle: 'De beste fighters van de wereld – klaar voor de strijd',
    record: 'Record',
    blackBelt: 'Zwarte Band',
    brownBelt: 'Bruine Band',
    moreFighters: 'Meer fighters worden binnenkort aangekondigd • Volg ons voor updates',

    // Locatie
    locatieTitle: 'Locatie',
    locatieSubtitle: 'AFAS Live — Het hart van Amsterdam Southeast',
    address: 'Adres',
    dateTime: 'Datum & Tijd',
    dateTimeLine1: 'Zaterdag 12 juli 2026',
    dateTimeLine2: 'Deuren open: 18:00',
    dateTimeLine3: 'Start: 19:00',
    publicTransport: 'Met OV',
    ptLine1: 'Metro 54: Station Strandvliet',
    ptLine2: '5 min lopen vanaf het station',
    ptLine3: 'Bus 46 & 47 stoppen voor de deur',
    byCar: 'Met de Auto',
    carLine1: 'A2 / A9 richting Amsterdam Arena',
    carLine2: 'Parkeergarage P1 Arena',
    carLine3: '€10 dagtarief parkeren',
    capacity: 'Capaciteit: 6.000 plaatsen • Indoor arena',
    openInMaps: 'Open in Maps',

    // Footer
    copyright: '© 2026 Best of the Best BJJ Edition. Alle rechten voorbehouden.',
    tos: 'Algemene Voorwaarden',
    privacy: 'Privacybeleid',
    backToHome: 'TERUG NAAR HOME',

    // Over ons Page (NL)
    about_intro1: 'Het idee voor het evenement Best Of The Best ontstond in 2024 en werd in 2025 en 2026 verder ontwikkeld en uitgewerkt tot een professioneel concept, met als doel een nieuwe standaard neer te zetten binnen de Nederlandse Brazilian Jiu-Jitsu scene.',
    about_intro2: 'Wij bestaan uit een team van vier gedreven professionals met een sterke passie voor Brazilian Jiu-Jitsu en evenementenorganisatie. Dankzij onze ervaring, visie en toewijding streven wij ernaar het sportevenement Best Of The Best naar een hoger niveau te tillen en een nieuwe standaard neer te zetten binnen de Europese Brazilian Jiu-Jitsu community.',
    about_mission_title: 'Missie',
    about_mission_text: 'Het bevorderen van de groei en ontwikkeling van de sport Brazilian Jiu-Jitsu door atleten, partners en bezoekers hoogwaardige diensten en unieke ervaringen te bieden. Daarnaast streven wij ernaar een gezonde sociale, sportieve en culturele uitwisseling mogelijk te maken binnen de internationale BJJ-community.',
    about_vision_title: 'Visie',
    about_vision_text: 'Uitgroeien tot dé toonaangevende organisatie op het gebied van Brazilian Jiu-Jitsu evenementen en competitieorganisatie binnen Europa. Dit realiseren wij door de sport naar een hoger niveau te tillen, sterke verbindingen met de community op te bouwen en bij te dragen aan een betere kwaliteit van leven voor iedereen die betrokken is bij onze organisatie.',
    about_core_values_title: 'Kernwaarden',
    about_core_values_1: 'Innovatie',
    about_core_values_2: 'Betrouwbaarheid',
    about_core_values_3: 'Professionaliteit',
    about_core_values_4: 'Integriteit en ethiek',
    about_core_values_5: 'Competitiviteit',
    about_core_values_6: 'Kwaliteit',
    about_core_values_7: 'Toegevoegde waarde',
    about_core_values_8: 'Menselijke prestaties en ontwikkeling',
    about_strive_title: 'Waar wij continu naar streven',
    about_strive_1: 'Excellentie',
    about_strive_2: 'Ethisch en transparant handelen',
    about_strive_3: 'Maatschappelijke verantwoordelijkheid',
    about_strive_4: 'Respect',
    about_strive_5: 'Passie voor ons vak',
    about_outro1: 'Wij versterken de waarde van onze atleten, sponsors, partners en supporters door verwachtingen te overtreffen, behoeften centraal te stellen en duurzame waarde toe te voegen aan de relatie tussen ons merk en onze community.',
    about_outro2: 'Wij geloven in ons unieke en transparante proces voor het organiseren van evenementen. Best Of The Best is de eerste van vele evenementen die nog zullen volgen. Hiermee creëren wij professionele, spannende en uitstekend gestructureerde competities die bijdragen aan de verdere groei van Brazilian Jiu-Jitsu binnen Nederland, Europa en daarbuiten.',

    // Algemene Voorwaarden Page (NL)
    terms_agreement_title: 'Overeenkomst',
    terms_agreement_text: 'Door deze website te gebruiken, gaat u akkoord met het naleven van onze algemene voorwaarden. Best of the Best BJJ is een Nederlandse organisatie in Nederland. Alle evenementen zijn onderworpen aan veiligheidsprotocollen en gedragscodes voor atleten.',
    terms_refund_title: 'Restitutiebeleid',
    terms_refund_text: 'Tickets zijn over het algemeen niet-restitueerbaar, tenzij het evenement wordt geannuleerd of verzet. Registraties van atleten volgen specifieke teamrichtlijnen.',
    terms_jurisdiction_title: 'Jurisdictie',
    terms_jurisdiction_text: 'Deze overeenkomst wordt beheerst door de wetten van Nederland.',

    // Privacybeleid Page (NL)
    privacy_data_title: 'Gegevensverzameling',
    privacy_data_text: 'Wij verzamelen alleen gegevens die nodig zijn voor evenementregistraties en updates via de nieuwsbrief. Dit omvat doorgaans namen, e-mails en bandrangen voor atleten.',
    privacy_thirdparty_title: 'Tools van derden',
    privacy_thirdparty_text: 'Wij gebruiken Smoothcomp voor het beheer van atleten. Hun privacybeleid is van toepassing op registraties die op hun platform zijn gemaakt.',
    privacy_gdpr_title: 'AVG-naleving',
    privacy_gdpr_text: 'Wij respecteren uw privacy onder de AVG (Algemene Verordening Gegevensbescherming). U heeft het recht om op elk moment om verwijdering van uw gegevens te verzoeken.',

    // Toernooi Page (NL)
    tournament_p1: '21 maart 2027 – Save the date. Best of the Best BJJ Edition keert terug voor het meest prestigieuze grappling-evenement van het jaar. Een retro-futuristisch podium waar de beste atleten samenkomen in een high-stakes synthwave sfeer.',
    tournament_venue_title: 'Locatie',
    tournament_venue_text: 'Pierre de Coubertinplein 4, 1362 LB Almere\nEvenementtijd: 08:00 tot 19:00',
    tournament_format_title: 'Formaat',
    tournament_format_text: 'Ochtend: 1 vs 1 BJJ competitie\nMiddag: Hoofdevenement, Team vs Team',

    // Sponsors Page (NL)
    sponsors_text: 'Word deel van de BJJ-revolutie. Word partner van het meest spectaculaire grappling-evenement in Nederland en maak deel uit van een beweging die de sport herdefinieert. Stap vroeg in als officiële partner en groei mee met een van de snelst stijgende evenementen in Europees grappling.',
    sponsors_cta: 'WORD SPONSOR',

    // Pers Page (NL)
    press_quote: 'Versla de BJJ-revolutie. Krijg exclusieve toegang tot een van de meest spectaculaire grappling-evenementen in Nederland en volg de opkomst van een beweging die de sport hervormt. Van elite 1-tegen-1 wedstrijden tot een uniek teamgebaseerd format, hier begint het volgende hoofdstuk van het Europese grappling.',
    press_kit_title: 'LOGO\'S & KLEURENPALET',
    press_kit_text: 'PNG- en SVG-bestanden in hoge resolutie, inclusief neoneffecten.',
    press_kit_btn: 'DOWNLOAD KIT (ZIP)',
    press_release_title: 'OFFICIEEL PERSBERICHT',
    press_release_text: 'Volledig schema en aankondigingen van atleten-line-up.',
    press_release_btn: 'DOWNLOAD PDF',
    press_inquiries: 'Voor persvragen: info@bestofthebestbjj.com',

    // Team Admissions Page (NL)
    teams_subtitle: 'Schrijf je team in voor 2027.',
    teams_teamname: 'Teamnaam',
    teams_contact: 'Contactpersoon',
    teams_email: 'E-mailadres',
    teams_experience: 'Ervaringsniveau',
    teams_experience_placeholder: 'Beschrijf kort de achtergrond van je team...',
    teams_submit: 'VERZEND AANVRAAG',

    // Contact Page (NL)
    contact_subtitle: 'Neem contact op voor vragen of inlichtingen.',
    contact_fullname: 'Volledige naam',
    contact_email: 'E-mailadres',
    contact_message: 'Uw bericht',
    contact_message_placeholder: 'Hoe kunnen we u helpen?',
    contact_submit: 'BERICHT VERZENDEN',

    // Rules Page
    footerRules: 'Regels',
    rules_title: 'RULES',
    rules_content_1: 'Team versus Team format gaat volgens de CJI x Quintet ruleset.',
    rules_content_2: 'The Absolutes gaan volgens de ADCC ruleset.',
    rules_content_3: 'Round Robin gaat volgens de ADCC ruleset.',
    rules_subtext: 'Wij houden als organisatie graag de bekende en erkende rulesets aan. De veiligheid van onze deelnemers heeft echter altijd de hoogste prioriteit. Tot aan het evenement kunnen er daarom enkele wijzigingen in de regels worden doorgevoerd om de veiligheid van alle deelnemers te waarborgen. Ook binnen de officiële rulesets komen technieken en situaties voor die een verhoogd risico op blessures met zich meebrengen. Waar nodig behouden wij ons het recht voor om dergelijke onderdelen aan te passen of uit te sluiten. Eventuele wijzigingen zullen tijdig aan alle deelnemers worden gecommuniceerd.',
  },

  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À propos',
    tickets: 'Billets',
    lineup: 'Line-up',
    locatie: 'Lieu',
    contact: 'Contact',

    // Hero
    theUltimateEvent: 'The Ultimate Event',
    heroSubtitle: 'L\'ultime confrontation sur le tapis. Vivez le combat rétro-futuriste.',
    slogan: 'The Ultimate Grappling Championship.',
    teamsAdmissions: 'Inscriptions des Équipes',
    buyTickets: 'Acheter des Billets',
    viewLineup: 'Voir le Line-up',
    smoothcompCta: 'Les athlètes s\'inscrivent via Smoothcomp',

    // Vertical Nav
    navTournament: 'Le tournoi 21 mars 2027',
    navSmoothcomp: 'Athlètes via Smoothcomp',
    navTeams: 'Inscriptions des Équipes',
    navSponsors: 'Sponsors',
    navContact: 'Contact',

    // Footer Extras
    footerAbout: 'À propos',
    footerPress: 'Presse & Kit média',

    // Tickets
    ticketsTitle: 'Billets',
    ticketsSubtitle: 'Choisissez votre billet et soyez présent sur le tapis',
    earlyBird: 'Early Bird',
    earlyBirdDesc: 'Disponibilité limitée – pour les vrais fans qui sont en avance.',
    earlyBirdF1: 'Accès à l\'événement',
    earlyBirdF2: 'Boisson de bienvenue gratuite',
    earlyBirdF3: 'Sac cadeau Early Bird',
    regulier: 'Standard',
    regulierDesc: 'Accès standard à Best of the Best BJJ Edition.',
    regulierF1: 'Accès à l\'événement',
    regulierF2: 'Accès à tous les combats',
    regulierF3: 'Nourriture & boissons disponibles',
    vip: 'VIP',
    vipDesc: 'L\'expérience ultime – au premier rang avec des privilèges exclusifs.',
    vipF1: 'Entrée prioritaire',
    vipF2: 'Tribune VIP avec meilleure vue',
    vipF3: 'Nourriture & boissons all-inclusive',
    vipF4: 'Rencontre avec les combattants',
    vipF5: 'T-shirt VIP exclusif',
    popular: 'Populaire',
    orderNow: 'Commander',
    ticketsFooter: 'Tous les billets incluent la TVA • Pas de remboursement • 18+',

    // Line-up
    lineupTitle: 'Line-up',
    lineupSubtitle: 'Les meilleurs combattants du monde – prêts pour le combat',
    record: 'Palmarès',
    blackBelt: 'Ceinture Noire',
    brownBelt: 'Ceinture Marron',
    moreFighters: 'Plus de combattants seront annoncés bientôt • Suivez-nous',

    // Locatie
    locatieTitle: 'Lieu',
    locatieSubtitle: 'AFAS Live — Le cœur du sud-est d\'Amsterdam',
    address: 'Adresse',
    dateTime: 'Date & Heure',
    dateTimeLine1: 'Samedi 12 juillet 2026',
    dateTimeLine2: 'Ouverture des portes : 18h00',
    dateTimeLine3: 'Début : 19h00',
    publicTransport: 'Transports en commun',
    ptLine1: 'Métro 54 : Station Strandvliet',
    ptLine2: '5 min à pied depuis la station',
    ptLine3: 'Bus 46 & 47 s\'arrêtent devant',
    byCar: 'En Voiture',
    carLine1: 'A2 / A9 direction Amsterdam Arena',
    carLine2: 'Parking P1 Arena',
    carLine3: '10 € tarif journalier',
    capacity: 'Capacité : 6 000 places • Salle couverte',
    openInMaps: 'Ouvrir dans Maps',

    // Footer
    copyright: '© 2026 Best of the Best BJJ Edition. Tous droits réservés.',
    tos: 'Conditions Générales',
    privacy: 'Politique de Confidentialité',
    backToHome: 'RETOUR À L\'ACCUEIL',

    // À propos Page (FR)
    about_intro1: 'L\'idée de l\'événement Best Of The Best est née en 2024 et a été développée et élaborée en 2025 et 2026 en un concept professionnel, dans le but d\'établir une nouvelle norme au sein de la scène néerlandaise du Jiu-Jitsu brésilien.',
    about_intro2: 'Nous sommes composés d\'une équipe de quatre professionnels passionnés par le Jiu-Jitsu brésilien et l\'organisation d\'événements. Grâce à notre expérience, notre vision et notre dévouement, nous nous efforçons de hisser l\'événement sportif Best Of The Best à un niveau supérieur et d\'établir une nouvelle norme au sein de la communauté européenne du Jiu-Jitsu brésilien.',
    about_mission_title: 'Mission',
    about_mission_text: 'Promouvoir la croissance et le développement du Jiu-Jitsu brésilien en offrant des services de haute qualité et des expériences uniques aux athlètes, aux partenaires et aux visiteurs. De plus, nous nous efforçons de faciliter un échange social, sportif et culturel sain au sein de la communauté internationale de BJJ.',
    about_vision_title: 'Vision',
    about_vision_text: 'Devenir l\'organisation leader dans le domaine des événements de Jiu-Jitsu brésilien et de l\'organisation de compétitions en Europe. Nous y parvenons en hissant le sport à un niveau supérieur, en établissant des liens solides avec la communauté et en contribuant à une meilleure qualité de vie pour toutes les personnes impliquées dans notre organisation.',
    about_core_values_title: 'Valeurs Fondamentales',
    about_core_values_1: 'Innovation',
    about_core_values_2: 'Fiabilité',
    about_core_values_3: 'Professionnalisme',
    about_core_values_4: 'Intégrité et éthique',
    about_core_values_5: 'Compétitivité',
    about_core_values_6: 'Qualité',
    about_core_values_7: 'Valeur ajoutée',
    about_core_values_8: 'Performance humaine et développement',
    about_strive_title: 'Ce que nous visons continuellement',
    about_strive_1: 'Excellence',
    about_strive_2: 'Agir de manière éthique et transparente',
    about_strive_3: 'Responsabilité sociale',
    about_strive_4: 'Respect',
    about_strive_5: 'Passion pour notre métier',
    about_outro1: 'Nous renforçons la valeur de nos athlètes, sponsors, partenaires et supporters en dépassant les attentes, en priorisant les besoins et en ajoutant une valeur durable à la relation entre notre marque et notre communauté.',
    about_outro2: 'Nous croyons en notre processus unique et transparent d\'organisation d\'événements. Best Of The Best est le premier de nombreux événements à venir. Ainsi, nous créons des compétitions professionnelles, passionnantes et excellemment structurées qui contribuent à la croissance du Jiu-Jitsu brésilien aux Pays-Bas, en Europe et au-delà.',

    // Conditions Générales Page (FR)
    terms_agreement_title: 'Accord',
    terms_agreement_text: 'En utilisant ce site web, vous acceptez de vous conformer à nos conditions d\'utilisation. Best of the Best BJJ est une organisation néerlandaise aux Pays-Bas. Tous les événements sont soumis à des protocoles de sécurité et à des codes de conduite pour les athlètes.',
    terms_refund_title: 'Politique de remboursement',
    terms_refund_text: 'Les billets sont généralement non remboursables, sauf si l\'événement est annulé ou reporté. Les inscriptions des athlètes suivent les directives spécifiques de l\'équipe.',
    terms_jurisdiction_title: 'Juridiction',
    terms_jurisdiction_text: 'Cet accord est régi par les lois des Pays-Bas.',

    // Politique de Confidentialité Page (FR)
    privacy_data_title: 'Collecte de données',
    privacy_data_text: 'Nous ne collectons que les données nécessaires aux inscriptions aux événements et aux mises à jour de la newsletter. Cela comprend généralement les noms, les e-mails et les grades de ceinture pour les athlètes.',
    privacy_thirdparty_title: 'Outils tiers',
    privacy_thirdparty_text: 'Nous utilisons Smoothcomp pour la gestion des athlètes. Leurs politiques de confidentialité s\'appliquent aux inscriptions effectuées sur leur plateforme.',
    privacy_gdpr_title: 'Conformité RGPD',
    privacy_gdpr_text: 'Nous respectons votre vie privée dans le cadre du RGPD (Règlement Général sur la Protection des Données). Vous avez le droit de demander la suppression de vos données à tout moment.',

    // Tournoi Page (FR)
    tournament_p1: '21 mars 2027 – Retenez la date. Best of the Best BJJ Edition revient pour l\'événement de grappling le plus prestigieux de l\'année. Une scène rétro-futuriste où les meilleurs athlètes se rencontrent dans une atmosphère synthwave à enjeux élevés.',
    tournament_venue_title: 'Lieu',
    tournament_venue_text: 'Pierre de Coubertinplein 4, 1362 LB Almere\nHeure de l\'événement: 08:00 à 19:00',
    tournament_format_title: 'Format',
    tournament_format_text: 'Matin: Compétition BJJ 1 vs 1\nAprès-midi: Événement principal, Équipe vs Équipe',

    // Sponsors Page (FR)
    sponsors_text: 'Rejoignez la révolution BJJ. Devenez partenaire de l\'événement de grappling le plus spectaculaire des Pays-Bas et faites partie d\'un mouvement qui redéfinit le sport. Engagez-vous tôt en tant que partenaire officiel et grandissez avec l\'un des événements à la croissance la plus rapide du grappling européen.',
    sponsors_cta: 'DEVENIR SPONSOR',

    // Presse Page (FR)
    press_quote: 'Couvrez la révolution BJJ. Obtenez un accès exclusif à l\'un des événements de grappling les plus spectaculaires des Pays-Bas et suivez l\'essor d\'un mouvement qui remodèle le sport. Des matchs d\'élite 1vs1 à un format unique par équipe, c\'est ici que commence le prochain chapitre du grappling européen.',
    press_kit_title: 'LOGOS & PALETTE DE COULEURS',
    press_kit_text: 'Fichiers PNG et SVG haute résolution incluant des effets néon.',
    press_kit_btn: 'TÉLÉCHARGER LE KIT (ZIP)',
    press_release_title: 'COMMUNIQUÉ DE PRESSE OFFICIEL',
    press_release_text: 'Programme complet et annonces de la liste des athlètes.',
    press_release_btn: 'TÉLÉCHARGER LE PDF',
    press_inquiries: 'Pour les demandes de presse : info@bestofthebestbjj.com',

    // Inscriptions Équipes Page (FR)
    teams_subtitle: 'Inscrivez votre équipe pour 2027.',
    teams_teamname: 'Nom de l\'équipe',
    teams_contact: 'Personne de contact',
    teams_email: 'Adresse e-mail',
    teams_experience: 'Niveau d\'expérience',
    teams_experience_placeholder: 'Décrivez brièvement le parcours de votre équipe...',
    teams_submit: 'ENVOYER LA CANDIDATURE',

    // Contact Page (FR)
    contact_subtitle: 'Contactez-nous pour toute question ou demande.',
    contact_fullname: 'Nom complet',
    contact_email: 'Adresse e-mal',
    contact_message: 'Votre message',
    contact_message_placeholder: 'Comment pouvons-nous vous aider ?',
    contact_submit: 'ENVOYER LE MESSAGE',

    // Rules Page
    footerRules: 'Règles',
    rules_title: 'RÈGLES',
    rules_content_1: 'Le format Team versus Team suit les règles CJI x Quintet.',
    rules_content_2: 'The Absolutes suivent les règles ADCC.',
    rules_content_3: 'Le Round Robin suit les règles ADCC.',
    rules_subtext: 'En tant qu\'organisation, nous aimons adhérer aux règles connues et reconnues. Cependant, la sécurité de nos participants est toujours notre priorité absolue. Jusqu\'à l\'événement, certaines modifications des règles peuvent donc être mises en œuvre pour assurer la sécurité de tous les participants. Même dans les règles officielles, il existe des techniques et des situations qui comportent un risque accru de blessure. Si nécessaire, nous nous réservons le droit de modifier ou d\'exclure ces éléments. Tout changement sera communiqué à tous les participants en temps utile.',
  },

  de: {
    // Navigation
    home: 'Startseite',
    about: 'Über uns',
    tickets: 'Tickets',
    lineup: 'Line-up',
    locatie: 'Standort',
    contact: 'Kontakt',

    // Hero
    theUltimateEvent: 'Das ultimative Event',
    heroSubtitle: 'Die ultimative Konfrontation auf der Matte. Erlebe den retro-futuristischen Kampf.',
    slogan: 'The Ultimate Grappling Championship.',
    teamsAdmissions: 'Team-Anmeldungen',
    buyTickets: 'Tickets Kaufen',
    viewLineup: 'Line-up Ansehen',
    smoothcompCta: 'Athleten melden sich über Smoothcomp an',

    // Vertical Nav
    navTournament: 'Das Turnier 21. März 2027',
    navSmoothcomp: 'Athleten über Smoothcomp',
    navTeams: 'Team-Anmeldungen',
    navSponsors: 'Sponsoren',
    navContact: 'Kontakt',

    // Footer Extras
    footerAbout: 'Über uns',
    footerPress: 'Presse & Medienkit',

    // Tickets
    ticketsTitle: 'Tickets',
    ticketsSubtitle: 'Wähle dein Ticket und sei auf der Matte dabei',
    earlyBird: 'Frühbucher',
    earlyBirdDesc: 'Begrenzte Verfügbarkeit – für die echten Fans, die früh dran sind.',
    earlyBirdF1: 'Zugang zum Event',
    earlyBirdF2: 'Kostenloses Begrüßungsgetränk',
    earlyBirdF3: 'Frühbucher-Goodie-Bag',
    regulier: 'Regulär',
    regulierDesc: 'Standardzugang zur Best of the Best BJJ Edition.',
    regulierF1: 'Zugang zum Event',
    regulierF2: 'Zugang zu allen Kämpfen',
    regulierF3: 'Essen & Getränke verfügbar',
    vip: 'VIP',
    vipDesc: 'Das ultimative Erlebnis – erste Reihe mit exklusiven Privilegien.',
    vipF1: 'Bevorzugter Einlass',
    vipF2: 'VIP-Tribüne mit bester Sicht',
    vipF3: 'All-inclusive Essen & Getränke',
    vipF4: 'Meet & Greet mit den Kämpfern',
    vipF5: 'Exklusives VIP-Shirt',
    popular: 'Beliebt',
    orderNow: 'Jetzt Bestellen',
    ticketsFooter: 'Alle Tickets inkl. MwSt. • Keine Rückerstattung • 18+',

    // Line-up
    lineupTitle: 'Line-up',
    lineupSubtitle: 'Die besten Kämpfer der Welt – bereit für den Kampf',
    record: 'Bilanz',
    blackBelt: 'Schwarzgurt',
    brownBelt: 'Braungurt',
    moreFighters: 'Weitere Kämpfer werden bald bekannt gegeben • Folge uns',

    // Locatie
    locatieTitle: 'Standort',
    locatieSubtitle: 'AFAS Live — Das Herz von Amsterdam Südost',
    address: 'Adresse',
    dateTime: 'Datum & Uhrzeit',
    dateTimeLine1: 'Samstag, 12. Juli 2026',
    dateTimeLine2: 'Einlass: 18:00 Uhr',
    dateTimeLine3: 'Beginn: 19:00 Uhr',
    publicTransport: 'Öffentliche Verkehrsmittel',
    ptLine1: 'Metro 54: Station Strandvliet',
    ptLine2: '5 Min. Fußweg vom Bahnhof',
    ptLine3: 'Bus 46 & 47 halten vor der Tür',
    byCar: 'Mit dem Auto',
    carLine1: 'A2 / A9 Richtung Amsterdam Arena',
    carLine2: 'Parkhaus P1 Arena',
    carLine3: '10 € Tageskarte',
    capacity: 'Kapazität: 6.000 Plätze • Innenarena',
    openInMaps: 'In Maps öffnen',

    // Footer
    copyright: '© 2026 Best of the Best BJJ Edition. Alle Rechte vorbehalten.',
    tos: 'Allgemeine Geschäftsbedingungen',
    privacy: 'Datenschutzrichtlinie',
    backToHome: 'ZURÜCK ZUR STARTSEITE',

    // Über uns Page (DE)
    about_intro1: 'Die Idee für das Event Best Of The Best entstand 2024 und wurde 2025 und 2026 zu einem professionellen Konzept weiterentwickelt, mit dem Ziel, einen neuen Standard in der niederländischen Brazilian Jiu-Jitsu Szene zu setzen.',
    about_intro2: 'Wir bestehen aus einem Team von vier engagierten Profis mit einer starken Leidenschaft für Brazilian Jiu-Jitsu und Eventorganisation. Dank unserer Erfahrung, Vision und Hingabe streben wir danach, das Sportevent Best Of The Best auf ein höheres Niveau zu heben und einen neuen Standard in der europäischen Brazilian Jiu-Jitsu Community zu setzen.',
    about_mission_title: 'Mission',
    about_mission_text: 'Förderung des Wachstums und der Entwicklung des Sports Brazilian Jiu-Jitsu durch das Anbieten hochwertiger Dienstleistungen und einzigartiger Erfahrungen für Athleten, Partner und Besucher. Darüber hinaus streben wir danach, einen gesunden sozialen, sportlichen und kulturellen Austausch innerhalb der internationalen BJJ-Community zu ermöglichen.',
    about_vision_title: 'Vision',
    about_vision_text: 'Sich zur führenden Organisation im Bereich von Brazilian Jiu-Jitsu Events und Wettbewerbsorganisation in Europa zu entwickeln. Dies erreichen wir, indem wir den Sport auf ein höheres Niveau heben, starke Verbindungen zur Community aufbauen und zu einer besseren Lebensqualität für alle beitragen, die in unserer Organisation engagiert sind.',
    about_core_values_title: 'Kernwerte',
    about_core_values_1: 'Innovation',
    about_core_values_2: 'Zuverlässigkeit',
    about_core_values_3: 'Professionalität',
    about_core_values_4: 'Integrität und Ethik',
    about_core_values_5: 'Wettbewerbsfähigkeit',
    about_core_values_6: 'Qualität',
    about_core_values_7: 'Mehrwert',
    about_core_values_8: 'Menschliche Leistung und Entwicklung',
    about_strive_title: 'Wonach wir kontinuierlich streben',
    about_strive_1: 'Exzellenz',
    about_strive_2: 'Ethisches und transparentes Handeln',
    about_strive_3: 'Soziale Verantwortung',
    about_strive_4: 'Respekt',
    about_strive_5: 'Leidenschaft für unseren Beruf',
    about_outro1: 'Wir stärken den Wert unserer Athleten, Sponsoren, Partner und Unterstützer, indem wir Erwartungen übertreffen, Bedürfnisse in den Mittelpunkt stellen und der Beziehung zwischen unserer Marke und unserer Community nachhaltigen Wert verleihen.',
    about_outro2: 'Wir glauben an unseren einzigartigen und transparenten Prozess zur Organisation von Events. Best Of The Best ist das erste von vielen Events, die noch folgen werden. Damit schaffen wir professionelle, spannende und hervorragend strukturierte Wettbewerbe, die zum weiteren Wachstum von Brazilian Jiu-Jitsu in den Niederlanden, Europa und darüber hinaus beitragen.',

    // AGB Page (DE)
    terms_agreement_title: 'Vereinbarung',
    terms_agreement_text: 'Durch die Nutzung dieser Website erklären Sie sich mit unseren Nutzungsbedingungen einverstanden. Best of the Best BJJ ist eine niederländische Organisation in den Niederlanden. Alle Veranstaltungen unterliegen Sicherheitsprotokollen und Verhaltensregeln für Athleten.',
    terms_refund_title: 'Rückerstattungsrichtlinie',
    terms_refund_text: 'Tickets are basically non-refundable unless the event is cancelled or rescheduled. Athlete registrations follow specific team guidelines.',
    terms_jurisdiction_title: 'Gerichtsstand',
    terms_jurisdiction_text: 'Diese Vereinbarung unterliegt den Gesetzen der Niederlande.',

    // Datenschutz Page (DE)
    privacy_data_title: 'Datenerhebung',
    privacy_data_text: 'Wir erheben nur Daten, die für Veranstaltungsanmeldungen und Newsletter-Updates erforderlich sind. Dies umfasst in der Regel Namen, E-Mails und Gürtelgrade der Athleten.',
    privacy_thirdparty_title: 'Drittanbieter-Tools',
    privacy_thirdparty_text: 'Wir nutzen Smoothcomp für das Athletenmanagement. Deren Datenschutzrichtlinien gelten für Anmeldungen auf ihrer Plattform.',
    privacy_gdpr_title: 'DSGVO-Konformität',
    privacy_gdpr_text: 'Wir respektieren Ihre Privatsphäre gemäß der DSGVO (Datenschutz-Grundverordnung). Sie haben das Recht, jederzeit die Löschung Ihrer Daten zu verlangen.',

    // Turniere Page (DE)
    tournament_p1: '21. März 2027 – Merken Sie sich das Datum vor. Best of the Best BJJ Edition kehrt für das prestigeträchtigste Grappling-Event des Jahres zurück. Eine retro-futuristische Bühne, auf der die besten Athleten in einer hochkarätigen Synthwave-Atmosphäre aufeinandertreffen.',
    tournament_venue_title: 'Veranstaltungsort',
    tournament_venue_text: 'Pierre de Coubertinplein 4, 1362 LB Almere\nVeranstaltungszeit: 08:00 bis 19:00',
    tournament_format_title: 'Format',
    tournament_format_text: 'Vormittag: 1 vs 1 BJJ Wettbewerb\nNachmittag: Hauptevent, Team vs Team',

    // Sponsors Page (DE)
    sponsors_text: 'Schließen Sie sich der BJJ-Revolution an. Werden Sie Partner des spektakulärsten Grappling-Events in den Niederlanden und werden Sie Teil einer Bewegung, die den Sport neu definiert. Steigen Sie früh als offizieller Partner ein und wachsen Sie mit einem der am schnellsten aufsteigenden Events im europäischen Grappling.',
    sponsors_cta: 'SPONSOR WERDEN',

    // Presse Page (DE)
    press_quote: 'Berichten Sie über die BJJ-Revolution. Erhalten Sie exklusiven Zugang zu einem der spektakulärsten Grappling-Events in den Niederlanden und verfolgen Sie den Aufstieg einer Bewegung, die den Sport neu gestaltet. Von elitären 1-gegen-1-Kämpfen bis hin zu einem einzigartigen teambasierten Format – hier beginnt das nächste Kapitel des europäischen Grapplings.',
    press_kit_title: 'LOGOS & FARBPALETTE',
    press_kit_text: 'Hochauflösende PNG- und SVG-Dateien einschließlich Neoneffekten.',
    press_kit_btn: 'KIT HERUNTERLADEN (ZIP)',
    press_release_title: 'OFFIZIELLE PRESSEMITTEILUNG',
    press_release_text: 'Vollständiger Zeitplan und Ankündigungen der Athleten-Besetzung.',
    press_release_btn: 'PDF HERUNTERLADEN',
    press_inquiries: 'Für Presseanfragen: info@bestofthebestbjj.com',

    // Team-Anmeldungen Page (DE)
    teams_subtitle: 'Melden Sie Ihr Team für 2027 an.',
    teams_teamname: 'Teamname',
    teams_contact: 'Ansprechpartner',
    teams_email: 'E-Mail-Adresse',
    teams_experience: 'Erfahrungsstufe',
    teams_experience_placeholder: 'Beschreiben Sie kurz den Hintergrund Ihres Teams...',
    teams_submit: 'ANMELDUNG ABSCHICKEN',

    // Kontakt Page (DE)
    contact_subtitle: 'Kontaktieren Sie uns bei Fragen oder Anliegen.',
    contact_fullname: 'Vollständiger Name',
    contact_email: 'E-Mail-Adresse',
    contact_message: 'Ihre Nachricht',
    contact_message_placeholder: 'Wie können we Ihnen helfen?',
    contact_submit: 'NACHRICHT SENDEN',

    // Rules Page
    footerRules: 'Regeln',
    rules_title: 'REGELN',
    rules_content_1: 'Das Team versus Team Format folgt dem CJI x Quintet Regelwerk.',
    rules_content_2: 'The Absolutes folgen dem ADCC Regelwerk.',
    rules_content_3: 'Round Robin folgt dem ADCC Regelwerk.',
    rules_subtext: 'Als Organisation halten wir uns gerne an bekannte und anerkannte Regelwerke. Die Sicherheit unserer Teilnehmer hat jedoch immer höchste Priorität. Bis zum Event können daher einige Änderungen an den Regeln vorgenommen werden, um die Sicherheit aller Teilnehmer zu gewährleisten. Auch innerhalb der offiziellen Regelwerke gibt es Techniken und Situationen, die ein erhöhtes Verletzungsrisiko bergen. Wo nötig, behalten wir uns das Recht vor, solche Bestandteile zu ändern oder auszuschließen. Jegliche Änderungen werden allen Teilnehmern rechtzeitig mitgeteilt.',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
