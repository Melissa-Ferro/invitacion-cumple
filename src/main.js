import './style.css'
let persona = prompt('¿Cual es tu nombre?')
if (persona != null){
    document.getElementById("invitado").textContent=persona
}