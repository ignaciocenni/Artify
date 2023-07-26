"use client";
import Stars from "./Stars";
import CategoryLabel from "./DetailComponents/CategoryLabel";
import ImageSlider from "./DetailComponents/ImageSlider";
import LatestReviews from "./DetailComponents/LatestReviews";
import AddReviews from "./DetailComponents/AddReviews";
import SellerInfo from "./DetailComponents/SellerInfo";
import Footer from "./Footer";
import AddDeductButtons from "../components/buttons/AddDeductButtons";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";



const DetailContent = ({ data, sale }) => {

  const [toggle, setToggle] = useState(false);
  const [latestReview, setLatestReview] = useState(null);

  const {
    reviews,
    image,
    category,
    price,
    name,
    user,
    userId,
    stock,
    description,
    id,
    socials,
  } = data;
  const amount = reviews?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.rating,
    0
  );
  const averange = amount / reviews?.length;
  const sales = sale.sales;
  const { data: session } = useSession();
  const buyerId = session?.user?.id;

  useEffect(() => {
    const saleWithBuyerId = sales?.some(
      (sales) => sales.customerId === buyerId
    );
    setToggle(saleWithBuyerId);
    if (reviews?.some((review) => review.userId === buyerId)) {
      setToggle(false);
    }
  }, [buyerId, sales, reviews, toggle]);

  return (
    <>
      <div className="flex flex-col justify-center items-center content-center mt-[10vh] ml-[34vh]">
        <div className="flex justify-center gap-5 mb-20">
          <ImageSlider image={image} />
          <div className="flex flex-col justify-between">
            <div className="py-5 px-3 flex flex-col items-start gap-4 ">
              <CategoryLabel category={category} />

              <div className="flex gap-3 font-bold text-3xl">{name}</div>

              <div className="flex content-center items-center gap-1">
                <Stars averange={averange} />
              </div>

              <div className="flex items-end gap-2 w-full mr-7">
                <h1 className="text-4xl font-bold">${price}</h1>
                <p className="text-gray-500 text-sm ">({stock} Disponibles)</p>
              </div>

              {/* <div className="flex items-center gap-2">
              <h1 className="text-sm font-light">{`Publicado en ${user?.province.name}`}</h1>
            </div> */}

              <div className="flex flex-col py-3 gap-2 my-0 px-0 ">
                <h1 className="font-medium text-xl">
                  Descripción del vendedor
                </h1>
                <p className="font-light h-70">{description}</p>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <SellerInfo user={user} userId={userId} />
              <AddDeductButtons data={data} />
        
            </div>
          </div>
 
        </div>
        <div className="flex flex-col items-start gap-3 px-5 w-[1000px]">
          {toggle && (
            <AddReviews
              id={id}
              setToggle={setToggle}
              setLatestReview={setLatestReview}
              buyerId={buyerId}
            />
          )}
          <LatestReviews reviews={reviews} latestReview={latestReview} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default DetailContent;
