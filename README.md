# PruebaEdwardVera - Prueba Técnica Frontend

Este proyecto es parte de una prueba técnica para el puesto de: Programador Web Frontend. Puedes ver el despliegue del proyecto [aquí](https://prueba-edward-vera.vercel.app/).

## Pasos para ejecutar el proyecto en otro equipo:

### Back-end (Carpeta /api):

1. En la carpeta /api, ejecuta los siguientes comandos:
  - `npm install` (instala las dependencias)
  - `npm start` (inicia el servidor backend localmente)

2. Configura la base de datos PostgreSQL.

   - Crea un archivo `.env` en la carpeta /api con la siguiente estructura para los datos de conexión a la base de datos:
     
       ```
       PORT=
       DB_USER=
       DB_PASSWORD=
       DB_HOST=
       DB_PORT=
       DB_NAME=
       ```

### Front-end (Carpeta /client):

1. En la carpeta /client, ejecuta los siguientes comandos:
  - `npm install` (instala las dependencias)
  - `npm run dev` (inicia la aplicación frontend localmente)

## Lista de comandos utilizados:

#### Back-end (/api):

- Inicialización del proyecto:
  
  ```
  npm init -y
   ```
- Instalación de dependencias:
  
   ```
   npm i axios body-parser cors dotenv express morgan
   npm i -D nodemon
   npm i sequelize pg
   ```
#### Front-end (/client):

- Creación de un nuevo proyecto Vite (React):
  
   ```
   npm create vite@latest “Nombre_del_proyecto”
      - Escoger el framework del Frontend (React) 
      - Escoger el lenguaje de programación (JS)
   ```

- Instalación de dependencias:
  
   ```
   npm i
   npm i axios react-router-dom react-dom react-redux redux redux-thunk
   npm install -D tailwindcss
   npx tailwindcss init   #Crea el archivo de configuración
   npm i postcss autoprefixer --save-dev
   npm i react-toastify
   ```

### Link de la API externa: https://fakestoreapi.com/products





