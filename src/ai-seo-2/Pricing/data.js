// File: src/ai-seo-2/Pricing/data.js
 export const plans = [
  { id: "basic", name: "Basic", price: "$29", buttonText: "Get Started" },
  {
    id: "pro",
    name: "Pro",
    price: "$79",
    buttonText: "Get Started",
    popular: true,
  },
  {
    id: "business",
    name: "Business",
    price: "$149",
    buttonText: "Get Started",
  },
];

export const features = [
  {
    name: "Keyword optimization",
    basic: "Unlimited",
    pro: "Unlimited",
    business: "Unlimited",
  },
  {
    name: "Automated meta tags",
    basic: "1000",
    pro: "Unlimited",
    business: "Unlimited",
  },
  { name: "SEO Monitoring", basic: true, pro: true, business: true },
  { name: "Monthly reports", basic: true, pro: true, business: true },
  { name: "Content suggestions", basic: false, pro: true, business: true },
  { name: "Link optimization", basic: false, pro: true, business: true },
  { name: "Multi-user access", basic: false, pro: true, business: true },
  { name: "API Integration", basic: false, pro: false, business: true },

];
