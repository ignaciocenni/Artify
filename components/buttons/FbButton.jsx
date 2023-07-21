import Image from "next/image";
import icono from "../../public/images/facebookicons.svg";
import iconoGrey from "../../public/images/facebookgrey.svg";
function FbButton({ socials }) {
  return (
    <>
      {socials ? (
        <a href="https://www.facebook.com/">
          <button>
            <Image alt="icono" src={icono} width={40} height={40} />
          </button>
        </a>
      ) : (
        <button className="cursor-not-allowed">
          <Image alt="icono" src={iconoGrey} width={40} height={40} />
        </button>
      )}
    </>
  );
}
export default FbButton;
