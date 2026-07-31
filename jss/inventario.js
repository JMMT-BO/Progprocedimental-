function ValidarInformacion() {

    let marca_prodct = document.getElementById("marca_prodct").value;
    let codigo_prodt = document.getElementById("codigo_prodt").value;
    let nombre_prodt = document.getElementById("nombre_prodt").value;
    let descripcion_prodt = document.getElementById("descripcion_prodt").value;
    let cantidad_prodt = document.getElementById("cantidad_prodt").value;
    let Valor_Unitario = document.getElementById("Valor_Unitario").value;
    let ubicacion = document.getElementById("ubicacion").value;
    let categoria = document.getElementById("categoria").value;

    if (
        marca_prodct == "" ||
        codigo_prodt == "" ||
        nombre_prodt == "" ||
        descripcion_prodt == "" ||
        cantidad_prodt == "" ||
        Valor_Unitario == "" ||
        ubicacion == "" ||
        categoria == ""
    ) {

        Swal.fire({
            icon: "error",
            title: "Campos Incompletos"
        });

        return;
    }

    // Código (solo números)

    if (!/^\d+$/.test(codigo_prodt)) {

        Swal.fire({
            icon: "error",
            title: "El código debe contener solo números"
        });

        return;
    }

    // Nombre (solo letras)

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/.test(nombre_prodt)) {

        Swal.fire({
            icon: "error",
            title: "El nombre solo debe contener letras"
        });

        return;
    }

    // Marca (solo letras)

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/.test(marca_prodct)) {

        Swal.fire({
            icon: "error",
            title: "La marca solo debe contener letras"
        });

        return;
    }

    // Cantidad (solo números)

    if (!/^\d+$/.test(cantidad_prodt)) {

        Swal.fire({
            icon: "error",
            title: "La cantidad debe contener solo números"
        });

        return;
    }

    // Valor (solo números)

    if (!/^\d+$/.test(Valor_Unitario)) {

        Swal.fire({
            icon: "error",
            title: "El valor debe contener solo números"
        });

        return;
    }

    // Categoría (solo letras)

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/.test(categoria)) {

        Swal.fire({
            icon: "error",
            title: "La categoría solo debe contener letras"
        });

        return;
    }

    Swal.fire({
        icon: "success",
        title: "Información guardada correctamente"
    });

    console.log("Información del producto");

    console.log("Código:", codigo_prodt);
    console.log("Nombre:", nombre_prodt);
    console.log("Cantidad:", cantidad_prodt);
    console.log("Descripción:", descripcion_prodt);
    console.log("Marca:", marca_prodct);
    console.log("Valor:", Valor_Unitario);
    console.log("Categoría:", categoria);
    console.log("Ubicación:", ubicacion);

}

document.getElementById("btnGuardar").onclick = ValidarInformacion;