
  // Función para mostrar los productos existentes agregue la opcion de que los prodcutos ya disponibles y los nuevos se muestren en el prompt para ver la eleccion.
function mostrarProductos(productos) {
  let productosDisponibles = "PRODUCTOS DISPONIBLES:\n";
  productos.forEach((producto, index) => {
  productosDisponibles += (index + 1) + ". " + producto.nombre + " - $" + producto.precio.toFixed(2) + "\n";
  console.log((index + 1) + ". " + producto.nombre + " - $" + producto.precio.toFixed(2));
  });
  console.log("-------------------")
  
  return "BIENVENIDO A LA TIENDA:\n\n" + productosDisponibles;

}

// Función para agregar un nuevo producto
function agregarProducto(productos) {
  const nombre = prompt("ADMINISTRADOR: Ingrese el nombre del nuevo producto para el stock:");
  const precio = parseFloat(prompt("ADMINISTRADOR: Ingrese el precio del nuevo producto:"));
  

  if (nombre.trim() === "" || isNaN(precio) || precio <= 0) {
    alert("Ingrese un nombre y un precio válido.");
    return false;
  }

  productos.push({ nombre, precio });
  console.log("Producto " + nombre + " agregado. Con un precio de $" + precio + "");
  console.log("------------------------");
  return true;
}

// Función para realizar una compra
function comprar(productos) {
  let total = 0;
  let continuar = true;

  while (continuar) {
    const opcion = parseInt(prompt(mostrarProductos(productos) + "Ingrese el número del producto que desea comprar:"));
    if (isNaN(opcion) || opcion < 1 || opcion > productos.length) {
      alert("Ingrese una opción válida.");
      continue;
    }

    const producto = productos[opcion - 1];
    const cantidad = parseInt(prompt("Ingrese la cantidad de " + producto.nombre + " que desea comprar:"));
    if (isNaN(cantidad) || cantidad <= 0) {
      alert("Ingrese una cantidad válida.");
      continue;
    }

    const subtotal = producto.precio * cantidad;
    console.log(cantidad + " " + producto.nombre + " - $" + subtotal.toFixed(2));
    total += subtotal;

    const seguirComprando = prompt("¿Desea comprar otro producto? (S/N)").toUpperCase();
    if (seguirComprando === "N") {
      continuar = false;
    }
  }

  console.log("------------------------");
  console.log("TOTAL DE LA COMPRA: $" + total.toFixed(2));
  alert("Total: $" + total.toFixed(2));
}

// información de los productos
const productos = [
  { nombre: "Cerveza Artesanal pack x6",  precio: 2200 },
  { nombre: "Vino Tinto Luigi Bosca Malbec 750ml", precio: 2500 },
  { nombre: "Whisky Johnnie Walker Double Black Blended Escocés 750m", precio: 11685},
];

// while para agregar nuevos productos
while (true) {
  const deseaAgregarProducto = prompt("BIENVENIDO: Usted está en modo Administrador.\n¿Desea agregar un nuevo producto? (S/N)").toUpperCase();
  if (deseaAgregarProducto === "N") {
    break;
  }
  agregarProducto(productos);
}


// Realizar una compra
comprar(productos)


