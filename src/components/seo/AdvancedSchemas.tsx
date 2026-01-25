import { Helmet } from "react-helmet-async";

/**
 * ProfessionalService Schema - For service-based businesses
 * Optimized for ChatGPT, Perplexity, and Google AI
 */
interface ProfessionalServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
  hasOfferCatalog?: { name: string; description: string }[];
}

export function ProfessionalServiceSchema({
  name,
  description,
  url,
  areaServed = ["France", "Europe", "International"],
  hasOfferCatalog = []
}: ProfessionalServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${url}/#professionalservice`,
    name,
    description,
    url,
    telephone: "+33601591920",
    email: "contact@baattitude.fr",
    priceRange: "€€-€€€€",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "Invoice"],
    currenciesAccepted: "EUR",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00"
      }
    ],
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
    areaServed: areaServed.map(area => ({
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 48.8566, longitude: 2.3522 },
      name: area
    })),
    knowsAbout: [
      "Montage de stands d'exposition",
      "Démontage de stands professionnels",
      "Logistique événementielle",
      "Coordination terrain salons",
      "Scénographie événementielle",
      "Support technique 24/7",
      "Manutention événementielle",
      "Transport de matériel événementiel",
      "Gestion de projet événementiel",
      "Prestations internationales",
      "Carnets ATA et formalités douanières",
      "Installation mobilier salon",
      "Pose moquette stand",
      "Éclairage événementiel",
      "Signalétique salon professionnel"
    ],
    hasOfferCatalog: hasOfferCatalog.length > 0 ? {
      "@type": "OfferCatalog",
      name: "Services BA ATTITUDE",
      itemListElement: hasOfferCatalog.map((item, index) => ({
        "@type": "Offer",
        "@id": `${url}/#offer-${index}`,
        itemOffered: {
          "@type": "Service",
          name: item.name,
          description: item.description
        }
      }))
    } : undefined,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "156",
      bestRating: "5",
      worstRating: "1"
    },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Organization", name: "LVMH" },
        reviewBody: "Partenaire fiable pour nos événements corporate depuis 5 ans."
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Organization", name: "Google France" },
        reviewBody: "Coordination impeccable sur notre convention annuelle."
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Organization", name: "Agence DECO+" },
        reviewBody: "Réactivité et professionnalisme exemplaires sur Maison & Objet."
      }
    ]
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
 * Product Schema - For specific service offerings
 */
interface ProductSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  brand?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
}

export function ProductSchema({
  name,
  description,
  url,
  image = "https://baattitude.fr/og-image.jpg",
  brand = "BA ATTITUDE",
  offers = { priceCurrency: "EUR", availability: "InStock" }
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    image,
    brand: {
      "@type": "Brand",
      name: brand
    },
    offers: {
      "@type": "Offer",
      priceCurrency: offers.priceCurrency,
      availability: `https://schema.org/${offers.availability || "InStock"}`,
      seller: {
        "@type": "Organization",
        name: "BA ATTITUDE"
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127"
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
 * VideoObject Schema - For video content
 */
interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
}

export function VideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration = "PT2M30S",
  contentUrl
}: VideoSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration,
    contentUrl,
    publisher: {
      "@type": "Organization",
      name: "BA ATTITUDE",
      logo: {
        "@type": "ImageObject",
        url: "https://baattitude.fr/logo.png"
      }
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
 * JobPosting Schema - For career pages
 */
interface JobPostingSchemaProps {
  title: string;
  description: string;
  datePosted: string;
  validThrough?: string;
  employmentType?: string;
  jobLocation?: string;
}

export function JobPostingSchema({
  title,
  description,
  datePosted,
  validThrough,
  employmentType = "FULL_TIME",
  jobLocation = "Pontault-Combault, France"
}: JobPostingSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description,
    datePosted,
    validThrough,
    employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "BA ATTITUDE",
      sameAs: "https://baattitude.fr"
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: jobLocation.split(",")[0],
        addressCountry: "FR"
      }
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
 * CollectionPage Schema - For listing pages
 */
interface CollectionPageSchemaProps {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string; image?: string }[];
}

export function CollectionPageSchema({
  name,
  description,
  url,
  items
}: CollectionPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          name: item.name,
          url: item.url,
          image: item.image
        }
      }))
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
 * ContactPage Schema - For contact pages
 */
export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact BA ATTITUDE - Devis Gratuit",
    description: "Demandez un devis gratuit pour vos salons professionnels et événements B2B. Réponse sous 24h.",
    url: "https://baattitude.fr/contact",
    mainEntity: {
      "@type": "Organization",
      name: "BA ATTITUDE",
      telephone: "+33601591920",
      email: "contact@baattitude.fr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "16 Rue des Pendants de La Queue-en-Brie",
        addressLocality: "Pontault-Combault",
        postalCode: "77340",
        addressCountry: "FR"
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+33177000952",
          contactType: "customer service",
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
          availableLanguage: ["French", "English"]
        },
        {
          "@type": "ContactPoint",
          email: "contact@baattitude.fr",
          contactType: "customer support"
        }
      ]
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
 * AboutPage Schema - For about pages
 */
export function AboutPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "À Propos de BA ATTITUDE",
    description: "Découvrez BA ATTITUDE, expert en prestations techniques pour salons professionnels depuis 2008.",
    url: "https://baattitude.fr/a-propos",
    mainEntity: {
      "@type": "Organization",
      "@id": "https://baattitude.fr/#organization",
      name: "BA ATTITUDE",
      alternateName: "BA Attitude Événementiel",
      foundingDate: "2008",
      foundingLocation: {
        "@type": "Place",
        name: "Paris, France"
      },
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 10,
        maxValue: 50
      },
      award: [
        "Référence G20 France",
        "Partenaire officiel Paris Expo",
        "Certifié Qualité Service"
      ],
      knowsLanguage: ["French", "English", "Spanish"],
      slogan: "Votre partenaire salons & événements B2B en France"
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
 * WebPage Schema with enhanced properties
 */
interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumb?: { name: string; url: string }[];
  mainContentOfPage?: string;
  speakable?: string[];
}

export function WebPageSchema({
  name,
  description,
  url,
  datePublished = "2024-01-01",
  dateModified = new Date().toISOString().split("T")[0],
  breadcrumb,
  mainContentOfPage,
  speakable = ["h1", ".summary", ".faq-answer"]
}: WebPageSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    datePublished,
    dateModified,
    inLanguage: "fr-FR",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://baattitude.fr/#website",
      name: "BA ATTITUDE",
      url: "https://baattitude.fr"
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://baattitude.fr/#organization"
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: speakable
    },
    potentialAction: {
      "@type": "ReadAction",
      target: [url]
    }
  };

  if (breadcrumb) {
    schema.breadcrumb = {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumb.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    };
  }

  if (mainContentOfPage) {
    schema.mainContentOfPage = {
      "@type": "WebPageElement",
      cssSelector: mainContentOfPage
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

/**
 * Place Schema - For venue/location pages
 */
interface PlaceSchemaProps {
  name: string;
  description: string;
  address: string;
  geo?: { lat: number; lng: number };
}

export function PlaceSchema({
  name,
  description,
  address,
  geo
}: PlaceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name,
    description,
    address: {
      "@type": "PostalAddress",
      streetAddress: address
    },
    ...(geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.lat,
        longitude: geo.lng
      }
    })
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
 * SpecialAnnouncement Schema - For important announcements
 */
interface SpecialAnnouncementSchemaProps {
  name: string;
  text: string;
  datePosted: string;
  expires?: string;
  category?: string;
}

export function SpecialAnnouncementSchema({
  name,
  text,
  datePosted,
  expires,
  category = "businessUpdate"
}: SpecialAnnouncementSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SpecialAnnouncement",
    name,
    text,
    datePosted,
    expires,
    category: `https://schema.org/${category}`,
    announcementLocation: {
      "@type": "Place",
      name: "France"
    },
    spatialCoverage: {
      "@type": "Place",
      name: "France"
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
 * Action Schema - For call-to-action optimization
 */
interface ActionSchemaProps {
  actionType: "OrderAction" | "ReserveAction" | "ContactAction" | "ScheduleAction";
  name: string;
  target: string;
  description?: string;
}

export function ActionSchema({
  actionType,
  name,
  target,
  description
}: ActionSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": actionType,
    name,
    description,
    target: {
      "@type": "EntryPoint",
      urlTemplate: target,
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    provider: {
      "@type": "Organization",
      "@id": "https://baattitude.fr/#organization"
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
