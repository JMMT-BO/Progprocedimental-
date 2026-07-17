console.log("Conectado js");


function ValidarInformacion() {
  let direccion = document.getElementById("marca_prodct").value;
  let codigo_prodt = document.getElementById("codigo_prodt").value;
  let nombre_prodt = document.getElementById("nombre_prodt").value;
  let nombre_usur = document.getElementById("descripcion_prodt").value;
  let cantidad_prodt = document.getElementById("cantidad_prodt").value;
  let valor_cancelar = document.getElementById("Valor_Unitario").value;
  let metodo_pago = document.getElementById("ubicacion").value;
  let telefono = document.getElementById("categoria").value;
  if (
    !direccion ||
    !codigo_prodt ||
    !nombre_prodt ||
    !nombre_usur ||
    !cantidad_prodt ||
    !valor_cancelar ||
    !metodo_pago ||
    !telefono
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
            p${direccion} \n
            ${codigo_prodt} \n
            ${nombre_prodt} \n
            ${nombre_usur} \n
            ${cantidad_prodt} \n
            ${valor_cancelar } \n
            ${metodo_pago} \n
            ${telefono}`,
    );
    if (!/^[a-zA-Z]+$/.test(nombre_prodt)) {
      console.log("Categoria debe contener letras");
      Swal.fire({
        title: "Categoria debe contener letras",
        icon: "error",
      });
      return;
    }
    if (!/^\d+$/.test(codigo_prodt)) {
      Swal.fire({
        title: "Codigo del producto debe contener números",
        icon: "error",
      });
      return;
    }
    if (!/^[a-zA-Z]+$/.test(nombre_usur)) {
      console.log("Categoria debe contener letras");
      Swal.fire({
        title: "Categoria debe contener letras",
        icon: "error",
      });
      return;
    }
    if (!/^[a-zA-Z]+$/.test(cantidad_prodt)) {
      console.log("Categoria debe contener letras");
      Swal.fire({
        title: "Categoria debe contener letras",
        icon: "error",
      });
      return;
    }
    if (!/^\d+$/.test(valor_cancelar)) {
      Swal.fire({
        title: "Codigo del producto debe contener números",
        icon: "error",
      });
      return;
    }
    if (!/^[a-zA-Z]+$/.test(metodo_pago)) {
      console.log("Categoria debe contener letras");
      Swal.fire({
        title: "Categoria debe contener letras",
        icon: "error",
      });
      return;
    }
    if (!/^[a-zA-Z]+$/.test(telefono)) {
      Swal.fire({
        title: "Codigo del producto debe contener números",
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
