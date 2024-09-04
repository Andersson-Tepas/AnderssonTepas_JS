// Crear un array de frutas
const frutas = [
    { nombre: "Manzana", precio: 1.20 },
    { nombre: "Banana", precio: 0.80 },
    { nombre: "Naranja", precio: 0.90 },
    { nombre: "Uva", precio: 2.00 },
    { nombre: "Pera", precio: 1.50 },
    { nombre: "Mango", precio: 1.80 },
    { nombre: "Piña", precio: 3.00 },
    { nombre: "Fresa", precio: 2.50 },
    { nombre: "Melon", precio: 3.50 },
    { nombre: "Sandia", precio: 4.00 }
];

// Obtener la referencia del cuerpo de la tabla
const tablaBody = document.querySelector("#frutasTabla tbody");

// Iterar sobre el array de frutas y agregar filas a la tabla
frutas.forEach(fruta => {
    const fila = document.createElement("tr");

    const nombreCelda = document.createElement("td");
    nombreCelda.textContent = fruta.nombre;
    fila.appendChild(nombreCelda);

    const precioCelda = document.createElement("td");
    precioCelda.textContent = fruta.precio.toFixed(2);
    fila.appendChild(precioCelda);

    tablaBody.appendChild(fila);
});
