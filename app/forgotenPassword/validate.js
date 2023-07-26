const validate = (form) => {
  let errors = {};

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
    errors.email = "Ingresa un correo valido ";
  }

  return errors;
};

export default validate;
