window.evenOddCalculator = window.evenOddCalculator || {};
window.evenOddCalculator.initialize = function () {
    let button = document.getElementById('go-button')
    let label = document.getElementById('check-result')
    let inputText = document.getElementById('input-control')
    button.disabled = true

    inputText.addEventListener('change', function (e) {
        if (isAValidNumber(e.target.value)) {
            button.disabled = false
        } else {
            button.disabled = true
        }
    })

    button.addEventListener('click', function () {       
        label.innerText = checkOddAndEven(inputText.value)
    })
}

function isAValidNumber(value) {
    return !isNaN(parseInt(value))
}

function checkOddAndEven(number) {
    if (isAValidNumber(number)) {
        let evaluation = (number % 2 !== 0)
        if (evaluation) {
            return 'odd'
        } else {
            return 'even'
        }
    } else {
        return 'invalid'
    }
}