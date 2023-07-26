export const validate = (form) => {
    const { newPassword, repPassword } = form
    const errors = {
        actualPassword: "",
        newPassword: "",
        repPassword: ""
    };

    //newPassword
    if (!newPassword.trim()) {
        errors.newPassword = "Por favor ingresa una contraseña"
    } else if (!/[A-Za-z\d\W]{8,16}/.test(newPassword)) {
        errors.newPassword = "Debe contener entre 8 y 16 caracteres"
    } else if (!/^(?=.*\d)/.test(newPassword)) {
        errors.newPassword = "Debe contener un numero"
    }
    //repPassword
    if (repPassword !== newPassword)
        errors.repPassword = "La contraseña no coincide"
    
 
    return errors;
};