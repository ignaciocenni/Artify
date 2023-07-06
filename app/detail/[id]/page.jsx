
import close from "../../../public/images/close.svg";
import flechaIzq from "../../../public/images/flecha_izquierda.svg";
import flechaDer from "../../../public/images/flecha_derecha.svg";
import favorite from "../../../public/images/favorite_fill.svg";
import star from "../../../public/images/star.svg";
import starHalf from "../../../public/images/star_half.svg";
import starBorder from "../../../public/images/star_border.svg";
import user from "../../../public/images/me.png";
import message from "../../../public/images/message.svg";
import Link from "next/link";

import Image from "next/image";
import { publicacionesArtesania } from "../../../components/databs.js";

const getDetail = async (id) => {
  const response = await fetch(`http://localhost:3000/api/products/${id}`);

  const data = await response.json();
  return data;
};
const data = {
  "id": 30,
  "name": "Pintura Mona Lisa Copia",
  "description": "Product description that is more than 12 letters",
  "price": 19.99,
  "stock": 10,
  "image": "https://example.com/image.jpg",
  "createdAt": "2023-07-06T20:48:33.586Z",
  "updatedAt": "2023-07-06T20:48:33.586Z",
  "userId": 6,
  "categoryId": 2,
  "reviews": [],
  "category": {
    "name": "madera"
  },
  "user": {
    "email": "enzo@google.com",
    "name": "enzo"
  }
}

const Detail = async ({ params }) => {
  const data = await getDetail(params.id);
 // const rating = 

  return (
    <div className="flex flex-col justify-center items-center content-center gap-14">
      <div className="flex items-start justify-center">
        <Image className="absolute top-2 left-2" src={close} alt="close" width={50} height={50} />

        <div className="flex py-5 items-center">
          <Image src={flechaIzq} alt="flecha izquierda" width={50} height={50} />

          <Image
            className="rounded-3xl"
            src={''}
            alt="imagen publicacion"
            width={600}
            height={50}
          />

          <Image src={flechaDer} alt="flecha derecha" width={50} height={50} />
        </div>
        <div className="py-5 px-3 flex flex-col items-start gap-4">
          <div className="flex flex-wrap items-center content-center gap-1">


            <div className="flex py-1 px-5 items-center content-center gap-2 rounded-2xl bg-[var(--background-sec)] text-center font-semibold text-base">
              {data.category.name}
            </div>

          </div>

          <div className="flex gap-3">
            <h1 className="font-bold text-3xl">{data.name}</h1>
            <Image src={favorite} alt="favorite" />
          </div>

          <div className="flex content-center items-center gap-1">
            {/* <Image src={star} alt="favorite" />
            <Image src={star} alt="favorite" />
            <Image src={star} alt="favorite" />
            <Image src={starHalf} alt="favorite" />
            <Image src={starBorder} alt="favorite" /> */}
           
          </div>

          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold">${data.price}</h1>
          </div>

          <div className="flex items-center gap-2">
            <h1 className="text-sm font-light">Publicado hoy en Córdoba, Córdoba</h1>
          </div>

          <div className="flex flex-col py-3 gap-2 my-0 px-0 w-[524px] h-[363px]">
            <h1 className="font-medium text-xl">Descripción del vendedor</h1>
            <p className="font-light">
              {data.description}
            </p>
          </div>

          <div className="content-center items-center gap-5 py-3">
            <div className="py-2">
              <h1 className="text-xl font-medium items-start">Vendedor</h1>
            </div>
            <div className="flex flex-row items-center justify-between p0 m0 w-[600px]">
              <Link href="/profile">
                <div className="flex flex-row items-center gap-3 justify-centr">
                  <Image
                    className="rounded-r-full"
                    src={user}
                    alt="imagen publicacion"
                    width={40}
                    height={40}
                  />
                  <h1 className="font-medium hover:underline">
                    {data.user.name}
                  </h1>
                </div>
              </Link>

              <button className="flex flex-row rounded-2xl shadow-xl py-1 px-3 gap-1 items-center text-[var(--primary)] bg-[var(--secundary)]">
                <Image width={35} height={35} src={message} alt="boton" />
                <h1 className="text-xs font-bold">Enviar mensaje</h1>
              </button>
            </div>
          </div>

          <button className="hover:bg-[var(--background-sec)] hover:text-black w-[100%] text-white bg-[var(--detail)] py-5 px-64 rounded-lg flex content-center items-center gap-5 shadow-xl">
            <h1 className="text-xs font-extrabold">Comprar Ahora</h1>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 px-5 w-[1000px]">
        <div>
          <h1 className="font-semibold">Buscá lo que querés saber</h1>

          <div className="flex gap-5">
            <input
              // onChange={handlerValue}
              className="text-black w-[600px] h-11 rounded-xl bg-[#F3E8FF] "
              type="text"
              placeholder="   Agrega un comentario"
            />

            <button
              // onClick={handlerText}
              className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-white text-xs rounded-2xl"
            >
              <h1 className="text-xs font-extrabold px-4">Comentar</h1>
            </button>
          </div>
        </div>
        <div>
          <h1 className="font-semibold">Ultimos realizadas</h1>
          {data.reviews.map((rev) => {
            return <div key={rev.id}>
              <h3>Rating :{rev.rating}</h3>
              <p>{rev.comment}</p>
            </div>
          })

          }
        </div>
      </div>
    </div>
  );
}
export default Detail;