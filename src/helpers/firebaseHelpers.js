import firebase from 'firebase'

export function fireInit(func) {
	var config = {
    apiKey: "AIzaSyC6tEku5QgXDqP5GjK4ruAMV1MMsTngJRg",
    authDomain: "vuefiretodo.firebaseapp.com",
    databaseURL: "https://vuefiretodo.firebaseio.com",
    storageBucket: "vuefiretodo.appspot.com",
    messagingSenderId: "156276635439"

	}
	firebase.initializeApp(config)
}