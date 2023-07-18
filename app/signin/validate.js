export const validate = (form) => {
  const {email,password,name,lastName}=form
  const errors = {
    email: "",
    password: "",
    name: "",
    lastName: ""
  };
  //email
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
    errors.email = "Ingresa un correo valido ";
  if (!email) errors.email = "Ingresa un correo electronico";
  //name
  if (!name)
    errors.name = "Ingresa un nombre"
  //lastName
  if (!lastName)
    errors.lastName = "Ingresa un apellido"
  //password
  if (!/^(?=.*\d)/.test(password))
    errors.password = "Debe contener un numero"
  if (!/[A-Za-z\d\W]{8,16}/.test(password))
    errors.password = "Debe contener entre 8 y 16 caracteres"


  return errors;
};