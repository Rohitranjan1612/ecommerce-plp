import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <article className="product-card">
        <div className="product-image">
          <Image
            src={product.image}
            alt={`${product.name} supplement`}
            width={300}
            height={300}
            loading="lazy"
          />
        </div>

        <h2 className="product-title">{product.name}</h2>

        <p className="product-description">{product.shortDescription}</p>

        <p className="product-price">₹{product.price}</p>
      </article>
    </Link>
  );
}
