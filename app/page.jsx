import Home from "../components/Home";
import { getAllProducts } from "../app/api/products/controllers";
import store from "../store/store";

const dataFetching = async () => {
  const products = await getAllProducts();
  return products;
};

export default async function Page() {
  const products = await dataFetching();
  return (
    <div>
      <Home products={products} />
    </div>
  );
}
