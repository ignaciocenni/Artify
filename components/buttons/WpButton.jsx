import Image from "next/image";

function WpButton({ socials }) {
  return (
    <>
      {socials.length !== 0 ? (
        <button className="rounder-3xl">
          <a href={socials}>
            <Image
              alt="icono"
              src="/images/whatsappBlack.png"
              width={35}
              height={35}
              className="rounded-3xl hover:shadow-md hover:shadow-green-400 transition-all"
            />
          </a>
        </button>
      ) : (
        <button className="cursor-not-allowed">
          <Image
            alt="icono"
            src="/images/whatsappGray.png"
            width={35}
            height={35}
          />
        </button>
      )}
    </>
  );
}
export default WpButton;
