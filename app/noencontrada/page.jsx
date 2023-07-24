import Image from "next/image";
import Link from "next/link";
import image from "../../public/images/3d-serviceman.png";

export default function Custom404Page() {
  return (
    <div className="bg-[var(--primary)] flex w-full h-[90vh] justify-center items-center gap-16">
      <div className="flex flex-col justify-center gap-5">
        <div>
          <h1 className="text-[var(--secundary)] font-bold text-[12rem] leading-none">
            404
          </h1>
          <h1 className="text-[var(--secundary)] text-4xl font-bold">
            Página no encontrada
          </h1>
        </div>
        <div>
          <p className="text-zinc-600 text-xl">
            Esta página no existe o fue eliminada
          </p>
          <p className="text-zinc-600 text-xl">Sugerimos volver al explorar</p>
        </div>

        <Link href="/">
          <button className="w-full justify-center hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--secundary)]  rounded-lg flex content-center items-center shadow-sm font-bold px-2 h-11">
            <h1 className="">Volver al Explorar</h1>
          </button>
        </Link>
      </div>
      <div>
        <Image alt="404" src={image} width={240} height={240} />
      </div>
    </div>
  );
}
