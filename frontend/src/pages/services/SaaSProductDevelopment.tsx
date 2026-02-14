import ServicePageTemplate from '../../components/templates/ServicePageTemplate';
import { SERVICES_DATA } from '../../data/services.content';

export default function SaaSProductDevelopment() {
  const service = SERVICES_DATA.find(s => s.id === 'saas-product-development')!;
  
  return (
    <ServicePageTemplate
      service={service}
      caseStudies={[
        {
          id: 'saas-mvp',
          title: 'SaaS MVP Launch',
          description: 'Launched SaaS product that reached $50K MRR in 4 months',
        },
      ]}
    />
  );
}
