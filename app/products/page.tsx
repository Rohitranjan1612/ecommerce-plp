import ProductGrid from '@/components/ProductGrid';
import { fetchProducts } from '@/lib/api';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vitamins & Supplements | Health Store',
  description:
    'Browse high-quality vitamins and supplements to support immunity, heart health, and daily nutrition.',
};


export default async function ProductsPage() {
  const products = await fetchProducts();
  return (
    <main>
      <h1>Vitamins & Supplements</h1>

      <section aria-label="Product list">
        <ProductGrid products={products} />
      </section>
    </main>
  );
}
