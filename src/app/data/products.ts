export type Product = {
  id: number;
  slug: string;
  name: string;
  category: "Solar Panel" | "Inverter" | "Battery" | "Accessories";
  shortDescription: string;
  description: string;
  priceGBP: number;
  features: string[];
  images: string[];
  image: string; // main image
  brand: string;
  sku: string;
  efficiency: number;
  specifications: {
    [key: string]: string;
  }
};

export const products: Product[] = [
  {
    id: 1,
    slug: "sunmax-420w-monocrystalline",
    name: "SunMax 420W Mono Solar Panel",
    category: "Solar Panel",
    shortDescription: "Premium high-efficiency panel for roofs and ground-mount systems.",
    description:
      "The SunMax 420W Mono Solar Panel offers up to 21.5% efficiency, built with tempered glass and corrosion-resistant frame for UK weather.",
    priceGBP: 325,
    features: [
      "420W maximum power",
      "25-year performance warranty",
      "PID resistant, 12 busbars",
      "High energy yield in low-light conditions",
    ],
    images: ["/assets/products/sunmax-420w.jpg", "/assets/products/sunmax-420w-2.jpg"],
    image: "/assets/products/sunmax-420w.jpg",
    brand: "SunMax",
    sku: "SM-420M",
    efficiency: 0.215,
    specifications: {
      "Power": "420W",
      "Cell Type": "Monocrystalline",
      "Dimensions": "1722 x 1134 x 30 mm",
      "Weight": "20.5 kg",
      "Warranty": "25 years",
    }
  },
  {
    id: 2,
    slug: "ecocharge-5kw-inverter",
    name: "EcoCharge 5kW Hybrid Inverter",
    category: "Inverter",
    shortDescription: "Smart inverter for home battery systems with export limiting.",
    description:
      "EcoCharge 5kW Hybrid Inverter is UK-ready with anti-islanding safety, built-in WiFi monitoring interface, and battery integration up to 16kWh.",
    priceGBP: 1150,
    features: [
      "5kW AC output",
      "Wi-Fi + app monitoring",
      "Supports batteries and solar array",
      "Safety certified to UK G98/G99",
    ],
    images: ["/assets/products/ecocharge-5kw.jpg", "/assets/products/ecocharge-5kw-2.jpg"],
    image: "/assets/products/ecocharge-5kw.jpg",
    brand: "EcoCharge",
    sku: "EC-5K-H",
    efficiency: 0.97,
    specifications: {
        "AC Output": "5kW",
        "Max DC Input": "8kW",
        "Dimensions": "450 x 550 x 200 mm",
        "Weight": "25 kg",
        "Warranty": "10 years",
    }
  },
  {
    id: 3,
    slug: "lithion-10kwh-storage-battery",
    name: "Lithion 10kWh Storage Battery",
    category: "Battery",
    shortDescription: "Modular storage with fast charge and discharge for peak shaving.",
    description:
      "Lithion 10kWh battery system delivers high cycle life, integrated BMS, and seamless integration with major inverters for backup power.",
    priceGBP: 5200,
    features: [
      "10kWh usable capacity",
      "99.9% round-trip efficiency",
      "10-year warranty",
      "Scalable up to 40kWh",
    ],
    images: ["/assets/products/lithion-10kwh.jpg", "/assets/products/lithion-10kwh-2.jpg"],
    image: "/assets/products/lithion-10kwh.jpg",
    brand: "Lithion",
    sku: "LITH-10K",
    efficiency: 0.99,
    specifications: {
        "Capacity": "10kWh",
        "Voltage": "51.2V",
        "Dimensions": "600 x 800 x 250 mm",
        "Weight": "95 kg",
        "Warranty": "10 years",
    }
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
