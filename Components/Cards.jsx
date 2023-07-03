import React from 'react'
import Card from './Card'
import { publicacionesArtesania } from './data';


export const Cards = () => {
    
    
    return (


        <div className=' columns-4 gap-0  w-[800px] p-2  h-[200vh] bg-slate-500 '>
            {
                publicacionesArtesania.map((data)=>(
                    <Card
                    key={data.id}
                    id={data.id}
                    image={data.imagenProducto}
                    user={data.username}
                    price={data.precio}
                    title={data.titulo}
                    userImage={data.imagenUsuario}
                    />
                    /* id,image,user,price,title,userImage */
                ))
            }


        </div>
    )

}
