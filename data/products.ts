export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  description: string;

  // SEO & UX
  shortDescription: string;
  category: string;
  brand: string;

  // Filtering & scaling
  rating: number;
  inStock: boolean;
};

export const products: Product[] = [
  {
    id: '1',
    slug: 'vitamin-c-500',
    name: 'Vitamin C 500mg Tablets',
    price: 299,
    image: 'https://placehold.co/300x300?text=Vitamin+C',
    description:
      'Vitamin C tablets help support immunity, improve skin health, and protect against oxidative stress.',
    shortDescription: 'Boost immunity and skin health',
    category: 'Vitamins',
    brand: 'HealthPlus',
    rating: 4.5,
    inStock: true,
  },
  {
    id: '2',
    slug: 'omega-3-fish-oil',
    name: 'Omega-3 Fish Oil Capsules',
    price: 499,
    image: 'https://placehold.co/300x300?text=Omega-3',
    description:
      'Omega-3 fish oil supports heart health, brain function, and joint mobility.',
    shortDescription: 'Supports heart and brain health',
    category: 'Supplements',
    brand: 'NutriWell',
    rating: 4.4,
    inStock: true,
  },
  {
    id: '3',
    slug: 'daily-multivitamin',
    name: 'Daily Multivitamin Tablets',
    price: 399,
    image: 'https://placehold.co/300x300?text=Multivitamin',
    description:
      'A complete daily multivitamin to support energy, immunity, and overall wellness.',
    shortDescription: 'Complete daily nutrition',
    category: 'Vitamins',
    brand: 'HealthPlus',
    rating: 4.2,
    inStock: true,
  },
  {
    id: '4',
    slug: 'calcium-vitamin-d',
    name: 'Calcium + Vitamin D Tablets',
    price: 349,
    image: 'https://placehold.co/300x300?text=Calcium',
    description:
      'Supports strong bones and teeth with calcium and vitamin D.',
    shortDescription: 'Bone and joint support',
    category: 'Minerals',
    brand: 'BoneCare',
    rating: 4.1,
    inStock: true,
  },
  {
    id: '5',
    slug: 'zinc-tablets',
    name: 'Zinc Tablets',
    price: 249,
    image: 'https://placehold.co/300x300?text=Zinc',
    description:
      'Zinc tablets help support immunity and metabolic health.',
    shortDescription: 'Supports immune function',
    category: 'Minerals',
    brand: 'NutriWell',
    rating: 4.0,
    inStock: true,
  },
  {
    id: '6',
    slug: 'vitamin-b12',
    name: 'Vitamin B12 Capsules',
    price: 279,
    image: 'https://placehold.co/300x300?text=Vitamin+B12',
    description:
      'Vitamin B12 supports nerve health and red blood cell formation.',
    shortDescription: 'Supports nerve health',
    category: 'Vitamins',
    brand: 'HealthPlus',
    rating: 4.3,
    inStock: true,
  },
  {
    id: '7',
    slug: 'iron-supplement',
    name: 'Iron Supplement Tablets',
    price: 199,
    image: 'https://placehold.co/300x300?text=Iron',
    description:
      'Iron supplements help prevent iron deficiency and improve energy levels.',
    shortDescription: 'Helps fight fatigue',
    category: 'Minerals',
    brand: 'WellCore',
    rating: 4.1,
    inStock: true,
  },
  {
    id: '8',
    slug: 'magnesium-tablets',
    name: 'Magnesium Tablets',
    price: 329,
    image: 'https://placehold.co/300x300?text=Magnesium',
    description:
      'Magnesium supports muscle function, sleep quality, and relaxation.',
    shortDescription: 'Muscle and sleep support',
    category: 'Minerals',
    brand: 'WellCore',
    rating: 4.2,
    inStock: true,
  },
  {
    id: '9',
    slug: 'probiotic-capsules',
    name: 'Probiotic Capsules',
    price: 549,
    image: 'https://placehold.co/300x300?text=Probiotic',
    description:
      'Probiotics support digestive health and gut balance.',
    shortDescription: 'Gut health support',
    category: 'Supplements',
    brand: 'GutWell',
    rating: 4.6,
    inStock: true,
  },
  {
    id: '10',
    slug: 'vitamin-d3',
    name: 'Vitamin D3 Tablets',
    price: 259,
    image: 'https://placehold.co/300x300?text=Vitamin+D3',
    description:
      'Vitamin D3 supports bone health and immune function.',
    shortDescription: 'Bone and immunity support',
    category: 'Vitamins',
    brand: 'HealthPlus',
    rating: 4.4,
    inStock: true,
  },
  {
    id: '11',
    slug: 'ashwagandha-capsules',
    name: 'Ashwagandha Capsules',
    price: 499,
    image: 'https://placehold.co/300x300?text=Ashwagandha',
    description:
      'Ashwagandha helps reduce stress and improve stamina.',
    shortDescription: 'Stress and energy support',
    category: 'Herbal',
    brand: 'AyurWell',
    rating: 4.3,
    inStock: true,
  },
  {
    id: '12',
    slug: 'biotin-tablets',
    name: 'Biotin Tablets',
    price: 289,
    image: 'https://placehold.co/300x300?text=Biotin',
    description:
      'Biotin supports healthy hair, skin, and nails.',
    shortDescription: 'Hair and skin support',
    category: 'Vitamins',
    brand: 'GlowCare',
    rating: 4.2,
    inStock: true,
  },
  {
    id: '13',
    slug: 'protein-powder',
    name: 'Whey Protein Powder',
    price: 1299,
    image: 'https://placehold.co/300x300?text=Protein+Powder',
    description:
      'High-quality whey protein to support muscle recovery and growth.',
    shortDescription: 'Muscle recovery support',
    category: 'Supplements',
    brand: 'FitFuel',
    rating: 4.5,
    inStock: true,
  },
  {
    id: '14',
    slug: 'collagen-supplement',
    name: 'Collagen Supplement',
    price: 899,
    image: 'https://placehold.co/300x300?text=Collagen',
    description:
      'Collagen supports skin elasticity and joint health.',
    shortDescription: 'Skin and joint support',
    category: 'Supplements',
    brand: 'GlowCare',
    rating: 4.3,
    inStock: true,
  },
  {
    id: '15',
    slug: 'folic-acid',
    name: 'Folic Acid Tablets',
    price: 189,
    image: 'https://placehold.co/300x300?text=Folic+Acid',
    description:
      'Folic acid supports cell growth and red blood cell formation.',
    shortDescription: 'Supports cell health',
    category: 'Vitamins',
    brand: 'WellCore',
    rating: 4.1,
    inStock: true,
  },
  {
    id: '16',
    slug: 'vitamin-e',
    name: 'Vitamin E Capsules',
    price: 319,
    image: 'https://placehold.co/300x300?text=Vitamin+E',
    description:
      'Vitamin E is a powerful antioxidant that supports skin health.',
    shortDescription: 'Antioxidant support',
    category: 'Vitamins',
    brand: 'GlowCare',
    rating: 4.2,
    inStock: true,
  },
  {
    id: '17',
    slug: 'melatonin',
    name: 'Melatonin Tablets',
    price: 349,
    image: 'https://placehold.co/300x300?text=Melatonin',
    description:
      'Melatonin helps regulate sleep cycles and improve sleep quality.',
    shortDescription: 'Sleep support',
    category: 'Supplements',
    brand: 'SleepWell',
    rating: 4.4,
    inStock: true,
  },
  {
    id: '18',
    slug: 'electrolyte-powder',
    name: 'Electrolyte Powder',
    price: 399,
    image: 'https://placehold.co/300x300?text=Electrolyte+Powder',
    description:
      'Electrolyte powder helps maintain hydration and energy levels.',
    shortDescription: 'Hydration support',
    category: 'Supplements',
    brand: 'FitFuel',
    rating: 4.3,
    inStock: true,
  },
  {
    id: '19',
    slug: 'green-tea-extract',
    name: 'Green Tea Extract Capsules',
    price: 459,
    image: 'https://placehold.co/300x300?text=Green+Tea+Extract',
    description:
      'Green tea extract supports metabolism and antioxidant defense.',
    shortDescription: 'Metabolism support',
    category: 'Herbal',
    brand: 'AyurWell',
    rating: 4.2,
    inStock: true,
  },
  {
    id: '20',
    slug: 'glucosamine',
    name: 'Glucosamine Tablets',
    price: 599,
    image: 'https://placehold.co/300x300?text=Glucosamine',
    description:
      'Glucosamine supports joint mobility and flexibility.',
    shortDescription: 'Joint health support',
    category: 'Supplements',
    brand: 'BoneCare',
    rating: 4.3,
    inStock: true,
  },
];

  