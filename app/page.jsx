import Home from "../components/Home";
import { getAllProducts } from "../app/api/products/controllers";
import { getAllCategories } from "../app/api/category/controllers";
import { getAllProvinces } from "../app/api/provinces/controllers";
const dataFetching = async () => {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  const provinces = await getAllProvinces();
  return {
    products,
    categories,
    provinces,
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
