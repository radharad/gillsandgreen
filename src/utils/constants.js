import {
  Leaf, Fish, Droplets, Users, Award, Briefcase, Landmark, TrendingUp, Globe, Sprout, Mountain, IndianRupee, TrendingDown, AlertTriangle, ShoppingBag, Recycle, Building2, FlaskConical, Handshake, Store, ShieldCheck,
} from "lucide-react";

/* Static Data */

/* Navbar */

export const NAV_LINKS = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Solution",
    href: "#solution",
  },
  {
    name: "Products",
    href: "#products",
  },
  {
    name: "Leadership",
    href: "#founder",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

/* About */

export const FEATURES = [
  {
    icon: Leaf,
    title: "Organic Farming",
    description:
      "Pesticide-free leafy greens cultivated using sustainable aquaponics."
  },
  {
    icon: Fish,
    title: "Chemical-Free Fish",
    description:
      "Naturally raised Tilapia and Koi fish in a closed-loop ecosystem."
  },
  {
    icon: Droplets,
    title: "90% Water Saving",
    description:
      "Recirculating water technology dramatically reduces water consumption."
  },
  {
    icon: Users,
    title: "Farmer Empowerment",
    description:
      "Helping local farmers adopt innovative and profitable farming methods."
  },
];

/* Founders */

export const FOUNDERS = [
  {
    id: 1,
    image: "/images/founder.jpg",
    name: "Jeyaraj Mani",
    designation: "Founder",

    icon: Award,

    description:
      "Retired Sergeant from the Indian Air Force with over 20 years of disciplined technical service. Passionate about sustainable agriculture and climate-resilient farming models that empower farmers.",

    education: "M.Sc. Mathematics",
  },

  {
    id: 2,
    image: "/images/co-founder.jpg",
    name: "Swathi Murugan",
    designation: "Co-Founder",

    icon: Briefcase,

    description:
      "Technology professional with expertise in software development, digital transformation, and process optimization. Driving innovation through scalable and transparent farming solutions.",

    education: "B.Tech Information Technology",
  },
];

/* Market */

export const MARKETSTATS = [
  {
    id: 1,
    icon: Landmark,
    value: 52.6,
    suffix: "M",
    prefix: "$",
    title: "India Market (2024)",
    description:
      "The Indian aquaponics market is expanding rapidly with increasing demand for sustainable agriculture.",
  },


  {
    id: 2,
    icon: TrendingUp,
    value: 15.3,
    suffix: "%",
    title: "India CAGR",
    description:
      "Expected annual growth from 2025–2030, driven by healthy food demand and water-efficient farming.",
  },
  {
    id: 3,
    icon: Globe,
    value: 2399.96,
    suffix: "M",
    prefix: "$",
    title: "Global Market by 2032",
    description:
      "The global aquaponics market continues to expand as sustainable farming gains worldwide adoption.",
  },
  {
    id: 4,
    icon: Sprout,
    value: 9.68,
    suffix: "%",
    title: "Global CAGR",
    description:
      "Steady global growth supported by technological innovation and eco-friendly farming practices.",
  },

];

/* Problems */

export const PROBLEMS = [
  {
    icon: Mountain,
    title: "Limited Hill Farming",
    description:
      "Difficult terrain and poor infrastructure restrict modern farming practices in hilly regions.",
  },
  {
    icon: IndianRupee,
    title: "High Farming Costs",
    description:
      "Increasing fertilizer, water, and operational costs reduce farmer profitability.",
  },
  {
    icon: TrendingDown,
    title: "Weak Market Access",
    description:
      "Farmers struggle to connect directly with buyers, resulting in unstable pricing.",
  },
  {
    icon: Sprout,
    title: "Low Technology Adoption",
    description:
      "Limited awareness prevents farmers from using sustainable technologies like aquaponics.",
  },
  {
    icon: AlertTriangle,
    title: "Environmental Damage",
    description:
      "Chemical farming degrades soil fertility and contaminates water resources over time.",
  },
];

/* Process */

export const PROCESSDATA = [
  {
    id: 1,
    icon: Fish,
    title: "Fish Farming",
    description:
      "Healthy fish are raised in controlled tanks where they naturally produce nutrient-rich water.",
  },
  {
    id: 2,
    icon: Droplets,
    title: "Natural Filtration",
    description:
      "Beneficial bacteria convert fish waste into nutrients, creating a balanced ecosystem.",
  },
  {
    id: 3,
    icon: Leaf,
    title: "Plant Growth",
    description:
      "Plants absorb these nutrients while naturally filtering the water for the fish.",
  },
  {
    id: 4,
    icon: ShoppingBag,
    title: "Harvest & Supply",
    description:
      "Fresh vegetables and fish are harvested and supplied directly to consumers and businesses.",
  },
];

/* Products */

export const PRODUCTS = [
  {
    id: 1,
    icon: Leaf,
    title: "Fresh Organic Greens",
    description:
      "Premium pesticide-free leafy greens cultivated using advanced aquaponics systems.",
    image: "/images/greens.jpg",
  },
  {
    id: 2,
    icon: Fish,
    title: "Chemical-Free Fresh Fish",
    description:
      "Naturally grown Tilapia and Koi fish raised in oxygen-rich recirculating water.",
    image: "/images/fish.jpg",
  },
  {
    id: 3,
    icon: Recycle,
    title: "Organic Vermicompost",
    description:
      "Eco-friendly compost created from fish waste to naturally enrich agricultural soil.",
    image: "/images/vermicompost.jpg",
  },
  {
    id: 4,
    icon: Building2,
    title: "Bulk & Institutional Supply",
    description:
      "Reliable large-volume supply of fresh greens and fish for retailers, hotels and institutions.",
    image: "/images/bulk.jpg",
  },
];

/* Revenue */

export const REVENUEDATA = [
  {
    icon: Fish,
    title: "Dual Revenue Streams",
    description:
      "Generate recurring income through the sale of premium fish and pesticide-free leafy greens.",
  },
  {
    icon: Building2,
    title: "B2B Institutional Supply",
    description:
      "Long-term contracts with retailers, hotels, restaurants, and institutions ensure stable revenue.",
  },
  {
    icon: Recycle,
    title: "Value-Added Products",
    description:
      "Organic vermicompost created from fish waste provides an additional sustainable income stream.",
  },
  {
    icon: Users,
    title: "Farmer Partnership Model",
    description:
      "Scale rapidly by partnering with farmers, enabling shared growth while minimizing capital investment.",
  },
];

/* Roadmap */

export const ROADMAP = [
  {
    year: "Phase 01",
    icon: FlaskConical,
    title: "Build R&D Capability",
    description:
      "Develop a dedicated aquaponics research and innovation center to improve farming efficiency.",
  },
  {
    year: "Phase 02",
    icon: Users,
    title: "Farmer Network Expansion",
    description:
      "Train and onboard local farmers to adopt scalable aquaponics farming systems.",
  },
  {
    year: "Phase 03",
    icon: Handshake,
    title: "Market Linkages",
    description:
      "Strengthen partnerships with retailers, aggregators, and institutional buyers.",
  },
  {
    year: "Phase 04",
    icon: Sprout,
    title: "Expand Crop Portfolio",
    description:
      "Introduce premium vegetables and fish varieties to diversify revenue streams.",
  },
  {
    year: "Phase 05",
    icon: Globe,
    title: "Scale Across India",
    description:
      "Build a standardized and replicable aquaponics model for nationwide expansion.",
  },
];

/* Solutions */

export const SOLUTIONSMAP = [
  {
    icon: Fish,
    title: "Aquaponics Farming",
    description:
      "An integrated fish and plant cultivation system that creates a natural, self-sustaining ecosystem.",
  },
  {
    icon: Droplets,
    title: "90% Less Water Usage",
    description:
      "Water continuously circulates between fish tanks and grow beds, dramatically reducing water consumption.",
  },
  {
    icon: Leaf,
    title: "Chemical-Free Production",
    description:
      "Fish waste naturally nourishes plants, eliminating the need for chemical fertilizers and pesticides.",
  },
  {
    icon: Users,
    title: "Farmer Empowerment",
    description:
      "Training, technical guidance, and scalable farming models help farmers increase long-term income.",
  },
  {
    icon: Store,
    title: "Direct Market Linkage",
    description:
      "Connecting farmers with retailers and institutional buyers ensures stable demand and fair pricing.",
  },
];

/* USP */

export const USPDATA = [
  {
    icon: ShieldCheck,
    title: "Chemical-Free Farming",
    description:
      "Fresh vegetables and naturally raised fish without pesticides or chemical fertilizers.",
  },
  {
    icon: Fish,
    title: "Dual Revenue Model",
    description:
      "Generate income from premium fish and organic greens using one integrated farming ecosystem.",
  },
  {
    icon: Mountain,
    title: "First Mover Advantage",
    description:
      "Pioneering commercial aquaponics farming in the Nilgiris with scalable sustainable solutions.",
  },
  {
    icon: Users,
    title: "Farmer Partnership",
    description:
      "Helping local farmers adopt aquaponics through training, technology and market support.",
  },
];