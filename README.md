# Asincronismo-con-JavaScript

## Contenido

1. [Introducción](#introduction)
2. [Qué es asincronismo](#asincronismo)
3. [Event Loop](#event-loop)
4. [Iniciando a programar con JavaScript](#iniciando-a-programar-con-javascript)
5. [Configuración](#configuracion)
6. [Qué son los callbacks](#que-son-los-callbacks)
7. [XMLHTTPRequest](#xmlhttprequest)
8. [Fetch data](#fetch-data)
9. [Callback hell](#callback-hell)
10. [Qué son las promesas](#que-son-las-promesas)
11. [Fetch](#fetch)
12. [Fetch POST](#fetch-post)
13. [Funciones asíncronas](#funciones-asincronas)
14. [Try and catch](#try-and-catch)
15. [¿Cómo enfrentar los errores?](#como-enfrentar-los-errores)
16. [Generators](#generators)
17. [Proyecto](#proyecto)
18. [Consumiendo API](#consumiendo-api)
19. [Desplegando el proyecto](#desplegando-el-proyecto)
20. [Conclusiones](#conclusiones)

## Introducción

Todo lo que necesitas para poder usar de manera adecuada el Asincronismo con JavaScript

## Qué es asincronismo

Para poder entender que es asincronismo, tenemos que conocer unos cuantos conceptos antes, primero hay que aclarar que los lenguajes de programación son síncronos, todos se ejecutan tarea por tarea por tarea…
Y con el tiempo se ha hecho que se pueda trabajar con el poder del asincronismo y veremos cómo está dentro de ***JavaScript***
Así que la definición de ***JavaScript*** es síncrono por defecto y tiene un solo subproceso, ósea que trabaja sobre un solo hilo, **una mejor definición para entender o profundizar podría ser que JavaScript es síncrono y no bloqueante, con un bucle de eventos (concurrencia), implementado con un único hilo para sus interfaces de I/O,** ***(entradas y salidas)***.

Vamos a seguir separando conceptos muy importantes.

#### JavaScript es single-threaded:
Aún con múltiples procesadores, solo se puede ejecutar tareas en un solo hilo, llamado el hilo principal. Ósea no importa cuantos procesadores tenga tu equipo o donde corre tu programa, JavaScript siempre se ejecuta en un solo hilo una sola tarea.

- - -

#### Bloqueante:
Una tarea no devuelve el control hasta que se ha completado. Esto es algo característico cuando ejecutas todo en un hilo, ósea hasta que no se termine de ejecutar o cumplir la instrucción que se halla declarado o codificado no continua la ejecución del programa.

### No bloqueante:
Una tarea se devuelve inmediatamente con independencia del resultado. Si se completó, devuelve los datos. Si no, Un error.




