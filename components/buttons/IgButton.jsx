import Image from "next/image";
import icono from "../../public/images/instagramicons.svg";
import iconoGrey from "../../public/images/instagramgrey.svg";

function IgButton({ socials }) {
  return (
    <>
      {socials ? (
        <a href="https://www.instagram.com/">
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
export default IgButton;
