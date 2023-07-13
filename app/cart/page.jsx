import products from "./products";
import Card from './CardCart'
function Cart() {
  return (
    <div className="mx-auto w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 p-4">
      {products.map((product) => (
        <Card
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        stock={product.stock}
        />
      ))}
    </div>
  );
}

export default Cart;
