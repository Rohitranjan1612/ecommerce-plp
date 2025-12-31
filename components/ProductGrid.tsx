import ProductCard from './ProductCard';
import { Product } from '@/data/products';

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <ul className="product-grid">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
