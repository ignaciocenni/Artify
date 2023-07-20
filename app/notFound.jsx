import Image from "next/image";

export default function notFound() {
  return (
    <>
      <div className="flex-col justify-center items-center">
        <Image
          src="https://img.freepik.com/vector-gratis/ilustracion-error-404-pagina-web-dibujos-animados_33099-705.jpg?w=740&t=st=1689872044~exp=1689872644~hmac=3bb74ea805fa8f5991247d8fcfbcbee35da6f8363812df3733395fff5763a66c"
          //src="https://i.pinimg.com/originals/ea/b7/e1/eab7e1120c9dd628d3bb39a20a94927d.gif"
          width={400}
          height={400}
          style={{ maxWidth: "400%" }}
        />

        <p className="font-semibold text-slate-900 text-2xl whitespace-nowrap">
          No hay productos que cumplan con el filtrado actual.
        </p>
      </div>
    </>
  );
}
