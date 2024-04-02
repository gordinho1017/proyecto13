
function cargarDatos(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', '', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == "200") {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.send(null);
}
function inicializarGrafico(data) {
    var ctx = document.getElementById("myChart").getContext("2d");
    var labels = Object.keys(data);
    var valores = Object.values(data);

    var myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: 'Num datos',
                data: valores,
                backgroundColor: [
                    'rgb(66, 134, 244)',
                    'rgb(74, 135, 72)',
                    'rgb(229, 89, 50)',
                    'rgb(255, 206, 86)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)'
                ]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
