import { lazy, ComponentType, LazyExoticComponent } from "react";
import { ROUTE_PATHS } from "./routes";

// Type for route config
export interface AppRoute {
  path: string;
  component: LazyExoticComponent<ComponentType>;
}

// Lazy imports
const Home = lazy(() => import("../../pages/Home"));
const Portfolio = lazy(() => import("../../pages/Portfolio"));
const Contact = lazy(() => import("../../pages/Contact"));

const CoreAI = lazy(() => import("../../pages/ai/CoreAI"));
const AgenticAI = lazy(() => import("../../pages/ai/AgenticAI"));
const AISolutionsByIndustry = lazy(() => import("../../pages/ai/AISolutionsByIndustry"));

const EcommerceDevelopment = lazy(() => import("../../pages/services/EcommerceDevelopment"));
const DevOpsCloudSecurity = lazy(() => import("../../pages/services/DevOpsCloudSecurity"));
const DigitalTransformation = lazy(() => import("../../pages/services/DigitalTransformation"));
const ManagedITServices = lazy(() => import("../../pages/services/ManagedITServices"));
const AIMLAutomation = lazy(() => import("../../pages/services/AIMLAutomation"));
const WebMobileDevelopment = lazy(() => import("../../pages/services/WebMobileDevelopment"));
const SaaSProductDevelopment = lazy(() => import("../../pages/services/SaaSProductDevelopment"));

const WebApplications = lazy(() => import("../../pages/solutions/WebApplications"));
const EnterpriseApplications = lazy(() => import("../../pages/solutions/EnterpriseApplications"));
const CRMERPSolutions = lazy(() => import("../../pages/solutions/CRMERPSolutions"));
const MarketplacePlatforms = lazy(() => import("../../pages/solutions/MarketplacePlatforms"));
const CloudMigration = lazy(() => import("../../pages/solutions/CloudMigration"));

const Industries = lazy(() => import("../../pages/Industries"));
const IndustryDetail = lazy(() => import("../../pages/IndustryDetail"));

const EcommerceIndustry = lazy(() => import("../../pages/industries/EcommerceIndustry"));
const HealthcareIndustry = lazy(() => import("../../pages/industries/HealthcareIndustry"));
const FintechIndustry = lazy(() => import("../../pages/industries/FintechIndustry"));
const EdtechIndustry = lazy(() => import("../../pages/industries/EdtechIndustry"));
const SaaSIndustry = lazy(() => import("../../pages/industries/SaaSIndustry"));
const RealEstateIndustry = lazy(() => import("../../pages/industries/RealEstateIndustry"));

const CaseStudies = lazy(() => import("../../pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("../../pages/CaseStudyDetail"));

const About = lazy(() => import("../../pages/About"));

const Careers = lazy(() => import("../../pages/Careers"));
const CareerDetail = lazy(() => import("../../pages/CareerDetail"));

const Blog = lazy(() => import("../../pages/Blog"));
const BlogArticle = lazy(() => import("../../pages/BlogArticle"));

const NotFound = lazy(() => import("../../pages/NotFound"));


export const ROUTES: AppRoute[] = [
  /* Main Routes */
  { path: ROUTE_PATHS.HOME, component: Home },
  { path: ROUTE_PATHS.PORTFOLIO, component: Portfolio },
  { path: ROUTE_PATHS.CONTACT, component: Contact },

  /* AI First Routes */
  { path: ROUTE_PATHS.CORE_AI, component: CoreAI },
  { path: ROUTE_PATHS.CORE_AI_DETAIL, component: CoreAI },

  { path: ROUTE_PATHS.AGENTIC_AI, component: AgenticAI },
  { path: ROUTE_PATHS.AGENTIC_AI_DETAIL, component: AgenticAI },

  { path: ROUTE_PATHS.AI_SOLUTIONS, component: AISolutionsByIndustry },
  { path: ROUTE_PATHS.AI_SOLUTIONS_DETAIL, component: AISolutionsByIndustry },

    /* Service Routes */
  { path: ROUTE_PATHS.SERVICES_ECOMMERCE, component: EcommerceDevelopment },
  { path: ROUTE_PATHS.SERVICES_DEVOPS, component: DevOpsCloudSecurity },
  { path: ROUTE_PATHS.SERVICES_DIGITAL_TRANSFORMATION, component: DigitalTransformation },
  { path: ROUTE_PATHS.SERVICES_MANAGED_IT, component: ManagedITServices },
  { path: ROUTE_PATHS.SERVICES_AI_ML, component: AIMLAutomation },
  { path: ROUTE_PATHS.SERVICES_WEB_MOBILE, component: WebMobileDevelopment },
  { path: ROUTE_PATHS.SERVICES_SAAS, component: SaaSProductDevelopment },

  /* Solution Routes */
  { path: ROUTE_PATHS.SOLUTIONS_WEB_APPS, component: WebApplications },
  { path: ROUTE_PATHS.SOLUTIONS_ENTERPRISE_APPS, component: EnterpriseApplications },
  { path: ROUTE_PATHS.SOLUTIONS_CRM_ERP, component: CRMERPSolutions },
  { path: ROUTE_PATHS.SOLUTIONS_MARKETPLACE, component: MarketplacePlatforms },
  { path: ROUTE_PATHS.SOLUTIONS_CLOUD, component: CloudMigration },

  /* Industry Routes */
  { path: ROUTE_PATHS.INDUSTRIES, component: Industries },
  { path: ROUTE_PATHS.INDUSTRY_DETAIL, component: IndustryDetail },

  { path: ROUTE_PATHS.INDUSTRY_ECOMMERCE, component: EcommerceIndustry },
  { path: ROUTE_PATHS.INDUSTRY_HEALTHCARE, component: HealthcareIndustry },
  { path: ROUTE_PATHS.INDUSTRY_FINTECH, component: FintechIndustry },
  { path: ROUTE_PATHS.INDUSTRY_EDTECH, component: EdtechIndustry },
  { path: ROUTE_PATHS.INDUSTRY_SAAS, component: SaaSIndustry },
  { path: ROUTE_PATHS.INDUSTRY_REAL_ESTATE, component: RealEstateIndustry },

  /* Legacy Routes */
  { path: ROUTE_PATHS.CASE_STUDIES, component: CaseStudies },
  { path: ROUTE_PATHS.CASE_STUDY_DETAIL, component: CaseStudyDetail },

  { path: ROUTE_PATHS.ABOUT, component: About },

  { path: ROUTE_PATHS.CAREERS, component: Careers },
  { path: ROUTE_PATHS.CAREER_DETAIL, component: CareerDetail },

  { path: ROUTE_PATHS.BLOG, component: Blog },
  { path: ROUTE_PATHS.BLOG_ARTICLE, component: BlogArticle },

  /*Not Found Route */
  { path: ROUTE_PATHS.NOT_FOUND, component: NotFound }

];