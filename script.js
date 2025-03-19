const red = document.getElementById("red-mode-btn")
const blue = document.getElementById("blue-mode-btn")
const green = document.getElementById("green-mode-btn")
const reset = document.getElementById("reset-mode-btn")

const redmode = () => {

    document.body.classList.toggle('red-mode');


    const botao = document.getElementById('red-mode-btn');


    if (document.body.classList.contains('red-mode')) {
        botao.textContent = 'Desativar red mode';
    } else {
        botao.textContent = 'Ativar red mode';
    }
}

const bluemode = () => {

    document.body.classList.toggle('blue-mode');

    const botao = document.getElementById('blue-mode-btn');

    if (document.body.classList.contains('blue-mode')) {
        botao.textContent = 'Desativar blue mode';
    } else {
        botao.textContent = 'Ativar blue mode';
    }
}

const greenmode = () => {

    document.body.classList.toggle('green-mode');


    const botao = document.getElementById('green-mode-btn');


    if (document.body.classList.contains('green-mode')) {
        botao.textContent = 'Desativar green mode';
    } else {
        botao.textContent = 'Ativar green mode';
    }
}

const resetmode = () => {
    const botaoG = document.getElementById('green-mode-btn');
    const botaoB = document.getElementById('blue-mode-btn');
    const botaoY = document.getElementById('red-mode-btn');
    
    if (document.body.classList.contains('green-mode')) {
        document.body.classList.toggle('green-mode')
        botaoG.textContent = 'Ativar green mode';
    } else if(document.body.classList.contains('blue-mode')){
        document.body.classList.toggle('blue-mode')
        botaoB.textContent = 'Ativar blue mode';

    } else if(document.body.classList.contains('red-mode')){
        document.body.classList.toggle('red-mode')
        botaoY.textContent = 'Ativar red mode'
    }
}


red.addEventListener("click", redmode)
blue.addEventListener("click", bluemode)
green.addEventListener("click", greenmode)
reset.addEventListener("click", resetmode)