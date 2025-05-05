
/**
 * EJERCICIO 1:
 * ------------
 * Guardar Datos en el Local Storage con setItem(llave,valor)
 * Guardar un usuario, una edad, un email en el Local Storage
 * Recuperar del Local Storage usuario y edad con getItem()
 * Actualizar la edad del usuario
 * ver la logitud de Localstorage con length
 * Ver la posicion de una  llave con key(index)
 * Remover un valor del LocalStorage con removeItem("llave")
 * Limpar Todo el LocalStorage con clear()
 */

//Guardamos Datos en el Local Storage usando setItem(llave,valor)
localStorage.setItem('usuario', 'Laura')
localStorage.setItem('edad', 18)
localStorage.setItem('email', 'laura@gmail.com')
localStorage.setItem('mascota', 'michi')

//Recuperamos datos del Local Storage usando getItem()

const usuario = localStorage.getItem('usuario') //Laura
const edad = localStorage.getItem('edad')  //18
const email = localStorage.getItem('email') //laura@gmail.com
const mascota = localStorage.getItem('mascota') //michi

//mostramos los datos en consola
console.log(usuario)
console.log(edad)
console.log(email)
console.log(mascota)

//Actualizar la edad del usuario

localStorage.setItem('edad', 19)

//Ver la longitud de LocalStorage con Length

console.log(localStorage.length) 

//ver la posición de una llave con key(index)

const llave = localStorage.key(2) //mostramos el email
console.log(llave)

//remover un valor del localStorage usando removeItem 

localStorage.removeItem('mascota') //eliminamos el valor mascota

//limpiamos todo el localStorage usando clear()

localStorage.clear() //limpiamos todo el localStorage

