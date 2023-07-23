import DetailContent from "../../../components/DetailContent";
import { getProduct } from "../../api/products/[id]/controllers";
import { getSale } from "../../api/sales/[id]/controllers";

const dataFetching = async (id) => {
  let product = getProduct(id);

  return product;
};

const Detail = async ({ params }) => {
  const id = params.id;
  const data = await dataFetching(id);
  const sales = await getSale(id);

  return (
    <>
      <DetailContent data={data} sale={sales} />
    </>
  );
};

export default Detail;
