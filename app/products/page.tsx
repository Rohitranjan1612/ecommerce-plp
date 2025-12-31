import ProductGrid from '@/components/ProductGrid';
import { fetchProducts } from '@/lib/api';

export const metadata = {
  title: 'Vitamins & Supplements',
  description: 'Browse our range of vitamins and supplements.',
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
