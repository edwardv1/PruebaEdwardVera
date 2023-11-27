# PruebaEdwardVera
Prueba Tecnica Frontend.

Deploy del proyecto: https://prueba-edward-vera.vercel.app/

Pasos necesarios para ejecutar los proyectos en otro equipo:
1. En la carpeta /api ejecutar los comandos:
   1.1. npm install (instalar dependencias)
   1.2. npm start (para correr el back de forma local)

Base de datos usada: PostgreSQL.

Crear archivo .env en carpeta /api
-Estructura para los datos del archivo.env en la carpeta api (para conectarse a la BD):
PORT=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
DB_NAME=

2. En la carpeta /client ejecutar los comandos:
   2.1. npm install (instalar dependencias)
   2.2. npm run dev (para correr el front de forma local)

-Lista de comandos utilizados:
Back:
/api
npm init -y
npm i axios body-parser cors dotenv express morgan
npm i -D nodemon
npm i sequelize pg

Front:
Nueva Terminal.
npm create vite@latest “Nombre_del_proyecto”
    Escoger el framework del Front (React)
    Escoger el lenguaje de programación (JS)
    Crear carpeta client y mover los archivos a la misma.
/client
npm i
npm i axios react-router-dom react-dom react-redux redux redux-thunk
npm install -D tailwindcss
npx tailwindcss init   (crea el archivo config)
npm i postcss autoprefixer --save-dev
npm i react-toastify

-API externa: https://fakestoreapi.com/products





