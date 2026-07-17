function ValidarInformacion() {
  let marca_prodct = document.getElementById("marca_prodct").value;
  let codigo_prodt = document.getElementById("codigo_prodt").value;
  let nombre_prodt = document.getElementById("nombre_prodt").value;
  let descripcion_prodt = document.getElementById("descripcion_prodt").value;
  let cantidad_prodt = document.getElementById("cantidad_prodt").value;
  let Valor_Unitario = document.getElementById("Valor_Unitario").value;
  let ubicacion = document.getElementById("ubicacion").value;
  let categoría = document.getElementById("categoria").value;
  if (
    !marca_prodct ||
    !codigo_prodt ||
    !nombre_prodt ||
    !descripcion_prodt ||
    !cantidad_prodt ||
    !Valor_Unitario ||
    !ubicacion ||
    !categoría
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
            ${categoria} \n
            ${codigo_prodt} \n
            ${nombre_prodt} \n
            ${descripcion_prodt} \n
            ${cantidad_prodt} \n
            ${valor_unitario} \n
            p${ubicacion} \n
            ${valor_unitario}`,
    );
    if (!/^[a-zA-Z]+$/.test(categoria)) {
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
    if (!/^[a-zA-Z]+$/.test(nombre_prodt)) {
      console.log("Categoria debe contener letras");
      Swal.fire({
        title: "Categoria debe contener letras",
        icon: "error",
      });
      return;
    }
    if (!/^[a-zA-Z]+$/.test(descripcion_prodt)) {
      console.log("Categoria debe contener letras");
      Swal.fire({
        title: "Categoria debe contener letras",
        icon: "error",
      });
      return;
    }
    if (!/^\d+$/.test(cantidad_prodt)) {
      Swal.fire({
        title: "Codigo del producto debe contener números",
        icon: "error",
      });
      return;
    }
    if (!/^[a-zA-Z]+$/.test(valor_unitario)) {
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
