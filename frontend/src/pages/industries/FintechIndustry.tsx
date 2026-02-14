import IndustryPageTemplate from '../../components/templates/IndustryPageTemplate';
import { INDUSTRIES_DATA } from '../../data/industries.content';

export default function FintechIndustry() {
  const industry = INDUSTRIES_DATA.find(i => i.id === 'fintech')!;
  
  return <IndustryPageTemplate industry={industry} />;
}
