"use-client"
import Image from 'next/image';
import flechaIzq from '../../public/images/flecha_izquierda.svg';
import flechaDer from '../../public/images/flecha_derecha.svg';
import { useState } from 'react';

function ImageSlider({ image }) {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length)
  }
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + image.length) % image.length)
  }
  return (
    <div className="flex py-5 items-center">
      <button onClick={prevImage}>
        <Image src={flechaIzq} alt="flecha derecha" width={50} height={50} />
      </button>
      <div className='relative h-[46rem] w-[46rem] flex justify-center items-center'>
        <Image
          className="rounded-xl"
          src={image[currentImageIndex]}
          alt="imagen publicacion"
          fill
          objectFit='contain'
        />
      </div>


      <button onClick={nextImage}>
        <Image src={flechaDer} alt="flecha derecha" width={50} height={50} />
      </button>
    </div>
  );
}

export default ImageSlider;
