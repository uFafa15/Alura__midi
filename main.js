function tocaPom(){
    document.querySelector('#som_tecla_pom').play();
}


document.querySelector('.tecla_pom').onclick = tocaPom;

const listaTeclas = document.querySelectorAll('.tecla');

let contador = 0

while (contador < listaTeclas.length){
    listaTeclas[contador].onclick = tocaPom
    contador = contador + 1
}