import Image from "next/image";
import image from "../public/images/search-not-found.png";

export default function notFound() {
  return (
    <>
      <div className="w-full h-[80vh] flex flex-col  justify-center items-center" >
        <Image src={image} width={200} height={200} alt="notfound" />

        <h1 className="font-semibold text-2xl mt-6">
          No hay publicaciones que coincidan con tu búsqueda
        </h1>
        <h1 className="text-zinc-600">
        Haz una nueva búsqueda. Comprueba la ortografía, cambia los filtros o busca un término menos específico.
        </h1>
      </div>
    </>
  );
}
