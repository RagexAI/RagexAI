export const ROUTE_PATHS = {

  HOME: "/",
  PORTFOLIO: "/portfolio",
  CONTACT: "/contact",

  CORE_AI: "/ai/core-ai",
  CORE_AI_DETAIL: "/ai/core-ai/:slug",

  AGENTIC_AI: "/ai/agentic-ai",
  AGENTIC_AI_DETAIL: "/ai/agentic-ai/:slug",

  AI_SOLUTIONS: "/ai/solutions",
  AI_SOLUTIONS_DETAIL: "/ai/solutions/:slug",

  SERVICES_ECOMMERCE: "/services/ecommerce-development",
  SERVICES_DEVOPS: "/services/devops-cloud-security",
  SERVICES_DIGITAL_TRANSFORMATION: "/services/digital-transformation",
  SERVICES_MANAGED_IT: "/services/managed-it-services",
  SERVICES_AI_ML: "/services/ai-ml-automation",
  SERVICES_WEB_MOBILE: "/services/web-mobile-development",
  SERVICES_SAAS: "/services/saas-product-development",

  SOLUTIONS_WEB_APPS: "/solutions/web-applications",
  SOLUTIONS_ENTERPRISE_APPS: "/solutions/enterprise-applications",
  SOLUTIONS_CRM_ERP: "/solutions/crm-erp-solutions",
  SOLUTIONS_MARKETPLACE: "/solutions/marketplace-platforms",
  SOLUTIONS_CLOUD: "/solutions/cloud-migration",

  INDUSTRIES: "/industries",
  INDUSTRY_DETAIL: "/industries/:id",

  INDUSTRY_ECOMMERCE: "/industries/ecommerce",
  INDUSTRY_HEALTHCARE: "/industries/healthcare",
  INDUSTRY_FINTECH: "/industries/fintech",
  INDUSTRY_EDTECH: "/industries/edtech",
  INDUSTRY_SAAS: "/industries/saas",
  INDUSTRY_REAL_ESTATE: "/industries/real-estate",

  CASE_STUDIES: "/case-studies",
  CASE_STUDY_DETAIL: "/case-studies/:id",

  ABOUT: "/about",

  CAREERS: "/careers",
  CAREER_DETAIL: "/careers/:id",

  BLOG: "/blog",
  BLOG_ARTICLE: "/blog/:id",

  NOT_FOUND: "*"

} as const;


export type RoutePath =
  typeof ROUTE_PATHS[keyof typeof ROUTE_PATHS];