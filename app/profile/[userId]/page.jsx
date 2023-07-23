"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../../../components/Cards";
import Footer from "../../../components/Footer";
import Image from "next/image";

const getUser = async (id) => {
  const { data } = await axios.get(`/api/users/${id}`);
  console.log("Get user: " + data);
  return data;
};

const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  console.log(data);
  console.log("Get Products: " + data);
  return data;
};

export default function Profile({ params }) {
  const { userId } = params;
  const [userData, setUserData] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser(userId);
      setUserData(user);

      const allProducts = await getProducts();
      setProducts(allProducts);
    };

    fetchData();
  }, [userId]);

  const userProducts =
    products &&
    products.filter((product) => product.user.name === userData.name);

  return (
    <div className="m-50">
      {userData && (
        <div className="flex justify-center items-center ">
          <div className="flex w-2/4 justify-evenly p-0.5 bg-purple-200">
            <div className="flex justify-center flex-col items-center p-5 m-5">
              <Image
                src={userData.image}
                width={144}
                height={144}
                alt="me"
                style={{ borderRadius: "100%" }}
              />
            </div>
            <div className="flex  w-2/4 items-center ">
              <div className="flex flex-col">
                <div className="bg-purple-100">
                  <h1 className="pb-5 font-bold text-3xl">
                    {userData.name} {userData.lastName}
                  </h1>
                </div>
                <h3 className="pb-5 text-sm">{userData && userData.aboutMe}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center items-center ">
        <div className="flex w-2/4 justify-evenly p-0.5 bg-purple-200">
          <div className="flex justify-between ">
            <div className="flex gap-2 content-center items-center">
              <a href="https://www.instagram.com/" className="hover:underline">
                Instagram
              </a>
              <Image
                src="/images/instagramBlack.png"
                width={20}
                height={20}
                alt="logo"
              />
            </div>
            <div className="flex gap-2 content-center items-center">
              <a href="https://www.facebook.com/" className="hover:underline">
                Facebook
              </a>
              <Image
                src="/images/facebookBlack.png"
                width={20}
                height={20}
                alt="logo"
              />
            </div>
            <div className="flex gap-2 content-center items-center">
              <a href="https://www.wathsapp.com/" className="hover:underline">
                Whatsapp
              </a>
              <Image
                src="/images/whatsappBlack.png"
                width={20}
                height={20}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="flex w-2/4 justify-evenly p-0.5 bg-purple-200">
          <h3>Publicaciones: {userData && userData.products} </h3>
        </div>
      </div>
      <div className="flex justify-center items-center w-full m-5">
        <Cards products={userProducts} />
      </div>
      <div className="flex justify-center items-center w-full m-5">
        <Footer />
      </div>
    </div>
  );
}
