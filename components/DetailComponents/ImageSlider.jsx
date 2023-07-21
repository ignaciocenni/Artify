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
      <div className='relative h-[600px] w-[500px] mr-4'>
        <Image
          className="rounded-3xl border-s-violet-600"
          src={image[currentImageIndex]}
          alt="imagen publicacion"
          fill
          sizes="100vw"
          
          
        />
      </div>


      <button onClick={nextImage}>
        <Image src={flechaDer} alt="flecha derecha" width={50} height={50} />
      </button>
    </div>
  );
}

export default ImageSlider;
