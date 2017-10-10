window.evenOddCalculator = window.evenOddCalculator || {};
window.evenOddCalculator.initialize = function () {
    document.getElementById('go-button').disabled = true
    let input =  document.getElementById('input-control')
    input.addEventListener('input', function(e) {
        console.log(e)
    })
}

function checkOdd(number) {
    return number % 2 !== 0
}

function checkEven(number) {
    return number % 2 === 0
}
