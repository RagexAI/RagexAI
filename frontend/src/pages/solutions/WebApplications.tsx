import SolutionPageTemplate from '../../components/templates/SolutionPageTemplate';
import { SOLUTIONS_DATA } from '../../data/solutions.content';

export default function WebApplications() {
  const solution = SOLUTIONS_DATA.find(s => s.id === 'web-applications')!;
  
  return (
    <SolutionPageTemplate
      solution={solution}
      caseStudies={[
        {
          id: 'project-management',
          title: 'Project Management Platform',
          description: 'Custom web application that improved team productivity by 40%',
        },
      ]}
    />
  );
}
