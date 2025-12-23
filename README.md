# 🏥 Microservicio Base Salud - Node.js Template

![Node.js](https://img.shields.io/badge/node-%3E%3D18.x-green)
![Express](https://img.shields.io/badge/express-4.x-blue)
![MySQL](https://img.shields.io/badge/mysql-8.x-orange)
![JWT](https://img.shields.io/badge/auth-JWT-red)

Este es un **microservicio base (template reutilizable)** desarrollado para la **Unidad de TICs del Departamento de Salud de Alto Hospicio**. Proporciona una arquitectura sólida, escalable y segura para el desarrollo de sistemas de gestión interna.

## 🚀 Características Principales

- **Base de Datos:** MySQL con soporte para `utf8mb4` y Pooling de conexiones optimizado para servidores Linux/cPanel.
- **Arquitectura:** Diseño por capas (Routes -> Controllers -> Models -> Middlewares).
- **Resiliencia:** Manejo de errores global estandarizado y Health Checks de conexión a base de datos.

## 🛠️ Tecnologías Usadas

- **Entorno de Ejecución:** [Node.js](https://nodejs.org/) (LTS)
- **Framework Web:** [Express.js](https://expressjs.com/)
- **Base de Datos:** MySQL con el driver `mysql2` (Soporte de Promesas)
- **Seguridad:** [JSON Web Token (JWT)](https://jwt.io/) para autenticación y [Bcrypt.js](https://github.com/kelektiv/node.bcrypt.js) para hashing de contraseñas.
- **Herramientas de Desarrollo:** Nodemon, Dotenv, Cors.

## 🧩 Casos de Uso

Este microservicio está diseñado para ser la base de:
- **Sistemas de Inventario:** Gestión de Farmacia, Bodega e Insumos médicos.
- **Libro de Novedades Digital:** Registro seguro de eventos diarios en centros de salud.
- **Módulos Administrativos:** Gestión de personal, estadísticas y portales internos.
- **Backend para Aplicaciones:** APIs listas para consumir desde React, Vue o Apps móviles.

## 📂 Estructura del Proyecto

```text
/src
 ├── /config       # Configuración global y Pool de base de datos
 ├── /controllers  # Lógica de negocio y manejo de peticiones
 ├── /middlewares  # Escudos de seguridad y manejo de errores
 ├── /models       # Consultas SQL puras y lógica de datos
 ├── /routes       # Definición de endpoints
 ├── app.js        # Configuración de Express
 └── server.js     # Punto de entrada (Bootstrapping)
```
## ⚙️ Variables de Entorno
El proyecto utiliza un archivo .env para la configuración sensible. Se incluye un archivo .env.example como referencia.

- **`PORT`:** Puerto donde corre el servidor (ej. 3000).
- **`NODE_ENV`:** Entorno de ejecución (`development` | `production`).
- **`JWT_SECRET`:** Clave secreta para firmar tokens JWT.
- **`DB_HOST`:** Host de la base de datos MySQL.
- **`DB_USER`:** Usuario de la base de datos.
- **`DB_PASS`:** Contraseña de la base de datos.
- **`DB_NAME`:** Nombre de la base de datos.

## 📦 Instalación y Uso

1. Clonar el repositorio:

```bash
git clone https://github.com/Yosh457/microservicio-base-salud.git
cd microservicio-base-salud
```
2. Instalar dependencias:

```bash
npm install
```
3. Configurar variables de entorno: Renombrar `.env.example` a `.env` y completar los datos

```env
PORT=3000
NODE_ENV=development
JWT_SECRET=tu_clave_secreta_aqui
DB_HOST=localhost
DB_USER=usuario_db
DB_PASS=password_db
DB_NAME=nombre_base_datos
```
4. Iniciar en modo desarrollo:

```bash
npm run dev
```
## 🔐 Flujo de Autenticación
- **Login:** Envía credenciales vía POST a `/api/auth/login`.
- **Validación:** El backend compara la contraseña usando **Bcrypt**.
- **Token:** Si las credenciales son válidas, se genera un **JWT**.
- **Acceso protegido:** El token debe enviarse en el Header: `Authorization: Bearer <TU_TOKEN>`.

## 🧪 Pruebas con Postman
- **Público:** `GET /api/categorias/health` - Verifica el estado del servidor y la base de datos.
- **Protegido:** `GET /api/categorias/` - Requiere el Bearer Token para ingresar al listado de categorías.

---
Desarrollado por **Josting Silva**  
Analista Programador – Unidad de TICs  
Departamento de Salud, Municipalidad de Alto Hospicio
