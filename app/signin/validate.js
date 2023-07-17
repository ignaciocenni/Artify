export const validate = (form) => {
  const errors = {
    email: "",
    password: "",
    name: "",
  };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Ingresa un correo valido ";
  if (!form.email) errors.email = "Ingresa un correo electronico";
  return errors;
};