document.addEventListener('DOMContentLoaded', function() {
    var fechaInput = document.getElementById('fecha');
    fechaInput.addEventListener('change', function() {
      localStorage.setItem('fechaSeleccionada', fechaInput.value);
    });
  
    var fechaGuardada = localStorage.getItem('fechaSeleccionada');
    if (fechaGuardada) {
      fechaInput.value = fechaGuardada;
    }
  
    document.getElementById('verDisponibilidad').addEventListener('click', function() {
      var fechaSeleccionada = fechaInput.value;
      alert('Implementación de ver disponibilidad para la fecha: ' + fechaSeleccionada);
      document.getElementById('calendarioTexto').innerHTML = 'Calendario de disponibilidad para la fecha ' + fechaSeleccionada + '.';
    });
  });
  