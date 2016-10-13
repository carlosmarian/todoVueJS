import firebase from 'firebase' 

export const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyC6tEku5QgXDqP5GjK4ruAMV1MMsTngJRg",
        authDomain: "vuefiretodo.firebaseapp.com",
        databaseURL: "https://vuefiretodo.firebaseio.com",
        storageBucket: "vuefiretodo.appspot.com",
        messagingSenderId: "156276635439"
    });

export const firebaseDb = firebase.database();
export const firebaseAuth = firebase.auth();

// eee
export const firebaseProvedorGoogle = new firebase.auth.GoogleAuthProvider();
//eeeee
