


    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";

    const firebaseConfig = {
      apiKey: "AIzaSyAScT_b2jdH7OV-jChxxIYmuIOtxOL0Tcs",
      authDomain: "hydro-closet.firebaseapp.com",
      databaseURL: "https://hydro-closet-default-rtdb.firebaseio.com",
      projectId: "hydro-closet",
      storageBucket: "hydro-closet.appspot.com",
      messagingSenderId: "419523459894",
      appId: "1:419523459894:web:dc18461c2637b7cb2f1197"
    };

    const app = initializeApp(firebaseConfig);
    import {getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, arrayUnion}
    from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
    
    const db = getFirestore();


    var EndDate = document.getElementById('EndDate');
    var NameCommon = document.getElementById('NameCommon');
 
 
    async function GetDoctument() {
        var ref = doc(db,"plantData", "BorlottiBean");
        const docSnap = await getDoc(ref);
    
         if(docSnap.exists()){
            NameCommon.value = docSnap.data().NameCommon;
         }
    }
    
    window.onload = GetDoctument;
   
