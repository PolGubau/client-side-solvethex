Client Side del proyecto para SolveTHeX,
Se ha usado Vue como framework de desarrollo.

## Comando de inicio

```npm i```
```npm run dev```

Se abrirá la aplicación en un puerto notificado por la consola.

Esta aplicación se conecta a la API de SolveTheX, por lo que es necesario tenerla corriendo en el puerto 3000. (Ver readme de la API)

## Una vez iniciado

Se puede acceder a la aplicación en la ruta base del localhost dado, por ejemplo: http://localhost:8080/ de manera local,
en esta se mostrará el título y una breve descripción del proyecto.
Así como una pequeña nav con las tres vistas que se han desarrollado.

1. Vista principal, que es la vista principal, donde se muestra la información de la base de datos.
2. Conseguir token, donde se puede obtener un token para poder hacer peticiones a la API.
3. Añadir Datos, apartados de añadir datos a la base de datos, que posteriormente aparecerá en la vista principal si tienes un token.

En la vista principal, se puede ver la cuadricula de datos, cada uno con la información de la API (Nombre : name y Stock: stock), también se puede editar y eliminar de la base de datos.

Para editar un producto, presionar el botón de cada producto, se abrirá una vista de edición, donde se puede editar el nombre y el stock, y se puede guardar los cambios, esta vista no es accesible desde la nav ya que necesitas seleccionar un id.

En la vista de 2 (Conseguir token), se puede ver un formulario con un input para introducir el nombre de usuario y un botón para obtener el token.

En la vista de 3 (Añadir datos), se puede ver un formulario con un input para introducir el nombre del producto y otro para introducir el stock, y un botón para añadir el producto a la base de datos.


## Desarrollado por Pol Gubau Amores, a septiembre de 2022, para un reto de SolveTheX.