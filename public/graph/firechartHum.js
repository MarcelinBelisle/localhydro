
const socket = io();
var dataArray = [];
Chart.defaults.font.size = 20;
Chart.defaults.font.color = '#000';
const ctx = document.getElementById('myChartHum').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Humidity'],
        datasets: [{
            label: 'Humidity value',
            data: dataArray,
            fill: true,
            backgroundColor: 'rgb(120, 16, 126)',
            borderWidth: 1,
      pointStyle: 'circle',
      pointRadius: 5,
      pointBackgroundColor: "yellow",
      pointBorderColor: 'rgb(0, 0, 0)'

        }]
    },
    options: {            
            scales: {
                y: {
                  beginAtZero: true,
                    }

            }
        },
    });


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAScT_b2jdH7OV-jChxxIYmuIOtxOL0Tcs",
  authDomain: "hydro-closet.firebaseapp.com",
  databaseURL: "https://hydro-closet-default-rtdb.firebaseio.com",
  projectId: "hydro-closet",
  storageBucket: "hydro-closet.appspot.com",
  messagingSenderId: "419523459894",
  appId: "1:419523459894:web:7b6d55c5af770e182f1197"
};


const app = initializeApp(firebaseConfig);
import {getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, arrayUnion}
from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

const db = getFirestore();


var hum;
let counter = 0;

 function addData(chart, dataArray) {
    chart.data.labels.push(counter);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(dataArray);
    });
    counter++;
    chart.update();
    }

    async function GetHum() {
    var ref = doc(db,"Humvalue", "Hum");
    const docSnap = await getDoc(ref);

     if(docSnap.exists()){
        hum = docSnap.data().Hum;
        for (let i = 0; i < hum.length; i++) {
          addData(myChart, hum[i]); 
        }

     }
}



socket.on('arduino:dataHum', function (dataSerial) {
    myChart.data.labels.push(counter);
    myChart.data.datasets.forEach((dataset) => {
    dataset.data.push(dataSerial.value.substring(1));

    var ref = doc(db,"Humvalue", "Hum");

    updateDoc(
       ref, {
           Hum: arrayUnion(dataSerial.value.substring(1))
        }
       );
    
});
counter++;
myChart.update();
});


    window.onload = GetHum();