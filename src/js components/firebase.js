import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDs2Rphntkcg-Ldcs34U_jaGA8c2KSfQrg",
    authDomain: "discord-clone-38414.firebaseapp.com",
    databaseURL: "https://discord-clone-38414.firebaseio.com",
    projectId: "discord-clone-38414",
    storageBucket: "discord-clone-38414.appspot.com",
    messagingSenderId: "462097800892",
    appId: "1:462097800892:web:f3cdac5c42330ea23b7ab9",
    measurementId: "G-N14CSRP8F1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;