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
      slug: 'vitamin-c',
      name: 'Vitamin C Tablets',
      price: 299,
      image: '/images/vitamin-c.jpg',
      description:
        'Vitamin C tablets help strengthen immunity, support skin health, and improve overall wellness.',
      shortDescription: 'Boost immunity and daily health',
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
      image: '/images/omega-3.jpg',
      description:
        'Omega-3 fish oil supports heart health, brain function, and joint mobility.',
      shortDescription: 'Supports heart and brain health',
      category: 'Supplements',
      brand: 'NutriWell',
      rating: 4.3,
      inStock: true,
    },
    {
      id: '3',
      slug: 'daily-multivitamin',
      name: 'Daily Multivitamin',
      price: 399,
      image: '/images/multivitamin.jpg',
      description:
        'A complete daily multivitamin to support energy, immunity, and overall health.',
      shortDescription: 'Complete daily nutrition',
      category: 'Vitamins',
      brand: 'HealthPlus',
      rating: 4.2,
      inStock: true,
    },
    {
      id: '4',
      slug: 'calcium-vitamin-d',
      name: 'Calcium + Vitamin D',
      price: 349,
      image: '/images/calcium.jpg',
      description:
        'Supports strong bones and teeth with calcium and vitamin D.',
      shortDescription: 'Bone and joint support',
      category: 'Minerals',
      brand: 'BoneCare',
      rating: 4.1,
      inStock: false,
    },
  ];
  