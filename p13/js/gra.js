

function proceso1() {
    var g1= document.getElementById("g1").getContext("2d");
    var myChart= new Chart(g1,{
        type:"pie",
        data:{
            labels:['col1','col2','col3'],
            datasets:[{
                    label:'Num datos',
                    data:[10,9,15],
                    backgroundColor:[
                        'rgb(66, 134, 244,0.5)',
                        'rgb(74, 135, 72,0.5)',
                        'rgb(229, 89, 50,0.5)'
                    ]
            }]
        },
        options:{
            scales:{
                yAxes:[{
                        ticks:{
                            beginAtZero:true
                        }
                }]
            }
        }
    });  
}

function proceso2() {
    var g2= document.getElementById("g1").getContext("2d");
    var myChart= new Chart(g2,{
        type:"pie",
        data:{
            labels:['col1','col2'],
            datasets:[{
                    label:'Num datos',
                    data:[10,9],
                    backgroundColor:[
                        'rgb(66, 134, 244,0.5)',
                        'rgb(74, 135, 72,0.5)'
                    ]
            }]
        },
        options:{
            scales:{
                yAxes:[{
                        ticks:{
                            beginAtZero:true
                        }
                }]
            }
        }
    });  
}


var grafica1= document.getElementById("grafica1").getContext("2d");
var myChart= new Chart(grafica1,{
    type:"pie",
    data:{
        labels:['col1','col2','col3'],
        datasets:[{
                label:'Num datos',
                data:[10,9,15],
                backgroundColor:[
                    'rgb(66, 134, 244,0.5)',
                    'rgb(74, 135, 72,0.5)',
                    'rgb(229, 89, 50,0.5)'
                ]
        }]
    },
    options:{
        scales:{
            yAxes:[{
                    ticks:{
                        beginAtZero:true
                    }
            }]
        }
    }
});
const grafica2 = document.querySelector("#grafica2");
const etiquetas2 = ["Enero", "Febrero", "Marzo", "Abril"]
const datosVentas2020 = {
    label: "Reserva por mes",
    data: [5000, 1500, 8000, 5102], 
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,
};
new Chart(grafica2, {
    type: 'line',
    data: {
        labels: etiquetas2,
        datasets: [
            datosVentas2020,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});
// Obtener una referencia al elemento canvas del DOM
const grafica4 = document.getElementById("grafica4").getContext("2d");
// Las etiquetas son las que van en el eje X. 
const etiquetas4 = ["Enero", "Febrero", "Marzo", "Abril"]
// Podemos tener varios conjuntos de datos
const datosVentas20204 = {
    label: "Reserva por mes - 2024",
    data: [5000, 1500, 8000, 5102], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
const datosVentas20214 = {
    label: "Reserva por mes - 2021",
    data: [10000, 1700, 5000, 5989], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Color de fondo
    borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};

new Chart(grafica4, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas4,
        datasets: [
            datosVentas20204,
            datosVentas20214,
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});