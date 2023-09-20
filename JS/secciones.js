function mostrarSeccion(idSeccion) {
    // Oculta todas las secciones
    var secciones = document.getElementsByTagName('section');
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].style.display = 'none';
    }

    // Muestra la sección seleccionada
    document.getElementById(idSeccion).style.display = 'block';
    if (idSeccion === 'informacion-personal') {
        document.getElementById('fotoPerfil').style.display = 'block';
        
    } else {
        // Oculta "fotoPerfil" si no se selecciona "informacion-personal"
        document.getElementById('fotoPerfil').style.display = 'none';
    }
}
