import Image from "next/image";

export default function Loading() {
  return (
    <>
      <div className="flex-col justify-center items-center">
        <Image
          src="https://i.pinimg.com/originals/ea/b7/e1/eab7e1120c9dd628d3bb39a20a94927d.gif"
          alt="animacion de carga"
          width={400}
          height={400}
          style={{ maxWidth: "300%" }}
        />
        <p className="font-semibold text-slate-900 text-2xl whitespace-nowrap">
          Cargando...
        </p>
      </div>
    </>
  );
}
