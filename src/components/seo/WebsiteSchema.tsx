import { Helmet } from "react-helmet-async";

/**
 * Schema.org WebSite markup for sitelinks searchbox and site identity
 * Helps Google, ChatGPT, Perplexity understand site structure
 */
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://baattitude.fr/#website",
    name: "BA ATTITUDE",
    alternateName: "BA Attitude Événementiel",
    url: "https://baattitude.fr",
    description: "Prestations techniques et logistiques pour salons professionnels, foires et événements B2B en France et à l'international.",
    inLanguage: "fr-FR",
    publisher: {
      "@id": "https://baattitude.fr/#organization"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://baattitude.fr/services?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

/**
 * Organization schema for brand recognition across AI systems
 * ENHANCED for ChatGPT, Perplexity, Google AI Overview
 */
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": "https://baattitude.fr/#organization",
    name: "BA ATTITUDE",
    legalName: "BA ATTITUDE SARL",
    alternateName: ["BA Attitude", "BA Attitude Événementiel", "BA Attitude Events"],
    url: "https://baattitude.fr",
    logo: {
      "@type": "ImageObject",
      url: "https://baattitude.fr/logo.png",
      width: 512,
      height: 512,
      caption: "BA ATTITUDE - Prestataire technique événementiel"
    },
    image: [
      "https://baattitude.fr/og-image.jpg",
      "https://baattitude.fr/hero-salon-panoramique.jpg"
    ],
    description: "BA ATTITUDE est le spécialiste français des prestations techniques pour salons professionnels, foires et événements B2B depuis 2008. Montage de stands, logistique événementielle, coordination terrain, support technique 24/7. Intervention France entière et international (30+ pays). Plus de 500 projets réalisés par an avec des références prestigieuses (G20, LVMH, Google, Dior).",
    slogan: "Votre partenaire salons & événements B2B en France",
    foundingDate: "2008",
    foundingLocation: {
      "@type": "Place",
      name: "Paris, France"
    },
    founder: {
      "@type": "Person",
      name: "Fondateur BA ATTITUDE"
    },
    // Detailed address with geo
    address: {
      "@type": "PostalAddress",
      streetAddress: "16 Rue des Pendants de La Queue-en-Brie",
      addressLocality: "Pontault-Combault",
      postalCode: "77340",
      addressRegion: "Île-de-France",
      addressCountry: "FR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.7980,
      longitude: 2.6180
    },
    // Multiple contact points for different needs
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+33177000952",
        contactType: "customer service",
        areaServed: ["FR", "BE", "CH", "LU", "MC"],
        availableLanguage: ["French", "English"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00"
        }
      },
      {
        "@type": "ContactPoint",
        telephone: "+33601591920",
        contactType: "sales",
        areaServed: "Worldwide",
        availableLanguage: ["French", "English", "Spanish"]
      },
      {
        "@type": "ContactPoint",
        email: "contact@baattitude.fr",
        contactType: "customer support"
      },
      {
        "@type": "ContactPoint",
        telephone: "+33601591920",
        contactType: "emergency",
        description: "Support technique 24h/24 pendant les événements"
      }
    ],
    // Social profiles
    sameAs: [
      "https://www.linkedin.com/company/ba-attitude/",
      "https://www.instagram.com/baattitude.events/",
      "https://www.facebook.com/baattitude.events/",
      "https://twitter.com/baattitude"
    ],
    // Detailed expertise (for AI understanding)
    knowsAbout: [
      "Montage de stands d'exposition",
      "Démontage de stands professionnels",
      "Salons professionnels B2B",
      "Foires commerciales",
      "Événementiel corporate",
      "Logistique événementielle",
      "Coordination terrain",
      "Support technique événementiel",
      "Scénographie de stands",
      "Manutention événementielle",
      "Transport de matériel événementiel",
      "Gestion de projet événementiel",
      "Prestations internationales",
      "Carnets ATA et formalités douanières",
      "Installation mobilier salon",
      "Pose moquette stand",
      "Éclairage événementiel LED",
      "Signalétique salon professionnel",
      "Structures modulaires Octanorm",
      "Structures modulaires Maxima",
      "Structures modulaires Aluvision",
      "Stands sur mesure bois métal",
      "Convention d'entreprise",
      "Congrès professionnels",
      "Forums B2B"
    ],
    // Languages
    knowsLanguage: ["French", "English", "Spanish", "German", "Italian"],
    // Comprehensive service catalog
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services BA ATTITUDE",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Salons Professionnels",
          description: "Prestations complètes pour salons, foires et expositions B2B",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Montage de stands modulaires", description: "Octanorm, Maxima, Aluvision, Beursstand" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Montage de stands sur mesure", description: "Bois, métal, structures complexes" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Démontage et repli", description: "Démontage soigné, conditionnement, évacuation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coordination organisateur", description: "Badges, raccordements, respect du cahier des charges" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pose moquette et sols", description: "Moquettes, planchers, sols techniques" } }
          ]
        },
        {
          "@type": "OfferCatalog", 
          name: "Logistique Événementielle",
          description: "Gestion complète de la logistique pour vos événements",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transport de matériel", description: "Véhicules dédiés, transport sécurisé" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stockage entrepôt", description: "2000m² en région parisienne" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manutention sur site", description: "Déchargement, acheminement, mise en place" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gestion des imprévus", description: "Réactivité 24h/24 pendant les montages" } }
          ]
        },
        {
          "@type": "OfferCatalog",
          name: "Support Technique",
          description: "Assistance technique permanente pendant vos événements",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maintenance préventive", description: "Vérifications quotidiennes des installations" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dépannage rapide", description: "Intervention sous 30 minutes en IDF" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hotline technique 24/7", description: "Support téléphonique permanent" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Techniciens sur site", description: "Présence continue ou intervention ponctuelle" } }
          ]
        },
        {
          "@type": "OfferCatalog",
          name: "Prestations Internationales",
          description: "Coordination mondiale de vos événements",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coordination multi-pays", description: "30+ pays couverts" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Formalités douanières", description: "Carnets ATA, documents export" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Réseau partenaires locaux", description: "50+ partenaires qualifiés" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Supervision sur site", description: "Chef de projet BA ATTITUDE déplacé" } }
          ]
        }
      ]
    },
    // Geographic coverage
    areaServed: [
      // France
      { "@type": "Country", name: "France" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
      { "@type": "City", name: "Paris" },
      { "@type": "City", name: "Lyon" },
      { "@type": "City", name: "Marseille" },
      { "@type": "City", name: "Bordeaux" },
      { "@type": "City", name: "Lille" },
      { "@type": "City", name: "Nantes" },
      { "@type": "City", name: "Strasbourg" },
      { "@type": "City", name: "Toulouse" },
      { "@type": "City", name: "Nice" },
      // Europe
      { "@type": "Country", name: "Belgique" },
      { "@type": "Country", name: "Suisse" },
      { "@type": "Country", name: "Luxembourg" },
      { "@type": "Country", name: "Monaco" },
      { "@type": "Country", name: "Allemagne" },
      { "@type": "Country", name: "Espagne" },
      { "@type": "Country", name: "Italie" },
      { "@type": "Country", name: "Royaume-Uni" },
      { "@type": "Country", name: "Pays-Bas" },
      // International
      { "@type": "Country", name: "Émirats arabes unis" },
      { "@type": "Country", name: "Arabie Saoudite" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Singapour" },
      { "@type": "Country", name: "États-Unis" }
    ],
    // Company size
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
      unitText: "employees"
    },
    // Awards and certifications
    award: [
      "Référence G20 France 2021",
      "Partenaire officiel Paris Expo Porte de Versailles",
      "Partenaire officiel Paris Nord Villepinte",
      "Partenaire officiel Eurexpo Lyon",
      "Certifié Qualité Service Événementiel"
    ],
    // Customer reviews aggregate
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "156",
      bestRating: "5",
      worstRating: "1"
    },
    // Sample reviews for AI context
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Organization", name: "LVMH" },
        reviewBody: "Partenaire de confiance pour tous nos événements corporate."
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Organization", name: "Agence DECO+" },
        reviewBody: "Coordination parfaite sur Maison & Objet, 15 stands gérés avec brio."
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Organization", name: "Google France" },
        reviewBody: "Support impeccable sur notre convention annuelle à Dublin."
      }
    ],
    // Memberships
    memberOf: [
      { "@type": "Organization", name: "UNIMEV - Union Française des Métiers de l'Événement" },
      { "@type": "Organization", name: "Chambre de Commerce et d'Industrie de Seine-et-Marne" }
    ],
    // Payment and pricing
    priceRange: "€€-€€€€",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "Invoice 30 days"],
    currenciesAccepted: "EUR"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

/**
 * Service schema for individual service pages
 */
interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: string;
  areaServed?: string[];
  priceRange?: string;
}

export function ServiceSchema({
  name,
  description,
  url,
  image = "https://baattitude.fr/og-image.jpg",
  provider = "BA ATTITUDE",
  areaServed = ["France", "Europe"],
  priceRange = "€€€"
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": url,
    name,
    description,
    url,
    image,
    provider: {
      "@type": "Organization",
      "@id": "https://baattitude.fr/#organization",
      name: provider
    },
    areaServed: areaServed.map(area => ({
      "@type": "Place",
      name: area
    })),
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "EUR",
      price: priceRange
    },
    termsOfService: "https://baattitude.fr/mentions-legales",
    serviceType: name
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

/**
 * HowTo schema for process/methodology sections
 * Great for AI systems to understand step-by-step processes
 */
interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
}

export function HowToSchema({ name, description, steps, totalTime = "P2W" }: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image })
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

/**
 * ItemList schema for collections (services, projects, etc.)
 * Helps AI understand list structure
 */
interface ItemListItem {
  name: string;
  url: string;
  description?: string;
  image?: string;
}

interface ItemListSchemaProps {
  name: string;
  description: string;
  items: ItemListItem[];
}

export function ItemListSchema({ name, description, items }: ItemListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Thing",
        name: item.name,
        url: item.url,
        ...(item.description && { description: item.description }),
        ...(item.image && { image: item.image })
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

/**
 * SpeakableSpecification for voice search optimization
 * Important for AI assistants like Alexa, Google Assistant
 */
interface SpeakableProps {
  cssSelector?: string[];
  xpath?: string[];
}

export function SpeakableSchema({ 
  cssSelector = ["article h1", "article .summary", ".faq-answer"],
  xpath 
}: SpeakableProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      ...(cssSelector && { cssSelector }),
      ...(xpath && { xpath })
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
