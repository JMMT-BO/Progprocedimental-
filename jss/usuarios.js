function ValidarInformacion() {
  let Fecha = document.getElementById("Fecha").value;
  let Ingresos  = document.getElementById("Ingresos").value;
  let Egresos  = document.getElementById("Egresos").value;
  let Concepto  = document.getElementById("Concepto").value;
  let Valor  = document.getElementById("Valor").value;
  
  if (
    !Ventas ||
    !Fecha ||
    !Ingresos ||
    !Egresos ||
    !Concepto ||
    !Valor
    
  ) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Campos Incompletos",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    console.log(
      `Informacion del Producto: \n
            ${Ventas} \n
            p${Fecha} \n
            ${Ingresos } \n
            ${Egresos } \n
            ${Concepto } \n
            ${Valor  }`,
    );
    if (!/^[a-zA-Z]+$/.test(Fecha)) {
      console.log("Categoria debe contener letras");
      Swal.fire({
        title: "Categoria debe contener letras",
        icon: "error",
      });
      return;
    }
    if (!/^\d+$/.test(Ventas)) {
      Swal.fire({
        title: "Codigo del producto debe contener números",
        icon: "error",
      });
      return;
    }
    if  (!/^\d+$/.test(Ingresos )) {
      console.log("Categoria debe contener letras");
      Swal.fire({
        title: "Categoria debe contener letras",
        icon: "error",
      });
      return;
    }
    if (!/^\d+$/.test(Egresos )) {
      Swal.fire({
        title: "Codigo del producto debe contener números",
        icon: "error",
      });
      return;
    }
    if (!/^\d+$/.test(Valor )) {
      console.log("Categoria debe contener letras");
      Swal.fire({
        title: "Categoria debe contener letras",
        icon: "error",
      });
      return;
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Informacion Guardada Correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
}
document.getElementById("btnGuardar").onclick = ValidarInformacion;
