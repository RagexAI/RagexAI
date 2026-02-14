import ServicePageTemplate from '../../components/templates/ServicePageTemplate';
import { SERVICES_DATA } from '../../data/services.content';

export default function WebMobileDevelopment() {
  const service = SERVICES_DATA.find(s => s.id === 'web-mobile-development')!;
  
  return (
    <ServicePageTemplate
      service={service}
      caseStudies={[
        {
          id: 'mobile-app',
          title: 'Cross-Platform Mobile App',
          description: 'Built mobile app reaching 100K+ users in 6 months',
        },
      ]}
    />
  );
}
