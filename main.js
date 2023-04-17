function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

let contador = 0

while (contador < listaTeclas.length){
    const tecla = listaTeclas[contador]; //evita a repetição de "listaTeclas[contador]"
    const instrumento = tecla.classList[1]; // faz com que seja dinâmico e indica o segundo nome da classe
    const idAudio = `#som_${instrumento}`; // insere o texto #som_ + o dinâmico (nome das teclas)

    console.log(idAudio)
    tecla.onclick = function () {
    tocaSom(idAudio);

    }
    contador = contador + 1
}