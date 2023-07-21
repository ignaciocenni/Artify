import Image from "next/image";
import icono from "../../public/images/instagramicons.svg";
import iconoGrey from "../../public/images/instagramgrey.svg";

function IgButton({ socials }) {
  return (
    <>
      {socials ? (
        <a href="https://www.instagram.com/">
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
export default IgButton;
