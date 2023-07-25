import Image from "next/image";
import star_border from '../../../public/images/star_border.svg';
const EmptyStar = ({ onMouseEnter, onClick }) => {
    return (
      <Image
        src={star_border} 
        alt="Empty Star"
        onMouseEnter={onMouseEnter}
        onClick={onClick}      />
    );
  };
  
  export default EmptyStar;
  