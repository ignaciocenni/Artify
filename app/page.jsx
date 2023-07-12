import Home from "../components/Home";
import { GET as getAllCategories } from "./api/category/route";
import { GET as getAllProducts } from "./api/products/route";
import { GET as getAllProvinces } from "./api/provinces/route";

const dataFetching = async () => {
  try {
    const products = await getAllProducts().then((products) => products.json());

    const categories = await getAllCategories().then((categories) => categories.json());

    const provinces = await getAllProvinces().then((provinces) => provinces.json());

    return { products, categories, provinces };
  } catch (error) {
    return { error };
  }
};

export default async function Page() {
  const { products, categories, error, provinces } = await dataFetching();
  return (
      <div>
         <Home products={products} categories={categories} provinces={provinces} />
      </div>
  );
}
