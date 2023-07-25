import gif from "../../public/gifs/cargando.gif";
import Image from "next/image";

function LoadingData() {
  return (
    <>
      <div className="justify-center items-center">
        <Image src={gif} alt="animacion de carga" width={75} height={75} />
      </div>
    </>
  );
}

export default LoadingData;
