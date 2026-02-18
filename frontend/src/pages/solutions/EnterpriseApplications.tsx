import SolutionPageTemplate from '../../components/templates/SolutionPageTemplate';
import { SOLUTIONS_DATA } from '../../data/solutions.content';

export default function EnterpriseApplications() {
  const solution = SOLUTIONS_DATA.find(s => s.id === 'enterprise-applications')!;
  
  return (
    <SolutionPageTemplate solution={solution} />
  );
}
