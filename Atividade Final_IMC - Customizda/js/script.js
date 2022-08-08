let imc1 = 'Muito abaixo do peso';
let imc2 = 'Abaixo do peso';
let imc3 = 'Peso Normal';
let imc4 = 'Acima do peso';
let imc5 = 'Obesidade grau I';
let imc6 = 'Obesidade grau II';
let imc7 = 'Obesidade grau III';
let invalido = 'Inválido';

function start() {
    var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener('click', handleCalculateImc);

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('input', handleCalculateImc);
    inputHeight.addEventListener('input', handleCalculateImc);

    handleCalculateImc();
}

function handleCalculateImc() {
    var inputWeight = Number(document.querySelector('#input-weight').value);
    var inputHeight = Number(document.querySelector('#input-height').value);

    var imc = calculateImc(inputWeight, inputHeight);

    var resultImc = document.querySelector('#imc-result');
    resultImc.textContent = imc.toFixed(2).replace('.', ',');

    function tableImc() {
        if (imc >= 16 && imc <= 16.9) return imc1;
        if (imc >= 17 && imc <= 18.4) return imc2;
        if (imc >= 18.5 && imc <= 24.9) return imc3;
        if (imc >= 25 && imc <= 29.9) return imc4;
        if (imc >= 30 && imc <= 34.9) return imc5;
        if (imc >= 35 && imc <= 40) return imc6;
        if (imc > 40) return imc7;
        if (imc < 16) return invalido;
    }

    var imcTable = document.querySelector('#imcTableR');
    imcTable.textContent = tableImc();
}

function calculateImc(weight, height) {
    return weight / (height * height);
}

start();