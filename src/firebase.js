import firebase from 'firebase'

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyDzw7g9PgdGItXrhORPTZe8qTdhx_z_iBg",
    authDomain: "nikchat-aabf6.firebaseapp.com",
    projectId: "nikchat-aabf6",
    storageBucket: "nikchat-aabf6.appspot.com",
    messagingSenderId: "1086460915481",
    appId: "1:1086460915481:web:de0ec04dda4d9774c0df88"
})

const db= firebaseApp.firestore()
const auth = firebase.auth()

export{db, auth}