// JavaScript - script.js

// Función para obtener un color aleatorio en formato hexadecimal
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let clickCount = 0; // Contador general de clics

// Función para actualizar los estilos y contar los clics
function updateCounterAndColor(btnType) {
    if (btnType === "incr") {
        clickCount++;
    } else if (btnType === "decr" && clickCount > 0) {
        clickCount--;
    }

    document.getElementById("count").textContent = clickCount;

    // Verificar si el contador para cambiar los colores alcanzó un múltiplo de 10
    if (clickCount % 10 === 0 && clickCount > 0) {
        // Si es múltiplo de 10 y el contador es mayor que cero, cambiar los colores
        const newColor = getRandomColor();
        document.body.style.background = newColor;
        document.querySelector(".container").style.backgroundColor = newColor;
        document.querySelector(".container").style.boxShadow = `0 4px 6px rgba(0, 0, 0, ${clickCount / 100})`;

        // Alternar entre blanco (#ffffff) y negro (#000000) como colores de texto
        const textColor = clickCount % 20 === 0 ? "#ffffff" : "#000000";
        document.querySelector(".count").style.color = textColor;
        document.querySelector(".title").style.color = textColor; // Cambiar color de la palabra "Contador"
        document.querySelectorAll(".btn").forEach((btn) => {
            btn.style.borderColor = textColor;
            btn.style.color = textColor;
        });
    }
}

// Agregar un Event Listener a los botones de incremento y decremento
document.getElementById("incr").addEventListener("click", () => {
    updateCounterAndColor("incr"); // Llamar a la función para actualizar los estilos y colores
});

document.getElementById("decr").addEventListener("click", () => {
    updateCounterAndColor("decr"); // Llamar a la función para actualizar los estilos y colores
});

// Agregar un Event Listener al botón de reset
document.getElementById("reset").addEventListener("click", function () {
    clickCount = 0; // Reiniciar el contador general
    document.getElementById("count").textContent = clickCount;
    document.body.style.background = "#f7a71d"; // Restaurar el color de fondo original
    document.querySelector(".container").style.backgroundColor = "#f7a71d"; // Restaurar el color de fondo original del box
    document.querySelector(".container").style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; // Restaurar el sombreado original del box
    document.querySelector(".count").style.color = "#000000"; // Restaurar el color de texto original
    document.querySelector(".title").style.color = "#000000"; // Restaurar el color de la palabra "Contador"
    document.querySelectorAll(".btn").forEach((btn) => {
        btn.style.borderColor = "#000000"; // Restaurar el color de borde original de los botones
        btn.style.color = "#000000"; // Restaurar el color de texto original de los botones
    });
});
