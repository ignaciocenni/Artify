import Image from "next/image"
import Link from "next/link"
import products from "./products"


function Page() {
  return (<div>
    
    {
      products.map((produc)=>
      <div key={produc.id}> 
      <p >{produc.name}</p>
      <p >{produc.price}</p>
      <p >{produc.stock}</p>
      <div className="relative h-[300px]">
          <Image
            id="id"
            alt={`Imagen de perfil del usuario ${produc.id}`}
            src={produc.image}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            className="rounded-3xl"
          />
      </div>
      <p >{produc.category.name}</p>
      </div>
      
      )
    }
    </div>
  )
}

export default Page