import star from '@/public/images/star.svg';
import starHalf from "@/public/images/star_half.svg";
import starBorder from "@/public/images/star_border.svg";
import Image from 'next/image';

export default function Stars({ averange }) {
    const amount = Math.floor(averange)
    const halfStart = Number.isInteger(averange)
   
    const renderizaciones = Array.from({ length: amount }, (_, index) => (
        <Image key={index} src={star} alt="star" />
      ));
   
    return (
        <div className="flex content-center items-center gap-1">
            {renderizaciones}
            {!halfStart && <Image src={starHalf} alt="star" />}
         
        </div>
    )
}
