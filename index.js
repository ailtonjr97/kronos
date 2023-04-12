// Import the functions you need from the SDKs you need
import path from "path";
import express from "express";
import { initializeApp } from "firebase/app";
import bodyParser from "body-parser";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBITVLEiAUN1Uis3fvUPAwu2gGBpV0Esz8",
  authDomain: "system-management-kronos.firebaseapp.com",
  projectId: "system-management-kronos",
  storageBucket: "system-management-kronos.appspot.com",
  messagingSenderId: "768497722773",
  appId: "1:768497722773:web:4e2525ce23d575f61d029c",
  measurementId: "G-ZM0T7L4S9N"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const app = express()
const port = 3000
const __dirname = path.resolve();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile('kronos/public/home.html', {root: path.dirname(__dirname)});
  })

app.post('/register', (req, res) => {
    console.log(req.body)
/*     const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
        console.log(response.user)
    })
    .catch((error) => {
        console.log('Deu erro')
    }); */
})


  app.listen(port, () => {
    console.log(`Server on port ${port}`)
  })