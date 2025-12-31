import ProductCard from './ProductCard';
import { Product } from '@/data/products';

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <ul style={{ display: 'grid', gap: '1rem' }}>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
