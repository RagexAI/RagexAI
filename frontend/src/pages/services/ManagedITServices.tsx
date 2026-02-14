import ServicePageTemplate from '../../components/templates/ServicePageTemplate';
import { SERVICES_DATA } from '../../data/services.content';

export default function ManagedITServices() {
  const service = SERVICES_DATA.find(s => s.id === 'managed-it-services')!;
  
  return (
    <ServicePageTemplate
      service={service}
      caseStudies={[
        {
          id: 'it-infrastructure',
          title: 'IT Infrastructure Management',
          description: 'Reduced IT costs by 40% while improving uptime to 99.9%',
        },
      ]}
    />
  );
}
