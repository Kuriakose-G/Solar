export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Solar Inc",
  "url": "https://www.solar-example.co.uk",
  "logo": "https://www.solar-example.co.uk/assets/logo.png",
  "description": "UK-based renewable energy solutions. Solar panels, inverters, batteries, and installation services.",
  "telephone": "+44 20 7946 0958",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Green Circuit",
    "addressLocality": "London",
    "addressRegion": "Greater London",
    "postalCode": "SW1A 1AA",
    "addressCountry": "GB"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/solar-inc",
    "https://twitter.com/solar-inc"
  ]
};
