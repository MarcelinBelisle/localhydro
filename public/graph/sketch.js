


const socket = io();
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

import {getDatabase, ref, get, set, child, update, remove, onValue}
from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

const db = getDatabase();


socket.on('arduino:data', function (data) {
  console.log(data);
  
  if ( data.value.charAt(0) == 'p' ) { 
    arduino.innerHTML +=data.value.substring(1) +"\n";
    set(ref(db,'Serial/'+ 'PH'), {
      pH: data.value.substring(1)
  })
    }
  else if ( data.value.charAt(0) == 'n' ) {
    arduino.innerHTML +=data.value.substring(1) +"\n";
    set(ref(db,'Serial/'+ 'PPM'), {
      PPM: data.value.substring(1)
  })
    }
  else if ( data.value.charAt(0) == 't' ) {
    arduino.innerHTML +=data.value.substring(1) +"\n";
    set(ref(db,'Serial/'+ 'Temp'), {
      Temp: data.value.substring(1)
  })
    }  
  else if ( data.value.charAt(0) == 'h' ) {
    arduino.innerHTML +=data.value.substring(1) +"\n";
    set(ref(db,'Serial/'+'Hum'), {
      Hum: data.value.substring(1)
  })
    }
  else if ( data.value.charAt(0) == 'c' ) {
    arduino.innerHTML +=data.value.substring(1) +"\n";
    set(ref(db,'Serial/'+'CO2'), {
      CO2: data.value.substring(1)
  })
    }  
  else if ( data.value.charAt(0) == 'w' ) {
    arduino.innerHTML +=data.value.substring(1) +"\n";
    set(ref(db,'Serial/'+'Water'), {
      Water: data.value.substring(1)
  })
    } 
  else {
    arduino.innerHTML +=data.value + "\n";
    set(ref(db,'Serial/'+'Text'), {
      Text: data.value
  })
    } 
});
