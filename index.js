// Import the functions you need from the SDKs you need
import path from "path";
import express from "express";
import { initializeApp } from "firebase/app";
import bodyParser from "body-parser";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import dotenv from "dotenv"
dotenv.config();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "system-management-kronos.firebaseapp.com",
  projectId: "system-management-kronos",
  storageBucket: "system-management-kronos.appspot.com",
  messagingSenderId: "768497722773",
  appId: "1:768497722773:web:4e2525ce23d575f61d029c",
  measurementId: "G-ZM0T7L4S9N"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const auth = getAuth();

//Express config
const app = express()
const port = 3000

//Dirname and body-parser
const __dirname = path.resolve();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.get('/', (req, res) => {
    res.sendFile('kronos/public/home.html', {root: path.dirname(__dirname)});
  })

  app.get('/register', (req, res) => {
    res.sendFile('kronos/public/register.html', {root: path.dirname(__dirname)});
  })

app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      res.redirect('/home')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
})


app.get('/menu', (req, res) => {
  auth.onAuthStateChanged(function(user){
    if(user){
      res.sendFile('kronos/public/menu.html', {root: path.dirname(__dirname)});
    }else{
      res.redirect("/")
    }
  })
})


  app.listen(port, () => {
    console.log(`Server on port ${port}`)
  })