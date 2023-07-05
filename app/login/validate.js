export const validate = (params) => {
    const { email, password } = params
    const errors = {
        email: "",
        password: "",
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        errors.email = "Ingresa un correo valido "
    if (!email)
        errors.email = "Ingresa un correo electronico"
    if(!password)
        errors.password="Introduce una contraseña"
    return errors
}