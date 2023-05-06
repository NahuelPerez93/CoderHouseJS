document.addEventListener("DOMContentLoaded", function() {
  mostrarBebidas();
});


function mostrarBebidas() {
  var listaBebidas = $("#listaBebidas");

  // Obtener las bebidas del almacenamiento local
  var bebidas = JSON.parse(localStorage.getItem("bebidas")) || [];

     // Limpiar la lista de bebidas existente en el HTML
     listaBebidas.empty();


  // Verificar si bebidas es un array
  if (Array.isArray(bebidas)) {
 

    // Recorrer la lista de bebidas y agregarlas a la lista en el HTML
    bebidas.forEach(function(bebida) {
      var li = $("<li></li>").text(bebida.nombre + " - Precio: $" + bebida.precio);
      listaBebidas.append(li);
      // Agregar la bebida a la lista correspondiente según su tipo
    switch (bebida.tipo) {
      case "cerveza":
        $("#cervezasBtn").after(li);
        break;
      case "vino":
        $("#vinosBtn").after(li);
        break;
      case "sin alcohol":
        $("#sinAlcoholBtn").after(li);
        break;
   
      };
    });
  }
}

function agregarBebida() {
 
var nombre = $("#bebida").val();
var precio = $("#precio").val();
var tipo = $("#tipoBebida").val();

  
  // Validar que los campos estén completos
  if (!nombre || !precio) {
    alert("Por favor completa todos los campos");
    return;
  }

  // Crear objeto de bebida
  var bebida = {
    nombre: nombre,
    precio: precio,
    tipo: tipo
   };
  fetch("datos/datos.json")
  .then(function(response) {
    if (response.status !== 200) {
      console.log("Error al obtener los datos del archivo JSON. Código de estado: " + response.status);
      return;
    }

    // Convertir la respuesta a JSON
    return response.json();
  })
  .then(function(data) {
    // Recorrer la lista de bebidas y agregarlas a la lista en el HTML
    var bebidasJSON = data.bebidas;
    for (var i = 0; i < bebidasJSON.length; i++) {
      var bebida = bebidasJSON[i];
      var li = document.createElement("li");
      li.textContent = bebida.nombre + " - Precio: $" + bebida.precio;
      listaBebidas.appendChild(li);
    }
 
  })
  .catch(function(error) {
    console.log("Error al obtener los datos del archivo JSON: " + error);
  });

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
function mostrarBebidasPorTipo(tipo) {
  // Obtener las bebidas del almacenamiento local
  var bebidas = JSON.parse(localStorage.getItem("bebidas")) || [];
  
  // Verificar si bebidas es un array
  if (Array.isArray(bebidas)) {
  // Filtrar las bebidas según el tipo seleccionado
  var bebidasFiltradas = bebidas.filter(function(bebida) {
  return bebida.tipo === tipo;
  });
  
 
  // Limpiar el contenedor de bebidas en el HTML
  $("#bebidasContainer").html("");
  
  // Recorrer la lista de bebidas filtradas y agregarlas al contenedor en el HTML
  bebidasFiltradas.forEach(function(bebida) {
    var div = $("<div>").addClass("bebida");
    var nombre = $("<p>").text(bebida.nombre);
    var precio = $("<p>").text("$" + bebida.precio);
    div.append(nombre, precio);
    $("#bebidasContainer").append(div);
  });
  }
  }
  
  // Asociar la función mostrarBebidasPorTipo al evento click de los botones correspondientes
  $("#cervezasBtn").click(function() {
  mostrarBebidasPorTipo("cerveza");
  });
  
  $("#vinosBtn").click(function() {
  mostrarBebidasPorTipo("vino");
  });
  
  $("#sinAlcoholBtn").click(function() {
  mostrarBebidasPorTipo("sin alcohol");
  });
  
  // Mostrar todas las bebidas al cargar la página
  mostrarBebidasPorTipo("");
function limpiarLista() {
    // Limpiar la lista de bebidas en el HTML
    document.getElementById("listaBebidas").innerHTML = "";
  
    // Limpiar el almacenamiento local de bebidas
    localStorage.removeItem("bebidas");
  }

  // Muestra boton y contacto
  function sendMessage() {
    const message = "Hola, ¿en qué puedo ayudarte?";
    const phoneNumber = "0303456";
    const apiURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    return new Promise((resolve, reject) => {
      const newTab = window.open(apiURL, "_blank");
      newTab.onload = () => resolve();
      newTab.onerror = () => reject();
    });
  }
  
  const contactButton = document.createElement("button");
  contactButton.innerText = "Contactanos";
  contactButton.onclick = sendMessage;
  
  document.body.appendChild(contactButton);

  var bebidas = {
    "bebidas": [
        {"nombre": "Quilmes", "precio": 100},
        {"nombre": "Patagonia", "precio": 120},
        {"nombre": "Brahma", "precio": 90},
        {"nombre": "Malbec", "precio": 200},
        {"nombre": "Cabernet Sauvignon", "precio": 250},
        {"nombre": "Torrontés", "precio": 180},
        {"nombre": "Coca-Cola", "precio": 70},
        {"nombre": "Sprite", "precio": 60},
        {"nombre": "Fanta", "precio": 65}
    ]
  };
  
  var cervezas = bebidas.bebidas.filter(function(bebida) {
    return bebida.nombre === "Quilmes" ||
           bebida.nombre === "Patagonia" ||
           bebida.nombre === "Brahma";
  });
  
  var vinos = bebidas.bebidas.filter(function(bebida) {
    return bebida.nombre === "Malbec" ||
           bebida.nombre === "Cabernet Sauvignon" ||
           bebida.nombre === "Torrontés";
  });
  
  var sinAlcohol = bebidas.bebidas.filter(function(bebida) {
    return bebida.nombre === "Coca-Cola" ||
           bebida.nombre === "Sprite" ||
           bebida.nombre === "Fanta";
  });
  
  var bebidasContainer = document.getElementById("bebidasContainer");
  
  document.getElementById("cervezasBtn").addEventListener("click", function() {
    bebidasContainer.innerHTML = "";
    cervezas.forEach(function(bebida) {
      var li = document.createElement("li");
      li.textContent = bebida.nombre + " - Precio: $" + bebida.precio;
      bebidasContainer.appendChild(li);
    });
  });
  
  document.getElementById("vinosBtn").addEventListener("click", function() {
    bebidasContainer.innerHTML = "";
    vinos.forEach(function(bebida) {
      var li = document.createElement("li");
      li.textContent = bebida.nombre + " - Precio: $" + bebida.precio;
      bebidasContainer.appendChild(li);
    });
  });
  
  document.getElementById("sinAlcoholBtn").addEventListener("click", function() {
    bebidasContainer.innerHTML = "";
    sinAlcohol.forEach(function(bebida) {
      var li = document.createElement("li");
      li.textContent = bebida.nombre + " - Precio: $" + bebida.precio;
      bebidasContainer.appendChild(li);
    });
  });
 
