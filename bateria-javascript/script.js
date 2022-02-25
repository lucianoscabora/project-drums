document.body.addEventListener('keyup', (event) => { //a função recebe os dados do que foi apertado
    playSound(event.code.toLowerCase()); //code é o código da tecla
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value; //essa função pega o que estiver no campo "Faça uma composição"

    if (song !== '') {
        let songArray = song.split(''); //gera um array com cada letra seaprada por vazio
        playComposition(songArray);
    }

    
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`); //concatenado o #s com a variaável que irá vir do index referente ao audio
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;   
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');

        setTimeout(()=> {
            keyElement.classList.remove('active')
        }, 300);
    }
}

function playComposition(songArray) {
        let wait = 0;
        for (let songItem of songArray) {
            setTimeout(() => {
                playSound(`key${songItem}`);
            }, wait += 250);
            
        }
}
