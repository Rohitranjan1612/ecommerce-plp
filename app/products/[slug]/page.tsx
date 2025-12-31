import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { Product } from '@/data/products';
import { getAllProducts, getProductBySlug } from '@/lib/getProducts';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

async function getProduct(slug: string): Promise<Product> {
  const product = await getProductBySlug(slug);
  if (!product) {
    notFound();
  }
  return product;
}

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
