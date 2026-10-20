# Descripcion
Este proyecto en Node funciona como una app web local que permite registrar datos de jugadores y rosters a una base de datos,
permitiendo realizar multiples peticione HTTP por medio de un archivo de REST Client.

## Instrucciones de instalacion
Simplemente descarga todo el conjunto de archivos de este repositorio y abrelo con Visual Studio Code.
Debes tener habilitado la extension REST Client para poder ejecutar este sitio web local.

Una vez teniendo listo la carpeta de archivos, debes ejecutar los siguientes comandos en consola:
- npm install
- npm install sequelize mysql2
- npm install --save-dev sequelize-cli

Tras esto, debes crear los siguientes elementos para poder utilizar la base de datos local con MYSQL:
- Nombre de usuario: meta32User
- Password: 123456789
- Base de datos: sportsDB

Finalmente, para poder crear las tablas y alimentar las tablas con datos previos, ejecutar lo siguiente:
- pnpx sequelize-cli db:migrate
- pnpx sequelize-cli db:seed:all

## Instrucciones de ejecucion
Para poder ejecutar esta app, debes utilizar solamente el siguiente comando en consola
- npm run dev

Y se habilitara el siguiente enlace
- http://localhost:3000/api/v1

Una vez apareza la habilitacion de este enlace en consola, podras utilizar los endpoints del archivo HTTP

## Documentacion Swagger
Para acceder a la documentacion de esta app web, puede utilizar el siguiente enlace local al momento de estar 
ejecutando al app web
- http://localhost:3000/docs

## Lista de Endpoints
### 1. Endpoints Auxiliares
Endpoints de apoyo para verificar el estado de la API y consultar catálogos base.

*   **GET `/health`**
    *   **Descripción:** Verifica el estado general de funcionamiento de la API (Health Check).
*   **GET `/roles`**
    *   **Descripción:** Lista el catálogo de roles válidos dentro del sistema.
*   **GET `/estados`**
    *   **Descripción:** Lista los estados válidos que puede tener un elemento (por ejemplo, activo, inactivo).
*   **GET `/tipos-roster`**
    *   **Descripción:** Lista los tipos de rosters permitidos (por ejemplo, Principal, Suplente, etc.).

---

### 2. Módulo de Jugadores
Operaciones para la gestión de jugadores, incluyendo filtros y CRUD completo.
*   **GET `/jugadores`**
    *   **Descripción:** Obtiene el listado completo de todos los jugadores registrados. Soporta parámetros de consulta opcionales para filtrado por rol, estado y búsqueda por nickname (ej. `?rol=Mid&estado=activo&search=faker`).
*   **GET `/jugadores/{id}`**
    *   **Descripción:** Obtiene los detalles específicos de un jugador utilizando su identificador único (`id`).
*   **POST `/jugadores`**
    *   **Descripción:** Registra y crea un nuevo jugador en el sistema. Requiere un cuerpo en formato JSON con los campos `nickname`, `nombre_real`, `pais`, `rol` y `estado`.
*   **PUT `/jugadores/{id}`**
    *   **Descripción:** Actualiza la información completa o parcial de un jugador existente identificado por su `id`.
*   **DELETE `/jugadores/{id}`**
    *   **Descripción:** Elimina un jugador del sistema utilizando su identificador único (`id`).

---

### 3. Módulo de Rosters
Operaciones para la gestión de equipos o rosters de competencia.
*   **GET `/rosters`**
    *   **Descripción:** Obtiene el listado de todos los rosters. Permite filtrar los resultados mediante parámetros como `tipo` y `temporada` (ej. `?tipo=Principal&temporada=2026`).
*   **GET `/rosters/{id}`**
    *   **Descripción:** Obtiene el detalle de un roster específico por su `id`, incluyendo usualmente la lista de jugadores asignados.
*   **POST `/rosters`**
    *   **Descripción:** Crea un nuevo roster. Requiere un cuerpo JSON con los atributos `nombre`, `juego`, `tipo` y `temporada`.
*   **PUT `/rosters/{id}`**
    *   **Descripción:** Actualiza los datos de un roster existente identificado por su `id`.
*   **DELETE `/rosters/{id}`**
    *   **Descripción:** Elimina un roster específico por su `id`. Los jugadores asociados a este roster permanecen intactos en la base de datos.

---

### 4. Asignación de Jugadores a Rosters
Endpoints relacionales para administrar qué jugadores pertenecen a qué rosters y sus funciones.

*   **GET `/rosters/{id_roster}/jugadores`**
    *   **Descripción:** Lista todos los jugadores asignados a un roster específico.
*   **POST `/rosters/{id_roster}/jugadores`**
    *   **Descripción:** Asigna un jugador existente a un roster específico. Requiere un cuerpo JSON con `id_jugador` y `rol_en_roster` (útil para validar reglas de negocio como RN-02 y RN-03).
*   **PUT `/rosters/{id_roster}/jugadores/{id_jugador}`**
    *   **Descripción:** Actualiza el rol de un jugador específico dentro de un roster determinado (por ejemplo, cambiar entre "Titular" y "Suplente").
*   **DELETE `/rosters/{id_roster}/jugadores/{id_jugador}`**
    *   **Descripción:** Remueve o desasocia a un jugador específico de un roster en particular.
