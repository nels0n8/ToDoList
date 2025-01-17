// Crear boton Cerrar en cada item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// se agrega el simbolo de check
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// se crea un nuevo item de la lista al dar clic en agregar
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inputTarea").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("No has ingresado una tarea!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("inputTarea").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7"); /* \u00D7 es el simbolo de x en js*/
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}