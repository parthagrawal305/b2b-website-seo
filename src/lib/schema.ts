// Schema.org structured data generators for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Unison Valves Pvt. Ltd.",
  "alternateName": "Unison Valves",
  "url": "https://www.unisonvalves.in",
  "logo": "https://www.unisonvalves.in/logo.png",
  "sameAs": [
    "https://www.facebook.com/unisonvalves",
    "https://www.linkedin.com/company/unison-valves",
    "https://twitter.com/unisonvalves"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-99229-22026",
    "contactType": "sales",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mozes Wadi, 41/3/2, Anand Park, Wadgaon Sheri",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411014",
    "addressCountry": "IN"
  },
  "foundingDate": "1984",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 50,
    "maxValue": 200
  },
  "slogan": "Change for the better"
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.unisonvalves.in/#localbusiness",
  "name": "Unison Valves Pvt. Ltd.",
  "image": "https://www.unisonvalves.in/factory.jpg",
  "priceRange": "₹₹₹",
  "telephone": "+91-99229-22026",
  "email": "info@unisonvalves.in",
  "url": "https://www.unisonvalves.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mozes Wadi, 41/3/2, Anand Park, Wadgaon Sheri",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411014",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.5593,
    "longitude": 73.9245
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "50"
  }
};

export const generateProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  sku: string;
  category: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "sku": product.sku,
  "brand": {
    "@type": "Brand",
    "name": "Unison Valves"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Unison Valves Pvt. Ltd."
  },
  "category": product.category,
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR",
    "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    "seller": {
      "@type": "Organization",
      "name": "Unison Valves Pvt. Ltd."
    }
  }
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateArticleSchema = (article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.headline,
  "description": article.description,
  "image": article.image,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "author": {
    "@type": "Organization",
    "name": "Unison Valves"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Unison Valves Pvt. Ltd.",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.unisonvalves.in/logo.png"
    }
  }
});

