function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

let contador = 0

while (contador < listaTeclas.length){
    listaTeclas[contador].onclick = function () {
    tocaSom('#som_tecla_pom');
    }
    contador = contador + 1
}