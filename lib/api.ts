import { Product } from '@/data/products';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export async function fetchProducts(
  query: string = ''
): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/api/products${query}`, {
    cache: 'force-cache', // enables SSG
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}
