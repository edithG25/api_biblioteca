API REST - Biblioteca
Este proyecto es una API RESTful desarrollada con **NestJS** y **TypeORM** que gestiona una biblioteca, permitiendo administrar usuarios, libros, préstamos y autores.


REQUISITOS: 
- Implementar buenas prácticas
- Crear 4 entidades son su respectivas relaciones
- Crear CRUD completo en 3 entidades
- validación con class-validator y class-transformer
- Manejo de errores con HttpException
- Conexión de NestJS a base de datos (mySQL) con TypeORM

PASOS PARA LEVANTAR EL SERVIDOR:
- clona el repositorio
- instala las depencias
- crea la base de datos
- configura tus variables de entorno
- luego levanta el servidor: npm run start dev

RUTAS DE INSOMNIA:
- Autor: http://localhost:3000/autores
- Libro: http://localhost:3000/libro
- Usuario: http://localhost:3000/usuarios
- Prestamo: http://localhost:3000/prestamo
