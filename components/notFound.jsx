import Image from "next/image";
import image from "../public/images/search-not-found.png";

export default function notFound() {
  return (
    <section className="w-full h-[80vh] flex flex-col  justify-center items-center">
      <Image src={image} width={200} height={200} alt="notfound" />
      <article className="text-center mx-auto w-11/12 py-4">
        <p className="font-semibold text-2xl">No hay publicaciones que coincidan con tu búsqueda</p>
        <p className="text-zinc-600 mt-2">
          Haz una nueva búsqueda. Comprueba la ortografía, cambia los filtros o busca un término menos específico.
        </p>
      </article>
    </section>
  );
}
