"use client";
import Home from "../components/Home";

const dataFetching = async () => {
  const products = await fetch("/api/products");
  const categories = await fetch("/api/category");
  const provinces = await fetch("/api/provinces");

  return {
    products: await products.json(),
    categories: await categories.json(),
    provinces: await provinces.json(),
  };
};

export default async function Page() {
  const { products, categories, provinces } = await dataFetching();
  return (
    <div>
      <Home products={products} categories={categories} provinces={provinces} />
    </div>
  );
}
