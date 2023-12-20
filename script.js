function mostrarResposta() {

    window.alert('Que bom que escolheu SIM❤️, não tinha escolha mesmo kkkk');
    window.alert('Agora vamos para outra parte do site');
    window.alert('Uiiiiii❤️❤️❤️');
    window.location.href = './pagina2/pagina2.html'


}

function mudarPosicao() {
    const buttonNao = document.getElementById('nao');
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    buttonNao.style.left = `${randomX}px`;
    buttonNao.style.top = `${randomY}px`
}
