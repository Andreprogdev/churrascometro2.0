import { initializeApp  } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBLzWA3MoOFvSNuz5Vleu1G9OrT0wBpeh8",
    authDomain: "churrascometro-ba580.firebaseapp.com",
    projectId: "churrascometro-ba580",
    storageBucket: "churrascometro-ba580.appspot.com",
    messagingSenderId: "906211147218",
    appId: "1:906211147218:web:1d2194e69204f2188f5c0b",
    measurementId: "G-7588S2S6XW"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let entrar = document.getElementById("entrar");
entrar.addEventListener("click", login);
let criarConta = document.getElementById("criarConta");
criarConta.addEventListener("click", novaConta);



function login(){
    let email = document.getElementById('inputEmail').value;
    let senha = document.getElementById('inputSenha').value;
    signInWithEmailAndPassword(auth, email, senha)
        .then(()=>{
            alert('Bem vindo!')
            window.location.href = "../paginas/pag01.html";
        }).catch(() =>{
            alert('Email ou senha inválida!')
        })
}

function novaConta(){
    document.getElementById('Registro').style.display = "block";
    document.getElementById('login').style.display = "none";
    document.getElementById('registrar').addEventListener("click", criarNovaConta);
}


function criarNovaConta(){
    let nome = document.getElementById("nome").value;
    let newEmail = document.getElementById("email").value;
    let newSenha = document.getElementById("senha").value;
    createUserWithEmailAndPassword(auth, newEmail, newSenha)
        .then(()=>{
            alert("Cadastro realizado com sucesso!")
            window.location.href = "../index.html";
    })  .catch(()=>{
            alert("Por favor, complete os campos com informações válidas!")
    })
}




