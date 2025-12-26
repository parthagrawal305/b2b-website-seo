// Company Data Constants

export const COMPANY = {
  name: "Unison Valves Pvt. Ltd.",
  shortName: "Unison Valves",
  tagline: "Change for the better",
  description: "India's leading manufacturer of ball valves and industrial valves with 40+ years of excellence in flow control solutions.",
  
  // Contact Information
  phone: {
    primary: "+91 99229 22026",
    secondary: "+91 93240 52991",
    supplier: "+91 87673 75260"
  },
  email: {
    sales: "info@unisonvalves.in",
    support: "customersupport@unisonvalves.in",
    supplier: "purchase@unisonvalves.in"
  },
  whatsapp: "919922922026",
  
  // Address
  address: {
    street: "Mozes Wadi, 41/3/2, Anand Park",
    area: "Wadgaon Sheri",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411014",
    country: "India"
  },
  googleMapsUrl: "https://maps.app.goo.gl/LxVPbzDqwR5WmaEh9",
  
  // Social Media
  social: {
    linkedin: "https://www.linkedin.com/company/unison-valves",
    facebook: "https://www.facebook.com/unisonvalves",
    twitter: "https://twitter.com/unisonvalves"
  }
};

export const TRUST_STATS = [
  { number: "40+", label: "Years of Excellence", suffix: "" },
  { number: "5", label: "Million Valves Manufactured", suffix: "M+" },
  { number: "5000", label: "Satisfied Customers", suffix: "+" },
  { number: "700", label: "Industries Served", suffix: "+" }
];

export const CERTIFICATIONS = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    icon: "iso",
    pdfUrl: "/downloads/unison-industrial-valves-catalog.pdf"
  },
  {
    name: "DNV Fire Safety",
    description: "API 607 Fire Safe Certified",
    icon: "fire",
    pdfUrl: "/downloads/unison-ball-valves-steam-traps-catalog.pdf"
  },
  {
    name: "API Certified",
    description: "American Petroleum Institute",
    icon: "api",
    pdfUrl: null
  },
  {
    name: "ASME Compliant",
    description: "International Standards",
    icon: "asme",
    pdfUrl: null
  }
];

export const INDUSTRIES = [
  { name: "Oil & Gas", icon: "oil", description: "Upstream, midstream & downstream operations" },
  { name: "Chemicals", icon: "chemical", description: "Process plants & refineries" },
  { name: "Pharmaceuticals", icon: "pharma", description: "FDA compliant solutions" },
  { name: "Food & Beverage", icon: "food", description: "Hygienic valve solutions" },
  { name: "Water Treatment", icon: "water", description: "Municipal & industrial water" },
  { name: "Power Generation", icon: "power", description: "Thermal & renewable plants" },
  { name: "Engineering", icon: "engineering", description: "Heavy engineering projects" },
  { name: "Paper & Pulp", icon: "paper", description: "Pulping & processing operations" },
  { name: "Sugar & Distillery", icon: "factory", description: "Process control solutions" },
  { name: "Textile", icon: "textile", description: "Dyeing & finishing processes" }
];

export const PRODUCTS = {
  categories: [
    {
      id: "ball-valves",
      name: "Ball Valves",
      description: "High-quality ball valves for precise flow control in industrial applications",
      image: "/images/products/201d8f_4b1e62750cd740438ac36bd296140df2~mv2.jpg",
      href: "/products/ball-valves",
      count: "17+ Variants",
      icon: "ball-valve"
    },
    {
      id: "butterfly-valves",
      name: "Butterfly Valves",
      description: "Efficient butterfly valves for large volume flow control",
      image: "/images/products/201d8f_dc9b9c06396e4600a2b46119d74e2df3~mv2.jpg",
      href: "/products/butterfly-valves",
      count: "Multiple Variants",
      icon: "butterfly-valve"
    },
    {
      id: "gate-valves",
      name: "Gate Valves",
      description: "Reliable gate valves for on/off control applications",
      image: "/images/products/201d8f_73d4ffc5fadb4504a612bff3fc0548a1~mv2.jpg",
      href: "/products/gate-valves",
      count: "Various Classes",
      icon: "gate-valve"
    },
    {
      id: "globe-valves",
      name: "Globe Valves",
      description: "Precision globe valves for throttling applications",
      image: "/images/products/201d8f_8c1e88b2dbbe49d3ad98652238bb635a~mv2.jpg",
      href: "/products/globe-valves",
      count: "Various Classes",
      icon: "globe-valve"
    },
    {
      id: "check-valves",
      name: "Check Valves",
      description: "Non-return valves preventing backflow in pipelines",
      image: "/images/products/201d8f_c5829affe68048969bb65b244df8cef7~mv2.jpg",
      href: "/products/check-valves",
      count: "Multiple Types",
      icon: "check-valve"
    },
    {
      id: "steam-traps",
      name: "Steam Traps",
      description: "Thermodynamic steam traps for efficient condensate removal",
      image: "/images/products/201d8f_b5fbf02960284947a436cb14f607b46f~mv2.jpg",
      href: "/products/steam-traps",
      count: "Thermodynamic",
      icon: "steam-trap"
    },
    {
      id: "limit-switch-box",
      name: "Limit Switch Box",
      description: "Valve position indicators for automation systems",
      image: "/images/products/201d8f_f42fb888b6374c47b3cbb4158a8e53e3~mv2.jpg",
      href: "/products/limit-switch-box",
      count: "Position Indicators",
      icon: "limit-switch"
    },
    {
      id: "strainers",
      name: "Y-Strainers",
      description: "Cast steel Y-strainers for pipeline protection",
      image: "/images/products/201d8f_61d8362b3abb45c79cff28be31df3dbb~mv2.jpg",
      href: "/products/strainers",
      count: "Class 150",
      icon: "strainer"
    }
  ]
};

// Sample client logos (placeholder - replace with actual client names when available)
export const CLIENT_LOGOS = [
  { name: "Reliance Industries", logo: "/clients/client-1.svg" },
  { name: "Tata Steel", logo: "/clients/client-2.svg" },
  { name: "ONGC", logo: "/clients/client-3.svg" },
  { name: "Indian Oil", logo: "/clients/client-4.svg" },
  { name: "BHEL", logo: "/clients/client-5.svg" },
  { name: "L&T", logo: "/clients/client-6.svg" },
  { name: "Hindustan Petroleum", logo: "/clients/client-7.svg" },
  { name: "NTPC", logo: "/clients/client-8.svg" }
];

// Demo testimonials (replace with real ones later)
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "Plant Manager",
    company: "Leading Chemical Manufacturer",
    content: "We've been sourcing ball valves from Unison for over 15 years. Their quality consistency and on-time delivery have never disappointed us. Highly recommended for critical applications.",
    rating: 5,
    image: "/testimonials/avatar-1.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    designation: "Procurement Head",
    company: "Pharmaceutical Company",
    content: "The FDA-compliant valves from Unison meet all our stringent requirements. Their technical support team helped us select the right materials for our specific applications.",
    rating: 5,
    image: "/testimonials/avatar-2.jpg"
  },
  {
    id: 3,
    name: "Amit Patel",
    designation: "Project Director",
    company: "Oil & Gas EPC",
    content: "Fire-safe valves from Unison with DNV certification have been crucial for our offshore projects. Their API 607 compliance gives us complete confidence in safety.",
    rating: 5,
    image: "/testimonials/avatar-3.jpg"
  }
];

export const FAQS = [
  {
    question: "What types of valves does Unison manufacture?",
    answer: "Unison Valves manufactures a comprehensive range of industrial valves including ball valves (17+ variants), butterfly valves, gate valves, globe valves, check valves, and thermodynamic steam traps. We offer both standard and customized solutions for various industries."
  },
  {
    question: "What certifications does Unison Valves have?",
    answer: "Unison Valves is ISO 9001:2015 certified for quality management. Our fire-safe ball valves are certified by DNV for API 607 fire safety compliance. We also manufacture valves compliant with API, ASME, and various Indian standards."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve diverse industries including Oil & Gas, Chemical & Petrochemical, Pharmaceutical, Food & Beverage, Water Treatment, Power Generation, Engineering, Paper, Distilleries, and Sugar industries across India and internationally."
  },
  {
    question: "How can I get a quote for valves?",
    answer: "You can request a quote by filling out our online enquiry form, calling us at +91 99229 22026, or emailing info@unisonvalves.in. Please include valve type, size, pressure class, material requirements, and quantity for accurate pricing."
  },
  {
    question: "What is the lead time for valve orders?",
    answer: "Standard valves are typically available within 2-4 weeks. Custom specifications may require 4-8 weeks depending on complexity. We maintain ready stock of commonly ordered sizes and specifications for faster delivery."
  },
  {
    question: "Do you provide valve automation solutions?",
    answer: "Yes, we offer complete valve automation packages including pneumatic actuators, electric actuators, positioners, limit switch boxes, solenoid valves, and air filter regulators. Our team can help design automated solutions for your specific requirements."
  }
];

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { 
    name: "Products", 
    href: "/products",
    submenu: [
      { name: "Ball Valves", href: "/products/ball-valves" },
      { name: "Butterfly Valves", href: "/products/butterfly-valves" },
      { name: "Gate Valves", href: "/products/gate-valves" },
      { name: "Globe Valves", href: "/products/globe-valves" },
      { name: "Check Valves", href: "/products/check-valves" },
      { name: "Steam Traps", href: "/products/steam-traps" },
      { name: "Limit Switch Box", href: "/products/limit-switch-box" },
      { name: "Y-Strainers", href: "/products/strainers" },
      { name: "View All Products", href: "/products" }
    ]
  },
  { name: "Industries", href: "/industries" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" }
];

