# Prueba tecnica biblioteca
## Brayan Javier Gomez


### BACKEND

Para ejecutar este codigo de manera local es necesario digitar el comando  `npm install`, para hacer la instalacion de las librerias y modulos de **NodeJs** ,
luego para ejecutar el codigo digitamos el comando `npm start`. 

El BackEnd de esta aplicacion ha sido desarrollado con el framwork de javascript **NodeJs**, dando uso a las diferentes librerias de npm como express,
mongoose, cors entre otras, tiene una conexion con el motor de base de datos no relacional **mongoDb**, que a su vez esta conectado con el servicio 
en la nube de mongoDb Atlas, que permite acceder a los datos del API Rest desde cualquier aplicacion.

Esta API esta desarrollada para que reciba las peticiones http externas y retorne los valores en formato Json de la operacion requerida, en este caso,
permite buscar, registrar y mostrar libros, autores y editoriales, es necesario que exista un autor y una editorial para poder registrar un libro,
asi mismo las editoriales pueden tener un contador maximo de libros registrados y al llegar al limite el servidor no permitira almacenrar el libro en la 
respectiva editorial.

Se maneja la informacion por medio de modelos, que permiten la legibilidad e integridad de los datos.

Las rutas del backend son: /libros, /autores, /editoriales , /search estos con sus respectivas configuraciones para las peticiones http(GET, POST, PUT, DELETE)

Para ver la estructura de los datos en modelo Json puede ver el demo a continuacion.


* Es posible que la primera vez que acceda al demo se demore debido a que el hosting en este caso **Heroku** hiberna la pagina despues de un tiempo en el que 
no se cargue o se realizen peticiones.

    * **Demo BackEnd:** https://biblioteca-brayan.herokuapp.com/libros



### FRONTEND

El FrontEnd de esta aplicacion ha sido desarrollado con Angular en su version 10, para instalar las dependencias se usa el comando `npm install`, para ejecutar nuestro 
codigo se digita el comando `ng serve`

Esta aplicacion esta cnostruida para mostrar y registrar libros, autores y editoriales, todo bajo el consumo del API arriba descrita, se maneja la informacion
por medio de servicios que realizan las peticiones permitiendo acceder a estos datos desde cualquier componente por medio de observables, tiene una organizacion y 
manejo de rutas utilizando la metodologia de **LaziLoad**, tiene diferentes componentes para el manejo de la interfaz, de los datos y para mejor legibilidad del codigo.

La estructura de la data recibida desde el servidor se maneja y modela utilizando interfaces.
Las diferentes rutas son manejadas con el componente navBar y los botones de registro.


* Es posible que la primera vez que acceda al demo se demore debido a que el hosting en este caso **Heroku** hiberna la pagina despues de un tiempo en el que 
no se cargue o se realizen peticiones.

    * **Demo del FrontEnd:**  https://biblioteca-brayan.herokuapp.com/biblioteca/libros







