import IndustryPageTemplate from '../../components/templates/IndustryPageTemplate';
import { INDUSTRIES_DATA } from '../../data/industries.content';

export default function HealthcareIndustry() {
  const industry = INDUSTRIES_DATA.find(i => i.id === 'healthcare')!;
  
  return <IndustryPageTemplate industry={industry} />;
}
