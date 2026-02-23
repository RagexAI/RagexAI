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

const AIPage = lazy(() => import("../../pages/ai/AI"));
const CoreAI = lazy(() => import("../../pages/ai/CoreAI"));
const AgenticAI = lazy(() => import("../../pages/ai/AgenticAI"));
const AISolutionsByIndustry = lazy(() => import("../../pages/ai/AISolutionsByIndustry"));

const ServicePage = lazy(()=> import("../../pages/services/ServicePage"))

const SolutionPage = lazy(()=>import ("../../pages/solutions/SolutionPage"))


const Industries = lazy(() => import("../../pages/Industries"));
const IndustryPage  = lazy(()=> import ("../../pages/industries/IndustriesPage"))
const IndustryDetail = lazy(() => import("../../pages/IndustryDetail"));


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
  { path: ROUTE_PATHS.AI_HOME, component: AIPage },
  { path: ROUTE_PATHS.CORE_AI, component: CoreAI },
  { path: ROUTE_PATHS.CORE_AI_DETAIL, component: CoreAI },

  { path: ROUTE_PATHS.AGENTIC_AI, component: AgenticAI },
  { path: ROUTE_PATHS.AGENTIC_AI_DETAIL, component: AgenticAI },

  { path: ROUTE_PATHS.AI_SOLUTIONS, component: AISolutionsByIndustry },
  { path: ROUTE_PATHS.AI_SOLUTIONS_DETAIL, component: AISolutionsByIndustry },

    /* Service Routes */
  {path : ROUTE_PATHS.SERVICE_PAGE , component : ServicePage},

  /* Solution Routes */
  { path: ROUTE_PATHS.SOLUTIONS_PAGE, component: SolutionPage },


  /* Industry Routes */
  { path: ROUTE_PATHS.INDUSTRIES, component: Industries },
  { path: ROUTE_PATHS.INDUSTRY_DETAIL, component: IndustryDetail },
  {path : ROUTE_PATHS.INDUSTRY_PAGE , component : IndustryPage},

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