function obtenerDatosDelServidor() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let exito = true;    
            if (exito) {
                let usuario ={
                    nombre: "jenifer",
                    edad: 21
                }
                resolve(usuario);    
            }else{
                reject("Error al obtener los datos");
            }
        }, 2000);
    })
}

obtenerDatosDelServidor()
    .then(resp => {
        return resp.nombre.toUpperCase();
    })
    .then(nombreEnMayus => {
        console.log("Nombre en mayúsculas ",nombreEnMayus);
    })
    .catch(error => {
        console.log("Error: ", error);
    })
    .finally(() => {
        console.log("Fin de la tarea");
    })


async function obtenerPost() {
    try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response);
    }catch (error) {
        console.log("Error al obtener el post: ", error);
    } finally {
        console.log("Fin de la tarea");
    }
}
obtenerPost();



