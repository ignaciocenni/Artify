export const validate = ({form,errors,setErros}) =>{
    if(!form.email)
    setErros("favor de ingresar un correo electronico")
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    setErros("favor de ingresar un correo valido ")
    return errors
}