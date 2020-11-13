// Not using currently but may use in future. Do not delete

import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAc2C78pwmxDNLaQUvFr_6UbmKcNquS_H0",
    authDomain: "fortune-coffeee.firebaseapp.com",
    databaseURL: "https://fortune-coffeee.firebaseio.com",
    projectId: "fortune-coffeee",
    storageBucket: "fortune-coffeee.appspot.com",
    messagingSenderId: "361779639421",
    appId: "1:361779639421:web:2916964e93b459de776d14",
    measurementId: "G-KE4PJMB3J5"
};

class Firebase {
    constructor() {
        if (!firebase.apps.length) {
        app.initializeApp(firebaseConfig)
        }
        // Firebase APIs //
        this.auth = app.auth()
        this.db = app.firestore()
    }

    // Auth API // 
    login = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password)
    }

    logout = () => {
        this.auth.signOut()
    }

    // handles login Authentification and also makes a users document that is equal to the uid created in authentification.
    register = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password)
            .then(data => {
                return this.db.collection('users').doc(data.user.uid).set({
                    UserName: email,
                    
                })
            })
            .catch(error => console.log(error))
    }




    isInitialized = () => {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }
}

export default new Firebase()