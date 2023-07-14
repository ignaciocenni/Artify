import products from "./cardCart/products";
import Card from "./cardCart/CardCart";
import BuyNowButton from "../../components/buttons/BuyNowButton";
function Cart() {
  return (
    <div className="flex mx-auto w-full md:w-3/5 lg:w-2/5 xl:w-1/3 items-start justify-center gap-10">
      <div className="flex flex-col p-4 bg-[var(--primary)] rounded-2xl shadow-md shadow-gray-600">
        <h1 className="text-2xl font-medium pb-2  ">Productos</h1>
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            stock={product.stock}
          />
        ))}
      </div>
      <div className="flex flex-col p-4 bg-[var(--primary)] rounded-2xl shadow-md shadow-gray-600">
        <h1 className="font-bold">Total $5334.3</h1>
      <BuyNowButton/>
      </div>
    </div>
  );
}

export default Cart;
