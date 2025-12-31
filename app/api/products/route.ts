import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const minPrice = searchParams.get('minPrice');
  const category = searchParams.get('category');

  let filteredProducts = products;

  if (minPrice) {
    filteredProducts = filteredProducts.filter(
      (p) => p.price >= Number(minPrice)
    );
  }

  if (category) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === category
    );
  }

  return NextResponse.json(filteredProducts);
}
