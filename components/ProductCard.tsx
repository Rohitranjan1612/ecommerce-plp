import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article>
      <Link href={`/products/${product.slug}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          loading="lazy"
        />
        <h2>{product.name}</h2>
      </Link>

      <p>{product.description}</p>
      <p><strong>₹{product.price}</strong></p>
    </article>
  );
}
