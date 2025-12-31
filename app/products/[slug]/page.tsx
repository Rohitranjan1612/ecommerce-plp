import Image from 'next/image';
import { notFound } from 'next/navigation';
import { fetchProductBySlug } from '@/lib/api';
import type { Product } from '@/data/products';
import type { Metadata } from 'next';

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  return {
    title: `${product.name} | Vitamins & Supplements`,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function getProduct(slug: string): Promise<Product> {
  try {
    return await fetchProductBySlug(slug);
  } catch (error: any) {
    if (error.message === 'NOT_FOUND') {
      notFound();
    }
    throw error;
  }
}
export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <main>
      <h1>{product.name}</h1>

      <Image
        src={product.image}
        alt={`${product.name} supplement`}
        width={400}
        height={400}
        priority
      />

      <p>{product.description}</p>

      <p>
        <strong>₹{product.price}</strong>
      </p>
    </main>
  );
}
