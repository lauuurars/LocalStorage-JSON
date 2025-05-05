
/**
 * EJERCICIO 2:
 * ------------
 * Definir un Objeto ej: Libro
 * Ver que pasa  si se Guadar sin serializarlo
 * Serializar un Objeto para almacenarlo
 * Abrir y cerrar el navegador para ver que pasa en el Local Storage
 *  Abrir el enlace con otro navegador ¿Que pasa?
 * */ 

const libro = {
    titulo: '100 años de soledad',
    autor: 'Gabriel Garcia Marquez',
    nacionalidad: 'Colombiana'
}

//serializamos el objeto para almacenarlo 

const libroJSON = JSON.stringify(libro) //convertimos el objeto JS a JSON
localStorage.setItem('libro', libroJSON) //guardamos correctamente el objeto serializado

