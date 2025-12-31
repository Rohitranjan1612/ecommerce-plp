import { Product } from '@/data/products';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/api/products`, {
    // cache: 'force-cache', // SSG
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export async function fetchProductBySlug(
  slug: string
): Promise<Product> {
  const res = await fetch(
    `${API_BASE_URL}/api/products?slug=${slug}`,
    // { cache: 'force-cache' } // SSG
  );

  if (res.status === 404) {
    throw new Error('NOT_FOUND');
  }

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }

  return res.json();
}
