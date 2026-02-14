import IndustryPageTemplate from '../../components/templates/IndustryPageTemplate';
import { INDUSTRIES_DATA } from '../../data/industries.content';

export default function RealEstateIndustry() {
  const industry = INDUSTRIES_DATA.find(i => i.id === 'real-estate')!;
  
  return <IndustryPageTemplate industry={industry} />;
}
