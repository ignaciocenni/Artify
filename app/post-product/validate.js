const validate = (form) => {
    let errors = {};
  if (!/^[A-Za-z]{1,30}/.test(form.name)) {
    errors.name = "No se permiten caracteres especiales ni símbolos, longitud debe estar entre 1 y 30 caracteres";
  }
  if (form.description.length < 15) {
    errors.description = "Debe ingresar almenos 15 carácteres";
  }
  if (!/^\d+([.,]\d{1,2})?$/.test(form.price)) {

    errors.price = "Ingresa un precio válido en formato decimal. Ejemplos: '10', '25.5', '100.00'";
  }

  if (!/^\d+$/.test(form.stock)) {
    errors.stock = "Ingrese un stock válido. Debe ser un número entero positivo";
  }
  if (!form.categoryId) {
    errors.categoryId = "Debe seleccionar una categoria";
  }
  if (!form.provinceId) {
    errors.provinceId = "Debe seleccionar una ciudad";
  }
  return errors;
};
export default validate;
