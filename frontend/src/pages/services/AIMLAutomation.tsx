import ServicePageTemplate from '../../components/templates/ServicePageTemplate';
import { SERVICES_DATA } from '../../data/services.content';

export default function AIMLAutomation() {
  const service = SERVICES_DATA.find(s => s.id === 'ai-ml-automation')!;
  
  return (
    <ServicePageTemplate
      service={service}
      caseStudies={[
        {
          id: 'ai-automation',
          title: 'Business Process Automation',
          description: 'Automated 70% of repetitive tasks using AI and ML',
        },
      ]}
    />
  );
}
