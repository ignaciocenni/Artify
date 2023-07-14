"use-client"


import Image from 'next/image';
import flechaIzq from '../../public/images/flecha_izquierda.svg';
import flechaDer from '../../public/images/flecha_derecha.svg';

function ImageSlider({ image }) {
  return (
    <div className="flex py-5 items-center">
      <Image src={flechaIzq} alt="flecha izquierda" width={50} height={50} />

      <Image
        className="rounded-3xl"
        src={image}
        alt="imagen publicacion"
        width={500}
        height={50}
      />

      <Image src={flechaDer} alt="flecha derecha" width={50} height={50} />
    </div>
  );
}

export default ImageSlider;
