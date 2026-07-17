function ValidarInformacion() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tipo_documento = document.getElementById("nombre_prodt").value;
    let numero_documento= document.getElementById("numero_documento").value;
    let telefono = document.getElementById("telefono").value;
    let email= document.getElementById("email").value;
    let genero = document.getElementById("genero").value;
    let cargo  = document.getElementById("cargo").value;
    let fecha_nacimineto  = document.getElementById("fecha_nacimineto").value;
    let contraseña  = document.getElementById("contraseña").value;
    if (!nombre || !apellido || !tipo_documento || !numero_documento || !telefono || !email || !genero || !cargo || !fecha_nacimineto || !contraseña )
        {Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos Incompletos",
            showConfirmButton: false,
            timer: 1500
        });
    } else{
        console.log(
            `Informacion del Producto: \n
            ${nombre} \n
            ${apellido} \n
            ${tipo_documento} \n
            ${numero_documento} \n
            ${telefono} \n
            p${email} \n
            ${genero} \n
            ${cargo} \n
            ${fecha_nacimineto} \n
            p${contraseña}`
        );
        if (!/^[a-zA-Z]+$/.test(nombre)) {
            console.log("Categoria debe contener letras")
            Swal.fire({
                title: "Categoria debe contener letras",
                icon: "error"
            });
            return;
        }
        if (!/^[a-zA-Z]+$/.test(apellido)) {
            console.log("Categoria debe contener letras")
            Swal.fire({
                title: "Categoria debe contener letras",
                icon: "error"
            });
            return;
        }
        if (!/^[a-zA-Z]+$/.test(cargo)) {
            console.log("Categoria debe contener letras")
            Swal.fire({
                title: "Categoria debe contener letras",
                icon: "error"
            });
            return;
        }
        if (!/^[a-zA-Z]+$/.test(genero)) {
            console.log("Categoria debe contener letras")
            Swal.fire({
                title: "Categoria debe contener letras",
                icon: "error"
            });
            return;
            
        }
        if (!/^[a-zA-Z]+$/.test(tipo_documento)) {
            console.log("Categoria debe contener letras")
            Swal.fire({
                title: "Categoria debe contener letras",
                icon: "error"
            });
            return;
        }     
        if (!/^\d+$/.test(numero_documento)) {
            Swal.fire({
                 title: "Codigo del producto debe contener números",
                icon: "error"
            });
            return;
        
        }    
        if (!/^\d+$/.test(telefono)) {
            Swal.fire({
                 title: "Codigo del producto debe contener números",
                icon: "error"
            });
            return;
        
        }       
        if (!/^\d+$/.test(fecha_nacimineto)) {
            Swal.fire({
                 title: "Codigo del producto debe contener números",
                icon: "error"
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

              
        