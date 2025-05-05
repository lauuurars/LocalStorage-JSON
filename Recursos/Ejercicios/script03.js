
/** 
 * EJERCICIO 3:
 * ------------
 *  Recupera  el objeto guardado y Verlo por  consola
 *  DeSerializar un Objeto almacenado y Verlo por consola
 *  Eliminar el Objeto y volvera consultar (si no esite devuelve null)
 *  Validar antes de mostrar el objeto recuperado
 *  Mostrar los datos recuperado en el contenedor html
 **/ 


//recuperamos el objeto guardado y lo mostramos por consola

const libro = JSON.parse(localStorage.getItem('libro')) //convertimos el objeto JSON a JS

if (libro == null) {
    console.log("No hay libros!!!!")
} else {
    console.log(libro.titulo)
    console.log(libro.autor)
    console.log(libro.nacionalidad)
    const contenedor = document.querySelector('#contenedor')
    contenedor.innerHTML = `
        <h2>📕Libro UwU: ${libro.titulo}</h2>
        <p>Autor: ${libro.autor}</p>
        <p>Nacionalidad: ${libro.nacionalidad}</p>
    `
}

