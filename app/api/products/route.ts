import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const slug = searchParams.get('slug');

  // If slug is present → return single product
  if (slug) {
    const product = products.find((p) => p.slug === slug);

    if (!product) {
      return NextResponse.json(
        { message: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  }

  // Otherwise → return all products
  return NextResponse.json(products);
}
