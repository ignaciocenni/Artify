import Image from "next/image";
import icono from "../../public/images/facebookicons.svg"
 function FbButton({socials}) {
  return (
    <>
      <a href="https://www.facebook.com/">
        <button>
          <Image alt="icono" src={icono} width={40} height={40} />
        </button>
      </a>
    </>
  );
}
export default FbButton
