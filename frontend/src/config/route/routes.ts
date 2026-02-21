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

  SERVICE_PAGE : "/services/:serviceId",


  SOLUTIONS_PAGE: "/solutions/:solutionId",


  INDUSTRIES: "/industries",
  INDUSTRY_DETAIL: "/industry/:id",
  INDUSTRY_PAGE: "/industries/:industryId",
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