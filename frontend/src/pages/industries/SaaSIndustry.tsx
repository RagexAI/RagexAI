import IndustryPageTemplate from '../../components/templates/IndustryPageTemplate';
import { INDUSTRIES_DATA } from '../../data/industries.content';

export default function SaaSIndustry() {
  const industry = INDUSTRIES_DATA.find(i => i.id === 'saas')!;
  
  return <IndustryPageTemplate industry={industry} />;
}
