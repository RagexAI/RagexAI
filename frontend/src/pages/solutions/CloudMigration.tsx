import SolutionPageTemplate from '../../components/templates/SolutionPageTemplate';
import { SOLUTIONS_DATA } from '../../data/solutions.content';

export default function CloudMigration() {
  const solution = SOLUTIONS_DATA.find(s => s.id === 'cloud-migration')!;
  
  return (
    <SolutionPageTemplate solution={solution} />
  );
}
