export default function numberConverte(valor) {
  if(!valor) return 0,0
  // Redondea el número a dos decimales
  let roundedValue = Math.round(parseFloat(valor) * 100) / 100;

  // Convierte el número redondeado a una cadena de texto
  let roundedStr = roundedValue.toFixed(2);

  // Separa la cadena en dos partes: parte entera y parte decimal
  let partes = roundedStr.split(".");

  // Separa la parte entera en grupos de tres y agrega puntos entre ellos
  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Si la parte decimal está vacía, agrega "00"
  if (!partes[1]) {
    partes[1] = "00";
  } else if (partes[1].length === 1) {
    // Si la parte decimal tiene solo un dígito, agrega ceros a la derecha
    partes[1] += "0";
  }

  // Une las partes entera y decimal con una coma entre ellas
  return partes.join(",");
}
