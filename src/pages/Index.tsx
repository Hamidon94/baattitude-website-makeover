import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { StatsSection } from "@/components/home/StatsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { SEOHead, LocalBusinessSchema } from "@/components/seo/StructuredData";
import { WebsiteSchema, OrganizationSchema, HowToSchema, ItemListSchema, SpeakableSchema } from "@/components/seo/WebsiteSchema";
import { ProfessionalServiceSchema, WebPageSchema, ActionSchema } from "@/components/seo/AdvancedSchemas";

// Homepage FAQ data for structured data (expanded)
const homeFaqs = [
  { question: "Quels types d'événements accompagnez-vous ?", answer: "BA ATTITUDE accompagne tous types de salons professionnels (Maison & Objet, SIAL, Première Vision, VivaTech...), foires, expositions B2B, conventions d'entreprise, congrès et forums professionnels en France et à l'international dans plus de 30 pays." },
  { question: "Dans quels délais pouvez-vous intervenir ?", answer: "Nous pouvons mobiliser nos équipes sous 24 à 48 heures en Île-de-France (Paris, Villepinte, Porte de Versailles), et sous 72 heures sur le reste du territoire français (Lyon, Marseille, Bordeaux, Lille, Nantes, Strasbourg, Toulouse)." },
  { question: "Proposez-vous des devis gratuits ?", answer: "Oui, nous établissons des devis gratuits et détaillés sous 48h après analyse de votre cahier des charges. Nos tarifs sont transparents et forfaitaires, sans surprise." },
  { question: "Travaillez-vous avec des agences événementielles ?", answer: "Absolument. Plus de 80% de nos clients sont des agences événementielles et standistes. Nous intervenons en marque blanche avec discrétion et professionnalisme." },
  { question: "Quelles sont vos références ?", answer: "Nous avons accompagné des projets prestigieux : G20 France, conventions LVMH, Google, Dior, BVLGARI, Chaumet, DisneyLand Paris. Plus de 500 projets réalisés par an." }
];

// Services list for ItemList schema (expanded with descriptions)
const servicesForSchema = [
  { name: "Salons Professionnels", url: "https://baattitude.fr/services/salons-professionnels", description: "Montage et coordination de stands pour salons B2B en France : Maison & Objet, SIAL, Première Vision, Global Industrie..." },
  { name: "Support Technique Événementiel", url: "https://baattitude.fr/services/support-technique", description: "Assistance technique 24/7 pendant vos événements : maintenance, dépannage, hotline technique, techniciens sur site." },
  { name: "Montage & Démontage de Stands", url: "https://baattitude.fr/services/montage-demontage", description: "Équipes qualifiées pour installation de tous types de stands : modulaires Octanorm, Maxima, Aluvision, sur mesure bois/métal." },
  { name: "Logistique & Coordination", url: "https://baattitude.fr/services/logistique-coordination", description: "Transport sécurisé, stockage 2000m², manutention événementielle, coordination multi-prestataires." },
  { name: "Scénographie de Stands", url: "https://baattitude.fr/services/scenographie-stands", description: "Design et réalisation de décors sur mesure, habillage, signalétique, éclairage LED événementiel." },
  { name: "Prestations Internationales", url: "https://baattitude.fr/services/international", description: "Coordination multi-pays, formalités douanières (carnets ATA), réseau de 50+ partenaires locaux dans 30+ pays." }
];

// Process steps for HowTo schema (expanded)
const processSteps = [
  { name: "Étude & Devis Gratuit", text: "Analyse de votre cahier des charges et plans de stand. Visite technique du site si nécessaire. Établissement d'un devis détaillé et transparent sous 48h. Identification des contraintes organisateur (Paris Expo, Villepinte, Eurexpo...)." },
  { name: "Planification & Coordination", text: "Définition du rétroplanning d'intervention. Coordination avec les organisateurs du salon et vos autres prestataires (standiste, audiovisuel, traiteur). Gestion des badges et autorisations." },
  { name: "Installation & Montage", text: "Mobilisation de nos équipes qualifiées (monteurs, techniciens, chef de projet). Montage professionnel dans le respect des délais et des normes de sécurité ERP. Check-list qualité et recette avant ouverture." },
  { name: "Démontage & Repli", text: "Démontage soigné selon planning organisateur. Conditionnement protégé du matériel réutilisable. Évacuation des déchets et remise en état des lieux. Rapport d'intervention." }
];

// Professional services catalog for schema
const professionalServicesCatalog = [
  { name: "Montage Stand Salon Paris", description: "Installation professionnelle de stands à Paris Expo Porte de Versailles, Paris Nord Villepinte" },
  { name: "Montage Stand Salon Lyon", description: "Équipes dédiées pour Eurexpo Lyon, Centre de Congrès de Lyon" },
  { name: "Coordination Événement B2B", description: "Chef de projet unique du brief au démontage" },
  { name: "Support Technique 24/7", description: "Hotline et intervention sous 30 minutes en Île-de-France" },
  { name: "Logistique Internationale", description: "Transport, carnets ATA, coordination multi-pays" }
];

const Index = () => {
  return (
    <Layout>
      {/* Primary SEO Meta Tags */}
      <SEOHead
        title="BA ATTITUDE | Prestations Techniques Événementielles - Montage Stands Salons Professionnels France"
        description="Expert en prestations techniques pour salons professionnels depuis 2008. Montage de stands (Octanorm, Maxima, sur mesure), logistique événementielle, coordination terrain. Paris, Lyon, Marseille, France entière et international. Devis gratuit sous 48h. +500 projets/an."
        canonical="https://baattitude.fr"
        ogUrl="https://baattitude.fr"
        ogImage="https://baattitude.fr/og-image.jpg"
        ogType="website"
      />
      
      {/* WebPage Schema */}
      <WebPageSchema
        name="BA ATTITUDE - Prestations Techniques Événementielles"
        description="Spécialiste français des prestations techniques pour salons professionnels et événements B2B depuis 2008."
        url="https://baattitude.fr"
        dateModified={new Date().toISOString().split("T")[0]}
        speakable={["h1", ".hero-text", ".faq-answer"]}
      />
      
      {/* Structured Data for Google, ChatGPT, Perplexity */}
      <WebsiteSchema />
      <OrganizationSchema />
      <LocalBusinessSchema
        serviceType={[
          "Montage et démontage de stands d'exposition",
          "Logistique événementielle et transport",
          "Support technique salons professionnels 24/7",
          "Coordination terrain et gestion de projet",
          "Scénographie et habillage de stands",
          "Prestations internationales (30+ pays)"
        ]}
      />
      <ProfessionalServiceSchema
        name="BA ATTITUDE - Prestataire Technique Événementiel"
        description="Expert en prestations techniques pour salons professionnels, foires et événements B2B en France et à l'international depuis 2008."
        url="https://baattitude.fr"
        hasOfferCatalog={professionalServicesCatalog}
      />
      <ItemListSchema 
        name="Services BA ATTITUDE - Prestations Techniques Événementielles"
        description="Catalogue complet des prestations techniques pour salons professionnels et événements B2B"
        items={servicesForSchema}
      />
      <HowToSchema
        name="Comment organiser votre participation à un salon professionnel avec BA ATTITUDE"
        description="Notre méthodologie éprouvée en 4 étapes pour réussir votre salon professionnel : étude, planification, installation, démontage."
        steps={processSteps}
        totalTime="P2W"
      />
      <SpeakableSchema 
        cssSelector={[
          "h1",
          ".hero-description",
          ".faq-question",
          ".faq-answer",
          ".service-title",
          ".testimonial-text"
        ]}
      />
      <ActionSchema
        actionType="ContactAction"
        name="Demander un Devis Gratuit"
        target="https://baattitude.fr/contact"
        description="Obtenez un devis personnalisé sous 48h pour vos salons professionnels"
      />
      
      {/* Page Content */}
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <StatsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
