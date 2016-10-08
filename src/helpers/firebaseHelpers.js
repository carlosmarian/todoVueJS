import firebase from 'firebase'

export function fireInit(func) {
    //Configurações da base de dados.
	var config = {
        apiKey: "XXXXXXXXXXXXXXXXXXXXXXx",
        authDomain: "XXXXXXXX.firebaseapp.com",
        databaseURL: "https://XXXXXX.firebaseio.com",
        storageBucket: "XXXXXXXX.appspot.com",
        messagingSenderId: "XXXXXXXXX"
    }
	firebase.initializeApp(config)
}