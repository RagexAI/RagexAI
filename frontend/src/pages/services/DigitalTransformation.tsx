import ServicePageTemplate from '../../components/templates/ServicePageTemplate';
import { SERVICES_DATA } from '../../data/services.content';

export default function DigitalTransformation() {
  const service = SERVICES_DATA.find(s => s.id === 'digital-transformation')!;
  
  return (
    <ServicePageTemplate
      service={service}
      caseStudies={[
        {
          id: 'legacy-modernization',
          title: 'Legacy System Modernization',
          description: 'Transformed 20-year-old system into modern cloud platform',
        },
      ]}
    />
  );
}
