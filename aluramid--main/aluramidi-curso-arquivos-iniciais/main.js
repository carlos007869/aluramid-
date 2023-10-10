function tocasompom(){
    document.querySelector('#som_tecla_pom').play();
}

const listadebotoes = document.querySelectorAll('.tecla');

listadebotoes[0].onclick = tocasompom;
