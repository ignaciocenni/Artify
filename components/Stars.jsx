import star from '../public/images/star.svg';
import starHalf from "../public/images/star_half.svg";
import starBorder from "../public/images/star_border.svg";
import Image from 'next/image';

export default function Stars({ averange, size }) {
  const amount = Math.floor(averange)
  const halfStart = Number.isInteger(averange)
  const restStars = (5 - amount) - (!halfStart ? 1 : 0)
  const fullStars = Array.from({ length: amount }, (_, index) => (
    <Image key={index} src={star} alt="star" width={size} height={size} />
  ));
  const emptyStars = Array.from({ length: restStars }, (_, index) => (
    <Image key={index} src={starBorder} alt="star" width={size} height={size}/>
  ));
  return (
    <div className="flex content-center items-center gap-1">
      {fullStars}
      {amount > 0 && !halfStart && <Image src={starHalf} alt="star" width={size} height={size}/>}
      {emptyStars}
      {!amount  && Array.from({ length: 5 }, (_, index) => (
    <Image key={index} src={starBorder} alt="star" />
  ))}
    </div>
  )
}
