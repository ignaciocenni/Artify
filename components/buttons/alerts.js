import Swal from "sweetalert2";

const savingChanges = {
  title: "Guardando cambios!",
  html: "Guardando",
  timer: 5000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
  },
};

export { savingChanges };
