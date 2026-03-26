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
    about_p1: '"Best of the Best BJJ Edition" is more than just a competition – it\'s a retro-futuristic spectacle celebrating the art of grappling through the lens of 80s synthwave aesthetics.',
    about_quote: 'The ultimate blend of top-tier Jiu Jitsu and immersive neon visuals.',
    about_p2: 'Our mission is to push the boundaries of how combat sports events are presented, creating an unforgettable experience for both athletes and spectators. We invite the absolute elite to prove themselves under the neon lights.',
    about_location: 'Location: Brussels, Belgium. Vision: Global.',

    // Terms Page
    terms_agreement_title: 'Agreement',
    terms_agreement_text: 'By using this website, you agree to comply with our terms of service. Best of the Best BJJ is a Belgian organization in the heart of Brussels. All events are subject to safety protocols and athlete codes of conduct.',
    terms_refund_title: 'Refund Policy',
    terms_refund_text: 'Tickets are generally non-refundable unless the event is cancelled or rescheduled. Athlete registrations follow specific team guidelines.',
    terms_jurisdiction_title: 'Jurisdiction',
    terms_jurisdiction_text: 'This agreement is governed by the laws of Belgium.',

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
    tournament_venue_text: 'Brussels, Belgium\nPremium Arena\nThe Heart of Europe',
    tournament_format_title: 'Format',
    tournament_format_text: 'EBI Overtime Rules\nSubmission Only\nInvite & Qualifiers Only',

    // Sponsors Page
    sponsors_text: 'Join the neon revolution. Partner with the most visually stunning grappling event in the world.',
    sponsors_cta: 'BECOME A SPONSOR',

    // Press Page
    press_quote: '"The most visually appealing grappling event in the world – A return to the 80s through the eyes of a warrior."',
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
    about_p1: '"Best of the Best BJJ Edition" is meer dan alleen een competitie – het is een retro-futuristisch spektakel dat de kunst van grappling eert door de lens van de 80s synthwave esthetiek.',
    about_quote: 'De ultieme mix van top-level Jiu Jitsu en meeslepende neon-visuele effecten.',
    about_p2: 'Onze missie is om de grenzen van vechtsportevenementen te verleggen en een onvergetelijke ervaring te creëren voor zowel atleten als toeschouwers. Wij nodigen de absolute elite uit om zichzelf te bewijzen onder de neonlichten.',
    about_location: 'Locatie: Brussel, België. Visie: Globaal.',

    // Algemene Voorwaarden Page (NL)
    terms_agreement_title: 'Overeenkomst',
    terms_agreement_text: 'Door deze website te gebruiken, gaat u akkoord met het naleven van onze algemene voorwaarden. Best of the Best BJJ is een Belgische organisatie in het hart van Brussel. Alle evenementen zijn onderworpen aan veiligheidsprotocollen en gedragscodes voor atleten.',
    terms_refund_title: 'Restitutiebeleid',
    terms_refund_text: 'Tickets zijn over het algemeen niet-restitueerbaar, tenzij het evenement wordt geannuleerd of verzet. Registraties van atleten volgen specifieke teamrichtlijnen.',
    terms_jurisdiction_title: 'Jurisdictie',
    terms_jurisdiction_text: 'Deze overeenkomst wordt beheerst door de wetten van België.',

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
    tournament_venue_text: 'Brussel, België\nPremium Arena\nHet hart van Europa',
    tournament_format_title: 'Formaat',
    tournament_format_text: 'EBI Overtime Rules\nSubmission Only\nInvite & Qualifiers Only',

    // Sponsors Page (NL)
    sponsors_text: 'Maak deel uit van de neonrevolutie. Word partner van het meest visueel indrukwekkende grappling-evenement ter wereld.',
    sponsors_cta: 'WORD SPONSOR',

    // Pers Page (NL)
    press_quote: '"Het meest visueel aantrekkelijke grappling-evenement ter wereld – Een terugblik naar de jaren 80 door de ogen van een krijger."',
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
    about_p1: '"Best of the Best BJJ Edition" est plus qu\'une simple compétition - c\'est un spectacle rétro-futuriste célébrant l\'art du grappling à travers le prisme de l\'esthétique synthwave des années 80.',
    about_quote: 'Le mélange ultime de Jiu Jitsu de haut niveau et de visuels néon immersifs.',
    about_p2: 'Notre mission est de repousser les limites de la présentation des événements de sports de combat, en créant une expérience inoubliable pour les athlètes et les spectateurs. Nous invitons l\'élite absolue à faire ses preuves sous les néons.',
    about_location: 'Lieu : Bruxelles, Belgique. Vision : Globale.',

    // Conditions Générales Page (FR)
    terms_agreement_title: 'Accord',
    terms_agreement_text: 'En utilisant ce site web, vous acceptez de vous conformer à nos conditions d\'utilisation. Best of the Best BJJ est une organisation belge au cœur de Bruxelles. Tous les événements sont soumis à des protocoles de sécurité et à des codes de conduite pour les athlètes.',
    terms_refund_title: 'Politique de remboursement',
    terms_refund_text: 'Les billets sont généralement non remboursables, sauf si l\'événement est annulé ou reporté. Les inscriptions des athlètes suivent les directives spécifiques de l\'équipe.',
    terms_jurisdiction_title: 'Juridiction',
    terms_jurisdiction_text: 'Cet accord est régi par les lois de la Belgique.',

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
    tournament_venue_text: 'Bruxelles, Belgique\nPremium Arena\nLe cœur de l\'Europe',
    tournament_format_title: 'Format',
    tournament_format_text: 'Règles EBI Overtime\nSoumission uniquement\nInvitations et qualifications uniquement',

    // Sponsors Page (FR)
    sponsors_text: 'Rejoignez la révolution néon. Devenez partenaire de l\'événement de grappling le plus visuellement époustouflant au monde.',
    sponsors_cta: 'DEVENIR SPONSOR',

    // Presse Page (FR)
    press_quote: '"L\'événement de grappling le plus attrayant visuellement au monde – Un retour aux années 80 à travers les yeux d\'un guerrier."',
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
    about_p1: '"Best of the Best BJJ Edition" ist mehr als nur ein Wettbewerb – es ist ein retro-futuristisches Spektakel, das die Kunst des Grapplings durch die Linse der 80er-Jahre-Synthwave-Ästhetik feiert.',
    about_quote: 'Die ultimative Mischung aus erstklassigem Jiu Jitsu und fesselnden Neon-Visuals.',
    about_p2: 'Unsere Mission ist es, die Grenzen der Präsentation von Kampfsport-Events zu verschieben und ein unvergessliches Erlebnis für Athleten und Zuschauer zu schaffen. Wir laden die absolute Elite ein, sich unter dem Neonlicht zu beweisen.',
    about_location: 'Standort: Brüssel, Belgien. Vision: Global.',

    // AGB Page (DE)
    terms_agreement_title: 'Vereinbarung',
    terms_agreement_text: 'Durch die Nutzung dieser Website erklären Sie sich mit unseren Nutzungsbedingungen einverstanden. Best of the Best BJJ ist eine belgische Organisation im Herzen von Brüssel. Alle Veranstaltungen unterliegen Sicherheitsprotokollen und Verhaltensregeln für Athleten.',
    terms_refund_title: 'Rückerstattungsrichtlinie',
    terms_refund_text: 'Tickets are basically non-refundable unless the event is cancelled or rescheduled. Athlete registrations follow specific team guidelines.',
    terms_jurisdiction_title: 'Gerichtsstand',
    terms_jurisdiction_text: 'Diese Vereinbarung unterliegt den Gesetzen von Belgien.',

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
    tournament_venue_text: 'Brüssel, Belgien\nPremium Arena\nDas Herz Europas',
    tournament_format_title: 'Format',
    tournament_format_text: 'EBI Overtime Regeln\nNur Submission\nNur auf Einladung und Qualifikation',

    // Sponsors Page (DE)
    sponsors_text: 'Werden Sie Teil der Neon-Revolution. Werden Sie Partner des visuell beeindruckendsten Grappling-Events der Welt.',
    sponsors_cta: 'SPONSOR WERDEN',

    // Presse Page (DE)
    press_quote: '"Das visuell ansprechendste Grappling-Event der Welt – Eine Rückkehr in die 80er Jahre durch die Augen eines Kriegers."',
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
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
