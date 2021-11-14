import {data} from "/billetes.js";
const imagenes = data.imagenes;

if(localStorage.getItem("total") == null){
    localStorage.setItem("total", JSON.stringify(0));
}
else
document.getElementById("total").firstElementChild.textContent = localStorage.getItem("total") + '€';

let divContainer = document.getElementById("billetes");

(function(){
    imagenes.forEach(element => {mostrarImagenes(element)});
    document.getElementById("restart").addEventListener('click', reset);
})()

function mostrarImagenes(foto){
    let img = crearNodo("img", "", [], [{name:"src", value:"./img/" + foto.image}, {name:"id", value:foto.value}]);
    img.addEventListener('click', mostrarTotal);
    divContainer.appendChild(img);
}

function mostrarTotal(event){
    let valor = JSON.parse(localStorage.getItem("total"));
    valor += parseInt(event.target.id);
    localStorage.removeItem("total");
    localStorage.setItem("total",JSON.stringify(valor));
    document.getElementById("total").firstElementChild.textContent = localStorage.getItem("total") + '€';
}

function reset(){
    localStorage.removeItem("total");
    localStorage.setItem("total", JSON.stringify(0));
    document.getElementById("total").firstElementChild.textContent = localStorage.getItem("total") + '€';
}

function crearNodo(tipo, texto, clases, atributos) {     //función CREAR NODO
    let nodo = document.createElement(tipo);
    if (texto != "" && texto != null) {
        nodo.appendChild(document.createTextNode(texto));
    }
    if (clases.length > 0) {
        clases.forEach(clase => nodo.classList.add(clase));
    }
    if (atributos.length > 0) {
        atributos.forEach(atributo => nodo.setAttribute(atributo.name, atributo.value));
    }
    return nodo;
}