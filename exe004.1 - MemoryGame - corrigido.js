var Colors = [];
var UserColors = [];
var Rodada = 0;
var index = 0;

var Color1 = document.getElementById('btn1');
var Color2 = document.getElementById('btn2');
var Color3 = document.getElementById('btn3');
var Color4 = document.getElementById('btn4');
var Container = document.querySelector('.container');
var Restart = document.querySelector('.restart');

Color1.addEventListener('click', clickHandler);
Color2.addEventListener('click', clickHandler);
Color3.addEventListener('click', clickHandler);
Color4.addEventListener('click', clickHandler);

Start.addEventListener('click', StartGame);

function StartGame() {
    Colors = [];
    UserColors = [];
    Rodada = 0;
    index = 0;
    Running = true;

    SortColor();
}

function SortColor() {
    var numAleatorio = Math.floor(Math.random() * 4);
    Colors.push(numAleatorio);
    showSequence();
}

function showSequence() {
    // Mostrar a sequência de cores e ativar animações
    var delay = 1000; // Tempo entre as cores (1 segundo)
    var i = 0;
    
    var interval = setInterval(function () {
        if (i < Colors.length) {
            activateColor(Colors[i]);
            i++;
        } else {
            clearInterval(interval);
        }
    }, delay);

}

function activateColor(colorIndex) {
    // Ativar a animação da cor

    switch (colorIndex) {
        case 0: // Cor 1
            Click1();
            break;
        case 1: // Cor 2
            Click2();
            break;
        case 2: // Cor 3
            Click3();
            break;
        case 3: // Cor 4
            Click4();
            break;
    }
}

function clickHandler(event) {

    var clickedColor = null;
    switch (event.target) {
        case Color1:
            clickedColor = 0;
            Click1();
            break;
        case Color2:
            clickedColor = 1;
            Click2();
            break;
        case Color3:
            clickedColor = 2;
            Click3();
            break;
        case Color4:
            clickedColor = 3;
            Click4();
            break;
    }

    if (clickedColor !== null) {
        UserColors.push(clickedColor);
        Check();
    }
}

function Check() {
    for (var i = 0; i < UserColors.length; i++) {
        if (UserColors[i] !== Colors[i]) {
            // O jogador cometeu um erro
            console.log('ACABOU!');
            document.querySelector('.gameover').style.display = 'block';

            Restart.addEventListener('click', StartAgain);
            
            function StartAgain () {
                document.querySelector('.gameover').style.display = 'none';
                StartGame();
            }
            
            return;
        }
    }

    // Se chegou até aqui, o jogador acertou a sequência até o momento
    if (UserColors.length === Colors.length) {
        // O jogador completou a sequência corretamente
        // Reiniciar para a próxima rodada
        UserColors = [];
        Rodada++;
        SortColor();
    }
}



function Click1() {
    Color1.style.animation = 'none';
    void Color1.offsetWidth; //Broser Relayout a página antes da animação.
    Color1.style.animation = 'PulseAnimation1 0.5s ease-in-out';
}

function Click2() {
    Color2.style.animation = 'none';
    void Color2.offsetWidth; 
    Color2.style.animation = 'PulseAnimation2 0.5s ease-in-out';
}

function Click3() {
    Color3.style.animation = 'none';
    void Color3.offsetWidth; 
    Color3.style.animation = 'PulseAnimation3 0.5s ease-in-out';
}

function Click4() {
    Color4.style.animation = 'none';
    void Color4.offsetWidth; 
    Color4.style.animation = 'PulseAnimation4 0.5s ease-in-out';
}