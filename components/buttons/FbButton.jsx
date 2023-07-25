import Image from "next/image";

function FbButton({ socials }) {
  return (
    <>
      {socials ? (
        <a href="https://www.facebook.com/">
          <button>
            <Image
              alt="icono"
              src="/images/facebookBlack.png"
              width={35}
              height={35}
              className="shadow-sm shadow-purple-500 rounded-3xl hover:shadow-md hover:shadow-purple-600 transition-all"
            />
          </button>
        </a>
      ) : (
        <button className="cursor-not-allowed">
          <Image
            alt="icono"
            src="/images/facebookBlack.png"
            width={35}
            height={35}
            
          />
        </button>
      )}
    </>
  );
}
export default FbButton;
