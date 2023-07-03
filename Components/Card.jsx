import img from "next/image"

export default function Card({id,image,user,price,title,userImage}) {
    return (
            
        <div className="grid grid-cols-1   w-[170px] "  >
              <img className=" rounded-2xl w-44 h-auto"
                src={image}                
                alt="Picture of the author"                
                />  
            <div className=" ">
                <h3 className=" font-medium">${price}</h3>
                <h3 className=" font-semibold">{title}</h3>
                 <div className=" flex gap-1">
                    <img className=" w-[20px] h-[20px] rounded-full"
                        src={userImage}
                        alt="Picture of the author"
                        />
                    <h3 className=" font-light">{user}</h3>
                </div> 
            </div>

        </div>
    
    )

}
