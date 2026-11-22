export type SizeId = "small" | "medium" | "large";

export type ChewGradeId = "standard" | "titan";

export type BundleId = "solo" | "starter" | "ultimate";

export interface Size {
  id: SizeId;
  label: string;
  weightRange: string;
  surcharge: number;
}

export interface ChewGrade {
  id: ChewGradeId;
  label: string;
  description: string;
  price: number;
}

export interface BundleOption {
  id: BundleId;
  label: string;
  description: string;
  price: number;
  includes: string[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  dogSize: SizeId;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  basePrice: number;
  sizes: Size[];
  chewGrades: ChewGrade[];
  bundles: BundleOption[];
  reviews: Review[];
  faq: FAQ[];
}

export const product: Product = {
  id: "chronocore-6h-foraging-capsule",
  name: "ChronoCore: The 6-Hour Autonomous Foraging & Gnaw Capsule",
  tagline:
    "Six hours of self-guided foraging and gnawing, so your dog stays calm and engaged while you are away.",
  description:
    "ChronoCore dispenses a rotating schedule of enrichment tasks and durable chew targets across a full six-hour cycle. Designed for solo home time, it keeps dogs mentally occupied and physically satisfied without constant supervision.",
  basePrice: 39.99,
  sizes: [
    {
      id: "small",
      label: "Small",
      weightRange: "Up to 20 lbs",
      surcharge: 0,
    },
    {
      id: "medium",
      label: "Medium",
      weightRange: "20–55 lbs",
      surcharge: 10,
    },
    {
      id: "large",
      label: "Large",
      weightRange: "55+ lbs",
      surcharge: 20,
    },
  ],
  chewGrades: [
    {
      id: "standard",
      label: "Standard Sky Blue",
      description: "Gentle nylon for light-to-moderate chewers.",
      price: 49.99,
    },
    {
      id: "titan",
      label: "Titan Power Chewer",
      description: "Reinforced polymer for aggressive chewers.",
      price: 54.99,
    },
  ],
  bundles: [
    {
      id: "solo",
      label: "Solo Capsule",
      description: "One ChronoCore capsule, ready to load and run.",
      price: 39.99,
      includes: ["1x ChronoCore capsule", "Quick-start guide"],
    },
    {
      id: "starter",
      label: "Starter Pack with 2 Refill Pods",
      description: "The capsule plus two extra foraging refill pods.",
      price: 69.99,
      includes: [
        "1x ChronoCore capsule",
        "2x refill pods",
        "Quick-start guide",
      ],
    },
    {
      id: "ultimate",
      label: "Ultimate All-Day Sanctuary Bundle with 6 pods",
      description: "The full sanctuary setup with six refill pods for extended coverage.",
      price: 89.99,
      includes: [
        "1x ChronoCore capsule",
        "6x refill pods",
        "Quick-start guide",
        "Chew-grade selector card",
      ],
    },
  ],
  reviews: [
    {
      id: "r1",
      name: "Maya R.",
      rating: 5,
      date: "2024-04-12",
      title: "Finally a quiet afternoon",
      comment:
        "Our border collie usually paces the moment we leave. With ChronoCore she is occupied the whole morning and naps after. Worth every penny.",
      verified: true,
      dogSize: "medium",
    },
    {
      id: "r2",
      name: "Derek L.",
      rating: 4,
      date: "2024-03-28",
      title: "Tough enough for my chewer",
      comment:
        "The Titan grade survived my lab’s first week. He still goes for the couch sometimes, but the capsule is his first stop now.",
      verified: true,
      dogSize: "large",
    },
    {
      id: "r3",
      name: "Sofia T.",
      rating: 5,
      date: "2024-04-01",
      title: "Great for small dogs",
      comment:
        "The small size fits my chihuahua perfectly, and the sky blue chew is gentle on her teeth. She loves the refill pods.",
      verified: true,
      dogSize: "small",
    },
  ],
  faq: [
    {
      id: "faq1",
      question: "How long does a cycle run?",
      answer:
        "Each ChronoCore cycle runs for six hours of staggered foraging and gnawing activity before needing a refill.",
    },
    {
      id: "faq2",
      question: "Which chew grade should I choose?",
      answer:
        "Choose Standard Sky Blue for light to moderate chewers. Choose Titan Power Chewer if your dog tends to destroy standard toys quickly.",
    },
    {
      id: "faq3",
      question: "How do I pick the right size?",
      answer:
        "Small is for dogs up to 20 lbs, Medium covers 20–55 lbs, and Large is for dogs 55 lbs and up.",
    },
    {
      id: "faq4",
      question: "Are refill pods sold separately?",
      answer:
        "Yes. You can buy refill pods individually or save with the Starter Pack (2 pods) or Ultimate Bundle (6 pods).",
    },
    {
      id: "faq5",
      question: "Is it safe to leave unattended?",
      answer:
        "ChronoCore is designed for unsupervised home use, but always supervise the first few sessions to confirm your dog uses it safely.",
    },
  ],
};
