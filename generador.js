// generador.js
const fs = require('fs');
const evaluarCategoria = require('./evaluador');

// Variables del producto/servicio (Ejemplo: Café y Aroma)
const nombreProducto = "Café Artesanal Reserva Especial";
const precioProducto = 55;

// Determinación de categoría con la función importada
const categoria = evaluarCategoria(precioProducto);

// Plantilla de texto requerida
const contenido = `Producto: ${nombreProducto}
• Precio: $${precioProducto}
• Categoría: ${categoria}`;

// Escritura/Sobrescritura sincrónica del archivo info.txt
fs.writeFileSync('info.txt', contenido, 'utf-8');

console.log("¡Archivo info.txt generado con éxito!");
