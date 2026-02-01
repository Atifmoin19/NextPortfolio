import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const StructuredData = () => {
  const data = useSelector((state: RootState) => state.portfolio.data);

  if (!data) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.hero.name,
    jobTitle: data.hero.role,
    description: data.hero.description,
    url: window.location.origin,
    sameAs: data.contact.socials.map((s) => s.url),
    knowsAbout: data.skills.map((s) => s.name),
    email: data.contact.email,
  };

  return <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>;
};

export default StructuredData;
