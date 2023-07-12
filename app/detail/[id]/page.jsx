import { GET as getProduct } from "../../api/products/[id]/route";
import DetailContent from "../../../components/DetailContent";

const dataFetching = async (id) => {
  try {
    const data = await getProduct(id).then((data) => data.json());
    return data;
  } catch (error) {
    throw new Error(error.message);
  }

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
