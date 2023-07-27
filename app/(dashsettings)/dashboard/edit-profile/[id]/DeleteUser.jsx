import Swal from "sweetalert2"; 
import { useSession, signOut } from "next-auth/react";
import axios from "axios";
export default function DeleteUser({userId}) {

const onClick =async()=>{
  Swal.fire({
    icon: "warning",
    title: "Seguro que deseas borrar la cuenta?",
    showDenyButton: true,
    confirmButtonText: "Si",
    denyButtonText: `No`,
  }).then(async (result) => {
    if (result.isConfirmed) {
      signOut();
      const resp=(await axios.delete(`/api/users/${userId}`)).data
      console.log(resp);
      let timerInterval;
      Swal.fire({
        title: "Eliminando Cuenta",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
      });
      console.log(resp);
    } else if (result.isDenied) return "";
  });

}







  return (
    <div>
        <div className=" mb-5">
          <h1 className="text-red-500 py-3 text-xl font-semibold">Eliminar cuenta</h1>
          <div className="px-3 border-2 border-red-500 rounded-lg grid grid-cols-3 grid-rows-4">
            <div className=" row-start-2 col-span-2" >
              <h2 className="font-semibold text-sm">Eliminar esta cuenta</h2>
            </div>
            <div className=' col-span-2 row-start-3 '>
              <h2 className="text-xs font-light text-zinc-500" >Si elimina esta cuenta no podrá recuperarla</h2>
            </div>
            <div className=" row-start-2 col-start-3 row-span-2 grid justify-center content-center ">
              <button onClick={onClick}
              className="shadow-sm shadow-red-500 rounded-lg py-2 px-4 font-bold text-gray-50 bg-red-500 ">
                Eliminar cuenta
              </button>
            </div>
          </div>

        </div>
    </div>
  )
}
