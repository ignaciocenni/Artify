export default function numberConverte(valor) {
    // Convierte el número a una cadena de texto
    let str = valor.toString();
  
    // Redondea el número a dos decimales
    let roundedValue = Math.round(parseFloat(str) * 100) / 100;
  
    // Convierte el número redondeado a una cadena de texto
    let roundedStr = roundedValue.toFixed(2);
  
    // Divide la cadena en dos partes: parte entera y parte decimal
    let partes = roundedStr.split(".");
  
    // Separa la parte entera en grupos de tres y agrega puntos entre ellos
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  
    // Reemplaza el separador decimal por una coma
    partes[1] = partes[1].replace(".", ",");
  
    // Une las partes entera y decimal con una coma entre ellas
    return partes.join(",");
  }
  