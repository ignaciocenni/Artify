import products from "./cardCart/products";
import Card from './cardCart/CardCart'
function Cart() {
  return (
    <div className="mx-auto w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 p-4">
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
      <div>
        total:
      </div>
    </div>
  );
}

export default Cart;
