import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Main Pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// AI First Pages
import CoreAI from './pages/ai/CoreAI';
import AgenticAI from './pages/ai/AgenticAI';
import AISolutionsByIndustry from './pages/ai/AISolutionsByIndustry';

// Service Pages
import EcommerceDevelopment from './pages/services/EcommerceDevelopment';
import DevOpsCloudSecurity from './pages/services/DevOpsCloudSecurity';
import DigitalTransformation from './pages/services/DigitalTransformation';
import ManagedITServices from './pages/services/ManagedITServices';
import AIMLAutomation from './pages/services/AIMLAutomation';
import WebMobileDevelopment from './pages/services/WebMobileDevelopment';
import SaaSProductDevelopment from './pages/services/SaaSProductDevelopment';

// Solution Pages
import WebApplications from './pages/solutions/WebApplications';
import EnterpriseApplications from './pages/solutions/EnterpriseApplications';
import CRMERPSolutions from './pages/solutions/CRMERPSolutions';
import MarketplacePlatforms from './pages/solutions/MarketplacePlatforms';
import CloudMigration from './pages/solutions/CloudMigration';

// Industry Pages
import Industries from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';
import EcommerceIndustry from './pages/industries/EcommerceIndustry';
import HealthcareIndustry from './pages/industries/HealthcareIndustry';
import FintechIndustry from './pages/industries/FintechIndustry';
import EdtechIndustry from './pages/industries/EdtechIndustry';
import SaaSIndustry from './pages/industries/SaaSIndustry';
import RealEstateIndustry from './pages/industries/RealEstateIndustry';

// Legacy Pages
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import About from './pages/About';
import Careers from './pages/Careers';
import CareerDetail from './pages/CareerDetail';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';

function App() {
  return (
    <Layout>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

        {/* AI First Routes */}
        <Route path="/ai/core-ai" element={<CoreAI />} />
        <Route path="/ai/agentic-ai" element={<AgenticAI />} />
        <Route path="/ai/solutions" element={<AISolutionsByIndustry />} />
        <Route path="/ai/solutions/:slug" element={<AISolutionsByIndustry />} />

        {/* Service Routes */}
        <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
        <Route path="/services/devops-cloud-security" element={<DevOpsCloudSecurity />} />
        <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
        <Route path="/services/managed-it-services" element={<ManagedITServices />} />
        <Route path="/services/ai-ml-automation" element={<AIMLAutomation />} />
        <Route path="/services/web-mobile-development" element={<WebMobileDevelopment />} />
        <Route path="/services/saas-product-development" element={<SaaSProductDevelopment />} />

        {/* Solution Routes */}
        <Route path="/solutions/web-applications" element={<WebApplications />} />
        <Route path="/solutions/enterprise-applications" element={<EnterpriseApplications />} />
        <Route path="/solutions/crm-erp-solutions" element={<CRMERPSolutions />} />
        <Route path="/solutions/marketplace-platforms" element={<MarketplacePlatforms />} />
        <Route path="/solutions/cloud-migration" element={<CloudMigration />} />

        {/* Industry Routes */}
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:id" element={<IndustryDetail />} />
        <Route path="/industries/ecommerce" element={<EcommerceIndustry />} />
        <Route path="/industries/healthcare" element={<HealthcareIndustry />} />
        <Route path="/industries/fintech" element={<FintechIndustry />} />
        <Route path="/industries/edtech" element={<EdtechIndustry />} />
        <Route path="/industries/saas" element={<SaaSIndustry />} />
        <Route path="/industries/real-estate" element={<RealEstateIndustry />} />

        {/* Legacy Routes */}
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<CareerDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogArticle />} />
      </Routes>
    </Layout>
  );
}

export default App;
