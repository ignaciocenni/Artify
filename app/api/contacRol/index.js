

import { useRouter } from 'next/navigation'

export default function POST(req)
 {
  const router = useRouter()
//! esto es por las dudas tengo miedo no se lo que estoy haciendo Hx2

    // tengo que ver como obtengo ese valor del formulariio compra y vendedor H
    const data = req.json();
console.log(data);
    // segun el valor es donde me va llevar H 
    if (data.rol === 'bienvenida') {
      router.push('/contactRol/routeBv');
    } else if (data.rol === 'compra realizada') {
      router.push('/contactRol/routeC');
    } else if (data.rol === ' SE VENDIO ') {
      router.push('/contact/routeV');
    } else {
      console.log('Valor no válido');
    }
  };


