import ServicePageTemplate from '../../components/templates/ServicePageTemplate';
import { SERVICES_DATA } from '../../data/services.content';

export default function DevOpsCloudSecurity() {
  const service = SERVICES_DATA.find(s => s.id === 'devops-cloud-security')!;
  
  return (
    <ServicePageTemplate
      service={service}
      caseStudies={[
        {
          id: 'cloud-migration',
          title: 'Enterprise Cloud Migration',
          description: 'Migrated 50+ applications to AWS with 40% cost reduction',
        },
      ]}
    />
  );
}
