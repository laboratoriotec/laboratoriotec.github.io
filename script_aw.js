function generarMateriales() {
    var materiales = {};
    
    // Listas de materiales por contenedor
    var amarillo = ["tetrabrik", "brik", "brik de leche", "botella de plástico", "lata", "latas", "chapas", "tapones", 
        "tapas", "tapas de metal", "botellas de plástico", "tapón", "chapa", "tapa de plástico", "tapón de metal",
        "tapas de plástico", "tapones de metal", "bandeja de aluminio", "bandejas de aluminio", "papel film",
        "papel de aluminio", "aerosoles", "sprays", "botes de desodorante", "bote de desodorante", "tapa de yogurt",
        "tapas de yogurt", "tarrina de yogurt", "tarrinas de yogurt", "envases de cerámica", "cajas de madera",
        "caja de madera", "envase metálico", "envases metálicos", "lata de conservas", "latas de conservas",
        "tubo de pasta de dientes", "tubos de pasta de dientes", "bandeja de corcho blanco", "brik de zumo",
        "bandejas de corcho blanco", "brik de sopa", "envoltorio", "envoltorios"
    ];

    var azul = ["papel", "cartón", "folio", "folios", "papeles", "cartones", "caja de zapatos", "cajas de zapatos",
        "periódico", "periódicos", "revista", "revistas", "papel de periódico", "papeles de periódico", "ticket",
        "tickets", "ticket de compra", "tickets de compra"
    ];

    var verde = ["vidrio", "botella de vidrio", "botellas de vidrio", "frasco de perfume", "frascos de perfume",
        "tarro de mermelada", "tarros de mermelada", "tarro de conserva", "tarros de conservas", "tarros de alimentos",
        "botella de cerveza", "botellas de cerveza", "botella de vino", "botellas de vino", "botella de cava",
        "botellas de cava", "frasco de colonia", "frascos de colonia"
    ];

    var marron = ["fruta", "restos de fruta", "verdura", "restos de verdura", "carne", "restos de carne",
        "pescado", "restos de pescado", "pan", "restos de pan", "comida en general", "café", "restos de café",
        "infusiones", "papel de cocina manchado", "restos de jardinería", "manzana", "papel sucio", "papeles sucios",
        "servilleta de cocina", "servilletas de cocina", "papel de cocina", "infusión", "plantas", "posos",
        "cáscara de huevo", "cáscaras de huevo"
    ];

    var gris = ["juguetes rotos", "juguetes de plástico", "comida líquida", "caldo", "leche", "salsas", "excrementos", 
        "polvo de barrer", "biberón", "biberones", "chupete", "chupetes", "cubo de plástico", "cubos de plástico",
        "pañales", "compresas", "colillas", "cenizas", "cigarrillos", "puros", "tejidos", "artículos de piel",
        "utensilios de cocina", "utensilio de cocina", "pañal", "compresa", "pelo", "pelos", "arena", "arena de mascotas",
        "polvo", "objetos cerámicos", "objeto cerámico"
    ];

    var puntoverde = ["pila", "pilas", "móvil", "móviles", "ordenador", "ordenadores", "cd", "cd's", "mueble", "muebles",
        "espejo", "espejos", "electrodoméstico", "electrodomésticos", "cámara de fotos", "cámaras de fotos", "batería",
        "baterías", "cámara de vídeo", "cámaras de vídeo", "impresora", "impresoras", "cartucho de tinta", "cartuchos de tinta",
        "componentes electrónicos", "componente electrónico"
    ];

    // Generación dinámica del diccionario de materiales
    amarillo.forEach(item => materiales[item] = { contenedor: "amarillo (envases ligeros)", color: "yellow" });
    azul.forEach(item => materiales[item] = { contenedor: "azul (recuerda que el papel de cocina o servilletas y el cartón sucio va al contenedor marrón (orgánico) o al gris (rechazo))", color: "blue" });
    verde.forEach(item => materiales[item] = { contenedor: "verde", color: "green" });
    marron.forEach(item => materiales[item] = { contenedor: "marrón (orgánico)", color: "brown" });
    gris.forEach(item => materiales[item] = { contenedor: "gris (rechazo)", color: "grey", esReciclaje: false });
    puntoverde.forEach(item => materiales[item] = { contenedor: "Punto Verde", color: "darkgreen", icon: "/proyectos/aplicacion_web/punto_verde.jpg" });

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
        if (contenedorInfo.esReciclaje === false) {
            resultado.innerHTML = "Para el material '" + material + "', el contenedor adecuado es el " + contenedorInfo.contenedor + ".";
        } else if (contenedorInfo.icon) {
            resultado.innerHTML = "Para el material '" + material + "', el lugar adecuado es depositarlo en un " + contenedorInfo.contenedor + ".";
            resultado.innerHTML += "<div class='icon'><img src='" + contenedorInfo.icon + "' alt='Punto Verde'></div>";
        } else {
            resultado.innerHTML = "Para el material '" + material + "', el contenedor de reciclaje adecuado es el " + contenedorInfo.contenedor + ".";
            resultado.innerHTML += "<div class='circle' style='background-color: " + contenedorInfo.color + ";'></div>";
        }
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
            event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
            buscarContenedor();
        }
    });
});

