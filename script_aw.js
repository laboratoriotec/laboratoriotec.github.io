function generarMateriales() {
    var materiales = {};
    
    // Listas de materiales por contenedor
    var amarillo = ["brik de leche", "botella de plástico", "latas", "chapas", "tapones", "tapas", "tapas de metal",
        "tapas de plástico", "tapones de metal", "bandeja de aluminio", "bandejas de aluminio", "papel film",
        "papel de aluminio", "aerosoles", "sprays", "botes de desodorante", "bote de desodorante", "tapa de yogurt",
        "tapas de yogurt", "tarrina de yogurt", "tarrinas de yogurt", "envases de cerámica", "cajas de madera",
        "tubo de pasta de dientes", "tubos de pasta de dientes", "bandeja de corcho blanco", "brick de zumo",
        "bandejas de corcho blanco", "brick de sopa"
    ];

    var azul = ["papel", "cartón"];
    var verde = ["vidrio"];
    var marron = ["fruta", "restos de fruta", "verdura", "restos de verdura", "carne", "restos de carne",
        "pescado", "restos de pescado", "pan", "restos de pan", "comida en general", "café", "restos de café",
        "infusiones", "papel de cocina manchado", "restos de jardinería", "manzana"];
    var gris = ["juguetes rotos", "comida líquida", "caldo", "leche", "salsas", "excrementos", "polvo de barrer", 
        "pañales", "compresas", "colillas", "cenizas", "cigarrillos", "puros", "tejidos", "artículos de piel"];

    // Generación dinámica del diccionario de materiales
    amarillo.forEach(item => materiales[item] = { contenedor: "amarillo (envases ligeros)", color: "yellow" });
    azul.forEach(item => materiales[item] = { contenedor: "azul (recuerda que el papel de cocina o servilletas y el cartón sucio va al contenedor marrón (orgánico) o al gris (rechazo))", color: "blue" });
    verde.forEach(item => materiales[item] = { contenedor: "verde", color: "green" });
    marron.forEach(item => materiales[item] = { contenedor: "marrón (orgánico)", color: "brown" });
    gris.forEach(item => materiales[item] = { contenedor: "gris (rechazo)", color: "grey" });

    return materiales;
}

function buscarContenedor() {
    var materiales = generarMateriales();
    var material = document.getElementById("materialInput").value.toLowerCase().trim();
    var resultado = document.getElementById("resultado");

    if (material === "") {
        resultado.innerText = "Por favor, introduzca un material.";
    } else if (material in materiales) {
        var contenedorInfo = materiales[material];
        resultado.innerHTML = "Para el material '" + material + "', el contenedor de reciclaje adecuado es el " + contenedorInfo.contenedor + ".";
        resultado.innerHTML += "<div class='circle' style='background-color: " + contenedorInfo.color + ";'></div>";
    } else {
        resultado.innerText = "Material no encontrado. Por favor, intente con otro material o revise la ortografía.";
    }
    
    // Limpiar el campo de entrada
    document.getElementById("materialInput").value = "";
}

function borrarResultado() {
    document.getElementById("resultado").innerHTML = "";
}

// Asegurarse de que el DOM esté completamente cargado antes de agregar los eventos
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("buscar").addEventListener("click", buscarContenedor);
    document.getElementById("borrar").addEventListener("click", borrarResultado);

    // Agregar evento para la tecla "Enter"
    document.getElementById("materialInput").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            buscarContenedor();
        }
    });
});
