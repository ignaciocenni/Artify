import Image from "next/image";
import icono from "../../public/images/facebookicons.svg";
import iconoGrey from "../../public/images/facebookgrey.svg";
function FbButton({ socials }) {
  return (
    <>
      {socials ? (
        <a href="https://www.facebook.com/">
          <button className="mx-2">
            <Image alt="icono" src={icono} width={35} height={35} />
          </button>
        </a>
      ) : (
        <button className="cursor-not-allowed mx-2">
          <Image alt="icono" src={iconoGrey} width={35} height={35} />
        </button>
      )}
    </>
  );
}
export default FbButton;
