import { products, Product } from '@/data/products';

export async function getAllProducts(): Promise<Product[]> {
  return products;
}

export async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  return products.find((p) => p.slug === slug) ?? null;
}
