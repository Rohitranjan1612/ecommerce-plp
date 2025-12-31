import ProductGrid from '@/components/ProductGrid';
import { getAllProducts } from '@/lib/getProducts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vitamins & Supplements | Health Store',
  description:
    'Browse high-quality vitamins and supplements to support immunity, heart health, and daily nutrition.',
};


export default async function ProductsPage() {
  const products = await getAllProducts();
  return (
    <main>
      <h1>Vitamins & Supplements</h1>

      <section aria-label="Product list">
        <ProductGrid products={products} />
      </section>
    </main>
  );
}
