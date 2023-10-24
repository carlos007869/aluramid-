function tocasompom(){
    document.querySelector('#som_tecla_pom').play();
}

const listadebotoes = document.querySelectorAll('.tecla');

let contador = 0

while (contador < 9) {
    listadebotoes[contador].onclick = tocasompom;
    contador = contador + 1;
}

