import { products } from '@/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <h1>{product.name}</h1>

      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
      />

      <p>{product.description}</p>
      <p>
        <strong>₹{product.price}</strong>
      </p>
    </main>
  );
}
