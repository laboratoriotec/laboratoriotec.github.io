function getCurrentYear() {
    return new Date().getFullYear();
  }

  // Obtener el elemento span con el id 'year'
  var yearSpan = document.getElementById('year');

  // Asignar el año actual al contenido del span
  yearSpan.textContent = getCurrentYear();
