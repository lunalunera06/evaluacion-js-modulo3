// ==========================================
// ARCHIVO JAVASCRIPT EXTERNO (script.js)
// Negocio: Café y Aroma
// ==========================================

// Captura de elementos del DOM con const
const inputNombre = document.getElementById("nombreCliente");
const botonSaludar = document.getElementById("btnSaludar");
const mensajeSaludo = document.getElementById("mensajeSaludo");
const mensajeCaracteres = document.getElementById("mensajeCaracteres");

// Función para procesar el saludo y contar caracteres
function procesarSaludo() {
    // Lectura del valor e eliminación de espacios extras con .trim()
    let nombre = inputNombre.value.trim();

    // Estructura condicional (if...else)
    if (nombre === "") {
        // Mensajes cuando el campo está vacío
        mensajeSaludo.textContent = "Por favor, ingresa tu nombre antes de presionar el botón.";
        mensajeSaludo.style.color = "#c53030"; // Color rojo de advertencia

        mensajeCaracteres.textContent = "El campo de texto se encuentra vacío.";
        mensajeCaracteres.style.color = "#718096";
    } else {
        // Mensaje de saludo dinámico
        mensajeSaludo.textContent = `¡Hola, ${nombre}! Gracias por visitar Café y Aroma.`;
        mensajeSaludo.style.color = "#2b6cb0"; // Color azul receptivo

        // Conteo de caracteres con .length
        let totalCaracteres = nombre.length;
        mensajeCaracteres.textContent = `Tu nombre tiene ${totalCaracteres} caracteres.`;
        mensajeCaracteres.style.color = "#2f855a"; // Color verde informativo
    }
}

// Captura del evento click mediante addEventListener
botonSaludar.addEventListener("click", procesarSaludo);