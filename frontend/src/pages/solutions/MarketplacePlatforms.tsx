import SolutionPageTemplate from '../../components/templates/SolutionPageTemplate';
import { SOLUTIONS_DATA } from '../../data/solutions.content';

export default function MarketplacePlatforms() {
  const solution = SOLUTIONS_DATA.find(s => s.id === 'marketplace-platforms')!;
  
  return (
    <SolutionPageTemplate
      solution={solution}
      caseStudies={[
        {
          id: 'b2b-marketplace',
          title: 'B2B Marketplace',
          description: 'Multi-vendor marketplace reaching $5M GMV',
        },
      ]}
    />
  );
}
