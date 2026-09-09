// evaluador.js
function determinarCategoria(precio) {
    if (precio >= 50) {
        return "Premium";
    } else {
        return "Estándar";
    }
}

// Exportar la función para usarla en otros archivos
module.exports = determinarCategoria;
