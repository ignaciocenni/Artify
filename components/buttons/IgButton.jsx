import Image from "next/image"
import icono from "../../public/images/instagramicons.svg"


function IgButton({socials}) {
    
  return (
    <>
    <a href="https://www.instagram.com/">

     <button>
        <Image alt="icono" src={icono} width={40} height={40} />
        </button> 
    </a>
    </>
  )
}
export default IgButton