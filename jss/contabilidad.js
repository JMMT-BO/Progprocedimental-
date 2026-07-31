function ValidarInformacion() {

    let Ventas = document.getElementById("Ventas").value;
    let Ingresos = document.getElementById("Ingresos").value;
    let Egresos = document.getElementById("Egresos").value;
    let Concepto = document.getElementById("Concepto").value;
    let Fecha = document.getElementById("Fecha").value;
    let Valor = document.getElementById("Valor").value;

    // Validar campos vacíos

    if (
        Ventas == "" ||
        Ingresos == "" ||
        Egresos == "" ||
        Concepto == "" ||
        Fecha == "" ||
        Valor == ""
    ) {

        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos Incompletos",
            showConfirmButton: false,
            timer: 1500
        });

        return;
    }

    // Ventas

    if (!/^\d+$/.test(Ventas)) {

        Swal.fire({
            icon: "error",
            title: "Ventas debe contener solo números"
        });

        return;
    }

    // Ingresos

    if (!/^\d+$/.test(Ingresos)) {

        Swal.fire({
            icon: "error",
            title: "Ingresos debe contener solo números"
        });

        return;
    }

    // Egresos

    if (!/^\d+$/.test(Egresos)) {

        Swal.fire({
            icon: "error",
            title: "Egresos debe contener solo números"
        });

        return;
    }

    // Valor

    if (!/^\d+$/.test(Valor)) {

        Swal.fire({
            icon: "error",
            title: "Valor debe contener solo números"
        });

        return;
    }

    // Concepto

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/.test(Concepto)) {

        Swal.fire({
            icon: "error",
            title: "Concepto debe contener solo letras"
        });

        return;
    }

    console.log("Información Contable");

    console.log("Ventas:", Ventas);
    console.log("Ingresos:", Ingresos);
    console.log("Egresos:", Egresos);
    console.log("Concepto:", Concepto);
    console.log("Fecha:", Fecha);
    console.log("Valor:", Valor);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Información Guardada Correctamente",
        showConfirmButton: false,
        timer: 1500
    });

}

document.getElementById("btnGuardar").onclick = ValidarInformacion;