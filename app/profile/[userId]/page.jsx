'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../../../components/Cards';
import Image from 'next/image';
import Link from 'next/link';

const getUser = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/api/users/${id}`);
  return data;
};

const getProducts = async () => {
  const { data } = await axios.get('http://localhost:3000/api/products');
  console.log(data)
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

   const userProducts = products && products.filter((product) => product.user.name === userData.name);

  return (
    <div className="z-10">
      {userData && (
        <div className="flex justify-center items-center w-full">
          <div className="flex w-2/4 justify-evenly">
            <div className="flex justify-center flex-col items-center">
              <Image src={userData.image} width={144} height={144} alt="me" />
              <h1 className="pb-2 font-bold text-3xl">{userData.name} {userData.lastName}</h1>
              <p className="pb-2">Artesano</p>
              <div className="flex w-full justify-around">
              </div>
            </div>
            <div className="flex w-2/4 items-center">
              <p className="text-sm">
              {userData && userData.aboutMe}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center items-center w-full">
        <Cards products={userProducts} />
      </div>
    </div>
  );
}
