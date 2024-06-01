# Prueba - Club Deportivo

En esta prueba se trata de implementar un sistema CRUD para un club deportivo. Se requiere la creación de rutas y endpoints en un servidor, manejo de solicitudes y respuestas HTTP, así como la implementación de operaciones de Crear, Leer, Actualizar y Eliminar utilizando un archivo JSON como base de datos.

## Descripción

El Club Deportivo Discipline Spa desea contar con una aplicación web que le permita gestionar los deportes que ofrece en sus sucursales. Para ello, se requiere un sistema que pueda registrar, ver, editar y eliminar los deportes disponibles.

## Requerimientos

1. Crear una ruta que permita agregar un nuevo deporte, recibiendo el nombre y precio como parámetros y persistiéndolos en un archivo JSON.
2. Crear una ruta que devuelva en formato JSON todos los deportes registrados.
3. Crear una ruta que permita editar el precio de un deporte registrado, utilizando los parámetros de la consulta y persistiendo este cambio.
4. Crear una ruta que permita eliminar un deporte especificado desde el cliente y persistir este cambio.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución de JavaScript para el servidor.
- **Express.js**: Marco de aplicación web de Node.js utilizado para definir rutas y manejar solicitudes HTTP.
- **Bootstrap**: Biblioteca de estilos CSS para el diseño de la interfaz de usuario.
- **jQuery**: Biblioteca de JavaScript para manipulación del DOM y manejo de eventos.
- **Axios**: Cliente HTTP basado en promesas para el navegador y Node.js.

## Instalación

1. Clona este repositorio a tu máquina local.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm start` para iniciar el servidor.

## Uso

Una vez que el servidor esté en funcionamiento, puedes acceder a la aplicación en tu navegador web visitando `http://localhost:puerto`, donde `puerto` es el puerto en el que está ejecutando el servidor (por defecto es 3000).

## Contribución

Las contribuciones son bienvenidas. Si tienes sugerencias, por favor crea un problema o envía una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.
