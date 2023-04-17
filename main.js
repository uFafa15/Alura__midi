function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

// o for permite que variáveis sejam inseridos como parâmetros dentro de ()
for (contador = 0; contador < listaTeclas.length; contador ++){
    const tecla = listaTeclas[contador]; //evita a repetição de "listaTeclas[contador]"
    const instrumento = tecla.classList[1]; // faz com que seja dinâmico e indica o segundo nome da classe
    const idAudio = `#som_${instrumento}`; // insere o texto #som_ + o dinâmico (nome das teclas)

    console.log(idAudio)
    tecla.onclick = function () {
    tocaSom(idAudio);

    }
}