
const socket = io();


socket.on('arduino:data', function (data) {
  console.log(data);
  
  if ( data.value.charAt(0) == 'p' ) {
    arduino.innerHTML +=data.value.substring(1) +"\n";
    }
  else if ( data.value.charAt(0) == 'n' ) {
    arduino.innerHTML +=data.value.substring(1) +"\n";
    }
  else if ( data.value.charAt(0) == 't' ) {
    arduino.innerHTML +=data.value.substring(1) +"\n";
    }  
  else if ( data.value.charAt(0) == 'h' ) {
    arduino.innerHTML +=data.value.substring(1) +"\n";
    }
  else if ( data.value.charAt(0) == 'c' ) {
    arduino.innerHTML +=data.value.substring(1) +"\n";
    }  
  else if ( data.value.charAt(0) == 'w' ) {
    arduino.innerHTML +=data.value.substring(1) +"\n";
    } 
  else {
    arduino.innerHTML +=data.value + "\n";
    } 
});



