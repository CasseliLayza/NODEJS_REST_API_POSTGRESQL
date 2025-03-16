# 🚀 User Management API with PostgreSQL & Node.js
![User Management API Banner](asset/img/cover.webp)

Una poderosa API REST construida con **Node.js** y **PostgreSQL** para la gestión de usuarios. Este proyecto permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una tabla de usuarios, ideal para cualquier sistema de autenticación, dashboard administrativo o sistema SaaS.

---

## 📦 Características Principales

- 🔐 Crear nuevos usuarios con validación de duplicados (email único).
- 📋 Listar todos los usuarios registrados.
- 🔍 Buscar usuarios por su ID.
- ✏️ Actualizar información del usuario.
- ❌ Eliminar usuarios de forma segura.
- 💾 Conexión con base de datos PostgreSQL mediante `pg.Pool`.

---

## 🛠️ Endpoints Disponibles

| Método | Ruta         | Descripción                    |
|--------|--------------|--------------------------------|
| POST   | `/users`     | Crea un nuevo usuario          |
| GET    | `/users`     | Obtiene todos los usuarios     |
| GET    | `/users/:id` | Obtiene un usuario por su ID   |
| PUT    | `/users/:id` | Actualiza un usuario existente |
| DELETE | `/users/:id` | Elimina un usuario por su ID   |

---

## 📥 Ejemplo de Payload para Crear/Actualizar

```json
{
  "name": "Juan Pérez",
  "email": "juan.perez@example.com"
}
```

---

## ⚠️ Manejo de Errores

- `409 Conflict`: Cuando el email ya está registrado.
- `404 Not Found`: Si el usuario no existe.
- `500 Internal Server Error`: Para errores inesperados del servidor o base de datos.

---

## 🚀 Cómo Ejecutar el Proyecto

### 1. Clonar el repositorio

```bash
git clone git@github.com:CasseliLayza/NODEJS_REST_API_POSTGRESQL.git
cd NODEJS_REST_API_POSTGRESQL
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear la base de datos y tabla

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);
```

### 4. Configurar la conexión a PostgreSQL

Edita el archivo `src/db.js`:

```js
export const pool = new Pool({
  user: 'tu_usuario',
  host: 'localhost',
  password: 'tu_password',
  database: 'nombre_de_tu_db',
  port: 5432,
});
```

> Puedes usar `dotenv` para mayor seguridad.

### 5. Ejecutar el servidor

```bash
npm run dev
```

---

## 🧪 Pruebas Rápidas con cURL

```bash
# Crear usuario
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Ana","email":"ana@email.com"}'

# Obtener todos los usuarios
curl http://localhost:3000/users

# Buscar por ID
curl http://localhost:3000/users/1

# Actualizar usuario
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Ana Actualizada", "email":"ana@nuevo.com"}'

# Eliminar usuario
curl -X DELETE http://localhost:3000/users/1
```

---

## 🤝 Contribuciones

¿Te gustaría mejorar esta API? ¡Pull requests, sugerencias y feedback son siempre bienvenidos!

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

## ✨ Autor

Desarrollado con 💻 por [CasseliLayza](https://github.com/CasseliLayza)

