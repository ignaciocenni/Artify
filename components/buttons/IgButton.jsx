import Image from "next/image";

function IgButton({ socials }) {
  return (
    <>
      {socials ? (
        <button className="rounder-3xl">
          <a href="https://www.instagram.com/">
            <Image
              alt="icono"
              src="/images/instagramBlack.png"
              width={35}
              height={35}
              className="shadow-sm shadow-purple-500 rounded-3xl hover:shadow-md hover:shadow-purple-600 transition-all"
            />
          </a>
        </button>
      ) : (
        <button className="cursor-not-allowed">
          <Image
            alt="icono"
            src="/images/instagramBlack.png"
            width={35}
            height={35}
          />
        </button>
      )}
    </>
  );
}
export default IgButton;
