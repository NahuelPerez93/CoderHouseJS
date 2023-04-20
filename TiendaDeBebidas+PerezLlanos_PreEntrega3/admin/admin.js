document.addEventListener("DOMContentLoaded", function() {
  mostrarBebidas();
});

function mostrarBebidas() {
  var listaBebidas = document.getElementById("listaBebidas");

  // Obtener las bebidas del almacenamiento local
  var bebidas = JSON.parse(localStorage.getItem("bebidas")) || [];

  // Verificar si bebidas es un array
  if (Array.isArray(bebidas)) {
    // Limpiar la lista de bebidas existente en el HTML
    listaBebidas.innerHTML = "";

    // Recorrer la lista de bebidas y agregarlas a la lista en el HTML
    bebidas.forEach(function(bebida) {
      var li = document.createElement("li");
      li.textContent = bebida.nombre + " - Precio: $" + bebida.precio;
      listaBebidas.appendChild(li);
    });
  }
  
}



function agregarBebida() {
  // Obtener los valores del formulario
  var nombre = document.getElementById("bebida").value;
  var precio = document.getElementById("precio").value;
  
  // Validar que los campos estén completos
  if (!nombre || !precio) {
    alert("Por favor completa todos los campos");
    return;
  }

  // Crear objeto de bebida
  var bebida = {
    nombre: nombre,
    precio: precio
  };

  // Obtener las bebidas del almacenamiento local
  var bebidas = JSON.parse(localStorage.getItem("bebidas")) || [];

   // Verificar si la bebida ya existe en el arreglo
  var bebidaExistente = bebidas.find(function(bebida) {
    return bebida.nombre === nombre;
  });

  if (bebidaExistente) {
    // Si la bebida ya existe, se le asigna el mismo precio que la primera
    precio = bebidaExistente.precio;
  }


  // Agregar la nueva bebida al arreglo
  bebidas.push(bebida);

  // Guardar el arreglo actualizado en el almacenamiento local
  localStorage.setItem("bebidas", JSON.stringify(bebidas));
  // Recorrer la lista de bebidas y agregarlas a la lista en el HTML
  bebidas.forEach(function(bebida) {
    var li = document.createElement("li");
    li.textContent = bebida.nombre + " - Precio: $" + bebida.precio;
    listaBebidas.appendChild(li);
  });




  // Limpiar los campos del formulario
  document.getElementById("bebida").value = "";
  document.getElementById("precio").value = "";

  

  // Actualizar la lista de bebidas en el HTML
  mostrarBebidas();
}
function limpiarLista() {
    // Limpiar la lista de bebidas en el HTML
    document.getElementById("listaBebidas").innerHTML = "";
  
    // Limpiar el almacenamiento local de bebidas
    localStorage.removeItem("bebidas");
  }
  
