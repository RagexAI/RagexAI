import ServicePageTemplate from '../../components/templates/ServicePageTemplate';
import { SERVICES_DATA } from '../../data/services.content';

export default function EcommerceDevelopment() {
  const service = SERVICES_DATA.find(s => s.id === 'ecommerce-development')!;
  
  return (
    <ServicePageTemplate
      service={service}
      caseStudies={[
        {
          id: 'fashion-ecommerce',
          title: 'Fashion E-commerce Platform',
          description: 'Built a scalable e-commerce platform that increased conversion by 45%',
        },
      ]}
    />
  );
}
