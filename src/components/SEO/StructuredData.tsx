import { usePortfolioContent } from "../sections/ps/usePortfolioContent";

const SITE = "https://portfolio.fullstackcity.in/";

// JSON-LD Person, built from the same content the page renders (seed first, then CMS).
const StructuredData = () => {
  const data = usePortfolioContent();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}#person`,
    name: data.hero.name,
    jobTitle: data.hero.role,
    description: data.hero.description,
    url: SITE,
    image: `${SITE}og-image.png`,
    address: { "@type": "PostalAddress", addressLocality: "Noida", addressCountry: "IN" },
    sameAs: data.contact.socials.map((s) => s.url).filter((u) => /^https?:/.test(u)),
    knowsAbout: data.skills.map((s) => s.name),
    email: data.contact.email,
  };

  return <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>;
};

export default StructuredData;
