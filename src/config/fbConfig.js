import firebase from 'firebase/app';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC1D3GjrHk7SZfS1ep7PUdz1rmBdtykwGk",
    authDomain: "appman-ff99c.firebaseapp.com",
    databaseURL: "https://appman-ff99c.firebaseio.com",
    projectId: "appman-ff99c",
    storageBucket: "appman-ff99c.appspot.com",
    messagingSenderId: "45077490891",
    appId: "1:45077490891:web:5b879d8666e1d1dfe9bf4e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;