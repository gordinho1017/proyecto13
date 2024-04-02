// Horas disponibles (ejemplo)
const availableHours = ["9:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

// Función para generar las filas de la tabla
function generateSchedule() {
  const tbody = document.getElementById('schedule-body');

  availableHours.forEach(hour => {
    const row = document.createElement('tr');
    const hourCell = document.createElement('td');
    hourCell.textContent = hour;
    row.appendChild(hourCell);

    const availabilityCell = document.createElement('td');
    availabilityCell.classList.add('availability');
    availabilityCell.textContent = 'Disponible';
    row.appendChild(availabilityCell);

    tbody.appendChild(row);
  });
}

// Función para marcar las horas no disponibles
function markUnavailableHours(unavailableHours) {
  unavailableHours.forEach(hour => {
    const cell = document.querySelector(`#schedule-body td:first-child:contains('${hour}')`);
    if (cell) {
      cell.nextElementSibling.classList.remove('available');
      cell.nextElementSibling.classList.add('unavailable');
      cell.nextElementSibling.textContent = 'No disponible';
    }
  });
}

// Llamada a las funciones para generar y marcar el horario
$(document).ready(function() {
  generateSchedule();
  const unavailableHours = ["10:00", "13:00", "15:00"]; // Ejemplo de horas no disponibles
  markUnavailableHours(unavailableHours);
});
