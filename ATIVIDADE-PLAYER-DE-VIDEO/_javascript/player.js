var meuVideo = document.getElementById("playerCustomizado");

function playPause() {
    if (meuVideo.paused)
        meuVideo.play();
    else
        meuVideo.pause();
}

function ampliar() {
    meuVideo.width = 650;
}
function reduzir() {
    meuVideo.width = 300;
}

function tamanhoNormal() {
    meuVideo.width = 410;
}

function telaCheia(){
    meuVideo.requestFullscreen();
}

function aumentarVolume() {
    meuVideo.volume += 0.1;
}

function diminuirVolume() {
    meuVideo.volume -= 0.1;
}

function mute() {
    if (meuVideo.muted == false)
        meuVideo.muted = true;
    else
        meuVideo.muted = false;
}

