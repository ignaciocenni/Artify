const validate = (form) => {
    let errors = {};
  if (form.name.length < 3) {
    errors.e1 = "Debe ingresar almenos 3 letras";
  }
  if (form.description.length < 15) {
    errors.e2 = "Debe ingresar almenos 15 carácteres";
  }
  if (form.price > 10000000) {
    errors.e3 = "Porfavor ingrese un monto valido";
  }

  // if (!/^https:\/\/.+$/.test(form.image)) {
  //   errors.e4 = "Porfavor ingrese una URL valida";
  // }
  if (form.stock >= 100000) {
    errors.e5 = "Porfavor ingrese una cantidad valida";
  }
  if (!form.categoryId) {
    errors.e6 = "Debe ingresar una categoria";
  }
  return errors;
};
export default validate;
