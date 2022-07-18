# Asincronismo-con-JavaScript

## Contenido

- [Asincronismo-con-JavaScript](#asincronismo-con-javascript)
  - [Contenido](#contenido)
  - [Introducción](#introducción)
  - [Qué es asincronismo](#qué-es-asincronismo)
  - [Event loop](#event-loop)
  - [Iniciando a programar con JavaScript](#iniciando-a-programar-con-javascript)
  - [Configuración](#configuración)
  - [¿Que son los callback?](#que-son-los-callback)
  - [XMLHTTPRequest](#xmlhttprequest)
  - [pendiente](#pendiente)

## Introducción

Todo lo que necesitas saber para poder usar de manera adecuada el Asincronismo con JavaScript

**[⬆ Volver arriba](#contenido)**

* * *

## Qué es asincronismo

Para poder entender que es asincronismo, tenemos que conocer unos cuantos conceptos antes, primero hay que aclarar que los lenguajes de programación son síncronos, todos se ejecutan tarea por tarea por tarea…
Y con el tiempo se ha hecho que se pueda trabajar con el poder del asincronismo y veremos cómo está dentro de ***JavaScript***
Así que la definición de ***JavaScript*** es síncrono por defecto y tiene un solo subproceso, ósea que trabaja sobre un solo hilo, **una mejor definición para entender o profundizar podría ser que JavaScript es síncrono y no bloqueante, con un bucle de eventos (concurrencia), implementado con un único hilo para sus interfaces de I/O,** ***(entradas y salidas)***.

Vamos a seguir separando conceptos muy importantes.

**JavaScript es single-threaded:**
Aún con múltiples procesadores, solo se puede ejecutar tareas en un solo hilo, llamado el hilo principal. Ósea no importa cuantos procesadores tenga tu equipo o donde corre tu programa, JavaScript siempre se ejecuta en un solo hilo una sola tarea.

**Bloqueante:**
Una tarea no devuelve el control hasta que se ha completado. Esto es algo característico cuando ejecutas todo en un hilo, ósea hasta que no se termine de ejecutar o cumplir la instrucción que se halla declarado o codificado no continua la ejecución del programa.

**No bloqueante:**
Una tarea se devuelve inmediatamente con independencia del resultado. Si se completó, devuelve los datos. Si no, Un error.

**Síncrono:**
Las tareas se ejecutan de forma secuencial, se debe esperar a que se complete para continuar con la siguiente tarea

**Asíncrono:**
Las tareas pueden ser realizadas más tarde, lo que hace posible que una respuesta sea procesada en diferido. La finalización de la operación I/O (entrada/salida) se señaliza más tarde, mediante un mecanismo específico como por ejemplo un callback, una promesa o un evento, lo que hace posible que la respuesta sea procesada en diferido.

**Concurrencia en JavaScript:**
Utiliza un modelo de concurrencia basado en un *“loop de eventos”*. La concurrencia es la capacidad de un algoritmo o programa para ejecutar más de una tarea a la vez. El concepto es similar al procesamiento paralelo, pero con la posibilidad de que muchos trabajos independientes hagan diferentes cosas a la vez en lugar de ejecutar el mismo trabajo.

**EventLoop:**
El bucle de eventos *(Eventloop)* es un patrón de diseño que espera y distribuye eventos o mensajes en un programa.

**Formas de manejar la asincronía en JavaScript:**

**CallBacks:** Una función que se pasa como argumento de otra función y que será invocada según sea la necesidad.
**Promesas:** *(implementado en ES6)* Una promesa es una función no-bloqueante y asíncrona la cual puede retornar un valor ahora, en el futuro o nunca.
**Async / Await:** *(implementado en ES2017)* Permite estructurar una función asincrónica sin bloqueo de una manera similar a una función sincrónica ordinaria.

¿Con estas tres funcionalidades JavaScript acaba de convertirse en *Multi-Threaded* con la capacidad de realizar múltiples tareas simultáneamente?, Umm si y no, ya que como se dijo en un comienzo JavaScript es *single-threaded*, y siempre lo será, solo que se ha ido actualizando y adaptando a las necesidades y estas funcionalidades son la forma más fácil de poder hacerlo.
En **JavaScript** casi todas las operaciones de I/O *(Entrada y Salida)* no se bloquean. A esto se le conoce como asíncronismo. Lo único que no es procesado antes de que termine la operación son los callbacks, ya que éstos están amarrados a una operación y esperan a que sea finalizada para poder ejecutarse.
El **asincronismo** es una manera de aprovechar el tiempo y los recursos de la aplicación, ejecutando tareas y procesos mientras otros son resueltos en background *(como la llegada de la información de una API)*, para posteriormente continuar con las tareas que requerían esa información que no tenías de manera instantánea.
Un ejemplo fácil de asincronismo vs sincronismo es invitar a unos amigos a una fiesta y ofrecer una parrillada. Primero decides colocar la carne y verduras a la parrilla y luego repartir bebidas y algo para picar *(snacks)*. Si fuera una persona síncrona *(Blocking)* tendrías que esperar a que la comida de la parrilla esté cocinada y luego atender a los invitados. Pero si fuera una persona asíncrona *(Non Blocking)* luego de poner la carne al carbón, sacas las bebidas frías de la nevera y compartes con los invitados mientras se cocina la carne. La acción de que la comida en la parrillada esté lista sería un callback que está esperando que finalice el proceso para ejecutarse. Pero otros procesos *(como compartir la velada con bebidas y algo de picar)* ya podrían irse realizando.

    Conclusion: Ahora decimos que JavaScript es Asíncrono y no bloqueante,
    con un bucle de eventos (concurrencia) implementado con unúnico hilo
    para sus interfaces de I/O.

**[⬆ Volver arriba](#contenido)**

* * *

## Event loop

**Event loop:**
El bucle de eventos es un patrón de diseño que espera y distribuye eventos o mensajes en un programa.

**Memory Head:**
Región de memoria libre de gran tamaño, dedicada al alojamiento dinámico de objetos (asignado a un montículo). Es compartida por todo el programa y controlada por un recolector de basura que se encarga de liberar aquello que no se necesita, es decir de forma desorganizada se guarda información de las variables y del scope.

**Call Stack (pila)**
Apila de forma organizada las instrucciones de nuestro programa. La pila de llamadas, se encarga de albergar las instrucciones que deben ejecutarse. Nos indica en que punto del programa estamos, por donde vamos.

**Task Queue:**
Cola de tareas, se maneja la concurrencia, se agregan las tareas que ya estan listas para pasar al stack (pila), y para pasar al stack este debe de estar vacio. Cada vez que nuestro programa recibe una notificación del exterior o de otro contexto distinto al de la aplicación, el mensaje se inserta en una cola de mensajes pendientes y se registra su callback correspondiente. El stack debe estar vacío para que esto suceda.

**Micro Task Queue:**
Las promesas tienen otra forma de ejecutarse y una prioridad superior, y es aqui donde se almacenas esas promesas, con una prioridad mas alta.

**Web APIs:**
El JavaScript del lado del cliente: setTimeOut, XMLHTTPRequest, File Reader y el DOM. Node: fs, https.

**Conclusion Event Lopp:**
Tarea asignada para mover del Task Queue al Stack, solo si el Stack esta vacio.

> Imagen tomada de [pagina ejemplo](https://dev.to/papidiagne30/javascript-event-loop-for-dummies-1bdi)
![Ejemplo grafico del event loop](https://res.cloudinary.com/practicaldev/image/fetch/s--JNUvMc4A--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/mo2h5r746hsicv0jjeht.gif "event loop")

**[⬆ Volver arriba](#contenido)**

* * *

## Iniciando a programar con JavaScript
Aqui solo quiero motivarlos para que puedan avnzar y alcanzar las metas, intentar entender el porque se hace y para que se hace y como se ejecuta realmente todo lo que en cada lenguaje hacemos. 🚗✈🌎🏝🎆🎉🎊🎭

**[⬆ Volver arriba](#contenido)**

* * *

## Configuración
Aquí veras la configuración del proyecto inicial y te indicare los pasos que se realizaron.
Conceptos fundamentales antes de crear el proyecto:
- Crear e inicializar un Proyecto:
- Tener instalado Visual Studio Code o lo puedes instalar [Aquí]( https://code.visualstudio.com/) o utiliza tu editor preferido.
- Abrir la terminal de tu preferencia.
- Para conocer donde estamos ubicados se escribe pwd y se da ENTER.
- Para ver las carpetas y archivos del lugar donde estamos, se escribe ls y se da ENTER.
- Para crear una carpeta se escribe mkdir nombre-de-la-carpeta y se da ENTER.
- Para entrar a una carpeta se escribe cd nombre-de-la-carpeta y se da ENTER.
- Para crear un archivo se escribe touch nombre-del-archivo-extensión y se da ENTER.
- Para iniciar el repositorio se escribe git init y se da ENTER.
- Se debe de instalar nodejs en [nuestra maquina](https://nodejs.org/es/download/).
- Vamos a inicializar el proyecto con npm, se escribe npm init y se da ENTER.
- Aparece el nombre del proyecto, si no se quiere modificar el nombre, se da ENTER.
- Aparece la versión del proyecto, si no se quiere modificar el número, se da ENTER.
- Aparece la descripción del proyecto, si se quiere modificar dejar vacío, se da ENTER.
- Lo mismo, dejar vacío: entry point, test command, git repository.
- En keywords se escribe las palabras claves como javascript y se da ENTER.
- En la licencia por defecto aparece la ISC, pero la más común es la MIT para compartir y poder comercializar después el producto.
- Por último, aparecen los datos ingresados (guardados en el archivo package.json) y si no hay que modificar, se escribe yes y se da ENTER.
- Para entrar al editor VSC se escribe code . y se da ENTER.
- Una vez dentro de VSC, en el panel izquierdo aparece el archivo package.json, crear una nueva carpeta llamada src donde contendrá nuestro código.
- Crear el archivo .gitignore (estará fuera de la carpeta src) tiene que estar en la raiz. En los sistemas - Unix, dado que el archivo empieza con un punto, al abrir un explorador de archivos los toma como archivos ocultos y no son visibles.
- En el archivo puedes colocar:

```markdown
    /node_modules/
```

- O puedes ir a esta [pagina](https://gitignore.io) y allí escribes la palabra node das enter y copias todo el contenido que se genero y lo pegas en gitignore.
- Para guardar los cambios de un archivo, presionar las teclas Ctrl + S
- Muy importante instalar la extensión Code Runner, presionar las teclas Ctrl + P y pegar: ```ext install formulahendry.code-runner``` y dar ENTER. Lo instala automáticamente. [aquí]( https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) esta la fuente.

**[⬆ Volver arriba](#contenido)**

* * *

## ¿Que son los callback?
Son funciones que reciben dentro de los argumentos otras funciones las cuales serán llamadas o ejecutadas dentro de la función inicial, en la carpeta de ``src/callback/index.js`` vemos algunos ejemplos de funciones que llaman otras funciones.

```javascript
    function greeting (name){
        console.log(`Hello! ${name}`);
    }

    // esta funcion setTimeout recive estos parametros (function, wait time, arguments)
    setTimeout(greeting, 2000, 'Elkin');
```

**[⬆ Volver arriba](#contenido)**

* * *

## XMLHTTPRequest
Es un objeto de JS que permite hacer peticiones hacia servicios en la nube(URLs o APIs).
Existen 5 estados en un llamado XMLHttpRequest:

- 0 → Se ha inicializado.
- 1 → Loading (cargando).
- 2 → Se ha cargado.
- 3 → Procesamiento si existe alguna descarga.
- 4 → Completado.

**Métodos y propiedades:**
-xmlhttp.open() → Prepara la petición para ser enviada tomando tres parámetros: prótocolo, url, asíncrono (true).
- xmlhttp.readyState → Retorna el estado de la petición.
- xmlhttp.onreadystatechange → Un eventHandler que es llamado cuando la propiedad readyState cambia.
- xmlhttp.status → Retorna el estado de la respuesta de la petición. (200,400,500)
- xmlhttp.send() → Envía la petición.

**Características del protocolo http:**
- **Verbos:** Los verbos indican acciones que están asociadas a peticiones y recursos, es decir, sirven para la manipulación de recursos cliente/servidor.
- **Los Verbos http son:**
    - **GET** → Solicita un recurso.
    - **HEAD** → Solicita un recurso pero sin retornar información, la estructura de esta petición es igual que get tanto en su headers como estatus. Es útil cuando vamos a utilizar API, para comprobar si lo que vamos a enviar esta correcto y puede ser procesado.
    - **POST** → Sirve para la creación de recursos en el servidor.
    - **PUT** → Actualiza por completo un recurso, reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
    - **PATCH** → Actualiza parcialmente un recurso.
    - **DELETE** → Elimina un recurso.

- **Los códigos de estados del servidor:**
El código de estado (status codes) sirve para describir el estado de la petición hecha al servidor.
    - **1xx** → Indican que la petición fue recibida por el servidor, pero está siendo procesada por el servidor.
    - **2xx** → Indican que la petición fue recibida, aceptada y procesada correctamente.
    - **3xx** → Indican que hay que tomar acciones adicionales para completar la solicitud.
    - **4xx** → Indican errores del lado del cliente que hizo mal una solicitud.
    - **5xx** → Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecución en el servidor.

- Los códigos más comunes a la hora de interactuar con una API son:
    - **200** → OK → Indica que todo está correcto.
    - **201** → Created → Todo está correcto cuando se hizo una solicitud POST, el recurso se creó y se guardó correctamente.
    - **204** → No Content → Indica que la solicitud se completó correctamente pero no devolvió información. Este es común cuando se hacen peticiones con el verbo DELETE.
    - **400** → Bad Request → Indica que algo está mal en la petición (no encontró algo).
    - **401** → Unauthorized → Significa que antes de hacer una solicitud al servidor nos debemos autenticar.
    - **403** → Forbidden → Indica que no tenemos acceso a ese recurso, aunque se esté autenticado.
    - **404** → Not Found → Indica que no existe el recurso que se está intentando acceder.
    - **500** → Internal Server Error → Indica que algo falló, es un error que retorna el servidor cuando la solicitud no pudo ser procesada.

Fuente: [aquí](https://developer.mozilla.org/es/docs/Web/HTTP/Status) podras ver toda la documentacion.

Ejemplo en VSC:
Ir a la consola y ubicarnos en la carpeta del proyecto y escribir el comando para instalar el paquete XMLHttpRequest: ```npm i xmlhttprequest``` [aquí](https://www.npmjs.com/package/xmlhttprequest) veras la documentacion para usos.
Ir al VSC y crear un archivo llamado challenge.js en la ruta *src/callback*. El archivo queda:

```javascript
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event){
        if (xhttp.readyState === 4){
            if (xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            } else {
            const error = new Error('Error'+ urlApi);
            return callback(error, null);
            }
        } 
    }
    xhttp.send();
}
```

**[⬆ Volver arriba](#contenido)**

* * *

## pendiente