const { set } = require("express/lib/application");

console.log("Firebase is loaded");

let allAudio;
let addAudio;

async function firebaseSetup() {
  //libraries urls
  const fb_app_url = "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
  const fb_db_url =
    "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

  //load libraries
  const { initializeApp } = await import(fb_app_url);

  const { getDatabase, ref, push, set, onValue } = await import(fb_db_url);

  const firebaseConfig = {
    apiKey: "AIzaSyCNh7ZY0RmS-g8OTh6-Pi-Gg7nDox6jnQM",
    authDomain: "chaos-84405.firebaseapp.com",
    projectId: "chaos-84405",
    storageBucket: "chaos-84405.appspot.com",
    messagingSenderId: "324700480963",
    appId: "1:324700480963:web:130deed4a08c69b5958976",
    //database config url
    databaseURL:
      "https://chaos-84405-default-rtdb.europe-west1.firebasedatabase.app/",
  };

  // initialize app

  const app = initializeApp(firebaseConfig);

  //initialize database

  const myDatabase = getDatabase(app);

  //reference

  const audioRef = ref(myDatabase, "audio");

  //---UP---

  addAudio = function (properties) {
    const newAudioRef = push(audioRef);
    set(newAudioRef, properties);
  };

  //---DOWN---

  onValue(audioRef, function (snapshot) {
    allAudio = snapshot.val();
  });
}

firebaseSetup();
