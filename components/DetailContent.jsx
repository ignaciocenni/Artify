"use client";
import Link from "next/link";
import Image from "next/image";
import close from "../public/images/close.svg";
import Heart from "./Heart";
import Stars from "./Stars";
import CategoryLabel from "./DetailComponents/CategoryLabel";
import ImageSlider from "./DetailComponents/ImageSlider";
import LatestReviews from "./DetailComponents/LatestReviews";
import AddQuestion from "./DetailComponents/AddQuestion";
import SellerInfo from "./DetailComponents/SellerInfo";
import BuyNowButton from "./buttons/BuyAndDetail";
import Footer from "./Footer";
import AddDeductButtons from "../components/buttons/AddDeductButtons";

import { useState } from "react";

const DetailContent = ({ data }) => {
  const { reviews, image, category, price, name, user, description } = data;

  const amount = reviews.reduce(
    (accumulator, currentValue) => accumulator + currentValue.rating,
    0
  );
  const averange = amount / reviews.length;

  const [questions, setQuestions] = useState([]);

  const handleQuestion = (question) => {
    const newQuestion = {
      id: Date.now(),
      question: question,
    };

    setQuestions([...questions, newQuestion]);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center content-center gap-14">
        <div className="flex items-start justify-center">
          <Link href={"/"}>
            <Image
              className="relative top-2 left-2"
              src={close}
              alt="close"
              width={50}
              height={50}
            />
          </Link>

          <ImageSlider image={image} />

          <div className="py-5 px-3 flex flex-col items-start gap-4">
            <CategoryLabel category={category} />

            <div className="flex gap-3 font-bold text-3xl">
              {name}
              <Heart />
            </div>

            <div className="flex content-center items-center gap-1">
              <Stars averange={averange} />
            </div>

            <div className="flex items-center gap-2">
              <h1 className="text-4xl font-bold">${price}</h1>
            </div>

            <div className="flex items-center gap-2">
              <h1 className="text-sm font-light">{`Publicado hoy en ${user.province.name}`}</h1>
            </div>

            <div className="flex flex-col py-3 gap-2 my-0 px-0 w-[524px] h-[363px]">
              <h1 className="font-medium text-xl">Descripción del vendedor</h1>
              <p className="font-light">{description}</p>
            </div>
              <AddDeductButtons data={data} />
            <SellerInfo user={user} />
          </div>
          <div>
            <BuyNowButton />
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 px-5 w-[1000px]">
          <AddQuestion onQuestion={handleQuestion} />
          <LatestReviews reviews={reviews} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default DetailContent;
