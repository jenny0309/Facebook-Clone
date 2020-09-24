import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB6WCfOy41bA5N1Graa1QQx4U7a1SXoUJo",
    authDomain: "facebook-clone-133e6.firebaseapp.com",
    databaseURL: "https://facebook-clone-133e6.firebaseio.com",
    projectId: "facebook-clone-133e6",
    storageBucket: "facebook-clone-133e6.appspot.com",
    messagingSenderId: "718964593923",
    appId: "1:718964593923:web:f5f0983212d76f5ae98536",
    measurementId: "G-XSN4RQEEYH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db