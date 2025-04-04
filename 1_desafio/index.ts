function somar() {
    const firstNumber = (<HTMLInputElement>document.getElementById('firstNumber')).value
    const secondNumber =  (<HTMLInputElement>document.getElementById('secondNumber')).value
    const result = Number(firstNumber) + Number(secondNumber)
    const resultElement = document.getElementById('result');
    
    if (resultElement) {
        resultElement.innerHTML = `Resultado: ${result}`;
    }
}