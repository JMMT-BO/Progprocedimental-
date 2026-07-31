console.log("Conectado JS");

function ValidarInformacion() {

    let direccion = document.getElementById("direccion").value;
    let codigo_prodt = document.getElementById("codigo_prodt").value;
    let nombre_prodt = document.getElementById("nombre_prodt").value;
    let nombre_usur = document.getElementById("nombre_usur").value;
    let cantidad_prodt = document.getElementById("cantidad_prodt").value;
    let valor_cancelar = document.getElementById("Valor_Unitario").value;
    let metodo_pago = document.getElementById("metodo_pago").value;
    let telefono = document.getElementById("telefono").value;

    // Validar campos vacíos

    if (
        direccion == "" ||
        codigo_prodt == "" ||
        nombre_prodt == "" ||
        nombre_usur == "" ||
        cantidad_prodt == "" ||
        valor_cancelar == "" ||
        metodo_pago == "" ||
        telefono == ""
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

    // Código del Producto

    if (!/^\d+$/.test(codigo_prodt)) {

        Swal.fire({
            icon: "error",
            title: "El código del producto debe contener solo números"
        });

        return;
    }

    // Nombre del Producto

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/.test(nombre_prodt)) {

        Swal.fire({
            icon: "error",
            title: "El nombre del producto debe contener solo letras"
        });

        return;
    }

    // Nombre del Usuario

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/.test(nombre_usur)) {

        Swal.fire({
            icon: "error",
            title: "El nombre del usuario debe contener solo letras"
        });

        return;
    }

    // Cantidad

    if (!/^\d+$/.test(cantidad_prodt)) {

        Swal.fire({
            icon: "error",
            title: "La cantidad del producto debe contener solo números"
        });

        return;
    }

    // Valor

    if (!/^\d+$/.test(valor_cancelar)) {

        Swal.fire({
            icon: "error",
            title: "El valor a pagar debe contener solo números"
        });

        return;
    }

    // Método de Pago

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/.test(metodo_pago)) {

        Swal.fire({
            icon: "error",
            title: "El método de pago debe contener solo letras"
        });

        return;
    }

    // Teléfono

    if (!/^\d+$/.test(telefono)) {

        Swal.fire({
            icon: "error",
            title: "El teléfono debe contener solo números"
        });

        return;
    }

    console.log("Información del Pedido");

    console.log("Código:", codigo_prodt);
    console.log("Dirección:", direccion);
    console.log("Producto:", nombre_prodt);
    console.log("Método de Pago:", metodo_pago);
    console.log("Usuario:", nombre_usur);
    console.log("Cantidad:", cantidad_prodt);
    console.log("Valor:", valor_cancelar);
    console.log("Teléfono:", telefono);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Información Guardada Correctamente",
        showConfirmButton: false,
        timer: 1500
    });

}

document.getElementById("btnGuardar").onclick = ValidarInformacion;