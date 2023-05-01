# Flujo-carrito-react

Para arrancar el proyecto se debe correr el comando npm install para las dependencias y npm run dev para correr el mismo.
Tambien se debe abrir otra terminal y correr el archivo db.json con los siguientes comandos:

npm install -g json-server

json-server db.json -p 4000

Es un flujo sencilo el cual inicia como se describe en el layout que enviaron.

1. Se muestran los productos favoritos, los más comprados y todos.
2. Al seleccionar un producto revisamos si el usuario está logueado.
3. Abrimos un modal con el login.
4. Ingresmos un correo cualquiera y una clave cualquiera.
5. Volvemos a la vista de los productos y ahora sí pordemos seleccionar productos.
6. Estos productos seleccionados se irán agregando al carrito de compras.
7. En el carrito de compras se podrán eliminar o agregar más elementos
8. Por último se agregan los productos a la cuenta de paos pendientes del usario y se limpia el carrito.

Questions

The backend communication will be secured, how do you handle it?
    If the communication is secured, we can use a token to create validation within the parties.

Which tech stack do you choose? explain with some details
    I selected React JS. This tech stack allows to manage statuses on each section and re-use the code.

Write a mock server to help you to get simulate products service and checkout service
    In this challenge, I created an API from a json server.

Please create a small app who simulates the flow of an authenticated user
    Please, follow the steps described at the begining to access to the app.

How do you test your functionality?
    On the first section is described the testing flow.