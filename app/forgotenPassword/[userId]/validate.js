const validate = (userPassword) => {
  let errors = {};

  if (!/^(?=.*\d).{6,}$/.test(userPassword.passwordCheck)) {
    errors.passwordCheck = "Al menos 6 caracteres";
  }

  return errors;
};

export default validate;
