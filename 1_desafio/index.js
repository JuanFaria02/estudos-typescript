function somar() {
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    var result = Number(firstNumber) + Number(secondNumber);
    var resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML = "Resultado: ".concat(result);
    }
}
