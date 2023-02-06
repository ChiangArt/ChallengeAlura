var areaTexto = document.querySelector(".textarea")
var botonEncriptar = document.querySelector(".btn-encriptar")
var botonDesencriptar = document.querySelector(".btn-desencriptar")
var botoncopiar = document.querySelector(".copiar")
var muneco = document.querySelector(".contenedor-muneco")
var mensaje1 = document.querySelector(".mensaje1")
var mensaje2 = document.querySelector(".mensaje2")
var resultado = document.querySelector(".texto-resultado")


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botoncopiar.onclick = copiarTexto;

function copiarTexto() {
    navigator.clipboard.writeText(resultado.innerHTML);
    areaTexto.value = resultado.innerHTML;
}


function desencriptar() {
    ocultarAdelante()
    resultado.textContent = desencriptarTexto(recuperarTexto());
}

function encriptar() {
    ocultarAdelante()
    resultado.textContent = encriptarTexto(recuperarTexto());
}

function recuperarTexto() {
    var area = document.querySelector(".textarea");
    return area.value;
}

function ocultarAdelante() {
    muneco.classList.add("ocultar");
    mensaje1.classList.add("ocultar");
    mensaje2.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++) {
        if(texto[i] === "a") {
            textoFinal = textoFinal + "ai"
        }

        else if(texto[i] === "e") {
            textoFinal = textoFinal + "enter"
        }

        else if(texto[i] === "i") {
            textoFinal = textoFinal + "imes"
        }

        else if(texto[i] === "o") {
            textoFinal = textoFinal + "ober"
        }

        else if(texto[i] === "u") {
            textoFinal = textoFinal + "ufat"
        }

        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++) {
        if(texto[i] === "a") {
            textoFinal = textoFinal + "a"
            i = i+1;
        }

        else if(texto[i] === "e") {
            textoFinal = textoFinal + "e"
            i = i+4;
        }

        else if(texto[i] === "i") {
            textoFinal = textoFinal + "imes"
            i = i+3;
        }

        else if(texto[i] === "o") {
            textoFinal = textoFinal + "o"
            i = i+3;
        }

        else if(texto[i] === "u") {
            textoFinal = textoFinal + "u"
            i = i+3;
        }

        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    
    return textoFinal;
}
