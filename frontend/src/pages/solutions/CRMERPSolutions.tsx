import SolutionPageTemplate from '../../components/templates/SolutionPageTemplate';
import { SOLUTIONS_DATA } from '../../data/solutions.content';

export default function CRMERPSolutions() {
  const solution = SOLUTIONS_DATA.find(s => s.id === 'crm-erp-solutions')!;
  
  return (
    <SolutionPageTemplate
      solution={solution}
      caseStudies={[
        {
          id: 'sales-crm',
          title: 'Sales CRM Platform',
          description: 'Custom CRM that increased sales by 40%',
        },
      ]}
    />
  );
}
