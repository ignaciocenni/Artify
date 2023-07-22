import Image from "next/image";
import Link from "next/link";
import ApplyButton from "../buttons/ApplyButton";
import { useState } from "react";

const CardPublication = (props) => {
  const { id, image, user, price, title, userImage, category, status } = props;

  const [statusChange, setStatusChange] = useState("default");

  const handleChange = (event) => {
    setStatusChange(event.target.value)
  };

  return (
    <div className="px-4 py-3 rounded-lg shadow-md justify-start items-center gap-3 inline-flex mx-4">
      <div className="relative h-10 w-10">
        <Image
          className="rounded-lg"
          src={image[0]}
          alt="Product"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="px-5 justify-start items-center gap-5 flex">
        <Link className="w-[32rem]" href={`/detail/${id}`}>
          <h1 className="font-semibold">{title}</h1>
        </Link>
        <h1 className="w-40">{category.name}</h1>
        <h1 className="font-medium w-28">${price}</h1>
        <div className="justify-start items-center gap-1 flex">
          <Image
            width={20}
            height={20}
            className="rounded-full"
            src={userImage}
            alt="Author"
          />
          <div className="w-32 text-base font-light">{user}</div>
        </div>
        <h1 className="w-20 font-semibold">{status}</h1>
      </div>

      <select
        onChange={handleChange}
        className="px-3 py-2 bg-[var(--primary)] border border-black border-opacity-25 justify-center items-center gap-2 flex font-medium rounded-xl cursor-pointer">
        <option className="rounded-xl cursor-pointer" value="default">
          Cambiar Estado
        </option>
        <option className="rounded-xl cursor-pointer" value="ACTIVE">
          Activa
        </option>
        <option className="rounded-xl cursor-pointer" value="INACTIVE">
          Inactiva
        </option>
        <option className="rounded-xl cursor-pointer" value="PENDING">
          Pendiente
        </option>
      </select>
      {statusChange !== "default" ? <ApplyButton id={id} value={statusChange} /> : null}
    </div>
  );
};

export default CardPublication;
