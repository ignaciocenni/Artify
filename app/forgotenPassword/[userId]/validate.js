const validate = (userPassword) => {
  let errors = {};

  if (!/^(?=.*\d).{6,}$/.test(userPassword.password)) {
    errors.password = "Al menos 6 caracteres";
  }

  return errors;
};

export default validate;
