function tocaPom(){
    document.querySelector('#som_tecla_pom').play();
}


document.querySelector('.tecla_pom').onclick = tocaPom;

const listaTeclas = document.querySelectorAll('.tecla');

listaTeclas[0] = tocaPom;

listaTeclas[1] = tocaClap;

listaTeclas[2] = tocaTim;

listaTeclas[3] = tocaPuff;

listaTeclas[4] = tocaSplash;

listaTeclas[5] = tocaToim;

listaTeclas[6] = tocaPsh;

listaTeclas[7] = tocaTic;

listaTeclas[8] = tocaTom;

// dessa forma, ainda utilizaria muitas linhas e teria que criar as funções dos sons