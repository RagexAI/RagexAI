import IndustryPageTemplate from '../../components/templates/IndustryPageTemplate';
import { INDUSTRIES_DATA } from '../../data/industries.content';

export default function EcommerceIndustry() {
  const industry = INDUSTRIES_DATA.find(i => i.id === 'ecommerce')!;
  
  return <IndustryPageTemplate industry={industry} />;
}
