export const validate = (form) => {
    const {email,password}=form
    const errors = {
        email: "",
        password: ""
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
    errors.email = "Ingresa un correo valido ";
  if (!email) errors.email = "Ingresa un correo electronico";
    return errors
}