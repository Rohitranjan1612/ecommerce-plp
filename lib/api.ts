import { Product } from "@/data/products";

export async function fetchProducts() {
  const res = await fetch("/api/products", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function fetchProductBySlug(slug: string) {
  const res = await fetch(`/api/products?slug=${slug}`, {
    cache: "force-cache",
  });

  if (res.status === 404) {
    throw new Error("NOT_FOUND");
  }

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}
