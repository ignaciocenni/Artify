import DetailContent from "../../../components/DetailContent";
import { getProduct } from "../../api/products/[id]/controllers";
const dataFetching = async (id) => {
  let product = getProduct(id);
  return product;
};

const Detail = async ({ params }) => {
  const id = params.id;
  const data = await dataFetching(id);
  return (
    <>
      <DetailContent data={data} />
    </>
  );
};
export default Detail;
